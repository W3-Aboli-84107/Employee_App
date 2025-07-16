import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Platform,
  Image,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SuperAdminDashboardScreen({ navigation, route }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [visitors, setVisitors] = useState([]);
  const [filteredVisitors, setFilteredVisitors] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (route.params?.allVisitors) {
      setVisitors(route.params.allVisitors);
    }
  }, [route.params?.allVisitors]);

  useEffect(() => {
    filterVisitors();
  }, [searchText, selectedDate, visitors]);

  const handleCalendarPress = () => setShowCalendar(true);

  const onDateChange = (event, date) => {
    if (Platform.OS === 'android') setShowCalendar(false);
    if (date) setSelectedDate(date);
  };

  const handleLogout = () => navigation.replace('Login');

  const filterVisitors = () => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    const filtered = visitors.filter((visitor) => {
      const matchDate = visitor.date?.startsWith(formattedDate);
      const matchSearch = visitor.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return matchDate && matchSearch;
    });
    setFilteredVisitors(filtered);
  };

  const renderVisitor = ({ item }) => (
    <View style={styles.visitorCard}>
      <Text style={styles.visitorName}>{item.name}</Text>
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="eye-outline" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.callButton}>
          <Ionicons name="call-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
            style={styles.profileImage}
          />
          <Text style={styles.greeting}>
            Hello, <Text style={styles.bold}>Suraj</Text>
          </Text>
        </View>
        <View style={styles.headerIcons}>

          <TouchableOpacity onPress={handleCalendarPress}>
            <Ionicons name="calendar-outline" size={22} color="#fff" />
          </TouchableOpacity>
{/* 
          <TouchableOpacity onPress={handleLogout} style={{ marginLeft: 16 }}>
            <Ionicons name="log-out-outline" size={22} color="#fff" />
          </TouchableOpacity> */}

           <TouchableOpacity
    onPress={() => navigation.navigate('History')}
    style={{ marginLeft: 16 }}
  >
    <Ionicons name="time-outline" size={22} color="#fff" />
  </TouchableOpacity>

  <TouchableOpacity onPress={handleLogout} style={{ marginLeft: 16 }}>
    <Ionicons name="log-out-outline" size={22} color="#fff" />
  </TouchableOpacity>

        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#aaa" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Date */}
      <Text style={styles.dateLabel}>Today</Text>

      {showCalendar && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onDateChange}
        />
      )}

      {/* Visitor List */}
      <FlatList
        contentContainerStyle={styles.visitorList}
        data={filteredVisitors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderVisitor}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No visitors found.</Text>
        }
      />

      {/* FAB */}
      <TouchableOpacity
        style={styles.fab}
        // onPress={() => navigation.navigate('VisitorFormScreen')}
        onPress={() => navigation.navigate('HistoryScreen')}

      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1E2C' },

  header: {
    backgroundColor: '#C0392B',
    paddingVertical: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  profileRow: { flexDirection: 'row', alignItems: 'center' },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: '#fff',
  },
  greeting: { color: '#fff', fontSize: 18 },
  bold: { fontWeight: 'bold' },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },

  // searchContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#2C2C3A',
  //   margin: 16,
  //   paddingHorizontal: 12,
  //   height: 45,
  //   borderRadius: 10,
  // },
  // searchIcon: { marginRight: 8 },
  // searchInput: {
  //   flex: 1,
  //   color: '#fff',
  //   fontSize: 16,
  // },

    searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    marginHorizontal: 20,
    marginTop: -70,
    marginBottom : 50,
    paddingHorizontal: 12,
    height: 45,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },

  dateLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 12,
  },

  visitorList: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },

  visitorCard: {
    backgroundColor: '#2C2C3A',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  visitorName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },

  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: '#555',
    borderRadius: 20,
    padding: 8,
    marginRight: 10,
  },
  callButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 8,
  },

  fab: {
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: {
    color: '#C0392B',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -2,
  },

  emptyText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
  },
});


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
//         <View style={styles.profileRow}>
//           <Image
//             source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
//             style={styles.profileImage}
//           />
//           <Text style={styles.greeting}>
//             Hello, <Text style={styles.bold}>Suraj</Text>
//           </Text>
//         </View>
//         <View style={styles.headerIcons}>
//           <TouchableOpacity onPress={handleCalendarPress}>
//             <Ionicons name="calendar-outline" size={22} color="#fff" />
//           </TouchableOpacity>

//           {/* ✅ FIXED: Correct screen name is 'History' */}
//           <TouchableOpacity
//             onPress={() => navigation.navigate('History')}
//             style={{ marginLeft: 16 }}
//           >
//             <Ionicons name="time-outline" size={22} color="#fff" />
//           </TouchableOpacity>

//           <TouchableOpacity onPress={handleLogout} style={{ marginLeft: 16 }}>
//             <Ionicons name="log-out-outline" size={22} color="#fff" />
//           </TouchableOpacity>
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

//       {/* ✅ FAB - Navigates to History screen */}
//       <TouchableOpacity
//         style={styles.fab}
//         onPress={() => navigation.navigate('History')}
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

//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#1C1C1C',
//     marginHorizontal: 20,
//     marginTop: -70,
//     marginBottom: 50,
//     paddingHorizontal: 12,
//     height: 45,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   searchIcon: { marginRight: 8 },
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
