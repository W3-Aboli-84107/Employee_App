import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Platform,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DashboardScreen({ navigation }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [visitors, setVisitors] = useState([]);
  const [newVisitor, setNewVisitor] = useState('');

  const handleCalendarPress = () => {
    setShowCalendar(true);
  };

  const onDateChange = (event, date) => {
    if (Platform.OS === 'android') {
      setShowCalendar(false);
    }
    if (date) setSelectedDate(date);
  };

  const handleLogout = () => navigation.replace('Login');

  const addVisitor = () => {
    if (!newVisitor.trim()) {
      Alert.alert('Error', 'Please enter a visitor name.');
      return;
    }
    const newEntry = {
      id: Date.now().toString(),
      name: newVisitor.trim(),
    };
    setVisitors([newEntry, ...visitors]);
    setNewVisitor('');
  };

  const renderVisitor = ({ item }) => (
    <View style={styles.visitorCard}>
      <Text style={styles.visitorName}>{item.name}</Text>
      <View style={styles.visitorIcons}>
        {/* Eye icon removed */}
        <Ionicons name="call-outline" size={20} color="white" style={styles.visitorIcon} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Hello, <Text style={styles.bold}>Suraj</Text>
        </Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={handleCalendarPress} style={styles.iconWrapper}>
            <Ionicons name="calendar-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.iconWrapper}>
            <Ionicons name="log-out-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Show Calendar */}
      {showCalendar && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onDateChange}
        />
      )}

      {/* Add Visitor Input */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Enter visitor name"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
          value={newVisitor}
          onChangeText={setNewVisitor}
        />
        <TouchableOpacity onPress={addVisitor} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Visitor List */}
      <View style={styles.visitorListContainer}>
        <Text style={styles.sectionTitle}>Today's Visitors</Text>
        <FlatList
          data={visitors}
          keyExtractor={(item) => item.id}
          renderItem={renderVisitor}
          ListEmptyComponent={<Text style={{ color: '#ccc' }}>No visitors yet.</Text>}
        />
      </View>

      {/* Floating Action Button */}
      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate('VisitorFormScreen')}
        >
          <View style={styles.fabCircle}>
            <Text style={styles.fabText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2C',
    paddingTop: 50,
  },
  header: {
    backgroundColor: '#C0392B',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: { color: '#fff', fontSize: 20 },
  bold: { fontWeight: 'bold' },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  iconWrapper: { marginLeft: 16, padding: 6 },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    gap: 8,
  },
  searchInput: {
    backgroundColor: '#2C2C3A',
    borderRadius: 8,
    padding: 10,
    color: '#fff',
    flex: 1,
  },
  addButton: {
    backgroundColor: '#F46D5D',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  visitorListContainer: {
    flex: 1,
    backgroundColor: '#2C2C3A',
    marginHorizontal: 12,
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  sectionTitle: { color: '#fff', fontSize: 16, marginBottom: 12 },
  visitorCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3A3A4A',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  visitorName: { color: '#fff', fontSize: 16 },
  visitorIcons: { flexDirection: 'row' },
  visitorIcon: {
    marginLeft: 12,
    backgroundColor: '#4CAF50',
    padding: 6,
    borderRadius: 20,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fabCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#C0392B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '300',
    marginTop: -2,
  },
});



// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TextInput,
// //   TouchableOpacity,
// //   FlatList,
// //   Platform,
// //   Alert,
// // } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';
// // import DateTimePicker from '@react-native-community/datetimepicker';

// // export default function DashboardScreen({ navigation }) {
// //   const [showCalendar, setShowCalendar] = useState(false);
// //   const [selectedDate, setSelectedDate] = useState(new Date());
// //   const [visitors, setVisitors] = useState([]); // empty initially
// //   const [newVisitor, setNewVisitor] = useState(''); //  input state

// //   const handleCalendarPress = () => setShowCalendar(true);

// //   const onDateChange = (event, date) => {
// //     setShowCalendar(Platform.OS === 'ios');
// //     if (date) setSelectedDate(date);
// //   };

// //   const handleLogout = () => navigation.replace('Login');

// //   const addVisitor = () => {
// //     if (!newVisitor.trim()) {
// //       Alert.alert('Error', 'Please enter a visitor name.');
// //       return;
// //     }
// //     const newEntry = {
// //       id: Date.now().toString(),
// //       name: newVisitor.trim(),
// //     };
// //     setVisitors([newEntry, ...visitors]);
// //     setNewVisitor('');
// //   };

// //   const renderVisitor = ({ item }) => (
// //     <View style={styles.visitorCard}>
// //       <Text style={styles.visitorName}>{item.name}</Text>
// //       <View style={styles.visitorIcons}>
// //         <Ionicons name="eye-outline" size={20} color="white" style={styles.visitorIcon} />
// //         <Ionicons name="call-outline" size={20} color="white" style={styles.visitorIcon} />
// //       </View>
// //     </View>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <Text style={styles.greeting}>
// //           Hello, <Text style={styles.bold}>Suraj</Text>
// //         </Text>
// //         <View style={styles.headerIcons}>
// //           <TouchableOpacity onPress={handleCalendarPress} style={styles.iconWrapper}>
// //             <Ionicons name="calendar-outline" size={24} color="#fff" />
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={handleLogout} style={styles.iconWrapper}>
// //             <Ionicons name="log-out-outline" size={24} color="#fff" />
// //           </TouchableOpacity>
// //         </View>
// //       </View>

// //       {showCalendar && (
// //         <DateTimePicker
// //           value={selectedDate}
// //           mode="date"
// //           display="default"
// //           onChange={onDateChange}
// //         />
// //       )}

// //       {/* Add Visitor Input */}
// //       <View style={styles.searchContainer}>
// //         <TextInput
// //           placeholder="Enter visitor name"
// //           placeholderTextColor="#aaa"
// //           style={styles.searchInput}
// //           value={newVisitor}
// //           onChangeText={setNewVisitor}
// //         />
// //         <TouchableOpacity onPress={addVisitor} style={styles.addButton}>
// //           <Text style={styles.addButtonText}>Add</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* Visitor List */}
// //       <View style={styles.visitorListContainer}>
// //         <Text style={styles.sectionTitle}>Today's Visitors</Text>
// //         <FlatList
// //           data={visitors}
// //           keyExtractor={(item) => item.id}
// //           renderItem={renderVisitor}
// //           ListEmptyComponent={<Text style={{ color: '#ccc' }}>No visitors yet.</Text>}
// //         />
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#1E1E2C', paddingTop: 50 },
// //   header: {
// //     backgroundColor: '#C0392B',
// //     padding: 16,
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   greeting: { color: '#fff', fontSize: 20 },
// //   bold: { fontWeight: 'bold' },
// //   headerIcons: { flexDirection: 'row', alignItems: 'center' },
// //   iconWrapper: { marginLeft: 16, padding: 6 },
// //   searchContainer: {
// //     flexDirection: 'row',
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     alignItems: 'center',
// //     gap: 8,
// //   },
// //   searchInput: {
// //     backgroundColor: '#2C2C3A',
// //     borderRadius: 8,
// //     padding: 10,
// //     color: '#fff',
// //     flex: 1,
// //   },
// //   addButton: {
// //     backgroundColor: '#F46D5D',
// //     paddingHorizontal: 16,
// //     paddingVertical: 10,
// //     borderRadius: 8,
// //   },
// //   addButtonText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   visitorListContainer: {
// //     flex: 1,
// //     backgroundColor: '#2C2C3A',
// //     marginHorizontal: 12,
// //     borderRadius: 10,
// //     padding: 16,
// //     marginTop: 10,
// //   },
// //   sectionTitle: { color: '#fff', fontSize: 16, marginBottom: 12 },
// //   visitorCard: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     backgroundColor: '#3A3A4A',
// //     padding: 12,
// //     borderRadius: 8,
// //     marginBottom: 10,
// //     alignItems: 'center',
// //   },
// //   visitorName: { color: '#fff', fontSize: 16 },
// //   visitorIcons: { flexDirection: 'row' },
// //   visitorIcon: {
// //     marginLeft: 12,
// //     backgroundColor: '#4CAF50',
// //     padding: 6,
// //     borderRadius: 20,
// //   },
// // });


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Platform,
//   Alert,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export default function DashboardScreen({ navigation }) {
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [visitors, setVisitors] = useState([]);
//   const [newVisitor, setNewVisitor] = useState('');

//   const handleCalendarPress = () => setShowCalendar(true);

//   const onDateChange = (event, date) => {
//     setShowCalendar(Platform.OS === 'ios');
//     if (date) setSelectedDate(date);
//   };

//   const handleLogout = () => navigation.replace('Login');

//   const addVisitor = () => {
//     if (!newVisitor.trim()) {
//       Alert.alert('Error', 'Please enter a visitor name.');
//       return;
//     }
//     const newEntry = {
//       id: Date.now().toString(),
//       name: newVisitor.trim(),
//     };
//     setVisitors([newEntry, ...visitors]);
//     setNewVisitor('');
//   };

//   const renderVisitor = ({ item }) => (
//     <View style={styles.visitorCard}>
//       <Text style={styles.visitorName}>{item.name}</Text>
//       <View style={styles.visitorIcons}>
//         <Ionicons name="eye-outline" size={20} color="white" style={styles.visitorIcon} />
//         <Ionicons name="call-outline" size={20} color="white" style={styles.visitorIcon} />
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>
//           Hello, <Text style={styles.bold}>Suraj</Text>
//         </Text>
//         <View style={styles.headerIcons}>
//           <TouchableOpacity onPress={handleCalendarPress} style={styles.iconWrapper}>
//             <Ionicons name="calendar-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleLogout} style={styles.iconWrapper}>
//             <Ionicons name="log-out-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {showCalendar && (
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display="default"
//           onChange={onDateChange}
//         />
//       )}

//       {/* Add Visitor Input */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Enter visitor name"
//           placeholderTextColor="#aaa"
//           style={styles.searchInput}
//           value={newVisitor}
//           onChangeText={setNewVisitor}
//         />
//         <TouchableOpacity onPress={addVisitor} style={styles.addButton}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Visitor List */}
//       <View style={styles.visitorListContainer}>
//         <Text style={styles.sectionTitle}>Today's Visitors</Text>
//         <FlatList
//           data={visitors}
//           keyExtractor={(item) => item.id}
//           renderItem={renderVisitor}
//           ListEmptyComponent={<Text style={{ color: '#ccc' }}>No visitors yet.</Text>}
//         />
//       </View>

//       {/* Floating Action Button */}
//       <TouchableOpacity
//         style={styles.fab}
//         onPress={() => navigation.navigate('VisitorFormScreen')} // You can change this
//       >
//         <Text style={styles.fabText}>+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#1E1E2C', paddingTop: 50 },
//   header: {
//     backgroundColor: '#C0392B',
//     padding: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   greeting: { color: '#fff', fontSize: 20 },
//   bold: { fontWeight: 'bold' },
//   headerIcons: { flexDirection: 'row', alignItems: 'center' },
//   iconWrapper: { marginLeft: 16, padding: 6 },
//   searchContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     alignItems: 'center',
//     gap: 8,
//   },
//   searchInput: {
//     backgroundColor: '#2C2C3A',
//     borderRadius: 8,
//     padding: 10,
//     color: '#fff',
//     flex: 1,
//   },
//   addButton: {
//     backgroundColor: '#F46D5D',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   visitorListContainer: {
//     flex: 1,
//     backgroundColor: '#2C2C3A',
//     marginHorizontal: 12,
//     borderRadius: 10,
//     padding: 16,
//     marginTop: 10,
//   },
//   sectionTitle: { color: '#fff', fontSize: 16, marginBottom: 12 },
//   visitorCard: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#3A3A4A',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   visitorName: { color: '#fff', fontSize: 16 },
//   visitorIcons: { flexDirection: 'row' },
//   visitorIcon: {
//     marginLeft: 12,
//     backgroundColor: '#4CAF50',
//     padding: 6,
//     borderRadius: 20,
//   },
//   // fab: {
//   //   position: 'absolute',
//   //   bottom: 30,
//   //   alignSelf: 'center',
//   //   backgroundColor: '#fff',
//   //   width: 60,
//   //   height: 60,
//   //   borderRadius: 30,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   shadowColor: '#000',
//   //   shadowOffset: { width: 0, height: 2 },
//   //   shadowOpacity: 0.3,
//   //   shadowRadius: 4,
//   //   elevation: 6,
//   // },
//   // fabText: {
//   //   fontSize: 30,
//   //   color: '#C0392B',
//   //   fontWeight: 'bold',
//   // },
 
//  fab: {
//   position: 'absolute',
//   bottom: 20,
//   left: '50%',
//   transform: [{ translateX: -30 }], // shifts back half of 60px to center it
//   width: 60,
//   height: 60,
//   borderRadius: 30,
//   backgroundColor: '#fff', // Outer white circle
//   justifyContent: 'center',
//   alignItems: 'center',
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height: 2 },
//   shadowOpacity: 0.3,
//   shadowRadius: 4,
//   elevation: 6,
// },

// fabInnerCircle: {
//   width: 46,
//   height: 46,
//   borderRadius: 23,
//   backgroundColor: '#C0392B', // Inner red circle
//   justifyContent: 'center',
//   alignItems: 'center',
// },

// fabPlus: {
//   fontSize: 24,
//   color: '#fff',
//   fontWeight: 'bold',
// },

// });

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Platform,
//   Alert,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export default function DashboardScreen({ navigation }) {
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [visitors, setVisitors] = useState([]);
//   const [newVisitor, setNewVisitor] = useState('');

//   const handleCalendarPress = () => setShowCalendar(true);

//   const onDateChange = (event, date) => {
//     setShowCalendar(Platform.OS === 'ios');
//     if (date) setSelectedDate(date);
//   };

//   const handleLogout = () => navigation.replace('Login');

//   const addVisitor = () => {
//     if (!newVisitor.trim()) {
//       Alert.alert('Error', 'Please enter a visitor name.');
//       return;
//     }
//     const newEntry = {
//       id: Date.now().toString(),
//       name: newVisitor.trim(),
//     };
//     setVisitors([newEntry, ...visitors]);
//     setNewVisitor('');
//   };

//   const renderVisitor = ({ item }) => (
//     <View style={styles.visitorCard}>
//       <Text style={styles.visitorName}>{item.name}</Text>
//       <View style={styles.visitorIcons}>
//         <Ionicons name="eye-outline" size={20} color="white" style={styles.visitorIcon} />
//         <Ionicons name="call-outline" size={20} color="white" style={styles.visitorIcon} />
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>
//           Hello, <Text style={styles.bold}>Suraj</Text>
//         </Text>
//         <View style={styles.headerIcons}>
//           <TouchableOpacity onPress={handleCalendarPress} style={styles.iconWrapper}>
//             <Ionicons name="calendar-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleLogout} style={styles.iconWrapper}>
//             <Ionicons name="log-out-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {showCalendar && (
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display="default"
//           onChange={onDateChange}
//         />
//       )}

//       {/* Add Visitor Input */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Enter visitor name"
//           placeholderTextColor="#aaa"
//           style={styles.searchInput}
//           value={newVisitor}
//           onChangeText={setNewVisitor}
//         />
//         <TouchableOpacity onPress={addVisitor} style={styles.addButton}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Visitor List */}
//       <View style={styles.visitorListContainer}>
//         <Text style={styles.sectionTitle}>Today's Visitors</Text>
//         <FlatList
//           data={visitors}
//           keyExtractor={(item) => item.id}
//           renderItem={renderVisitor}
//           ListEmptyComponent={<Text style={{ color: '#ccc' }}>No visitors yet.</Text>}
//         />
//       </View>

//       {/* Floating Action Button */}
//       <View style={styles.fabWrapper}>
//         <TouchableOpacity
//           style={styles.fab}
//           onPress={() => navigation.navigate('VisitorFormScreen')} // Change screen name if needed
//         >
//           <View style={styles.fabInnerCircle}>
//             <Text style={styles.fabPlus}>+</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#1E1E2C', paddingTop: 50 },
//   header: {
//     backgroundColor: '#C0392B',
//     padding: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   greeting: { color: '#fff', fontSize: 20 },
//   bold: { fontWeight: 'bold' },
//   headerIcons: { flexDirection: 'row', alignItems: 'center' },
//   iconWrapper: { marginLeft: 16, padding: 6 },
//   searchContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     alignItems: 'center',
//     gap: 8,
//   },
//   searchInput: {
//     backgroundColor: '#2C2C3A',
//     borderRadius: 8,
//     padding: 10,
//     color: '#fff',
//     flex: 1,
//   },
//   addButton: {
//     backgroundColor: '#F46D5D',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   visitorListContainer: {
//     flex: 1,
//     backgroundColor: '#2C2C3A',
//     marginHorizontal: 12,
//     borderRadius: 10,
//     padding: 16,
//     marginTop: 10,
//   },
//   sectionTitle: { color: '#fff', fontSize: 16, marginBottom: 12 },
//   visitorCard: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#3A3A4A',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   visitorName: { color: '#fff', fontSize: 16 },
//   visitorIcons: { flexDirection: 'row' },
//   visitorIcon: {
//     marginLeft: 12,
//     backgroundColor: '#4CAF50',
//     padding: 6,
//     borderRadius: 20,
//   },

//   // FAB Styling (exactly centered and designed like screenshot)
//   fabWrapper: {
//     position: 'absolute',
//     bottom: 20,
//     width: '100%',
//     alignItems: 'center',
//   },
//   fab: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 6,
//   },
//   fabInnerCircle: {
//     width: 46,
//     height: 46,
//     borderRadius: 23,
//     backgroundColor: '#C0392B',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fabPlus: {
//     fontSize: 24,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Platform,
//   Alert,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export default function DashboardScreen({ navigation }) {
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [visitors, setVisitors] = useState([]);
//   const [newVisitor, setNewVisitor] = useState('');

//   const handleCalendarPress = () => setShowCalendar(true);

//   const onDateChange = (event, date) => {
//     setShowCalendar(Platform.OS === 'ios');
//     if (date) setSelectedDate(date);
//   };

//   const handleLogout = () => navigation.replace('Login');

//   const addVisitor = () => {
//     if (!newVisitor.trim()) {
//       Alert.alert('Error', 'Please enter a visitor name.');
//       return;
//     }
//     const newEntry = {
//       id: Date.now().toString(),
//       name: newVisitor.trim(),
//     };
//     setVisitors([newEntry, ...visitors]);
//     setNewVisitor('');
//   };

//   const renderVisitor = ({ item }) => (
//     <View style={styles.visitorCard}>
//       <Text style={styles.visitorName}>{item.name}</Text>
//       <View style={styles.visitorIcons}>
//         <Ionicons name="eye-outline" size={20} color="white" style={styles.visitorIcon} />
//         <Ionicons name="call-outline" size={20} color="white" style={styles.visitorIcon} />
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>
//           Hello, <Text style={styles.bold}>Suraj</Text>
//         </Text>
//         <View style={styles.headerIcons}>
//           <TouchableOpacity onPress={handleCalendarPress} style={styles.iconWrapper}>
//             <Ionicons name="calendar-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleLogout} style={styles.iconWrapper}>
//             <Ionicons name="log-out-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {showCalendar && (
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display="default"
//           onChange={onDateChange}
//         />
//       )}

//       {/* Add Visitor Input */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Enter visitor name"
//           placeholderTextColor="#aaa"
//           style={styles.searchInput}
//           value={newVisitor}
//           onChangeText={setNewVisitor}
//         />
//         <TouchableOpacity onPress={addVisitor} style={styles.addButton}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Visitor List */}
//       <View style={styles.visitorListContainer}>
//         <Text style={styles.sectionTitle}>Today's Visitors</Text>
//         <FlatList
//           data={visitors}
//           keyExtractor={(item) => item.id}
//           renderItem={renderVisitor}
//           ListEmptyComponent={<Text style={{ color: '#ccc' }}>No visitors yet.</Text>}
//         />
//       </View>

//       {/* Floating Action Button - Perfectly Centered */}
//       <View style={styles.fabContainer}>
//         <TouchableOpacity
//           style={styles.fab}
//           onPress={() => navigation.navigate('VisitorFormScreen')}
//         >
//           <View style={styles.fabCircle}>
//             <Text style={styles.fabText}>+</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     backgroundColor: '#1E1E2C', 
//     paddingTop: 50,
//   },
//   header: {
//     backgroundColor: '#C0392B',
//     padding: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   greeting: { color: '#fff', fontSize: 20 },
//   bold: { fontWeight: 'bold' },
//   headerIcons: { flexDirection: 'row', alignItems: 'center' },
//   iconWrapper: { marginLeft: 16, padding: 6 },
//   searchContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     alignItems: 'center',
//     gap: 8,
//   },
//   searchInput: {
//     backgroundColor: '#2C2C3A',
//     borderRadius: 8,
//     padding: 10,
//     color: '#fff',
//     flex: 1,
//   },
//   addButton: {
//     backgroundColor: '#F46D5D',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   visitorListContainer: {
//     flex: 1,
//     backgroundColor: '#2C2C3A',
//     marginHorizontal: 12,
//     borderRadius: 10,
//     padding: 16,
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   sectionTitle: { color: '#fff', fontSize: 16, marginBottom: 12 },
//   visitorCard: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#3A3A4A',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   visitorName: { color: '#fff', fontSize: 16 },
//   visitorIcons: { flexDirection: 'row' },
//   visitorIcon: {
//     marginLeft: 12,
//     backgroundColor: '#4CAF50',
//     padding: 6,
//     borderRadius: 20,
//   },
//   // FAB Styles
//   fabContainer: {
//     position: 'absolute',
//     bottom: 30,
//     left: 0,
//     right: 0,
//     alignItems: 'center',
//   },
//   fab: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   fabCircle: {
//     width: 46,
//     height: 46,
//     borderRadius: 23,
//     backgroundColor: '#C0392B',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fabText: {
//     color: 'white',
//     fontSize: 28,
//     fontWeight: '300',
//     marginTop: -2, // slight adjustment for perfect centering
//   },
// });


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Platform,
//   Alert,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export default function DashboardScreen({ navigation }) {
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [visitors, setVisitors] = useState([]);
//   const [newVisitor, setNewVisitor] = useState('');

//   const handleCalendarPress = () => {
//     console.log('Calendar button pressed');
//     setShowCalendar(true);
//   };

//   const onDateChange = (event, date) => {
//     setShowCalendar(false);
//     if (date) setSelectedDate(date);
//   };

//   const handleLogout = () => navigation.replace('Login');

//   const addVisitor = () => {
//     if (!newVisitor.trim()) {
//       Alert.alert('Error', 'Please enter a visitor name.');
//       return;
//     }
//     const newEntry = {
//       id: Date.now().toString(),
//       name: newVisitor.trim(),
//     };
//     setVisitors([newEntry, ...visitors]);
//     setNewVisitor('');
//   };

//   const renderVisitor = ({ item }) => (
//     <View style={styles.visitorCard}>
//       <Text style={styles.visitorName}>{item.name}</Text>
//       <View style={styles.visitorIcons}>
//         <Ionicons name="eye-outline" size={20} color="white" style={styles.visitorIcon} />
//         <Ionicons name="call-outline" size={20} color="white" style={styles.visitorIcon} />
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>
//           Hello, <Text style={styles.bold}>Suraj</Text>
//         </Text>
//         <View style={styles.headerIcons}>
//           <TouchableOpacity onPress={handleCalendarPress} style={styles.iconWrapper}>
//             <Ionicons name="calendar-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleLogout} style={styles.iconWrapper}>
//             <Ionicons name="log-out-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Show Date Picker */}
//       {showCalendar && Platform.OS === 'android' && (
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display="calendar"
//           onChange={onDateChange}
//         />
//       )}

//       {Platform.OS === 'ios' && showCalendar && (
//         <View style={{ backgroundColor: '#fff' }}>
//           <DateTimePicker
//             value={selectedDate}
//             mode="date"
//             display="spinner"
//             onChange={onDateChange}
//           />
//         </View>
//       )}

//       {/* Add Visitor Input */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Enter visitor name"
//           placeholderTextColor="#aaa"
//           style={styles.searchInput}
//           value={newVisitor}
//           onChangeText={setNewVisitor}
//         />
//         <TouchableOpacity onPress={addVisitor} style={styles.addButton}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Visitor List */}
//       <View style={styles.visitorListContainer}>
//         <Text style={styles.sectionTitle}>Today's Visitors</Text>
//         <FlatList
//           data={visitors}
//           keyExtractor={(item) => item.id}
//           renderItem={renderVisitor}
//           ListEmptyComponent={<Text style={{ color: '#ccc' }}>No visitors yet.</Text>}
//         />
//       </View>

//       {/* Floating Action Button */}
//       <View style={styles.fabContainer}>
//         <TouchableOpacity
//           style={styles.fab}
//           onPress={() => navigation.navigate('VisitorFormScreen')}
//         >
//           <View style={styles.fabCircle}>
//             <Text style={styles.fabText}>+</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1E1E2C',
//     paddingTop: 50,
//   },
//   header: {
//     backgroundColor: '#C0392B',
//     padding: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   greeting: { color: '#fff', fontSize: 20 },
//   bold: { fontWeight: 'bold' },
//   headerIcons: { flexDirection: 'row', alignItems: 'center' },
//   iconWrapper: { marginLeft: 16, padding: 6 },
//   searchContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     alignItems: 'center',
//     gap: 8,
//   },
//   searchInput: {
//     backgroundColor: '#2C2C3A',
//     borderRadius: 8,
//     padding: 10,
//     color: '#fff',
//     flex: 1,
//   },
//   addButton: {
//     backgroundColor: '#F46D5D',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   visitorListContainer: {
//     flex: 1,
//     backgroundColor: '#2C2C3A',
//     marginHorizontal: 12,
//     borderRadius: 10,
//     padding: 16,
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   sectionTitle: { color: '#fff', fontSize: 16, marginBottom: 12 },
//   visitorCard: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#3A3A4A',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   visitorName: { color: '#fff', fontSize: 16 },
//   visitorIcons: { flexDirection: 'row' },
//   visitorIcon: {
//     marginLeft: 12,
//     backgroundColor: '#4CAF50',
//     padding: 6,
//     borderRadius: 20,
//   },
//   fabContainer: {
//     position: 'absolute',
//     bottom: 30,
//     left: 0,
//     right: 0,
//     alignItems: 'center',
//   },
//   fab: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   fabCircle: {
//     width: 46,
//     height: 46,
//     borderRadius: 23,
//     backgroundColor: '#C0392B',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fabText: {
//     color: 'white',
//     fontSize: 28,
//     fontWeight: '300',
//     marginTop: -2,
//   },
// });

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Platform,
//   Modal,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export default function DashboardScreen({ navigation }) {
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [visitors, setVisitors] = useState([]);
//   const [newVisitor, setNewVisitor] = useState('');

//   const handleCalendarPress = () => {
//     console.log('Calendar Pressed');
//     setShowCalendar(true);
//   };

//   const onDateChange = (event, date) => {
//     setShowCalendar(false);
//     if (date) setSelectedDate(date);
//   };

//   const addVisitor = () => {
//     if (!newVisitor.trim()) {
//       alert('Please enter a visitor name.');
//       return;
//     }
//     const newEntry = {
//       id: Date.now().toString(),
//       name: newVisitor.trim(),
//     };
//     setVisitors([newEntry, ...visitors]);
//     setNewVisitor('');
//   };

//   const renderVisitor = ({ item }) => (
//     <View style={styles.visitorCard}>
//       <Text style={styles.visitorName}>{item.name}</Text>
//       <View style={styles.visitorIcons}>
//         <Ionicons name="eye-outline" size={20} color="white" style={styles.visitorIcon} />
//         <Ionicons name="call-outline" size={20} color="white" style={styles.visitorIcon} />
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>
//           Hello, <Text style={styles.bold}>Suraj</Text>
//         </Text>
//         <View style={styles.headerIcons}>
//           <TouchableOpacity onPress={handleCalendarPress} style={styles.iconWrapper}>
//             <Ionicons name="calendar-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Date Picker Modal (iOS only) */}
//       {Platform.OS === 'ios' && showCalendar && (
//         <Modal transparent animationType="slide">
//           <View style={styles.modalBackground}>
//             <View style={styles.modalContainer}>
//               <DateTimePicker
//                 value={selectedDate}
//                 mode="date"
//                 display="spinner"
//                 onChange={onDateChange}
//               />
//               <TouchableOpacity onPress={() => setShowCalendar(false)} style={styles.modalCloseButton}>
//                 <Text style={styles.modalCloseText}>Done</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       )}

//       {/* Android Date Picker */}
//       {Platform.OS === 'android' && showCalendar && (
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display="calendar"
//           onChange={onDateChange}
//         />
//       )}

//       {/* Add Visitor Input */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Enter visitor name"
//           placeholderTextColor="#aaa"
//           style={styles.searchInput}
//           value={newVisitor}
//           onChangeText={setNewVisitor}
//         />
//         <TouchableOpacity onPress={addVisitor} style={styles.addButton}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Visitor List */}
//       <View style={styles.visitorListContainer}>
//         <Text style={styles.sectionTitle}>Today's Visitors</Text>
//         <FlatList
//           data={visitors}
//           keyExtractor={(item) => item.id}
//           renderItem={renderVisitor}
//           ListEmptyComponent={<Text style={{ color: '#ccc' }}>No visitors yet.</Text>}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#1E1E2C', paddingTop: 50 },
//   header: {
//     backgroundColor: '#C0392B',
//     padding: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   greeting: { color: '#fff', fontSize: 20 },
//   bold: { fontWeight: 'bold' },
//   headerIcons: { flexDirection: 'row', alignItems: 'center' },
//   iconWrapper: { marginLeft: 16, padding: 6 },

//   searchContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     alignItems: 'center',
//     gap: 8,
//   },
//   searchInput: {
//     backgroundColor: '#2C2C3A',
//     borderRadius: 8,
//     padding: 10,
//     color: '#fff',
//     flex: 1,
//   },
//   addButton: {
//     backgroundColor: '#F46D5D',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   addButtonText: { color: '#fff', fontWeight: 'bold' },

//   visitorListContainer: {
//     flex: 1,
//     backgroundColor: '#2C2C3A',
//     marginHorizontal: 12,
//     borderRadius: 10,
//     padding: 16,
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   sectionTitle: { color: '#fff', fontSize: 16, marginBottom: 12 },
//   visitorCard: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#3A3A4A',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   visitorName: { color: '#fff', fontSize: 16 },
//   visitorIcons: { flexDirection: 'row' },
//   visitorIcon: {
//     marginLeft: 12,
//     backgroundColor: '#4CAF50',
//     padding: 6,
//     borderRadius: 20,
//   },

//   // Modal (for iOS)
//   modalBackground: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 20,
//     width: '90%',
//   },
//   modalCloseButton: {
//     marginTop: 10,
//     alignItems: 'flex-end',
//   },
//   modalCloseText: {
//     color: '#C0392B',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });
