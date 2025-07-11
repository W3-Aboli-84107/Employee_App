// // screens/ResetPasswordScreen.js
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const ResetPasswordScreen = ({ navigation }) => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleReset = () => {
//     if (!currentPassword || !newPassword || !confirmPassword) {
//       Alert.alert('Error', 'All fields are required');
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       Alert.alert('Error', 'New passwords do not match');
//       return;
//     }
//     // Add logic to reset password here
//     Alert.alert('Success', 'Password has been reset!');
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Reset Password</Text>
//       <Text style={styles.subtitle}>Enter a different password with the previous</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Current Password"
//         placeholderTextColor="#999"
//         secureTextEntry
//         value={currentPassword}
//         onChangeText={setCurrentPassword}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="New Password"
//         placeholderTextColor="#999"
//         secureTextEntry
//         value={newPassword}
//         onChangeText={setNewPassword}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         placeholderTextColor="#999"
//         secureTextEntry
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//       />
//       <TouchableOpacity>
//         <Text style={styles.forgotText}>Forgot current password?</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={handleReset}>
//         <Text style={styles.buttonText}>Reset Password</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#0D0D1A', padding: 24 },
//   title: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
//   subtitle: { color: '#ccc', marginBottom: 20 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#555',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 16,
//     color: '#fff',
//   },
//   forgotText: {
//     color: '#999',
//     textAlign: 'right',
//     marginBottom: 24,
//     fontStyle: 'italic',
//   },
//   button: {
//     backgroundColor: '#E74C3C',
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
// });

// export default ResetPasswordScreen;

import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResetPasswordScreen = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const handleReset = async () => {
  //   if (!currentPassword || !newPassword || !confirmPassword) {
  //     Alert.alert('Error', 'All fields are required');
  //     return;
  //   }

  //   if (newPassword !== confirmPassword) {
  //     Alert.alert('Error', 'New passwords do not match');
  //     return;
  //   }

  //   const userData = await AsyncStorage.getItem('user');
  //   if (!userData) {
  //     Alert.alert('Error', 'User not found');
  //     return;
  //   }

  //   const user = JSON.parse(userData);

  //   // Check if current password is correct
  //   if (user.password !== currentPassword) {
  //     Alert.alert('Error', 'Current password is incorrect');
  //     return;
  //   }

  
  //   // Update password
  //   user.password = newPassword;
  //   await AsyncStorage.setItem('user', JSON.stringify(user));

  //   Alert.alert('Success', 'Password has been reset');
  //   navigation.goBack();
  // };

  const handleReset = async () => {
  if (!currentPassword || !newPassword || !confirmPassword) {
    Alert.alert('Error', 'All fields are required');
    return;
  }

  if (newPassword !== confirmPassword) {
    Alert.alert('Error', 'New passwords do not match');
    return;
  }

  const userData = await AsyncStorage.getItem('user');
  if (!userData) {
    Alert.alert('Error', 'User not found');
    return;
  }

  const user = JSON.parse(userData);

  if (user.password !== currentPassword) {
    Alert.alert('Error', 'Current password is incorrect');
    return;
  }

  // ✅ Get all registered users
  const usersData = await AsyncStorage.getItem('users');
  let users = usersData ? JSON.parse(usersData) : [];

  // ✅ Update password in users list
  const updatedUsers = users.map((u) =>
    u.email === user.email ? { ...u, password: newPassword } : u
  );

  await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));

  // ✅ Also update current user session
  const updatedUser = { ...user, password: newPassword };
  await AsyncStorage.setItem('user', JSON.stringify(updatedUser));

  Alert.alert('Success', 'Password has been reset');
  navigation.goBack();
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>Enter a different password with the previous</Text>

      <TextInput
        style={styles.input}
        placeholder="Current Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot current password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D0D1A', padding: 24 },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  subtitle: { color: '#ccc', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    color: '#fff',
  },
  forgotText: {
    color: '#999',
    textAlign: 'right',
    marginBottom: 24,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#E74C3C',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default ResetPasswordScreen;
