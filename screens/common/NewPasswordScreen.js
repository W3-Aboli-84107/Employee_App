import { useRoute, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const NewPasswordScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const email = route?.params?.email || '';

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureNew, setSecureNew] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);

  const validatePassword = (pwd) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/.test(pwd);
  };

  const handleResetPassword = async () => {
    if (!validatePassword(newPassword)) {
      Alert.alert(
        'Error',
        'Password must be at least 6 characters and include uppercase, lowercase, number, and symbol.'
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const users = JSON.parse(await AsyncStorage.getItem('users')) || [];
      const userIndex = users.findIndex(
        (u) => u.email?.trim().toLowerCase() === email.trim().toLowerCase()
      );

      if (userIndex !== -1) {
        // Update password
        users[userIndex].password = newPassword;
        await AsyncStorage.setItem('users', JSON.stringify(users));

        // Update 'user' as the current user
        await AsyncStorage.setItem('user', JSON.stringify(users[userIndex]));

        Alert.alert('Success', 'Password reset successfully.', [
          { text: 'OK', onPress: () => navigation.replace('Login') },
        ]);
      } else {
        Alert.alert('Error', 'User not found or email mismatch.');
      }
    } catch (err) {
      console.error('Password reset error:', err);
      Alert.alert('Error', 'Something went wrong.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Password</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor="#aaa"
          secureTextEntry={secureNew}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TouchableOpacity onPress={() => setSecureNew(!secureNew)}>
          <Ionicons name={secureNew ? 'eye-off-outline' : 'eye-outline'} size={20} color="#aaa" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          secureTextEntry={secureConfirm}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setSecureConfirm(!secureConfirm)}>
          <Ionicons name={secureConfirm ? 'eye-off-outline' : 'eye-outline'} size={20} color="#aaa" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161B22',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#30363D',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    height: 50,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#F46D5D',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
