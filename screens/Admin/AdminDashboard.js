// // // // import React, { useState, useEffect } from 'react';
// // // // import {
// // // //   View,
// // // //   ScrollView,
// // // //   StyleSheet,
// // // //   Text,
// // // //   TouchableOpacity,
// // // // } from 'react-native';
// // // // import HeaderBar from '../../components/HeaderBar';
// // // // import { Ionicons } from '@expo/vector-icons';
// // // // import colors from '../../constants/colors';
// // // // import VisitorCard from '../../components/VisiterCard';

// // // // export default function AdminDashboard({ navigation }) {
// // // //   const [searchQuery, setSearchQuery] = useState('');
// // // //   const [filteredVisitors, setFilteredVisitors] = useState([]);

// // // //   const visitors = [
// // // //     'Suresh Khanna',
// // // //     'Preeti Ahuja',
// // // //     'Arav Sharma',
// // // //     'Priya Patel',
// // // //     'Sujata Singh',
// // // //     'Suraj Yadav',
// // // //     'Shravani Padwal'
// // // //   ];

// // // //   useEffect(() => {
// // // //     if (searchQuery.trim() === '') {
// // // //       setFilteredVisitors(visitors);
// // // //     } else {
// // // //       const filtered = visitors.filter((name) =>
// // // //         name.toLowerCase().includes(searchQuery.toLowerCase())
// // // //       );
// // // //       setFilteredVisitors(filtered);
// // // //     }
// // // //   }, [searchQuery]);

// // // import { useFocusEffect, useRoute } from '@react-navigation/native';

// // // export default function AdminDashboard({ navigation }) {
// // //   const route = useRoute();
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   // const [visitors, setVisitors] = useState([
// // //   //   'Suresh Khanna',
// // //   //   'Preeti Ahuja',
// // //   //   'Arav Sharma',
// // //   //   'Priya Patel',
// // //   //   'Sujata Singh',
// // //   //   'Suraj Yadav',
// // //   //   'Shravani Padwal'
// // //   // ]);
// // //   const [visitors, setVisitors] = useState([
// // //   { name: 'Suresh Khanna', checkInTime: '10:00 AM' },
// // //   { name: 'Preeti Ahuja', checkInTime: '11:30 AM' },
// // // ]);

// // //   const [filteredVisitors, setFilteredVisitors] = useState(visitors);

// // //   // Add new visitor from route params
// // //   // useFocusEffect(
// // //   //   React.useCallback(() => {
// // //   //     if (route.params?.newVisitor) {
// // //   //       setVisitors((prev) => [...prev, route.params.newVisitor]);
// // //   //       setSearchQuery(''); // Reset search to show new visitor
// // //   //     }
// // //   //   }, [route.params?.newVisitor])
// // //   // );

// // //   useEffect(() => {
// // //   const unsubscribe = navigation.addListener('focus', () => {
// // //     if (route.params?.newVisitor) {
// // //       setVisitors((prev) => [...prev, route.params.newVisitor.name]);
// // //       setSearchQuery('');
// // //       // Optional: clear the param after use
// // //       route.params.newVisitor = null;
// // //     }
// // //   });
// // //   return unsubscribe;
// // // }, [navigation, route.params]);

// // //   useEffect(() => {
// // //     if (searchQuery.trim() === '') {
// // //       setFilteredVisitors(visitors);
// // //     } else {
// // //       const filtered = visitors.filter((name) =>
// // //         name.toLowerCase().includes(searchQuery.toLowerCase())
// // //       );
// // //       setFilteredVisitors(filtered);
// // //     }
// // //   }, [searchQuery, visitors]);


// // //   return (
// // //     <View style={styles.screen}>
// // //       {/* Header Section with search */}
// // //       <HeaderBar onSearch={setSearchQuery} />

// // //       {/* Visitor List Section */}
// // //       <ScrollView contentContainerStyle={styles.container}>
// // //         <Text style={styles.label}>Today</Text>
// // //         {filteredVisitors.map((name, index) => (
// // //           <VisitorCard
// // //             key={index}
// // //             name={name}
// // //             date={'In Time: 10:00 AM'}
// // //             onCall={() => console.log('Calling', name)}
// // //           />
// // //         ))}
// // //         {/* {filteredVisitors.length === 0 && (
// // //           <Text style={{ color: '#aaa', marginTop: 20 }}>No visitors found.</Text>
// // //         )} */}
// // //         {filteredVisitors.map((visitor, index) => (
// // //   <VisitorCard
// // //     key={index}
// // //     name={visitor.name}
// // //     date={`In Time: ${visitor.checkInTime}`}
// // //     onCall={() => console.log('Calling', visitor.name)}
// // //     onPress={() => navigation.navigate('VisitorDetails', { visitor })}
// // //   />
// // // ))}

// // //       </ScrollView>

// // //       {/* Floating Add Button */}
// // //       <TouchableOpacity
// // //         style={styles.fab}
// // //         onPress={() => navigation.navigate('VisitorForm')}
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
// // //     fontSize: 16,
// // //     marginBottom: 10,
// // //   },
// // //   fab: {
// // //     position: 'absolute',
// // //     bottom: 24,
// // //     alignSelf: 'center',
// // //     backgroundColor: '#F46D5D',
// // //     borderRadius: 30,
// // //     width: 60,
// // //     height: 60,
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     elevation: 5,
// // //   },
// // // });

// // import React, { useState, useEffect } from 'react';
// // import {
// //   View,
// //   ScrollView,
// //   StyleSheet,
// //   Text,
// //   TouchableOpacity,
// // } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';
// // import { useRoute, useFocusEffect } from '@react-navigation/native';
// // import HeaderBar from '../../components/HeaderBar';
// // import VisitorCard from '../../components/VisiterCard';
// // import colors from '../../constants/colors';

// // export default function AdminDashboard({ navigation }) {
// //   const route = useRoute();
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [visitors, setVisitors] = useState([
// //     { name: 'Suresh Khanna', checkInTime: '10:00 AM' },
// //     { name: 'Preeti Ahuja', checkInTime: '10:30 AM' },
// //     { name: 'Arav Sharma', checkInTime: '11:00 AM' },
// //     { name: 'Priya Patel', checkInTime: '11:15 AM' },
// //     { name: 'Sujata Singh', checkInTime: '11:30 AM' },
// //     { name: 'Suraj Yadav', checkInTime: '12:00 PM' },
// //     { name: 'Shravani Padwal', checkInTime: '12:15 PM' },
// //   ]);
// //   const [filteredVisitors, setFilteredVisitors] = useState(visitors);

// //   // Add new visitor from form
// //   useEffect(() => {
// //     const unsubscribe = navigation.addListener('focus', () => {
// //       if (route.params?.newVisitor) {
// //         setVisitors((prev) => [...prev, route.params.newVisitor]);
// //         setSearchQuery('');
// //         route.params.newVisitor = null;
// //       }
// //     });
// //     return unsubscribe;
// //   }, [navigation, route.params]);

// //   // Filter visitors
// //   useEffect(() => {
// //     if (searchQuery.trim() === '') {
// //       setFilteredVisitors(visitors);
// //     } else {
// //       const filtered = visitors.filter((visitor) =>
// //         visitor.name.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //       setFilteredVisitors(filtered);
// //     }
// //   }, [searchQuery, visitors]);

// //   // return (
// //   //   <View style={styles.screen}>
// //   //     {/* Header with search bar */}
// //   //     <HeaderBar onSearch={setSearchQuery} />

// //   //     {/* Visitor list */}
// //   //     <ScrollView contentContainerStyle={styles.container}>
// //   //       <Text style={styles.label}>Today</Text>
// //   //       {filteredVisitors.map((visitor, index) => (
// //   //         <VisitorCard
// //   //           key={index}
// //   //           name={visitor.name}
// //   //           date={`In Time: ${new Date(visitor.checkInTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
// //   //           onCall={() => console.log('Calling', visitor.name)}
// //   //           onPress={() => navigation.navigate('VisitorDetails', { visitor })}
// //   //         />
// //   //       ))}
// //   //       {filteredVisitors.length === 0 && (
// //   //         <Text style={{ color: '#aaa', marginTop: 20 }}>No visitors found.</Text>
// //   //       )}
// //   //     </ScrollView>

// //   //     {/* Floating Add Button */}
// //   //     <TouchableOpacity
// //   //       style={styles.fab}
// //   //       onPress={() => navigation.navigate('VisitorForm')}
// //   //     >
// //   //       <Ionicons name="add" size={30} color="#fff" />
// //   //     </TouchableOpacity>
// //   //   </View>
// //   // );

// //   return (
// //   <View style={styles.screen}>
// //     {/* Header with search bar */}
// //     <HeaderBar onSearch={setSearchQuery} />

// //     {/* Visitor list */}
// //     <ScrollView contentContainerStyle={styles.container}>
// //       <Text style={styles.label}>Today</Text>

// //       {filteredVisitors.map((visitor, index) => (
// //         <VisitorCard
// //           key={index}
// //           name={visitor.name}
// //           date={`In Time: ${new Date(visitor.checkInTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
// //           onCall={() => console.log('Calling', visitor.name)}
// //           onPress={() => navigation.navigate('VisitorDetails', { visitor })}
// //         />
// //       ))}

// //       {filteredVisitors.length === 0 && (
// //         <Text style={{ color: '#aaa', marginTop: 20 }}>No visitors found.</Text>
// //       )}
// //     </ScrollView>

// //     {/* Floating Add Button */}
// //     <TouchableOpacity
// //       style={styles.fab}
// //       onPress={() => navigation.navigate('VisitorForm')}
// //     >
// //       <Ionicons name="add" size={30} color="#fff" />
// //     </TouchableOpacity>
// //   </View>
// // );

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
// //     fontSize: 16,
// //     marginBottom: 10,
// //   },
// //   fab: {
// //     position: 'absolute',
// //     bottom: 24,
// //     alignSelf: 'center',
// //     backgroundColor: '#F46D5D',
// //     borderRadius: 30,
// //     width: 60,
// //     height: 60,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     elevation: 5,
// //   },
// // });


// import React, { useState, useEffect } from 'react';
// import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRoute } from '@react-navigation/native';
// import HeaderBar from '../../components/HeaderBar';
// import VisitorCard from '../../components/VisitorCard';
// import colors from '../../constants/colors';

// export default function AdminDashboard({ navigation }) {
//   const route = useRoute();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [visitors, setVisitors] = useState([
//     { name: 'Suresh Khanna', checkInTime: new Date().toISOString() },
//     { name: 'Preeti Ahuja', checkInTime: new Date().toISOString() },
//   ]);
//   const [filteredVisitors, setFilteredVisitors] = useState(visitors);

//   // Add new visitor when coming back from form
//   useEffect(() => {
//     if (route.params?.newVisitor) {
//       const newVisitor = {
//         ...route.params.newVisitor,
//         checkInTime: route.params.newVisitor.checkInTime || new Date().toISOString(),
//       };
//       setVisitors(prev => [...prev, newVisitor]);
//       navigation.setParams({ newVisitor: null });
//     }
//   }, [route.params?.newVisitor]);

//   // Search filter
//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setFilteredVisitors(visitors);
//     } else {
//       setFilteredVisitors(visitors.filter(v =>
//         v.name.toLowerCase().includes(searchQuery.toLowerCase())
//       ));
//     }
//   }, [searchQuery, visitors]);

//   return (
//     <View style={styles.screen}>
//       <HeaderBar onSearch={setSearchQuery} />

//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.label}>Today</Text>

//         {filteredVisitors.map((visitor, index) => (
//           <VisitorCard
//             key={index}
//             name={visitor.name}
//             date={`In Time: ${new Date(visitor.checkInTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
//             onCall={() => console.log('Calling', visitor.name)}
//             onPress={() => navigation.navigate('VisitorDetails', { visitor })}
//           />
//         ))}

//         {filteredVisitors.length === 0 && (
//           <Text style={{ color: '#aaa', marginTop: 20 }}>No visitors found.</Text>
//         )}
//       </ScrollView>

//       <TouchableOpacity
//         style={styles.fab}
//         onPress={() => navigation.navigate('VisitorForm')}
//       >
//         <Ionicons name="add" size={30} color="#fff" />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: { flex: 1, backgroundColor: colors.background },
//   container: { padding: 16, paddingBottom: 100 },
//   label: { color: colors.text, fontSize: 16, marginBottom: 10 },
//   fab: {
//     position: 'absolute',
//     bottom: 24,
//     alignSelf: 'center',
//     backgroundColor: '#F46D5D',
//     borderRadius: 30,
//     width: 60,
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 5,
//   },
// });

import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import HeaderBar from '../../components/HeaderBar';
import VisitorCard from '../../components/VisiterCard';
import colors from '../../constants/colors';

export default function AdminDashboard({ navigation }) {
  const route = useRoute();
  const [searchQuery, setSearchQuery] = useState('');
  const [visitors, setVisitors] = useState([
    { 
      id: '1',
      name: 'Suresh Khanna', 
      phone: '91-7845767896',
      email: 'suresh@gmail.com',
      checkInTime: new Date().toISOString(),
      purpose: 'Interview',
      whomToMeet: 'HR Manager'
    },
    { 
      id: '2',
      name: 'Preeti Ahuja', 
      phone: '91-9876543210',
      email: 'preeti@gmail.com',
      checkInTime: new Date().toISOString(),
      purpose: 'Meeting',
      whomToMeet: 'Project Lead'
    },
  ]);
  const [filteredVisitors, setFilteredVisitors] = useState(visitors);

  // Add new visitor when coming back from form
  useEffect(() => {
    if (route.params?.newVisitor) {
      const newVisitor = {
        ...route.params.newVisitor,
        id: Date.now().toString(),
        checkInTime: route.params.newVisitor.checkInTime || new Date().toISOString(),
      };
      setVisitors(prev => [newVisitor, ...prev]);
      navigation.setParams({ newVisitor: null });
    }
  }, [route.params?.newVisitor]);

  // Search filter
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredVisitors(visitors);
    } else {
      setFilteredVisitors(visitors.filter(v =>
        v.name.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    }
  }, [searchQuery, visitors]);

  const handleCallVisitor = (phone) => {
    console.log('Calling:', phone);
    // You would implement actual calling functionality here
  };

  return (
    <View style={styles.screen}>
      <HeaderBar onSearch={setSearchQuery} />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Today's Visitors</Text>

        {filteredVisitors.map((visitor) => (
          <VisitorCard
            key={visitor.id}
            name={visitor.name}
            date={`Checked in at ${new Date(visitor.checkInTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
            onCall={() => handleCallVisitor(visitor.phone)}
            onPress={() => navigation.navigate('VisitorDetails', { visitor })}
          />
        ))}

        {filteredVisitors.length === 0 && (
          <Text style={styles.noVisitorsText}>No visitors found</Text>
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('VisitorForm', {
          onSave: (newVisitor) => navigation.setParams({ newVisitor })
        })}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: colors.background 
  },
  container: { 
    padding: 16, 
    paddingBottom: 100 
  },
  label: { 
    color: colors.text, 
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 16 
  },
  noVisitorsText: { 
    color: colors.textSecondary, 
    textAlign: 'center', 
    marginTop: 20,
    fontSize: 16 
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});