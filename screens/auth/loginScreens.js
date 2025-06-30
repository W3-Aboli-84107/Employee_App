// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [secureText, setSecureText] = useState(true);
//   const [rememberMe, setRememberMe] = useState(false);

//   useEffect(() => {
//     // Load saved credentials if Remember Me was checked
//     const loadCredentials = async () => {
//       try {
//         const savedEmail = await AsyncStorage.getItem('rememberedEmail');
//         const savedPassword = await AsyncStorage.getItem('rememberedPassword');
//         const rememberFlag = await AsyncStorage.getItem('rememberMe');

//         if (rememberFlag === 'true') {
//           setEmail(savedEmail || '');
//           setPassword(savedPassword || '');
//           setRememberMe(true);
//         }
//       } catch (err) {
//         console.error('Error loading saved credentials', err);
//       }
//     };

//     loadCredentials();
//   }, []);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please enter both email and password.');
//       return;
//     }

//     try {
//       const storedUser = await AsyncStorage.getItem('user');
//       if (storedUser !== null) {
//         const parsedUser = JSON.parse(storedUser);
//         if (email === parsedUser.email && password === parsedUser.password)
//            {
      
//           if (rememberMe) {
//             await AsyncStorage.setItem('rememberedEmail', email);
//             await AsyncStorage.setItem('rememberedPassword', password);
//             await AsyncStorage.setItem('rememberMe', 'true');
//           } else {
//             await AsyncStorage.removeItem('rememberedEmail');
//             await AsyncStorage.removeItem('rememberedPassword');
//             await AsyncStorage.setItem('rememberMe', 'false');
//           }

//           navigation.replace('Dashboard');
//         } else {
//           Alert.alert('Error', 'Invalid email or password.');
//         }
//       } else {
//         Alert.alert('Error', 'No registered user found.');
//       }
//     } catch (error) {
//       console.error('Login error', error);
//       Alert.alert('Error', 'Login failed.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
//         <Icon name="arrow-back" size={24} color="#fff" />
//       </TouchableOpacity>

//       <Text style={styles.title}>Log In</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Email address"
//         placeholderTextColor="#C9D1D9"
//         keyboardType="email-address"
//         value={email}
//         onChangeText={setEmail}
//       />


//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.inputPassword}
//           placeholder="Password"
//           placeholderTextColor="#C9D1D9"
//           secureTextEntry={secureText}
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.eyeIcon}>
//           <Icon name={secureText ? 'eye-off' : 'eye'} size={20} color="#C9D1D9" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.rememberRow}>
//         <TouchableOpacity
//           onPress={() => setRememberMe(!rememberMe)}
//           style={styles.checkbox}
//         >
//           <Icon
//             name={rememberMe ? 'checkbox' : 'square-outline'}
//             size={20}
//             color="#FFF"
//           />
//         </TouchableOpacity>
//         <Text style={styles.rememberText}>Remember me</Text>

//         <TouchableOpacity style={styles.forgotButton}>
//           <Text style={styles.forgot}>Forgot password?</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Log In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0D1117',
//     paddingHorizontal: 24,
//     paddingTop: 60,
//   },
//   backArrow: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#F46D5D',
//     marginBottom: 40,
//   },
//   input: {
//     backgroundColor: 'transparent',
//     borderWidth: 1,
//     borderColor: '#C9D1D9',
//     borderRadius: 8,
//     padding: 14,
//     marginBottom: 20,
//     color: '#FFFFFF',
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#C9D1D9',
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   inputPassword: {
//     flex: 1,
//     padding: 14,
//     color: '#FFFFFF',
//   },
//   eyeIcon: {
//     paddingHorizontal: 10,
//   },
//   rememberRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   checkbox: {
//     marginRight: 6,
//   },
//   rememberText: {
//     color: '#C9D1D9',
//     marginRight: 'auto',
//   },
//   forgotButton: {
//     marginLeft: 'auto',
//   },
//   forgot: {
//     color: '#C9D1D9',
//   },
//   loginButton: {
//     backgroundColor: '#F46D5D',
//     paddingVertical: 14,
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   loginButtonText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [secureText, setSecureText] = useState(true);
//   const [rememberMe, setRememberMe] = useState(false);

//   useEffect(() => {
//     const loadCredentials = async () => {
//       try {
//         const savedEmail = await AsyncStorage.getItem('rememberedEmail');
//         const savedPassword = await AsyncStorage.getItem('rememberedPassword');
//         const rememberFlag = await AsyncStorage.getItem('rememberMe');

//         if (rememberFlag === 'true') {
//           setEmail(savedEmail || '');
//           setPassword(savedPassword || '');
//           setRememberMe(true);
//         }
//       } catch (err) {
//         console.error('Error loading saved credentials', err);
//       }
//     };

//     loadCredentials();
//   }, []);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please enter both email and password.');
//       return;
//     }

//     try {
//       const storedUser = await AsyncStorage.getItem('user');
//       if (storedUser !== null) {
//         const parsedUser = JSON.parse(storedUser);

//         if (email === parsedUser.email && password === parsedUser.password) {
//           if (rememberMe) {
//             await AsyncStorage.setItem('rememberedEmail', email);
//             await AsyncStorage.setItem('rememberedPassword', password);
//             await AsyncStorage.setItem('rememberMe', 'true');
//           } else {
//             await AsyncStorage.removeItem('rememberedEmail');
//             await AsyncStorage.removeItem('rememberedPassword');
//             await AsyncStorage.setItem('rememberMe', 'false');
//           }

//           // Navigate based on role
//           if (parsedUser.role === 'admin') {
//             navigation.replace('AdminDashboard');
//           } else if (parsedUser.role === 'superadmin') {
//             navigation.replace('SuperAdminDashboard');
//           } else {
//             Alert.alert('Error', 'Invalid user role.');
//           }
//         } else {
//           Alert.alert('Error', 'Invalid email or password.');
//         }
//       } else {
//         Alert.alert('Error', 'No registered user found.');
//       }
//     } catch (error) {
//       console.error('Login error', error);
//       Alert.alert('Error', 'Login failed.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
//         <Icon name="arrow-back" size={24} color="#fff" />
//       </TouchableOpacity>

//       <Text style={styles.title}>Log In</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Email address"
//         placeholderTextColor="#C9D1D9"
//         keyboardType="email-address"
//         value={email}
//         onChangeText={setEmail}
//       />

//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.inputPassword}
//           placeholder="Password"
//           placeholderTextColor="#C9D1D9"
//           secureTextEntry={secureText}
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.eyeIcon}>
//           <Icon name={secureText ? 'eye-off' : 'eye'} size={20} color="#C9D1D9" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.rememberRow}>
//         <TouchableOpacity
//           onPress={() => setRememberMe(!rememberMe)}
//           style={styles.checkbox}
//         >
//           <Icon
//             name={rememberMe ? 'checkbox' : 'square-outline'}
//             size={20}
//             color="#FFF"
//           />
//         </TouchableOpacity>
//         <Text style={styles.rememberText}>Remember me</Text>

//         <TouchableOpacity style={styles.forgotButton}>
//           <Text style={styles.forgot}>Forgot password?</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Log In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0D1117',
//     paddingHorizontal: 24,
//     paddingTop: 60,
//   },
//   backArrow: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#F46D5D',
//     marginBottom: 40,
//   },
//   input: {
//     backgroundColor: 'transparent',
//     borderWidth: 1,
//     borderColor: '#C9D1D9',
//     borderRadius: 8,
//     padding: 14,
//     marginBottom: 20,
//     color: '#FFFFFF',
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#C9D1D9',
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   inputPassword: {
//     flex: 1,
//     padding: 14,
//     color: '#FFFFFF',
//   },
//   eyeIcon: {
//     paddingHorizontal: 10,
//   },
//   rememberRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   checkbox: {
//     marginRight: 6,
//   },
//   rememberText: {
//     color: '#C9D1D9',
//     marginRight: 'auto',
//   },
//   forgotButton: {
//     marginLeft: 'auto',
//   },
//   forgot: {
//     color: '#C9D1D9',
//   },
//   loginButton: {
//     backgroundColor: '#F46D5D',
//     paddingVertical: 14,
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   loginButtonText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  // State management
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  // Load saved credentials
  useEffect(() => {
    const loadCredentials = async () => {
      try {
        const remembered = await AsyncStorage.getItem('rememberMe');
        if (remembered === 'true') {
          const savedEmail = await AsyncStorage.getItem('rememberedEmail');
          const savedPassword = await AsyncStorage.getItem('rememberedPassword');
          setEmail(savedEmail || '');
          setPassword(savedPassword || '');
          setRememberMe(true);
        }
      } catch (error) {
        console.error('Error loading credentials:', error);
      }
    };

    loadCredentials();
  }, []);

  // Email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Handle login
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      const storedUser = await AsyncStorage.getItem('user');
      
      if (!storedUser) {
        Alert.alert('Error', 'No user found. Please sign up first.');
        setLoading(false);
        return;
      }

      const user = JSON.parse(storedUser);

      if (email === user.email && password === user.password) {
        // Save credentials if remember me is checked
        if (rememberMe) {
          await AsyncStorage.multiSet([
            ['rememberedEmail', email],
            ['rememberedPassword', password],
            ['rememberMe', 'true']
          ]);
        } else {
          await AsyncStorage.multiRemove(['rememberedEmail', 'rememberedPassword']);
        }

        // Navigate based on role
        navigation.reset({
          index: 0,
          routes: [{ 
            name: user.role === 'superadmin' ? 'SuperAdminDashboard' : 'AdminDashboard'
          }],
        });

      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Logo Header (hidden when keyboard is visible) */}
      {!keyboardVisible && (
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
      )}

      {/* Form Container */}
      <View style={styles.formContainer}>
        <Text style={styles.loginText}>Login to your account</Text>
        
        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#aaa" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setKeyboardVisible(true)}
            onBlur={() => setKeyboardVisible(false)}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry={secureText}
            value={password}
            onChangeText={setPassword}
            onFocus={() => setKeyboardVisible(true)}
            onBlur={() => setKeyboardVisible(false)}
          />
          <TouchableOpacity
            onPress={() => setSecureText(!secureText)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={secureText ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#aaa"
            />
          </TouchableOpacity>
        </View>

        {/* Remember Me & Forgot Password */}
        <View style={styles.rememberContainer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkedBox]}>
              {rememberMe && <Ionicons name="checkmark" size={14} color="#fff" />}
            </View>
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.loginButton, loading && styles.disabledButton]}
          onPress={handleLogin}
          disabled={loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Log In</Text>
          )}
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  loginText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
    fontWeight: '600',
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
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    height: 50,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F46D5D',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkedBox: {
    backgroundColor: '#F46D5D',
  },
  rememberText: {
    color: '#fff',
    fontSize: 14,
  },
  forgotPassword: {
    color: '#F46D5D',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#F46D5D',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  disabledButton: {
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#8B949E',
    fontSize: 14,
  },
  signupLink: {
    color: '#F46D5D',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginScreen;