import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import HeaderBar from '../../components/HeaderBar';
import VisitorCard from '../../components/VisiterCard';
import colors from '../../constants/colors';

const generateVisitors = (dayLabel) =>
  Array.from({ length: 20 }, (_, i) => ({
    name: `${dayLabel} Visitor ${i + 1}`,
    day: dayLabel,
  }));

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
    bottom: 50,
    alignSelf: 'center', // center horizontally
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRoute } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import HeaderBar from '../../components/HeaderBar';
// import VisitorCard from '../../components/VisiterCard';
// import colors from '../../constants/colors';

// const generateVisitors = (dayLabel) =>
//   Array.from({ length: 20 }, (_, i) => ({
//     name: `${dayLabel} Visitor ${i + 1}`,
//     day: dayLabel,
//   }));

// export default function AdminDashboard({ navigation }) {
//   const route = useRoute();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [userPhoto, setUserPhoto] = useState(null);
//   const [visitors, setVisitors] = useState([
//     {
//       id: '1',
//       name: 'Suresh Khanna',
//       phone: '91-7845767896',
//       email: 'suresh@gmail.com',
//       checkInTime: new Date().toISOString(),
//       purpose: 'Interview',
//       whomToMeet: 'HR Manager',
//     },
//     {
//       id: '2',
//       name: 'Preeti Ahuja',
//       phone: '91-9876543210',
//       email: 'preeti@gmail.com',
//       checkInTime: new Date().toISOString(),
//       purpose: 'Meeting',
//       whomToMeet: 'Project Lead',
//     },
//   ]);
//   const [filteredVisitors, setFilteredVisitors] = useState(visitors);

//   useEffect(() => {
//     const loadPhoto = async () => {
//       const photo = await AsyncStorage.getItem('userPhoto');
//       if (photo) setUserPhoto(photo);
//     };
//     loadPhoto();
//   }, []);

//   // Add new visitor when coming back from form
//   useEffect(() => {
//     if (route.params?.newVisitor) {
//       const newVisitor = {
//         ...route.params.newVisitor,
//         id: Date.now().toString(),
//         checkInTime:
//           route.params.newVisitor.checkInTime || new Date().toISOString(),
//       };
//       setVisitors((prev) => [newVisitor, ...prev]);
//       navigation.setParams({ newVisitor: null });
//     }
//   }, [route.params?.newVisitor]);

//   // Search filter
//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setFilteredVisitors(visitors);
//     } else {
//       setFilteredVisitors(
//         visitors.filter((v) =>
//           v.name.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//     }
//   }, [searchQuery, visitors]);

//   const handleCallVisitor = (phone) => {
//     console.log('Calling:', phone);
//   };

//   return (
//     <View style={styles.screen}>
//       {/* ✅ Added profile image */}
//       <View style={{ alignItems: 'flex-start', padding: 16 }}>
//         <Image
//           source={
//             userPhoto
//               ? { uri: userPhoto }
//               : require('../../assets/image.png')
//           }
//           style={styles.avatar}
//         />
//       </View>

//       <HeaderBar onSearch={setSearchQuery} />

//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.label}>Today's Visitors</Text>

//         {filteredVisitors.map((visitor) => (
//           <VisitorCard
//             key={visitor.id}
//             name={visitor.name}
//             date={`Checked in at ${new Date(
//               visitor.checkInTime
//             ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
//             onCall={() => handleCallVisitor(visitor.phone)}
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
//             onSave: (newVisitor) =>
//               navigation.setParams({ newVisitor }),
//           })
//         }
//       >
//         <Ionicons name="add" size={30} color="#fff" />
//       </TouchableOpacity>
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
//     bottom: 24,
//     right: 24,
//     backgroundColor: colors.primary,
//     borderRadius: 30,
//     width: 60,
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 5,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     borderColor: '#fff',
//     borderWidth: 1,
//   },
// });

