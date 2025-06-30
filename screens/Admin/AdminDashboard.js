// // // // // import React, { useState } from 'react';
// // // // // import {
// // // // //   View,
// // // // //   Text,
// // // // //   TextInput,
// // // // //   TouchableOpacity,
// // // // //   StyleSheet,
// // // // //   Alert,
// // // // //   FlatList,
// // // // // } from 'react-native';
// // // // // import { Ionicons } from '@expo/vector-icons';

// // // // // export default function DashboardScreen({ navigation }) {
// // // // //   const [visitorName, setVisitorName] = useState('');
// // // // //   const [email, setEmail] = useState('');
// // // // //   const [mobile, setMobile] = useState('');
// // // // //   const [address, setAddress] = useState('');
// // // // //   const [purpose, setPurpose] = useState('');
// // // // //   const [inTime] = useState(new Date().toLocaleTimeString());
// // // // //   const [visitors, setVisitors] = useState([]);

// // // // //   const validateEmail = (email) =>
// // // // //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

// // // // //   const handleSubmit = () => {
// // // // //     if (!visitorName || !email || !mobile || !address || !purpose) {
// // // // //       Alert.alert('Error', 'All fields are required.');
// // // // //       return;
// // // // //     }

// // // // //     if (!validateEmail(email)) {
// // // // //       Alert.alert('Invalid Email', 'Please enter a valid email address.');
// // // // //       return;
// // // // //     }

// // // // //     if (!/^\d{10}$/.test(mobile)) {
// // // // //       Alert.alert('Invalid Mobile', 'Mobile number must be 10 digits.');
// // // // //       return;
// // // // //     }

// // // // //     const newVisitor = {
// // // // //       id: Date.now().toString(),
// // // // //       visitorName,
// // // // //       email,
// // // // //       mobile,
// // // // //       address,
// // // // //       purpose,
// // // // //       inTime,
// // // // //     };

// // // // //     setVisitors([newVisitor, ...visitors]);

// // // // //     Alert.alert('Success', 'Visitor added!');
// // // // //     setVisitorName('');
// // // // //     setEmail('');
// // // // //     setMobile('');
// // // // //     setAddress('');
// // // // //     setPurpose('');
// // // // //   };

// // // // //   const renderVisitor = ({ item }) => (
// // // // //     <View style={styles.visitorCard}>
// // // // //       <View>
// // // // //         <Text style={styles.visitorName}>{item.visitorName}</Text>
// // // // //         <Text style={styles.visitorDetails}>{item.mobile}</Text>
// // // // //       </View>
// // // // //       <View style={styles.icons}>
// // // // //         <Ionicons name="eye-outline" size={20} color="white" style={styles.icon} />
// // // // //         <Ionicons name="call-outline" size={20} color="white" style={styles.icon} />
// // // // //       </View>
// // // // //     </View>
// // // // //   );

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <Text style={styles.heading}>Dashboard</Text>

// // // // //       <TextInput
// // // // //         style={styles.input}
// // // // //         placeholder="Visitor Name"
// // // // //         placeholderTextColor="#999"
// // // // //         value={visitorName}
// // // // //         onChangeText={setVisitorName}
// // // // //       />
// // // // //       <TextInput
// // // // //         style={styles.input}
// // // // //         placeholder="Email"
// // // // //         placeholderTextColor="#999"
// // // // //         keyboardType="email-address"
// // // // //         value={email}
// // // // //         onChangeText={setEmail}
// // // // //       />
// // // // //       <TextInput
// // // // //         style={styles.input}
// // // // //         placeholder="Mobile Number"
// // // // //         placeholderTextColor="#999"
// // // // //         keyboardType="numeric"
// // // // //         maxLength={10}
// // // // //         value={mobile}
// // // // //         onChangeText={setMobile}
// // // // //       />
// // // // //       <TextInput
// // // // //         style={styles.input}
// // // // //         placeholder="Address"
// // // // //         placeholderTextColor="#999"
// // // // //         value={address}
// // // // //         onChangeText={setAddress}
// // // // //       />
// // // // //       <TextInput
// // // // //         style={styles.input}
// // // // //         placeholder="Purpose"
// // // // //         placeholderTextColor="#999"
// // // // //         value={purpose}
// // // // //         onChangeText={setPurpose}
// // // // //       />

// // // // //       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// // // // //         <Text style={styles.buttonText}>Save Visitor</Text>
// // // // //       </TouchableOpacity>

// // // // //       <FlatList
// // // // //         data={visitors}
// // // // //         keyExtractor={(item) => item.id}
// // // // //         renderItem={renderVisitor}
// // // // //         style={styles.list}
// // // // //         ListHeaderComponent={() => (
// // // // //           <Text style={styles.sectionTitle}>Today’s Visitors</Text>
// // // // //         )}
// // // // //         ListEmptyComponent={() => (
// // // // //           <Text style={{ color: '#999', textAlign: 'center' }}>No visitors yet.</Text>
// // // // //         )}
// // // // //       />
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: '#0D1117',
// // // // //     padding: 20,
// // // // //   },
// // // // //   heading: {
// // // // //     fontSize: 26,
// // // // //     color: '#F46D5D',
// // // // //     fontWeight: 'bold',
// // // // //     marginBottom: 20,
// // // // //   },
// // // // //   input: {
// // // // //     borderWidth: 1,
// // // // //     borderColor: '#444',
// // // // //     borderRadius: 8,
// // // // //     padding: 12,
// // // // //     marginBottom: 14,
// // // // //     color: '#fff',
// // // // //   },
// // // // //   button: {
// // // // //     backgroundColor: '#F46D5D',
// // // // //     paddingVertical: 14,
// // // // //     borderRadius: 10,
// // // // //     alignItems: 'center',
// // // // //     marginVertical: 10,
// // // // //   },
// // // // //   buttonText: {
// // // // //     color: '#FFF',
// // // // //     fontWeight: 'bold',
// // // // //     fontSize: 16,
// // // // //   },
// // // // //   list: {
// // // // //     marginTop: 10,
// // // // //   },
// // // // //   sectionTitle: {
// // // // //     color: '#fff',
// // // // //     fontSize: 18,
// // // // //     marginBottom: 10,
// // // // //   },
// // // // //   visitorCard: {
// // // // //     flexDirection: 'row',
// // // // //     justifyContent: 'space-between',
// // // // //     backgroundColor: '#3A3A4A',
// // // // //     padding: 12,
// // // // //     borderRadius: 8,
// // // // //     marginBottom: 10,
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   visitorName: {
// // // // //     color: '#fff',
// // // // //     fontWeight: 'bold',
// // // // //   },
// // // // //   visitorDetails: {
// // // // //     color: '#ccc',
// // // // //   },
// // // // //   icons: {
// // // // //     flexDirection: 'row',
// // // // //   },
// // // // //   icon: {
// // // // //     marginLeft: 12,
// // // // //     backgroundColor: '#4CAF50',
// // // // //     padding: 6,
// // // // //     borderRadius: 20,
// // // // //   },
// // // // // });

// // // // import React, { useState, useEffect } from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   TextInput,
// // // //   TouchableOpacity,
// // // //   StyleSheet,
// // // //   FlatList,
// // // //   Alert,
// // // // } from 'react-native';
// // // // import { Ionicons } from '@expo/vector-icons';
// // // // import AsyncStorage from '@react-native-async-storage/async-storage';

// // // // export default function DashboardScreen() {
// // // //   const [visitorName, setVisitorName] = useState('');
// // // //   const [email, setEmail] = useState('');
// // // //   const [mobile, setMobile] = useState('');
// // // //   const [address, setAddress] = useState('');
// // // //   const [purpose, setPurpose] = useState('');
// // // //   const [visitors, setVisitors] = useState([]);

// // // //   useEffect(() => {
// // // //     loadVisitors(); // Load visitors when screen loads
// // // //   }, []);

// // // //   const validateEmail = (email) =>
// // // //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

// // // //   const saveVisitorsToStorage = async (data) => {
// // // //     try {
// // // //       await AsyncStorage.setItem('visitors', JSON.stringify(data));
// // // //     } catch (err) {
// // // //       console.error('Error saving visitors', err);
// // // //     }
// // // //   };

// // // //   const loadVisitors = async () => {
// // // //     try {
// // // //       const storedVisitors = await AsyncStorage.getItem('visitors');
// // // //       if (storedVisitors) {
// // // //         setVisitors(JSON.parse(storedVisitors));
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('Error loading visitors', err);
// // // //     }
// // // //   };

// // // //   const handleSubmit = async () => {
// // // //     if (!visitorName || !email || !mobile || !address || !purpose) {
// // // //       Alert.alert('Error', 'All fields are required.');
// // // //       return;
// // // //     }

// // // //     if (!validateEmail(email)) {
// // // //       Alert.alert('Invalid Email', 'Please enter a valid email address.');
// // // //       return;
// // // //     }

// // // //     if (!/^\d{10}$/.test(mobile)) {
// // // //       Alert.alert('Invalid Mobile', 'Mobile number must be 10 digits.');
// // // //       return;
// // // //     }

// // // //     const inTime = new Date().toLocaleTimeString();
// // // //     const newVisitor = {
// // // //       id: Date.now().toString(),
// // // //       visitorName,
// // // //       email,
// // // //       mobile,
// // // //       address,
// // // //       purpose,
// // // //       inTime,
// // // //     };

// // // //     const updatedVisitors = [newVisitor, ...visitors];
// // // //     setVisitors(updatedVisitors);
// // // //     await saveVisitorsToStorage(updatedVisitors);

// // // //     Alert.alert('Success', 'Visitor added!');
// // // //     setVisitorName('');
// // // //     setEmail('');
// // // //     setMobile('');
// // // //     setAddress('');
// // // //     setPurpose('');
// // // //   };

// // // //   const renderVisitor = ({ item }) => (
// // // //     <View style={styles.visitorCard}>
// // // //       <View>
// // // //         <Text style={styles.visitorName}>{item.visitorName}</Text>
// // // //         <Text style={styles.visitorDetails}>{item.mobile}</Text>
// // // //       </View>
// // // //       <View style={styles.icons}>
// // // //         <Ionicons name="eye-outline" size={20} color="white" style={styles.icon} />
// // // //         <Ionicons name="call-outline" size={20} color="white" style={styles.icon} />
// // // //       </View>
// // // //     </View>
// // // //   );

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text style={styles.heading}>Dashboard</Text>

// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Visitor Name"
// // // //         placeholderTextColor="#999"
// // // //         value={visitorName}
// // // //         onChangeText={setVisitorName}
// // // //       />
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Email"
// // // //         placeholderTextColor="#999"
// // // //         keyboardType="email-address"
// // // //         value={email}
// // // //         onChangeText={setEmail}
// // // //       />
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Mobile Number"
// // // //         placeholderTextColor="#999"
// // // //         keyboardType="numeric"
// // // //         maxLength={10}
// // // //         value={mobile}
// // // //         onChangeText={setMobile}
// // // //       />
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Address"
// // // //         placeholderTextColor="#999"
// // // //         value={address}
// // // //         onChangeText={setAddress}
// // // //       />
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Purpose"
// // // //         placeholderTextColor="#999"
// // // //         value={purpose}
// // // //         onChangeText={setPurpose}
// // // //       />

// // // //       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// // // //         <Text style={styles.buttonText}>Save Visitor</Text>
// // // //       </TouchableOpacity>

// // // //       <FlatList
// // // //         data={visitors}
// // // //         keyExtractor={(item) => item.id}
// // // //         renderItem={renderVisitor}
// // // //         ListHeaderComponent={<Text style={styles.sectionTitle}>Today's Visitors</Text>}
// // // //         ListEmptyComponent={<Text style={styles.emptyText}>No visitors yet.</Text>}
// // // //       />
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#0D1117',
// // // //     padding: 20,
// // // //   },
// // // //   heading: {
// // // //     fontSize: 26,
// // // //     color: '#F46D5D',
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 20,
// // // //   },
// // // //   input: {
// // // //     borderWidth: 1,
// // // //     borderColor: '#444',
// // // //     borderRadius: 8,
// // // //     padding: 12,
// // // //     marginBottom: 14,
// // // //     color: '#fff',
// // // //   },
// // // //   button: {
// // // //     backgroundColor: '#F46D5D',
// // // //     paddingVertical: 14,
// // // //     borderRadius: 10,
// // // //     alignItems: 'center',
// // // //     marginVertical: 10,
// // // //   },
// // // //   buttonText: {
// // // //     color: '#FFF',
// // // //     fontWeight: 'bold',
// // // //     fontSize: 16,
// // // //   },
// // // //   sectionTitle: {
// // // //     color: '#fff',
// // // //     fontSize: 18,
// // // //     marginBottom: 10,
// // // //     marginTop: 20,
// // // //   },
// // // //   visitorCard: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     backgroundColor: '#3A3A4A',
// // // //     padding: 12,
// // // //     borderRadius: 8,
// // // //     marginBottom: 10,
// // // //     alignItems: 'center',
// // // //   },
// // // //   visitorName: {
// // // //     color: '#fff',
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   visitorDetails: {
// // // //     color: '#ccc',
// // // //   },
// // // //   icons: {
// // // //     flexDirection: 'row',
// // // //   },
// // // //   icon: {
// // // //     marginLeft: 12,
// // // //     backgroundColor: '#4CAF50',
// // // //     padding: 6,
// // // //     borderRadius: 20,
// // // //   },
// // // //   emptyText: {
// // // //     textAlign: 'center',
// // // //     color: '#999',
// // // //     marginTop: 10,
// // // //   },
// // // // });

// // // // import React, { useState } from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   TextInput,
// // // //   TouchableOpacity,
// // // //   StyleSheet,
// // // //   Alert,
// // // //   FlatList,
// // // // } from 'react-native';
// // // // import { Ionicons } from '@expo/vector-icons';

// // // // export default function DashboardScreen({ navigation }) {
// // // //   const [visitorName, setVisitorName] = useState('');
// // // //   const [email, setEmail] = useState('');
// // // //   const [mobile, setMobile] = useState('');
// // // //   const [address, setAddress] = useState('');
// // // //   const [purpose, setPurpose] = useState('');
// // // //   const [inTime] = useState(new Date().toLocaleTimeString());
// // // //   const [visitors, setVisitors] = useState([]);

// // // //   const validateEmail = (email) =>
// // // //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

// // // //   const handleSubmit = () => {
// // // //     if (!visitorName || !email || !mobile || !address || !purpose) {
// // // //       Alert.alert('Error', 'All fields are required.');
// // // //       return;
// // // //     }

// // // //     if (!validateEmail(email)) {
// // // //       Alert.alert('Invalid Email', 'Please enter a valid email address.');
// // // //       return;
// // // //     }

// // // //     if (!/^\d{10}$/.test(mobile)) {
// // // //       Alert.alert('Invalid Mobile', 'Mobile number must be 10 digits.');
// // // //       return;
// // // //     }

// // // //     const newVisitor = {
// // // //       id: Date.now().toString(),
// // // //       visitorName,
// // // //       email,
// // // //       mobile,
// // // //       address,
// // // //       purpose,
// // // //       inTime,
// // // //     };

// // // //     setVisitors([newVisitor, ...visitors]);

// // // //     Alert.alert('Success', 'Visitor added!');
// // // //     setVisitorName('');
// // // //     setEmail('');
// // // //     setMobile('');
// // // //     setAddress('');
// // // //     setPurpose('');
// // // //   };

// // // //   const renderVisitor = ({ item }) => (
// // // //     <View style={styles.visitorCard}>
// // // //       <View>
// // // //         <Text style={styles.visitorName}>{item.visitorName}</Text>
// // // //         <Text style={styles.visitorDetails}>{item.mobile}</Text>
// // // //       </View>
// // // //       <View style={styles.icons}>
// // // //         <Ionicons name="eye-outline" size={20} color="white" style={styles.icon} />
// // // //         <Ionicons name="call-outline" size={20} color="white" style={styles.icon} />
// // // //       </View>
// // // //     </View>
// // // //   );

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text style={styles.heading}>Dashboard</Text>

// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Visitor Name"
// // // //         placeholderTextColor="#999"
// // // //         value={visitorName}
// // // //         onChangeText={setVisitorName}
// // // //       />
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Email"
// // // //         placeholderTextColor="#999"
// // // //         keyboardType="email-address"
// // // //         value={email}
// // // //         onChangeText={setEmail}
// // // //       />
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Mobile Number"
// // // //         placeholderTextColor="#999"
// // // //         keyboardType="numeric"
// // // //         maxLength={10}
// // // //         value={mobile}
// // // //         onChangeText={setMobile}
// // // //       />
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Address"
// // // //         placeholderTextColor="#999"
// // // //         value={address}
// // // //         onChangeText={setAddress}
// // // //       />
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Purpose"
// // // //         placeholderTextColor="#999"
// // // //         value={purpose}
// // // //         onChangeText={setPurpose}
// // // //       />

// // // //       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// // // //         <Text style={styles.buttonText}>Save Visitor</Text>
// // // //       </TouchableOpacity>

// // // //       <FlatList
// // // //         data={visitors}
// // // //         keyExtractor={(item) => item.id}
// // // //         renderItem={renderVisitor}
// // // //         style={styles.list}
// // // //         ListHeaderComponent={() => (
// // // //           <Text style={styles.sectionTitle}>Today’s Visitors</Text>
// // // //         )}
// // // //         ListEmptyComponent={() => (
// // // //           <Text style={{ color: '#999', textAlign: 'center' }}>No visitors yet.</Text>
// // // //         )}
// // // //       />
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#0D1117',
// // // //     padding: 20,
// // // //   },
// // // //   heading: {
// // // //     fontSize: 26,
// // // //     color: '#F46D5D',
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 20,
// // // //   },
// // // //   input: {
// // // //     borderWidth: 1,
// // // //     borderColor: '#444',
// // // //     borderRadius: 8,
// // // //     padding: 12,
// // // //     marginBottom: 14,
// // // //     color: '#fff',
// // // //   },
// // // //   button: {
// // // //     backgroundColor: '#F46D5D',
// // // //     paddingVertical: 14,
// // // //     borderRadius: 10,
// // // //     alignItems: 'center',
// // // //     marginVertical: 10,
// // // //   },
// // // //   buttonText: {
// // // //     color: '#FFF',
// // // //     fontWeight: 'bold',
// // // //     fontSize: 16,
// // // //   },
// // // //   list: {
// // // //     marginTop: 10,
// // // //   },
// // // //   sectionTitle: {
// // // //     color: '#fff',
// // // //     fontSize: 18,
// // // //     marginBottom: 10,
// // // //   },
// // // //   visitorCard: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     backgroundColor: '#3A3A4A',
// // // //     padding: 12,
// // // //     borderRadius: 8,
// // // //     marginBottom: 10,
// // // //     alignItems: 'center',
// // // //   },
// // // //   visitorName: {
// // // //     color: '#fff',
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   visitorDetails: {
// // // //     color: '#ccc',
// // // //   },
// // // //   icons: {
// // // //     flexDirection: 'row',
// // // //   },
// // // //   icon: {
// // // //     marginLeft: 12,
// // // //     backgroundColor: '#4CAF50',
// // // //     padding: 6,
// // // //     borderRadius: 20,
// // // //   },
// // // // });

// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   TextInput,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   FlatList,
// // //   Alert,
// // // } from 'react-native';
// // // import { Ionicons } from '@expo/vector-icons';
// // // import AsyncStorage from '@react-native-async-storage/async-storage';

// // // export default function DashboardScreen() {
// // //   const [visitorName, setVisitorName] = useState('');
// // //   const [email, setEmail] = useState('');
// // //   const [mobile, setMobile] = useState('');
// // //   const [address, setAddress] = useState('');
// // //   const [purpose, setPurpose] = useState('');
// // //   const [visitors, setVisitors] = useState([]);

// // //   useEffect(() => {
// // //     loadVisitors(); // Load visitors when screen loads
// // //   }, []);

// // //   const validateEmail = (email) =>
// // //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

// // //   const saveVisitorsToStorage = async (data) => {
// // //     try {
// // //       await AsyncStorage.setItem('visitors', JSON.stringify(data));
// // //     } catch (err) {
// // //       console.error('Error saving visitors', err);
// // //     }
// // //   };

// // //   const loadVisitors = async () => {
// // //     try {
// // //       const storedVisitors = await AsyncStorage.getItem('visitors');
// // //       if (storedVisitors) {
// // //         setVisitors(JSON.parse(storedVisitors));
// // //       }
// // //     } catch (err) {
// // //       console.error('Error loading visitors', err);
// // //     }
// // //   };

// // //   const handleSubmit = async () => {
// // //     if (!visitorName || !email || !mobile || !address || !purpose) {
// // //       Alert.alert('Error', 'All fields are required.');
// // //       return;
// // //     }

// // //     if (!validateEmail(email)) {
// // //       Alert.alert('Invalid Email', 'Please enter a valid email address.');
// // //       return;
// // //     }

// // //     if (!/^\d{10}$/.test(mobile)) {
// // //       Alert.alert('Invalid Mobile', 'Mobile number must be 10 digits.');
// // //       return;
// // //     }

// // //     const inTime = new Date().toLocaleTimeString();
// // //     const newVisitor = {
// // //       id: Date.now().toString(),
// // //       visitorName,
// // //       email,
// // //       mobile,
// // //       address,
// // //       purpose,
// // //       inTime,
// // //     };

// // //     const updatedVisitors = [newVisitor, ...visitors];
// // //     setVisitors(updatedVisitors);
// // //     await saveVisitorsToStorage(updatedVisitors);

// // //     Alert.alert('Success', 'Visitor added!');
// // //     setVisitorName('');
// // //     setEmail('');
// // //     setMobile('');
// // //     setAddress('');
// // //     setPurpose('');
// // //   };

// // //   const renderVisitor = ({ item }) => (
// // //     <View style={styles.visitorCard}>
// // //       <View>
// // //         <Text style={styles.visitorName}>{item.visitorName}</Text>
// // //         <Text style={styles.visitorDetails}>{item.mobile}</Text>
// // //       </View>
// // //       <View style={styles.icons}>
// // //         <Ionicons name="eye-outline" size={20} color="white" style={styles.icon} />
// // //         <Ionicons name="call-outline" size={20} color="white" style={styles.icon} />
// // //       </View>
// // //     </View>
// // //   );

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.heading}>Dashboard</Text>

// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Visitor Name"
// // //         placeholderTextColor="#999"
// // //         value={visitorName}
// // //         onChangeText={setVisitorName}
// // //       />
// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Email"
// // //         placeholderTextColor="#999"
// // //         keyboardType="email-address"
// // //         value={email}
// // //         onChangeText={setEmail}
// // //       />
// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Mobile Number"
// // //         placeholderTextColor="#999"
// // //         keyboardType="numeric"
// // //         maxLength={10}
// // //         value={mobile}
// // //         onChangeText={setMobile}
// // //       />
// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Address"
// // //         placeholderTextColor="#999"
// // //         value={address}
// // //         onChangeText={setAddress}
// // //       />
// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Purpose"
// // //         placeholderTextColor="#999"
// // //         value={purpose}
// // //         onChangeText={setPurpose}
// // //       />

// // //       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// // //         <Text style={styles.buttonText}>Save Visitor</Text>
// // //       </TouchableOpacity>

// // //       <FlatList
// // //         data={visitors}
// // //         keyExtractor={(item) => item.id}
// // //         renderItem={renderVisitor}
// // //         ListHeaderComponent={<Text style={styles.sectionTitle}>Today's Visitors</Text>}
// // //         ListEmptyComponent={<Text style={styles.emptyText}>No visitors yet.</Text>}
// // //       />
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#0D1117',
// // //     padding: 20,
// // //   },
// // //   heading: {
// // //     fontSize: 26,
// // //     color: '#F46D5D',
// // //     fontWeight: 'bold',
// // //     marginBottom: 20,
// // //   },
// // //   input: {
// // //     borderWidth: 1,
// // //     borderColor: '#444',
// // //     borderRadius: 8,
// // //     padding: 12,
// // //     marginBottom: 14,
// // //     color: '#fff',
// // //   },
// // //   button: {
// // //     backgroundColor: '#F46D5D',
// // //     paddingVertical: 14,
// // //     borderRadius: 10,
// // //     alignItems: 'center',
// // //     marginVertical: 10,
// // //   },
// // //   buttonText: {
// // //     color: '#FFF',
// // //     fontWeight: 'bold',
// // //     fontSize: 16,
// // //   },
// // //   sectionTitle: {
// // //     color: '#fff',
// // //     fontSize: 18,
// // //     marginBottom: 10,
// // //     marginTop: 20,
// // //   },
// // //   visitorCard: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     backgroundColor: '#3A3A4A',
// // //     padding: 12,
// // //     borderRadius: 8,
// // //     marginBottom: 10,
// // //     alignItems: 'center',
// // //   },
// // //   visitorName: {
// // //     color: '#fff',
// // //     fontWeight: 'bold',
// // //   },
// // //   visitorDetails: {
// // //     color: '#ccc',
// // //   },
// // //   icons: {
// // //     flexDirection: 'row',
// // //   },
// // //   icon: {
// // //     marginLeft: 12,
// // //     backgroundColor: '#4CAF50',
// // //     padding: 6,
// // //     borderRadius: 20,
// // //   },
// // //   emptyText: {
// // //     textAlign: 'center',
// // //     color: '#999',
// // //     marginTop: 10,
// // //   },
// // // });

// // import React, { useState } from 'react';
// // import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// // export default function AddVisitor({ navigation }) {
// //   const [visitor, setVisitor] = useState({
// //     visitorName: '',
// //     phone: '',
// //     email: '',
// //     address: '',
// //     purpose: '',
// //     whomToMeet: '',
// //     vehicleNumber: '',
// //   });

// //   const handleChange = (field, value) => {
// //     setVisitor((prev) => ({ ...prev, [field]: value }));
// //   };

// //   const handleSubmit = () => {
// //     if (!visitor.visitorName.trim()) {
// //       alert('Please enter visitor name');
// //       return;
// //     }
// //     if (!visitor.phone.trim()) {
// //       alert('Please enter phone number');
// //       return;
// //     }
    
// //     navigation.navigate('Dashboard', { newVisitor: visitor });
// //   };

// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       <Text style={styles.title}>Add Visitor</Text>
      
// //       <TextInput
// //         placeholder="Visitor Name"
// //         style={styles.input}
// //         value={visitor.visitorName}
// //         onChangeText={(text) => handleChange('visitorName', text)}
// //       />
      
// //       <TextInput
// //         placeholder="Phone Number"
// //         style={styles.input}
// //         keyboardType="phone-pad"
// //         value={visitor.phone}
// //         onChangeText={(text) => handleChange('phone', text)}
// //       />
      
// //       <TextInput
// //         placeholder="Email"
// //         style={styles.input}
// //         keyboardType="email-address"
// //         value={visitor.email}
// //         onChangeText={(text) => handleChange('email', text)}
// //       />
      
// //       <TextInput
// //         placeholder="Address"
// //         style={styles.input}
// //         value={visitor.address}
// //         onChangeText={(text) => handleChange('address', text)}
// //         multiline
// //       />
      
// //       <TextInput
// //         placeholder="Purpose of Visit"
// //         style={styles.input}
// //         value={visitor.purpose}
// //         onChangeText={(text) => handleChange('purpose', text)}
// //       />
      
// //       <TextInput
// //         placeholder="Whom to Meet"
// //         style={styles.input}
// //         value={visitor.whomToMeet}
// //         onChangeText={(text) => handleChange('whomToMeet', text)}
// //       />
      
// //       <TextInput
// //         placeholder="Vehicle Number"
// //         style={styles.input}
// //         value={visitor.vehicleNumber}
// //         onChangeText={(text) => handleChange('vehicleNumber', text)}
// //       />

// //       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// //         <Text style={styles.buttonText}>Save Visitor</Text>
// //       </TouchableOpacity>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { padding: 20 },
// //   title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
// //   input: {
// //     borderBottomWidth: 1,
// //     borderColor: '#aaa',
// //     marginBottom: 15,
// //     padding: 8,
// //     fontSize: 16,
// //   },
// //   button: {
// //     backgroundColor: '#F46D5D',
// //     padding: 15,
// //     alignItems: 'center',
// //     borderRadius: 10,
// //     marginTop: 20,
// //   },
// //   buttonText: { color: '#fff', fontSize: 16 },
// // });

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
// import { Picker } from '@react-native-picker/picker';

// export default function VisitorFormScreen({ navigation }) {
//   const [gender, setGender] = useState('');
//   const [purpose, setPurpose] = useState('');
//   const [reference, setReference] = useState('');

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Visitor’s Detail</Text>

//       {/* Visitor Name */}
//       <View style={styles.inputBox}>
//         <Ionicons name="person" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput placeholder="Visitor Name" placeholderTextColor="#aaa" style={styles.input} />
//       </View>

//       {/* Phone Number */}
//       <View style={styles.inputBox}>
//         <Ionicons name="call" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput placeholder="Phone number" placeholderTextColor="#aaa" style={styles.input} keyboardType="phone-pad" />
//       </View>

//       {/* Email */}
//       <View style={styles.inputBox}>
//         <MaterialCommunityIcons name="email-outline" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput placeholder="Email" placeholderTextColor="#aaa" style={styles.input} keyboardType="email-address" />
//       </View>

//       {/* Address */}
//       <View style={styles.inputBox}>
//         <Ionicons name="location-outline" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput placeholder="Address" placeholderTextColor="#aaa" style={styles.input} />
//       </View>

//       {/* Gender Picker */}
//       <View style={styles.pickerBox}>
//         <Ionicons name="male-female" size={20} color="#E74C3C" style={styles.icon} />
//         <Picker
//           selectedValue={gender}
//           onValueChange={(itemValue) => setGender(itemValue)}
//           style={styles.picker}
//         >
//           <Picker.Item label="Gender" value="" />
//           <Picker.Item label="Male" value="Male" />
//           <Picker.Item label="Female" value="Female" />
//           <Picker.Item label="Other" value="Other" />
//         </Picker>
//       </View>

//       {/* Purpose Picker */}
//       <View style={styles.pickerBox}>
//         <Ionicons name="calendar" size={20} color="#E74C3C" style={styles.icon} />
//         <Picker
//           selectedValue={purpose}
//           onValueChange={(itemValue) => setPurpose(itemValue)}
//           style={styles.picker}
//         >
//           <Picker.Item label="Purpose" value="" />
//           <Picker.Item label="Meeting" value="Meeting" />
//           <Picker.Item label="Delivery" value="Delivery" />
//           <Picker.Item label="Interview" value="Interview" />
//         </Picker>
//       </View>

//       {/* Description */}
//       <View style={styles.textAreaBox}>
//         <Ionicons name="document-text-outline" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput
//           placeholder="Description"
//           placeholderTextColor="#aaa"
//           style={styles.textArea}
//           multiline
//         />
//       </View>

//       {/* Whom to meet */}
//       <View style={styles.inputBox}>
//         <FontAwesome name="users" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput placeholder="Whom to meet" placeholderTextColor="#aaa" style={styles.input} />
//       </View>

//       {/* ID Proof */}
//       <View style={styles.inputBox}>
//         <MaterialCommunityIcons name="card-account-details-outline" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput placeholder="ID proof (optional)" placeholderTextColor="#aaa" style={styles.input} />
//       </View>

//       {/* Reference By */}
//       <View style={styles.pickerBox}>
//         <MaterialCommunityIcons name="account-search-outline" size={20} color="#E74C3C" style={styles.icon} />
//         <Picker
//           selectedValue={reference}
//           onValueChange={(itemValue) => setReference(itemValue)}
//           style={styles.picker}
//         >
//           <Picker.Item label="Reference by (optional)" value="" />
//           <Picker.Item label="Manager" value="Manager" />
//           <Picker.Item label="HR" value="HR" />
//           <Picker.Item label="Employee" value="Employee" />
//         </Picker>
//       </View>

//       {/* Photo + Remark (you can add actual image picker later) */}
//       <View style={styles.rowButtons}>
//         <TouchableOpacity style={styles.buttonOutline}>
//           <Ionicons name="camera" size={20} color="#fff" />
//           <Text style={styles.buttonText}>Photo</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.buttonOutline}>
//           <Ionicons name="create-outline" size={20} color="#fff" />
//           <Text style={styles.buttonText}>Remark (optional)</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.actionRow}>
//         <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
//           <Text style={styles.actionText}>Cancel</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.saveButton}>
//           <Text style={styles.actionText}>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0D0D1A',
//     padding: 20,
//   },
//   title: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   inputBox: {
//     flexDirection: 'row',
//     backgroundColor: '#1E1E2C',
//     borderRadius: 8,
//     padding: 10,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   input: {
//     color: '#fff',
//     marginLeft: 10,
//     flex: 1,
//   },
//   icon: {
//     marginLeft: 4,
//   },
//   pickerBox: {
//     flexDirection: 'row',
//     backgroundColor: '#1E1E2C',
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   picker: {
//     flex: 1,
//     color: '#fff',
//   },
//   textAreaBox: {
//     flexDirection: 'row',
//     backgroundColor: '#1E1E2C',
//     borderRadius: 8,
//     padding: 10,
//     alignItems: 'flex-start',
//     marginBottom: 10,
//   },
//   textArea: {
//     color: '#fff',
//     marginLeft: 10,
//     flex: 1,
//     height: 80,
//     textAlignVertical: 'top',
//   },
//   rowButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   buttonOutline: {
//     flexDirection: 'row',
//     backgroundColor: '#1E1E2C',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     flex: 1,
//     marginRight: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     marginLeft: 8,
//   },
//   actionRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 30,
//   },
//   cancelButton: {
//     backgroundColor: '#1E1E2C',
//     paddingVertical: 14,
//     paddingHorizontal: 28,
//     borderRadius: 8,
//   },
//   saveButton: {
//     backgroundColor: '#E74C3C',
//     paddingVertical: 14,
//     paddingHorizontal: 28,
//     borderRadius: 8,
//   },
//   actionText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const AdminDashboard = ({ navigation }) => {
//   // Sample visitor data
//   const visitors = [
//     { id: '1', name: 'Suresh Khanna' },
//     { id: '2', name: 'Preeti Ahuja' },
//     { id: '3', name: 'Arav Sharma' },
//     { id: '4', name: 'Priya Patel' },
//   ];

//   const renderVisitorItem = ({ item }) => (
//     <View style={styles.visitorItem}>
//       <Text style={styles.visitorName}>{item.name}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>Hello, Suraj</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
//         <TextInput
//           placeholder="Search"
//           placeholderTextColor="#aaa"
//           style={styles.searchInput}
//         />
//       </View>

//       {/* Today's Visitors */}
//       <Text style={styles.sectionTitle}>Today</Text>
      
//       {/* Visitors List */}
//       <FlatList
//         data={visitors}
//         renderItem={renderVisitorItem}
//         keyExtractor={(item) => item.id}
//         style={styles.visitorList}
//       />

//       {/* Add Button */}
//       <TouchableOpacity 
//         style={styles.addButton}
//         onPress={() => navigation.navigate('VisitorForm')}
//       >
//         <Text style={styles.addButtonText}>+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0D0D1A',
//     padding: 16,
//   },
//   header: {
//     marginTop: 40,
//     marginBottom: 20,
//   },
//   greeting: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#1E1E2C',
//     borderRadius: 8,
//     padding: 10,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     color: '#fff',
//     flex: 1,
//   },
//   sectionTitle: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   visitorList: {
//     marginBottom: 20,
//   },
//   visitorItem: {
//     backgroundColor: '#1E1E2C',
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 8,
//   },
//   visitorName: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   addButton: {
//     position: 'absolute',
//     right: 20,
//     bottom: 20,
//     backgroundColor: '#F46D5D',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontSize: 30,
//     lineHeight: 30,
//   },
// });

// export default AdminDashboard;

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import HeaderBar from '../../components/HeaderBar';

// // import CustomButton from '../../components/CustomButton';
// // import VisitorCard from '../../components/VisitorCard';
// // import colors from '../../constants/colors';

// const AdminDashboard = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//       <HeaderBar title="Admin Dashboard" />

//       <View style={styles.summaryBox}>
//         <Text style={styles.summaryText}>Welcome, Admin 👋</Text>
//         <Text style={styles.subText}>Here is your daily visitor summary</Text>
//       </View>

//       <CustomButton
//         title="Add New Visitor"
//         onPress={() => navigation.navigate('VisitorForm')}
//         style={{ marginBottom: 20 }}
//       />

//       <Text style={styles.sectionTitle}>Recent Visitors</Text>
//       {/* You can map through data here */}
//       <VisitorCard name="John Doe" purpose="Meeting" time="10:30 AM" />
//       <VisitorCard name="Jane Smith" purpose="Delivery" time="11:45 AM" />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//     padding: 16,
//   },
//   summaryBox: {
//     marginBottom: 20,
//   },
//   summaryText: {
//     fontSize: 22,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   subText: {
//     color: '#bbb',
//     marginTop: 4,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 10,
//   },
// });

// export default AdminDashboard;

// screens/Admin/AdminDashboard.js
import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import HeaderBar from '../../components/HeaderBar';
// import VisitorCard from '../../components/VisitorCard';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../constants/colors'; 
// Correct import at the top of your file
import VisitorCard from '../../components/VisiterCard';


export default function AdminDashboard({ navigation }) {
  const visitors = [
    'Suresh Khanna',
    'Preeti Ahuja',
    'Arav Sharma',
    'Priya Patel',
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <HeaderBar userName="Suraj" />

      <ScrollView style={styles.container}>
        <Text style={styles.label}>Today</Text>
        {visitors.map((name, index) => (
          <VisitorCard
            key={index}
            name={name}
            onView={() => {}}
            onCall={() => {}}
          />
        ))}
      </ScrollView>

      <TouchableOpacity 
  style={styles.addButton}
  onPress={() => navigation.navigate('VisitorForm')}
>
  <Ionicons name="add" size={30} color="#fff" />
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    color: colors.text,
    fontSize: 16,
    marginBottom: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#fff',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
