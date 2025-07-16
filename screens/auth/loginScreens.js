// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   ActivityIndicator,
//   Image
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// const LoginScreen = () => {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [secureText, setSecureText] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   useEffect(() => {
//     const loadRememberedCredentials = async () => {
//       try {
//         const remembered = await AsyncStorage.getItem('rememberMe');
//         if (remembered === 'true') {
//           const rememberedEmail = await AsyncStorage.getItem('rememberedEmail');
//           const rememberedPassword = await AsyncStorage.getItem('rememberedPassword');
//           setEmail(rememberedEmail || '');
//           setPassword(rememberedPassword || '');
//           setRememberMe(true);
//         }
//       } catch (error) {
//         console.error('Error loading remembered credentials:', error);
//       }
//     };
//     loadRememberedCredentials();
//   }, []);

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const handleLogin = async () => {
//     if (!email.trim() || !password.trim()) {
//       Alert.alert('Error', 'Please enter both email and password');
//       return;
//     }

//     if (!validateEmail(email)) {
//       Alert.alert('Error', 'Please enter a valid email address');
//       return;
//     }

//     setLoading(true);

//     try {
//       const usersData = await AsyncStorage.getItem('users');
//       const users = usersData ? JSON.parse(usersData) : [];

//       const user = users.find((u) => u.email === email && u.password === password);

//       if (!user) {
//         Alert.alert('Error', 'Invalid email or password');
//         return;
//       }

//       // ✅ Save logged-in user data for use in header
//       await AsyncStorage.setItem('user', JSON.stringify(user));

//       if (rememberMe) {
//         await AsyncStorage.multiSet([
//           ['rememberMe', 'true'],
//           ['rememberedEmail', email],
//           ['rememberedPassword', password]
//         ]);
//       } else {
//         await AsyncStorage.multiRemove(['rememberMe', 'rememberedEmail', 'rememberedPassword']);
//       }

//       navigation.reset({
//         index: 0,
//         routes: [{ name: user.role === 'superadmin' ? 'SuperAdminDashboard' : 'AdminDashboard' }],
//       });
//     } catch (error) {
//       console.error('Login error:', error);
//       Alert.alert('Error', 'Login failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       <View style={styles.logoContainer}>
//         <Image source={require('../../assets/logo.png')} style={styles.logo} />
//         {/* <Text style={styles.welcomeText}>Welcome Back</Text> */}
//       </View>

//       <View style={styles.formContainer}>
//         <Text style={styles.loginText}>Login to your account</Text>

//         <View style={styles.inputContainer}>
//           <Ionicons name="mail-outline" size={20} color="#aaa" style={styles.inputIcon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Email address"
//             placeholderTextColor="#aaa"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             value={email}
//             onChangeText={setEmail}
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.inputIcon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             placeholderTextColor="#aaa"
//             secureTextEntry={secureText}
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.eyeIcon}>
//             <Ionicons name={secureText ? 'eye-off-outline' : 'eye-outline'} size={20} color="#aaa" />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.rememberMeContainer}>
//           <TouchableOpacity
//             style={styles.checkboxWrapper}
//             onPress={() => setRememberMe(!rememberMe)}
//           >
//             <View style={[styles.checkbox, rememberMe && styles.checked]}>
//               {rememberMe && <Ionicons name="checkmark" size={14} color="#fff" />}
//             </View>
//             <Text style={styles.rememberMeText}>Remember Me</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword', { email })}>
//             <Text style={styles.forgotPassword}>Forgot password?</Text>
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity
//           style={[styles.loginButton, loading && styles.disabledButton]}
//           onPress={handleLogin}
//           disabled={loading}
//         >
//           {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginButtonText}>Log In</Text>}
//         </TouchableOpacity>

//         <View style={styles.signupContainer}>
//           <Text style={styles.signupText}>Don't have an account? </Text>
//           <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//             <Text style={styles.signupLink}>Sign Up</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container:
//    { 
//     flex: 1, 
//     backgroundColor: '#0D1117',
    
//    },

//   logoContainer: {
//     alignItems: 'center',
//     paddingTop: 200,
//     paddingBottom: 30,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//   },

//   // welcomeText: {
//   //   fontSize: 24,
//   //   fontWeight: 'bold',
//   //   color: '#fff',
//   // },
  
//   formContainer: {
//     flex: 1,
//     paddingHorizontal: 25,
//   },
//   loginText: {
//     fontSize: 18,
//     color: '#fff',
//     marginBottom: 30,
//     fontWeight: '600',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#161B22',
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginBottom: 30,
//     borderWidth: 1,
//     borderColor: '#30363D',
//   },
//   inputIcon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     color: '#fff',
//     height: 50,
//     fontSize: 16,
//   },
//   eyeIcon: {
//     padding: 10,
//   },
//   rememberMeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 25,
//   },
//   checkboxWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: '#F46D5D',
//     marginRight: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   checked: {
//     backgroundColor: '#F46D5D',
//   },
//   rememberMeText: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   forgotPassword: {
//     color: '#F46D5D',
//     fontSize: 14,
//   },
//   loginButton: {
//     backgroundColor: '#F46D5D',
//     height: 50,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   disabledButton: {
//     opacity: 0.7,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   signupContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   signupText: {
//     color: '#8B949E',
//     fontSize: 14,
//   },
//   signupLink: {
//     color: '#F46D5D',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
// });

// export default LoginScreen;

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
  Image,
  ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const loadRememberedCredentials = async () => {
      try {
        const remembered = await AsyncStorage.getItem('rememberMe');
        if (remembered === 'true') {
          const rememberedEmail = await AsyncStorage.getItem('rememberedEmail');
          const rememberedPassword = await AsyncStorage.getItem('rememberedPassword');
          setEmail(rememberedEmail || '');
          setPassword(rememberedPassword || '');
          setRememberMe(true);
        }
      } catch (error) {
        console.error('Error loading remembered credentials:', error);
      }
    };
    loadRememberedCredentials();
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

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
      const usersData = await AsyncStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];

      const user = users.find((u) => u.email === email && u.password === password);

      if (!user) {
        Alert.alert('Error', 'Invalid email or password');
        return;
      }

      await AsyncStorage.setItem('user', JSON.stringify(user));

      if (rememberMe) {
        await AsyncStorage.multiSet([
          ['rememberMe', 'true'],
          ['rememberedEmail', email],
          ['rememberedPassword', password]
        ]);
      } else {
        await AsyncStorage.multiRemove(['rememberMe', 'rememberedEmail', 'rememberedPassword']);
      }

      navigation.reset({
        index: 0,
        routes: [{ name: user.role === 'superadmin' ? 'SuperAdminDashboard' : 'AdminDashboard' }],
      });
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.loginText}>Login to your account</Text>

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
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry={secureText}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.eyeIcon}>
              <Ionicons name={secureText ? 'eye-off-outline' : 'eye-outline'} size={20} color="#aaa" />
            </TouchableOpacity>
          </View>

          <View style={styles.rememberMeContainer}>
            <TouchableOpacity
              style={styles.checkboxWrapper}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={[styles.checkbox, rememberMe && styles.checked]}>
                {rememberMe && <Ionicons name="checkmark" size={14} color="#fff" />}
              </View>
              <Text style={styles.rememberMeText}>Remember Me</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword', { email })}>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.loginButton, loading && styles.disabledButton]}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginButtonText}>Log In</Text>}
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  formContainer: {
    paddingHorizontal: 25,
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
    marginBottom: 30,
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
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F46D5D',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#F46D5D',
  },
  rememberMeText: {
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
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default LoginScreen;
