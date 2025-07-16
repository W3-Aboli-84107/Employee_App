// // // import React, { useCallback, useState, useEffect } from 'react';
// // // import {
// // //   View,
// // //   ScrollView,
// // //   StyleSheet,
// // //   Text,
// // //   TouchableOpacity,
// // //   Linking,
// // // } from 'react-native';
// // // import { Ionicons } from '@expo/vector-icons';
// // // import { useRoute, useFocusEffect } from '@react-navigation/native';
// // // import AsyncStorage from '@react-native-async-storage/async-storage';

// // // import HeaderBar from '../../components/HeaderBar';
// // // import VisitorCard from '../../components/VisiterCard';
// // // import colors from '../../constants/colors';

// // // export default function AdminDashboard({ navigation }) {
// // //   const route = useRoute();
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [visitors, setVisitors] = useState([]);
// // //   const [filteredVisitors, setFilteredVisitors] = useState([]);

// // //   // Load all visitors once on mount (only if needed for backup)
// // //   useEffect(() => {
// // //     const loadVisitors = async () => {
// // //       const storedVisitors = await AsyncStorage.getItem('visitors');
// // //       if (storedVisitors) {
// // //         const parsed = JSON.parse(storedVisitors);
// // //         setVisitors(parsed);
// // //       }
// // //     };
// // //     loadVisitors();
// // //   }, []);

// // //   // Refresh today's visitors on focus
// // //   useFocusEffect(
// // //     useCallback(() => {
// // //       const fetchVisitors = async () => {
// // //         const storedVisitors = await AsyncStorage.getItem('visitors');
// // //         if (storedVisitors) {
// // //           const parsed = JSON.parse(storedVisitors);

// // //           // Filter only today's visitors
// // //           const today = new Date();
// // //           today.setHours(0, 0, 0, 0);

// // //           const todayVisitors = parsed.filter((visitor) => {
// // //             const checkInDate = new Date(visitor.checkInTime);
// // //             checkInDate.setHours(0, 0, 0, 0);
// // //             return checkInDate.getTime() === today.getTime();
// // //           });

// // //           setVisitors(
// // //             todayVisitors.sort(
// // //               (a, b) => new Date(b.checkInTime) - new Date(a.checkInTime)
// // //             )
// // //           );
// // //         }
// // //       };
// // //       fetchVisitors();
// // //     }, [])
// // //   );

// // //   // Save and update filtered list
// // //   useEffect(() => {
// // //     AsyncStorage.setItem('visitors', JSON.stringify(visitors));
// // //     setFilteredVisitors(visitors);
// // //   }, [visitors]);

// // //   // Search filter
// // //   useEffect(() => {
// // //     if (searchQuery.trim() === '') {
// // //       setFilteredVisitors(visitors);
// // //     } else {
// // //       const filtered = visitors.filter((v) =>
// // //         v.name.toLowerCase().includes(searchQuery.toLowerCase())
// // //       );
// // //       setFilteredVisitors(filtered);
// // //     }
// // //   }, [searchQuery, visitors]);

// // //   // Handle checkout
// // //   const handleCheckOut = (id) => {
// // //     const updatedVisitors = visitors.map((visitor) =>
// // //       visitor.id === id
// // //         ? { ...visitor, outTime: new Date().toISOString() }
// // //         : visitor
// // //     );
// // //     setVisitors(updatedVisitors);
// // //   };

// // //   // Handle new visitor from route
// // //   useEffect(() => {
// // //     if (route.params?.newVisitor) {
// // //       const newVisitor = {
// // //         ...route.params.newVisitor,
// // //         id: Date.now().toString(),
// // //         checkInTime:
// // //           route.params.newVisitor.checkInTime || new Date().toISOString(),
// // //       };
// // //       const today = new Date();
// // //       today.setHours(0, 0, 0, 0);

// // //       const checkInDate = new Date(newVisitor.checkInTime);
// // //       checkInDate.setHours(0, 0, 0, 0);

// // //       if (checkInDate.getTime() === today.getTime()) {
// // //         setVisitors((prev) => [newVisitor, ...prev]);
// // //       }

// // //       navigation.setParams({ newVisitor: null });
// // //     }
// // //   }, [route.params?.newVisitor]);

// // //   // Call visitor
// // //   const handleCallVisitor = (phone) => {
// // //     if (phone) {
// // //       Linking.openURL(`tel:${phone}`).catch((err) =>
// // //         console.error('Failed to open dialer:', err)
// // //       );
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.screen}>
// // //       <HeaderBar onSearch={setSearchQuery} />

// // //       <ScrollView contentContainerStyle={styles.container}>
// // //         <Text style={styles.label}>Today's Visitors</Text>

// // //         {filteredVisitors.map((visitor, index) => (
// // //           <VisitorCard
// // //             key={visitor.id || index}
// // //             name={visitor.name}
// // //             date={
// // //               visitor.outTime
// // //                 ? `Checked out at ${new Date(visitor.outTime).toLocaleTimeString([], {
// // //                     hour: '2-digit',
// // //                     minute: '2-digit',
// // //                   })}`
// // //                 : `Checked in at ${new Date(visitor.checkInTime).toLocaleTimeString([], {
// // //                     hour: '2-digit',
// // //                     minute: '2-digit',
// // //                   })}`
// // //             }
// // //             onCall={() => handleCallVisitor(visitor.phone)}
// // //             onCheckOut={
// // //               !visitor.outTime ? () => handleCheckOut(visitor.id) : null
// // //             }
// // //             onPress={() =>
// // //               navigation.navigate('VisitorDetails', {
// // //                 visitor,
// // //               })
// // //             }
// // //           />
// // //         ))}

// // //         {filteredVisitors.length === 0 && (
// // //           <Text style={styles.noVisitorsText}>No visitors found</Text>
// // //         )}
// // //       </ScrollView>

// // //       <TouchableOpacity
// // //         style={styles.fab}
// // //         onPress={() =>
// // //           navigation.navigate('VisitorForm', {
// // //             onSave: (newVisitor) => {
// // //               const newVisitorWithId = {
// // //                 ...newVisitor,
// // //                 id: Date.now().toString(),
// // //                 checkInTime:
// // //                   newVisitor.checkInTime || new Date().toISOString(),
// // //               };

// // //               const today = new Date();
// // //               today.setHours(0, 0, 0, 0);
// // //               const checkInDate = new Date(newVisitorWithId.checkInTime);
// // //               checkInDate.setHours(0, 0, 0, 0);

// // //               if (checkInDate.getTime() === today.getTime()) {
// // //                 setVisitors((prev) => [newVisitorWithId, ...prev]);
// // //               }
// // //             },
// // //           })
// // //         }
// // //       >
// // //         <Ionicons name="add" size={30} color="#fff" />
// // //       </TouchableOpacity>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   screen: {
// // //     flex: 1,
// // //     backgroundColor: colors.background,
// // //   },
// // //   container: {
// // //     padding: 16,
// // //     paddingBottom: 100,
// // //   },
// // //   label: {
// // //     color: colors.text,
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     marginBottom: 16,
// // //   },
// // //   noVisitorsText: {
// // //     color: colors.textSecondary,
// // //     textAlign: 'center',
// // //     marginTop: 20,
// // //     fontSize: 16,
// // //   },
// // //   fab: {
// // //     position: 'absolute',
// // //     bottom: 50,
// // //     alignSelf: 'center',
// // //     backgroundColor: colors.primary,
// // //     borderRadius: 30,
// // //     width: 60,
// // //     height: 60,
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     elevation: 5,
// // //   },
// // // });


// // import React, { useCallback, useState, useEffect } from 'react';
// // import {
// //   View,
// //   ScrollView,
// //   StyleSheet,
// //   Text,
// //   TouchableOpacity,
// //   Linking,
// //   Platform
// // } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';
// // import { useRoute, useFocusEffect } from '@react-navigation/native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import DateTimePickerModal from 'react-native-modal-datetime-picker';

// // import HeaderBar from '../../components/HeaderBar';
// // import VisitorCard from '../../components/VisiterCard';
// // import colors from '../../constants/colors';

// // export default function AdminDashboard({ navigation }) {
// //   const route = useRoute();
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [visitors, setVisitors] = useState([]);
// //   const [filteredVisitors, setFilteredVisitors] = useState([]);
// //   const [selectedDate, setSelectedDate] = useState(new Date());
// //   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

// //   useFocusEffect(
// //     useCallback(() => {
// //       const fetchVisitors = async () => {
// //         const storedVisitors = await AsyncStorage.getItem('visitors');
// //         if (storedVisitors) {
// //           const parsed = JSON.parse(storedVisitors);

// //           const selected = new Date(selectedDate);
// //           selected.setHours(0, 0, 0, 0);

// //           const matchedVisitors = parsed.filter((visitor) => {
// //             const checkIn = new Date(visitor.checkInTime);
// //             checkIn.setHours(0, 0, 0, 0);
// //             return checkIn.getTime() === selected.getTime();
// //           });

// //           setVisitors(
// //             matchedVisitors.sort(
// //               (a, b) => new Date(b.checkInTime) - new Date(a.checkInTime)
// //             )
// //           );
// //         }
// //       };
// //       fetchVisitors();
// //     }, [selectedDate])
// //   );

// //   useEffect(() => {
// //     AsyncStorage.setItem('visitors', JSON.stringify(visitors));
// //     setFilteredVisitors(visitors);
// //   }, [visitors]);

// //   useEffect(() => {
// //     if (searchQuery.trim() === '') {
// //       setFilteredVisitors(visitors);
// //     } else {
// //       const filtered = visitors.filter((v) =>
// //         v.name.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //       setFilteredVisitors(filtered);
// //     }
// //   }, [searchQuery, visitors]);

// //   const handleCheckOut = (id) => {
// //     const updatedVisitors = visitors.map((visitor) =>
// //       visitor.id === id
// //         ? { ...visitor, outTime: new Date().toISOString() }
// //         : visitor
// //     );
// //     setVisitors(updatedVisitors);
// //   };

// //   useEffect(() => {
// //     if (route.params?.newVisitor) {
// //       const newVisitor = {
// //         ...route.params.newVisitor,
// //         id: Date.now().toString(),
// //         checkInTime:
// //           route.params.newVisitor.checkInTime || new Date().toISOString(),
// //       };
// //       const selected = new Date(selectedDate);
// //       selected.setHours(0, 0, 0, 0);

// //       const checkInDate = new Date(newVisitor.checkInTime);
// //       checkInDate.setHours(0, 0, 0, 0);

// //       if (checkInDate.getTime() === selected.getTime()) {
// //         setVisitors((prev) => [newVisitor, ...prev]);
// //       }

// //       navigation.setParams({ newVisitor: null });
// //     }
// //   }, [route.params?.newVisitor, selectedDate]);

// //   const handleCallVisitor = (phone) => {
// //     if (phone) {
// //       Linking.openURL(`tel:${phone}`).catch((err) =>
// //         console.error('Failed to open dialer:', err)
// //       );
// //     }
// //   };

// //   const showDatePicker = () => setDatePickerVisibility(true);
// //   const hideDatePicker = () => setDatePickerVisibility(false);
// //   const handleDateConfirm = (date) => {
// //     setSelectedDate(date);
// //     hideDatePicker();
// //   };

// //   return (
// //     <View style={styles.screen}>
// //       <View style={styles.header}>
// //         <Text style={styles.greetingText}>Hello, <Text style={styles.bold}>Suraj</Text></Text>
// //         <View style={styles.headerRight}>
// //           <TouchableOpacity onPress={showDatePicker}>
// //             <Ionicons name="calendar-outline" size={24} color="#fff" style={{ marginRight: 12 }} />
// //           </TouchableOpacity>
          
// //         </View>
// //       </View>

// //       <HeaderBar onSearch={setSearchQuery} />

// //       <ScrollView contentContainerStyle={styles.container}>
// //         <Text style={styles.label}>Visitors on {selectedDate.toDateString()}</Text>

// //         {filteredVisitors.map((visitor, index) => (
// //           <VisitorCard
// //             key={visitor.id || index}
// //             name={visitor.name}
// //             date={
// //               visitor.outTime
// //                 ? `Checked out at ${new Date(visitor.outTime).toLocaleTimeString([], {
// //                     hour: '2-digit',
// //                     minute: '2-digit',
// //                   })}`
// //                 : `Checked in at ${new Date(visitor.checkInTime).toLocaleTimeString([], {
// //                     hour: '2-digit',
// //                     minute: '2-digit',
// //                   })}`
// //             }
// //             onCall={() => handleCallVisitor(visitor.phone)}
// //             onCheckOut={
// //               !visitor.outTime ? () => handleCheckOut(visitor.id) : null
// //             }
// //             onPress={() =>
// //               navigation.navigate('VisitorDetails', {
// //                 visitor,
// //               })
// //             }
// //           />
// //         ))}

// //         {filteredVisitors.length === 0 && (
// //           <Text style={styles.noVisitorsText}>No visitors found</Text>
// //         )}
// //       </ScrollView>

// //       <TouchableOpacity
// //         style={styles.fab}
// //         onPress={() =>
// //           navigation.navigate('VisitorForm', {
// //             onSave: (newVisitor) => {
// //               const newVisitorWithId = {
// //                 ...newVisitor,
// //                 id: Date.now().toString(),
// //                 checkInTime:
// //                   newVisitor.checkInTime || new Date().toISOString(),
// //               };

// //               const selected = new Date(selectedDate);
// //               selected.setHours(0, 0, 0, 0);
// //               const checkInDate = new Date(newVisitorWithId.checkInTime);
// //               checkInDate.setHours(0, 0, 0, 0);

// //               if (checkInDate.getTime() === selected.getTime()) {
// //                 setVisitors((prev) => [newVisitorWithId, ...prev]);
// //               }
// //             },
// //           })
// //         }
// //       >
// //         <Ionicons name="add" size={30} color="#fff" />
// //       </TouchableOpacity>

// //       <DateTimePickerModal
// //         isVisible={isDatePickerVisible}
// //         mode="date"
// //         date={selectedDate}
// //         onConfirm={handleDateConfirm}
// //         onCancel={hideDatePicker}
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   screen: {
// //     flex: 1,
// //     backgroundColor: colors.background,
// //   },
// //   container: {
// //     padding: 16,
// //     paddingBottom: 100,
// //   },
// //   label: {
// //     color: colors.text,
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 16,
// //   },
// //   noVisitorsText: {
// //     color: colors.textSecondary,
// //     textAlign: 'center',
// //     marginTop: 20,
// //     fontSize: 16,
// //   },
// //   fab: {
// //     position: 'absolute',
// //     bottom: 50,
// //     alignSelf: 'center',
// //     backgroundColor: colors.primary,
// //     borderRadius: 30,
// //     width: 60,
// //     height: 60,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     elevation: 5,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: 16,
// //     backgroundColor: colors.primary,
// //     paddingTop: Platform.OS === 'ios' ? 60 : 40,
// //   },
// //   greetingText: {
// //     fontSize: 18,
// //     color: '#fff',
// //   },
// //   bold: {
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// // });


// import React, { useCallback, useState, useEffect } from 'react';
// import {
//   View,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Linking,
//   Platform,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRoute, useFocusEffect } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// import HeaderBar from '../../components/HeaderBar';
// import VisitorCard from '../../components/VisiterCard';
// import colors from '../../constants/colors';

// export default function AdminDashboard({ navigation }) {
//   const route = useRoute();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [visitors, setVisitors] = useState([]);
//   const [filteredVisitors, setFilteredVisitors] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   useFocusEffect(
//     useCallback(() => {
//       const fetchVisitors = async () => {
//         const storedVisitors = await AsyncStorage.getItem('visitors');
//         if (storedVisitors) {
//           const parsed = JSON.parse(storedVisitors);
//           const selected = new Date(selectedDate);
//           selected.setHours(0, 0, 0, 0);

//           const matchedVisitors = parsed.filter((visitor) => {
//             const checkIn = new Date(visitor.checkInTime);
//             checkIn.setHours(0, 0, 0, 0);
//             return checkIn.getTime() === selected.getTime();
//           });

//           setVisitors(
//             matchedVisitors.sort(
//               (a, b) => new Date(b.checkInTime) - new Date(a.checkInTime)
//             )
//           );
//         }
//       };
//       fetchVisitors();
//     }, [selectedDate])
//   );

  
//   useEffect(() => {
//     AsyncStorage.setItem('visitors', JSON.stringify(visitors));
//     setFilteredVisitors(visitors);
//   }, [visitors]);

//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setFilteredVisitors(visitors);
//     } else {
//       const filtered = visitors.filter((v) =>
//         v.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredVisitors(filtered);
//     }
//   }, [searchQuery, visitors]);

//   const handleCheckOut = (id) => {
//     const updatedVisitors = visitors.map((visitor) =>
//       visitor.id === id
//         ? { ...visitor, outTime: new Date().toISOString() }
//         : visitor
//     );
//     setVisitors(updatedVisitors);
//   };

//   useEffect(() => {
//     if (route.params?.newVisitor) {
//       const newVisitor = {
//         ...route.params.newVisitor,
//         id: Date.now().toString(),
//         checkInTime:
//           route.params.newVisitor.checkInTime || new Date().toISOString(),
//       };
//       const selected = new Date(selectedDate);
//       selected.setHours(0, 0, 0, 0);

//       const checkInDate = new Date(newVisitor.checkInTime);
//       checkInDate.setHours(0, 0, 0, 0);

//       if (checkInDate.getTime() === selected.getTime()) {
//         setVisitors((prev) => [newVisitor, ...prev]);
//       }

//       navigation.setParams({ newVisitor: null });
//     }
//   }, [route.params?.newVisitor, selectedDate]);

//   const handleCallVisitor = (phone) => {
//     if (phone) {
//       Linking.openURL(`tel:${phone}`).catch((err) =>
//         console.error('Failed to open dialer:', err)
//       );
//     }
//   };

//   const showDatePicker = () => setDatePickerVisibility(true);
//   const hideDatePicker = () => setDatePickerVisibility(false);
//   const handleDateConfirm = (date) => {
//     setSelectedDate(date);
//     hideDatePicker();
//   };

//   return (
//     <View style={styles.screen}>
//       <HeaderBar onSearch={setSearchQuery} onCalendarPress={showDatePicker} />

//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.label}>Visitors on {selectedDate.toDateString()}</Text>

//         {filteredVisitors.map((visitor, index) => (
//           <VisitorCard
//             key={visitor.id || index}
//             name={visitor.name}
//             date={
//               visitor.outTime
//                 ? `Checked out at ${new Date(visitor.outTime).toLocaleTimeString([], {
//                     hour: '2-digit',
//                     minute: '2-digit',
//                   })}`
//                 : `Checked in at ${new Date(visitor.checkInTime).toLocaleTimeString([], {
//                     hour: '2-digit',
//                     minute: '2-digit',
//                   })}`
//             }
//             onCall={() => handleCallVisitor(visitor.phone)}
//             onCheckOut={
//               !visitor.outTime ? () => handleCheckOut(visitor.id) : null
//             }
//             onPress={() =>
//               navigation.navigate('VisitorDetails', { visitor })
//             }
//           />
//         ))}

//         {filteredVisitors.length === 0 && (
//           <Text style={styles.noVisitorsText}>No visitors found</Text>
//         )}
//       </ScrollView>

//       <TouchableOpacity
//         style={styles.fab}
//         onPress={() =>
//           navigation.navigate('VisitorForm', {
//             onSave: (newVisitor) => {
//               const newVisitorWithId = {
//                 ...newVisitor,
//                 id: Date.now().toString(),
//                 checkInTime:
//                   newVisitor.checkInTime || new Date().toISOString(),
//               };

//               const selected = new Date(selectedDate);
//               selected.setHours(0, 0, 0, 0);
//               const checkInDate = new Date(newVisitorWithId.checkInTime);
//               checkInDate.setHours(0, 0, 0, 0);

//               if (checkInDate.getTime() === selected.getTime()) {
//                 setVisitors((prev) => [newVisitorWithId, ...prev]);
//               }
//             },
//           })
//         }
//       >
//         <Ionicons name="add" size={30} color="#fff" />
//       </TouchableOpacity>

//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         date={selectedDate}
//         onConfirm={handleDateConfirm}
//         onCancel={hideDatePicker}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   container: {
//     padding: 16,
//     paddingBottom: 100,
//   },
//   label: {
//     color: colors.text,
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   noVisitorsText: {
//     color: colors.textSecondary,
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 16,
//   },
//   fab: {
//     position: 'absolute',
//     bottom: 50,
//     alignSelf: 'center',
//     backgroundColor: colors.primary,
//     borderRadius: 30,
//     width: 60,
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 5,
//   },
// });


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

export default function VisitorFormScreen({ navigation }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    gender: '',
    purpose: '',
    description: '',
    whomToMeet: '',
    idProof: '',
    reference: '',
  });
  const [photo, setPhoto] = useState(null);
  const [remark, setRemark] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Camera access is needed to take photos');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.whomToMeet) {
      Alert.alert('Missing Information', 'Please fill in all required fields');
      return;
    }

    if (!/^\d{10,15}$/.test(formData.phone)) {
      Alert.alert('Invalid Phone', 'Please enter a valid 10-15 digit phone number');
      return;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    const visitorData = {
      ...formData,
      photo,
      remark,
      checkInTime: new Date().toISOString(),
    };

    console.log('Visitor data:', visitorData);
    Alert.alert('Success', 'Visitor information saved successfully');
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Visitor's Detail</Text>
      </View>

      {/* Visitor Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Visitor Information</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Visitor Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter visitor name"
            placeholderTextColor="#aaa"
            value={formData.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
            value={formData.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter address"
            placeholderTextColor="#aaa"
            value={formData.address}
            onChangeText={(text) => handleInputChange('address', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Gender</Text>
          <Picker
            selectedValue={formData.gender}
            onValueChange={(value) => handleInputChange('gender', value)}
            style={styles.picker}
            dropdownIconColor="#F46D5D"
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Purpose</Text>
          <Picker
            selectedValue={formData.purpose}
            onValueChange={(value) => handleInputChange('purpose', value)}
            style={styles.picker}
            dropdownIconColor="#F46D5D"
          >
            <Picker.Item label="Select Purpose" value="" />
            <Picker.Item label="Meeting" value="meeting" />
            <Picker.Item label="Delivery" value="delivery" />
            <Picker.Item label="Interview" value="interview" />
          </Picker>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Description</Text>
          <TextInput
            style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
            placeholder="Enter description"
            placeholderTextColor="#aaa"
            multiline
            value={formData.description}
            onChangeText={(text) => handleInputChange('description', text)}
          />
        </View>
      </View>

      {/* Meeting Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Meeting Information</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Whom to meet</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter person name"
            placeholderTextColor="#aaa"
            value={formData.whomToMeet}
            onChangeText={(text) => handleInputChange('whomToMeet', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>ID proof (optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter ID proof details"
            placeholderTextColor="#aaa"
            value={formData.idProof}
            onChangeText={(text) => handleInputChange('idProof', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Reference by (optional)</Text>
          <Picker
            selectedValue={formData.reference}
            onValueChange={(value) => handleInputChange('reference', value)}
            style={styles.picker}
            dropdownIconColor="#F46D5D"
          >
            <Picker.Item label="Select Reference" value="" />
            <Picker.Item label="Manager" value="manager" />
            <Picker.Item label="HR" value="hr" />
            <Picker.Item label="Employee" value="employee" />
          </Picker>
        </View>
      </View>

      {/* Photo & Remark Section */}
      <View style={styles.section}>
        <View style={styles.rowButtons}>
          <TouchableOpacity 
            style={styles.photoButton} 
            onPress={handleTakePhoto}
          >
            <Ionicons name="camera" size={20} color="#fff" />
            <Text style={styles.buttonText}>Photo</Text>
            {photo && <View style={styles.photoIndicator} />}
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.remarkButton}
            onPress={() => navigation.navigate('Remark', { remark, setRemark })}
          >
            <Ionicons name="create-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>Remark (optional)</Text>
          </TouchableOpacity>
        </View>

        {photo && (
          <Image 
            source={{ uri: photo }} 
            style={styles.photoPreview} 
          />
        )}
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSubmit}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 16,
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#161B22',
    borderRadius: 10,
    padding: 16,
  },
  sectionHeader: {
    color: '#F46D5D',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#2C2C3A',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
  },
  picker: {
    backgroundColor: '#2C2C3A',
    color: '#fff',
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photoButton: {
    flexDirection: 'row',
    backgroundColor: '#F46D5D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  remarkButton: {
    flexDirection: 'row',
    backgroundColor: '#30363D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 8,
  },
  photoIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34C759',
    marginLeft: 8,
  },
  photoPreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginTop: 12,
    alignSelf: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#F46D5D',
    padding: 16,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#F46D5D',
    padding: 16,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#F46D5D',
    fontWeight: 'bold',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});