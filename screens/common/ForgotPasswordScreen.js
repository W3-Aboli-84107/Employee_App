import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const ForgetPasswordScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeEmail = route.params?.email || ''; // ✅ Use optional chaining safely
  const [email, setEmail] = useState(routeEmail); // ✅ Initialize state with route email

  const validateEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (!email) {
      Alert.alert('Validation Error', 'Email is required');
    } else if (!validateEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email');
    } else {
      const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate 4-digit OTP
      console.log('Generated OTP:', otp);

      navigation.navigate('OTPScreen', { email, otp });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Forget Password</Text>
      <Text style={styles.subtitle}>Enter your registered email below</Text>

      <Text style={styles.label}>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f1c',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginVertical: 12,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 6,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    paddingHorizontal: 16,
    color: '#fff',
  },
  button: {
    backgroundColor: '#e74c3c',
    marginTop: 40,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
