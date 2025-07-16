// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   Alert,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SignUpScreen = ({ navigation }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [securePassword, setSecurePassword] = useState(true);
//   const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
//   const [phoneError, setPhoneError] = useState('');
//   const [role, setRole] = useState('admin');

//   const handlePhoneChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     const trimmedText = numericText.slice(0, 10);
//     setPhone(trimmedText);

//     if (trimmedText.length < 10) {
//       setPhoneError('Phone number must be exactly 10 digits');
//     } else {
//       setPhoneError('');
//     }
//   };

//   const validatePhoneNumber = () => {
//     if (phone.length !== 10) {
//       setPhoneError('Phone number must be exactly 10 digits');
//       return false;
//     }
//     setPhoneError('');
//     return true;
//   };

//   const validatePassword = (pwd) => {
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
//     return passwordRegex.test(pwd);
//   };

//   const handleSignUp = async () => {
//     if (!firstName.trim()) {
//       Alert.alert('Error', 'First name is required.');
//       return;
//     }

//     if (!lastName.trim()) {
//       Alert.alert('Error', 'Last name is required.');
//       return;
//     }

//     if (!validatePhoneNumber()) return;

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       Alert.alert('Error', 'Please enter a valid email address.');
//       return;
//     }

//     if (!validatePassword(password)) {
//       Alert.alert(
//         'Invalid Password',
//         'Password must be at least 6 characters and include:\n- Uppercase letter\n- Lowercase letter\n- Number\n- Special character'
//       );
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match.');
//       return;
//     }

//     try {
//       const usersData = await AsyncStorage.getItem('users');
//       const users = usersData ? JSON.parse(usersData) : [];

//       const existingUser = users.find((u) => u.email === email);
//       if (existingUser) {
//         Alert.alert('Error', 'Email already registered.');
//         return;
//       }

//       const newUser = {
//         firstName,
//         lastName,
//         phone,
//         email,
//         password,
//         role,
//       };

//       users.push(newUser);
//       await AsyncStorage.setItem('users', JSON.stringify(users));
//       Alert.alert('Success', 'Registration Successful!', [
//         { text: 'OK', onPress: () => navigation.replace('Login') },
//       ]);
//     } catch (error) {
//       console.error('Error saving user data', error);
//       Alert.alert('Error', 'Failed to save user data. Please try again.');
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 20}
//     >
//       <ScrollView
//         contentContainerStyle={styles.container}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header Row with Back Icon and Sign Up Title */}
//         <View style={styles.headerRow}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Icon name="arrow-back" size={24} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.title}>Sign Up</Text>
//         </View>

//         <View style={styles.row}>
//           <TextInput
//             style={[styles.input, { flex: 1, marginRight: 8 }]}
//             placeholder="First name"
//             placeholderTextColor="#C9D1D9"
//             value={firstName}
//             onChangeText={setFirstName}
//             autoCapitalize="words"
//           />
//           <TextInput
//             style={[styles.input, { flex: 1 }]}
//             placeholder="Last name"
//             placeholderTextColor="#C9D1D9"
//             value={lastName}
//             onChangeText={setLastName}
//             autoCapitalize="words"
//           />
//         </View>

//         <View>
//           <TextInput
//             style={[styles.input, phoneError ? styles.inputError : null]}
//             placeholder="Phone number"
//             placeholderTextColor="#C9D1D9"
//             keyboardType="number-pad"
//             value={phone}
//             onChangeText={handlePhoneChange}
//             maxLength={10}
//             onBlur={validatePhoneNumber}
//           />
//           {phoneError ? (
//             <Text style={styles.errorText}>{phoneError}</Text>
//           ) : null}
//         </View>

//         <TextInput
//           style={styles.input}
//           placeholder="Email address"
//           placeholderTextColor="#C9D1D9"
//           keyboardType="email-address"
//           autoCapitalize="none"
//           value={email}
//           onChangeText={setEmail}
//         />

//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.inputPassword}
//             placeholder="Create password"
//             placeholderTextColor="#C9D1D9"
//             secureTextEntry={securePassword}
//             value={password}
//             onChangeText={setPassword}
//             autoCapitalize="none"
//           />
//           <TouchableOpacity onPress={() => setSecurePassword(!securePassword)} style={styles.eyeIcon}>
//             <Icon name={securePassword ? 'eye-off' : 'eye'} size={20} color="#C9D1D9" />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.inputPassword}
//             placeholder="Confirm password"
//             placeholderTextColor="#C9D1D9"
//             secureTextEntry={secureConfirmPassword}
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//             autoCapitalize="none"
//           />
//           <TouchableOpacity onPress={() => setSecureConfirmPassword(!secureConfirmPassword)} style={styles.eyeIcon}>
//             <Icon name={secureConfirmPassword ? 'eye-off' : 'eye'} size={20} color="#C9D1D9" />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.roleContainer}>
//           <Text style={styles.roleLabel}>Select Role:</Text>

//           <TouchableOpacity
//             style={styles.radioButtonContainer}
//             onPress={() => setRole('admin')}
//           >
//             <View style={styles.radioCircle}>
//               {role === 'admin' && <View style={styles.selectedRb} />}
//             </View>
//             <Text style={styles.radioText}>Admin</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.radioButtonContainer}
//             onPress={() => setRole('superadmin')}
//           >
//             <View style={styles.radioCircle}>
//               {role === 'superadmin' && <View style={styles.selectedRb} />}
//             </View>
//             <Text style={styles.radioText}>Super Admin</Text>
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp} activeOpacity={0.8}>
//           <Text style={styles.signUpButtonText}>Sign Up</Text>
//         </TouchableOpacity>

//         <View style={styles.loginTextContainer}>
//           <Text style={styles.loginPrompt}>Already have an account? </Text>
//           <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//             <Text style={styles.loginLink}>Log in</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 24,
//     backgroundColor: '#0D1117',
//     paddingTop: Platform.OS === 'ios' ? 60 : 40,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   backButton: {
//     padding: 8,
//     marginRight: 10,
//   },
//   title: {
//     fontSize: 28,
//     color: '#F46D5D',
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   input: {
//     backgroundColor: '#161B22',
//     color: '#FFF',
//     padding: 14,
//     borderRadius: 8,
//     marginBottom: 16,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#30363D',
//   },
//   inputError: {
//     borderColor: '#FF6B6B',
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#161B22',
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: '#30363D',
//   },
//   inputPassword: {
//     flex: 1,
//     color: '#FFF',
//     padding: 14,
//     fontSize: 16,
//   },
//   eyeIcon: {
//     padding: 10,
//   },
//   signUpButton: {
//     backgroundColor: '#F46D5D',
//     paddingVertical: 16,
//     alignItems: 'center',
//     borderRadius: 8,
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   signUpButtonText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   loginTextContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   loginPrompt: {
//     color: '#8B949E',
//     fontSize: 16,
//   },
//   loginLink: {
//     color: '#F46D5D',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   errorText: {
//     color: '#FF6B6B',
//     fontSize: 14,
//     marginTop: -10,
//     marginBottom: 16,
//     marginLeft: 4,
//   },
//   roleContainer: {
//     marginBottom: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//   },
//   roleLabel: {
//     color: '#C9D1D9',
//     marginRight: 10,
//   },
//   radioButtonContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 20,
//     marginTop: 8,
//   },
//   radioCircle: {
//     height: 20,
//     width: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: '#F46D5D',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 6,
//   },
//   selectedRb: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#F46D5D',
//   },
//   radioText: {
//     color: '#C9D1D9',
//     fontSize: 16,
//   },
// });

// export default SignUpScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
  const [phoneError, setPhoneError] = useState('');
  const [role, setRole] = useState('admin');

  const handlePhoneChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    const trimmedText = numericText.slice(0, 10);
    setPhone(trimmedText);
    setPhoneError(trimmedText.length < 10 ? 'Phone number must be exactly 10 digits' : '');
  };

  const validatePhoneNumber = () => {
    if (phone.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const validatePassword = (pwd) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
    return regex.test(pwd);
  };

  const handleSignUp = async () => {
    if (!firstName.trim() || !lastName.trim()) {
      Alert.alert('Error', 'First and last name are required.');
      return;
    }
    if (!validatePhoneNumber()) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Invalid Password', 'Password must be at least 6 characters and include uppercase, lowercase, number, and special character.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const usersData = await AsyncStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];

      const existingUser = users.find((u) => u.email === email);
      if (existingUser) {
        Alert.alert('Error', 'Email already registered.');
        return;
      }

      const newUser = {
        firstName,
        lastName,
        phone,
        email,
        password,
        role,
      };

      users.push(newUser);
      await AsyncStorage.setItem('users', JSON.stringify(users));
      Alert.alert('Success', 'Registration Successful!', [
        { text: 'OK', onPress: () => navigation.replace('Login') },
      ]);
    } catch (error) {
      console.error('Signup Error:', error);
      Alert.alert('Error', 'Failed to save user data.');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 20}
      >
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Sign Up</Text>
        </View>

        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 8 }]}
            placeholder="First name"
            placeholderTextColor="#C9D1D9"
            value={firstName}
            onChangeText={setFirstName}
            autoCapitalize="words"
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Last name"
            placeholderTextColor="#C9D1D9"
            value={lastName}
            onChangeText={setLastName}
            autoCapitalize="words"
          />
        </View>

        <View>
          <TextInput
            style={[styles.input, phoneError ? styles.inputError : null]}
            placeholder="Phone number"
            placeholderTextColor="#C9D1D9"
            keyboardType="number-pad"
            value={phone}
            onChangeText={handlePhoneChange}
            maxLength={10}
            onBlur={validatePhoneNumber}
          />
          {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#C9D1D9"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Create password"
            placeholderTextColor="#C9D1D9"
            secureTextEntry={securePassword}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setSecurePassword(!securePassword)} style={styles.eyeIcon}>
            <Icon name={securePassword ? 'eye-off' : 'eye'} size={20} color="#C9D1D9" />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Confirm password"
            placeholderTextColor="#C9D1D9"
            secureTextEntry={secureConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setSecureConfirmPassword(!secureConfirmPassword)} style={styles.eyeIcon}>
            <Icon name={secureConfirmPassword ? 'eye-off' : 'eye'} size={20} color="#C9D1D9" />
          </TouchableOpacity>
        </View>

        <View style={styles.roleContainer}>
          <Text style={styles.roleLabel}>Select Role:</Text>

          <TouchableOpacity style={styles.radioButtonContainer} onPress={() => setRole('admin')}>
            <View style={styles.radioCircle}>
              {role === 'admin' && <View style={styles.selectedRb} />}
            </View>
            <Text style={styles.radioText}>Admin</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.radioButtonContainer} onPress={() => setRole('superadmin')}>
            <View style={styles.radioCircle}>
              {role === 'superadmin' && <View style={styles.selectedRb} />}
            </View>
            <Text style={styles.radioText}>Super Admin</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.loginTextContainer}>
          <Text style={styles.loginPrompt}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#0D1117',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    padding: 8,
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    color: '#F46D5D',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#161B22',
    color: '#FFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#30363D',
  },
  inputError: {
    borderColor: '#FF6B6B',
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 14,
    marginTop: -10,
    marginBottom: 16,
    marginLeft: 4,
  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: '#161B22',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#30363D',
  },
  inputPassword: {
    flex: 1,
    color: '#FFF',
    padding: 14,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  signUpButton: {
    backgroundColor: '#F46D5D',
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginPrompt: {
    color: '#8B949E',
    fontSize: 16,
  },
  loginLink: {
    color: '#F46D5D',
    fontWeight: 'bold',
    fontSize: 16,
  },
  roleContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  roleLabel: {
    color: '#C9D1D9',
    marginRight: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginTop: 8,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F46D5D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F46D5D',
  },
  radioText: {
    color: '#C9D1D9',
    fontSize: 16,
  },
});

export default SignUpScreen;
