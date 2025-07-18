// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Platform,
//   Image,
// } from 'react-native';
// import { Ionicons, Feather } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export default function SuperAdminDashboardScreen({ navigation, route }) {
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [visitors, setVisitors] = useState([]);
//   const [filteredVisitors, setFilteredVisitors] = useState([]);
//   const [searchText, setSearchText] = useState('');

//   useEffect(() => {
//     if (route.params?.allVisitors) {
//       setVisitors(route.params.allVisitors);
//     }
//   }, [route.params?.allVisitors]);

//   useEffect(() => {
//     filterVisitors();
//   }, [searchText, selectedDate, visitors]);

//   const handleCalendarPress = () => setShowCalendar(true);

//   const onDateChange = (event, date) => {
//     if (Platform.OS === 'android') setShowCalendar(false);
//     if (date) setSelectedDate(date);
//   };

//   const handleLogout = () => navigation.replace('Login');

//   const filterVisitors = () => {
//     const formattedDate = selectedDate.toISOString().split('T')[0];
//     const filtered = visitors.filter((visitor) => {
//       const matchDate = visitor.date?.startsWith(formattedDate);
//       const matchSearch = visitor.name
//         .toLowerCase()
//         .includes(searchText.toLowerCase());
//       return matchDate && matchSearch;
//     });
//     setFilteredVisitors(filtered);
//   };

//   const renderVisitor = ({ item }) => (
//     <View style={styles.visitorCard}>
//       <Text style={styles.visitorName}>{item.name}</Text>
//       <View style={styles.iconRow}>
//         <TouchableOpacity style={styles.iconButton}>
//           <Ionicons name="eye-outline" size={20} color="#fff" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.callButton}>
//           <Ionicons name="call-outline" size={20} color="#fff" />
//         </TouchableOpacity>

      
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         {/* <View style={styles.profileRow}>
//           <Image
//             source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
//             style={styles.profileImage}
//           />
//           <Text style={styles.greeting}>
//             Hello, <Text style={styles.bold}>Suraj</Text>
//           </Text>
//         </View> */}

//         <View style={styles.profileRow}>
//   <TouchableOpacity onPress={() => navigation.navigate('SuperAdminProfileScreen')}>
//     <Image
//       source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
//       style={styles.profileImage}
//     />
//   </TouchableOpacity>
//   <Text style={styles.greeting}>
//     Hello, <Text style={styles.bold}>Suraj</Text>
//   </Text>
// </View>

//         <View style={styles.headerIcons}>

//           <TouchableOpacity onPress={handleCalendarPress}>
//             <Ionicons name="calendar-outline" size={22} color="#fff" />
//           </TouchableOpacity>


//            <TouchableOpacity
//     onPress={() => navigation.navigate('History')}
//     style={{ marginLeft: 16 }}
//   >
//     <Ionicons name="time-outline" size={22} color="#fff" />
//   </TouchableOpacity>

//   {/* <TouchableOpacity onPress={handleLogout} style={{ marginLeft: 16 }}>
//     <Ionicons name="log-out-outline" size={22} color="#fff" />
//   </TouchableOpacity> */}

//         </View>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <Ionicons name="search" size={18} color="#aaa" style={styles.searchIcon} />
//         <TextInput
//           placeholder="Search"
//           placeholderTextColor="#aaa"
//           style={styles.searchInput}
//           value={searchText}
//           onChangeText={setSearchText}
//         />
//       </View>

//       {/* Date */}
//       <Text style={styles.dateLabel}>Today</Text>

//       {showCalendar && (
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//           onChange={onDateChange}
//         />
//       )}

//       {/* Visitor List */}
//       <FlatList
//         contentContainerStyle={styles.visitorList}
//         data={filteredVisitors}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderVisitor}
//         ListEmptyComponent={
//           <Text style={styles.emptyText}>No visitors found.</Text>
//         }
//       />

//       {/* FAB */}
//       <TouchableOpacity
//         style={styles.fab}
//         // onPress={() => navigation.navigate('VisitorFormScreen')}
//         onPress={() => navigation.navigate('HistoryScreen')}

//       >
//         <Text style={styles.fabText}>+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#1E1E2C' },

//   header: {
//     backgroundColor: '#C0392B',
//     paddingVertical: 100,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },

//   profileRow: { flexDirection: 'row', alignItems: 'center' },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 12,
//     backgroundColor: '#fff',
//   },
//   greeting: { color: '#fff', fontSize: 18 },
//   bold: { fontWeight: 'bold' },
//   headerIcons: { flexDirection: 'row', alignItems: 'center' },

//   // searchContainer: {
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   //   backgroundColor: '#2C2C3A',
//   //   margin: 16,
//   //   paddingHorizontal: 12,
//   //   height: 45,
//   //   borderRadius: 10,
//   // },
//   // searchIcon: { marginRight: 8 },
//   // searchInput: {
//   //   flex: 1,
//   //   color: '#fff',
//   //   fontSize: 16,
//   // },

//     searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#1C1C1C',
//     marginHorizontal: 20,
//     marginTop: -70,
//     marginBottom : 50,
//     paddingHorizontal: 12,
//     height: 45,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     color: '#fff',
//     fontSize: 16,
//   },

//   dateLabel: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 20,
//     marginBottom: 12,
//   },

//   visitorList: {
//     paddingHorizontal: 16,
//     paddingBottom: 100,
//   },

//   visitorCard: {
//     backgroundColor: '#2C2C3A',
//     borderRadius: 10,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     marginBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   visitorName: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '500',
//   },

//   iconRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     backgroundColor: '#555',
//     borderRadius: 20,
//     padding: 8,
//     marginRight: 10,
//   },
//   callButton: {
//     backgroundColor: '#4CAF50',
//     borderRadius: 20,
//     padding: 8,
//   },

//   fab: {
//     position: 'absolute',
//     bottom: 25,
//     alignSelf: 'center',
//     width: 60,
//     height: 60,
//     backgroundColor: '#fff',
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//   },
//   fabText: {
//     color: '#C0392B',
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginTop: -2,
//   },

//   emptyText: {
//     color: '#aaa',
//     textAlign: 'center',
//     marginTop: 30,
//     fontSize: 16,
//   },
// });


import React, { useCallback, useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HeaderBar from '../../components/HeaderBar';
import VisitorCard from '../../components/VisiterCard';
import colors from '../../constants/colors';

export default function AdminDashboard({ navigation }) {
  const route = useRoute();
  const [searchQuery, setSearchQuery] = useState('');
  const [visitors, setVisitors] = useState([]);
  const [filteredVisitors, setFilteredVisitors] = useState([]);

  // Load all visitors once on mount (only if needed for backup)
  useEffect(() => {
    const loadVisitors = async () => {
      const storedVisitors = await AsyncStorage.getItem('visitors');
      if (storedVisitors) {
        const parsed = JSON.parse(storedVisitors);
        setVisitors(parsed);
      }
    };
    loadVisitors();
  }, []);

  // Refresh today's visitors on focus
  useFocusEffect(
    useCallback(() => {
      const fetchVisitors = async () => {
        const storedVisitors = await AsyncStorage.getItem('visitors');
        if (storedVisitors) {
          const parsed = JSON.parse(storedVisitors);

          // Filter only today's visitors
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          const todayVisitors = parsed.filter((visitor) => {
            const checkInDate = new Date(visitor.checkInTime);
            checkInDate.setHours(0, 0, 0, 0);
            return checkInDate.getTime() === today.getTime();
          });

          setVisitors(
            todayVisitors.sort(
              (a, b) => new Date(b.checkInTime) - new Date(a.checkInTime)
            )
          );
        }
      };
      fetchVisitors();
    }, [])
  );

  // Save and update filtered list
  useEffect(() => {
    AsyncStorage.setItem('visitors', JSON.stringify(visitors));
    setFilteredVisitors(visitors);
  }, [visitors]);

  // Search filter
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredVisitors(visitors);
    } else {
      const filtered = visitors.filter((v) =>
        v.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredVisitors(filtered);
    }
  }, [searchQuery, visitors]);

  // Handle checkout
  const handleCheckOut = (id) => {
    const updatedVisitors = visitors.map((visitor) =>
      visitor.id === id
        ? { ...visitor, outTime: new Date().toISOString() }
        : visitor
    );
    setVisitors(updatedVisitors);
  };

  // Handle new visitor from route
  useEffect(() => {
    if (route.params?.newVisitor) {
      const newVisitor = {
        ...route.params.newVisitor,
        id: Date.now().toString(),
        checkInTime:
          route.params.newVisitor.checkInTime || new Date().toISOString(),
      };
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const checkInDate = new Date(newVisitor.checkInTime);
      checkInDate.setHours(0, 0, 0, 0);

      if (checkInDate.getTime() === today.getTime()) {
        setVisitors((prev) => [newVisitor, ...prev]);
      }

      navigation.setParams({ newVisitor: null });
    }
  }, [route.params?.newVisitor]);

  // Call visitor
  const handleCallVisitor = (phone) => {
    if (phone) {
      Linking.openURL(`tel:${phone}`).catch((err) =>
        console.error('Failed to open dialer:', err)
      );
    }
  };

  return (
    <View style={styles.screen}>
      <HeaderBar onSearch={setSearchQuery} />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Today's Visitors</Text>

        {filteredVisitors.map((visitor, index) => (
          <VisitorCard
            key={visitor.id || index}
            name={visitor.name}
            date={
              visitor.outTime
                ? `Checked out at ${new Date(visitor.outTime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}`
                : `Checked in at ${new Date(visitor.checkInTime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}`
            }
            onCall={() => handleCallVisitor(visitor.phone)}
            onCheckOut={
              !visitor.outTime ? () => handleCheckOut(visitor.id) : null
            }
            onPress={() =>
              navigation.navigate('VisitorDetails', {
                visitor,
              })
            }
          />
        ))}

        {filteredVisitors.length === 0 && (
          <Text style={styles.noVisitorsText}>No visitors found</Text>
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() =>
          navigation.navigate('VisitorForm', {
            onSave: (newVisitor) => {
              const newVisitorWithId = {
                ...newVisitor,
                id: Date.now().toString(),
                checkInTime:
                  newVisitor.checkInTime || new Date().toISOString(),
              };

              const today = new Date();
              today.setHours(0, 0, 0, 0);
              const checkInDate = new Date(newVisitorWithId.checkInTime);
              checkInDate.setHours(0, 0, 0, 0);

              if (checkInDate.getTime() === today.getTime()) {
                setVisitors((prev) => [newVisitorWithId, ...prev]);
              }
            },
          })
        }
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 16,
    paddingBottom: 100,
  },
  label: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  noVisitorsText: {
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});