// // import React, { useState } from 'react';
// // import { useNavigation } from '@react-navigation/native';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TextInput,
// //   ScrollView,
// //   TouchableOpacity,
// // } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';

// // export default function SuperAdminHistoryScreen() {
// //   const [search, setSearch] = useState('');
// //    const navigation = useNavigation();

// //   const todayData = [
// //     { name: 'Suresh Khanna', purpose: 'Interview' },
// //     { name: 'Preeti Ahuja', purpose: 'Health care' },
// //     { name: 'Arav Sharma', purpose: 'IT' },
// //   ];

// //   const yesterdayData = [
// //     { name: 'Priya Patel', purpose: 'Interview' },
// //     { name: 'Rohan Iyer', purpose: 'Interview' },
// //     { name: 'Nisha Reddy', purpose: 'Digital marketing' },
// //     { name: 'Sneha Chatterje', purpose: 'Training' },
// //   ];

// //   const renderVisitorCard = (visitor) => (
// //     <View key={visitor.name} style={styles.card}>
// //       <Text style={styles.name}>{visitor.name}</Text>
// //       <Text style={styles.purpose}>{visitor.purpose}</Text>
// //     </View>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <TouchableOpacity>
// //           <Ionicons name="arrow-back" size={24} color="#fff" />
// //         </TouchableOpacity>
// //         <Text style={styles.title}>History</Text>
// //       </View>

// //       {/* Search */}
// //       <View style={styles.searchContainer}>
// //         <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
// //         <TextInput
// //           style={styles.searchInput}
// //           placeholder="Search"
// //           placeholderTextColor="#999"
// //           value={search}
// //           onChangeText={setSearch}
// //         />
// //       <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
// //   <Ionicons name="options-outline" size={20} color="#fff" />
// // </TouchableOpacity>


// //       </View>

// //       {/* History List */}
// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         {/* Today */}
// //         <Text style={styles.sectionTitle}>Today</Text>
// //         {todayData.map(renderVisitorCard)}

// //         {/* Yesterday */}
// //         <Text style={styles.sectionTitle}>Yesterday</Text>
// //         {yesterdayData.map(renderVisitorCard)}
// //       </ScrollView>
// //     </View>
// //   );
// // }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#0C0F14', // Dark theme background
// //     paddingHorizontal: 20,
// //     paddingTop: 50,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 10,
// //     marginBottom: 20,
// //   },
// //   title: {
// //     fontSize: 20,
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   searchContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#1C1F26',
// //     borderRadius: 10,
// //     paddingHorizontal: 10,
// //     paddingVertical: 8,
// //     marginBottom: 20,
// //   },
// //   searchIcon: {
// //     marginRight: 8,
// //   },
// //   searchInput: {
// //     flex: 1,
// //     color: '#fff',
// //   },
// //   scrollContainer: {
// //     paddingBottom: 20,
// //   },
// //   sectionTitle: {
// //     fontSize: 16,
// //     color: '#aaa',
// //     fontWeight: '600',
// //     marginBottom: 10,
// //   },
// //   card: {
// //     backgroundColor: '#1C1F26',
// //     borderRadius: 10,
// //     padding: 15,
// //     marginBottom: 10,
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   name: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   purpose: {
// //     color: '#aaa',
// //     fontStyle: 'italic',
// //   },
// // });


// // import React, { useState } from 'react';
// // import { useNavigation } from '@react-navigation/native';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TextInput,
// //   ScrollView,
// //   TouchableOpacity,
// // } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';

// // export default function SuperAdminHistoryScreen() {
// //   const navigation = useNavigation();
// //   const [search, setSearch] = useState('');

// //   // No hardcoded todayData — starts empty
// //   const [todayData, setTodayData] = useState([]);

// //   const [yesterdayData] = useState([
// //     { name: 'Priya Patel', purpose: 'Interview' },
// //     { name: 'Rohan Iyer', purpose: 'Interview' },
// //     { name: 'Nisha Reddy', purpose: 'Digital marketing' },
// //     { name: 'Sneha Chatterje', purpose: 'Training' },
// //   ]);

// //   const renderVisitorCard = (visitor) => (
// //     <View key={visitor.name} style={styles.card}>
// //       <Text style={styles.name}>{visitor.name}</Text>
// //       <Text style={styles.purpose}>{visitor.purpose}</Text>
// //     </View>
// //   );

// //   const filterVisitors = (data) =>
// //     data.filter(
// //       (visitor) =>
// //         visitor.name.toLowerCase().includes(search.toLowerCase()) ||
// //         visitor.purpose.toLowerCase().includes(search.toLowerCase())
// //     );

// //   const filteredToday = filterVisitors(todayData);
// //   const filteredYesterday = filterVisitors(yesterdayData);

// //   return (
// //     <View style={styles.container}>
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Ionicons name="arrow-back" size={24} color="#fff" />
// //         </TouchableOpacity>
// //         <Text style={styles.title}>History</Text>
// //       </View>

// //       {/* Search */}
// //       <View style={styles.searchContainer}>
// //         <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
// //         <TextInput
// //           style={styles.searchInput}
// //           placeholder="Search"
// //           placeholderTextColor="#999"
// //           value={search}
// //           onChangeText={setSearch}
// //         />
// //         <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
// //           <Ionicons name="options-outline" size={20} color="#fff" />
// //         </TouchableOpacity>
// //       </View>

// //       {/* History List */}
// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         {/* Show "Today" only if there's any data */}
// //         {filteredToday.length > 0 && (
// //           <>
// //             <Text style={styles.sectionTitle}>Today</Text>
// //             {filteredToday.map(renderVisitorCard)}
// //           </>
// //         )}

// //         {/* Yesterday Section */}
// //         {filteredYesterday.length > 0 && (
// //           <>
// //             <Text style={styles.sectionTitle}>Yesterday</Text>
// //             {filteredYesterday.map(renderVisitorCard)}
// //           </>
// //         )}
// //       </ScrollView>
// //     </View>
// //   );
// // }

// // // Styles remain the same...
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#0C0F14',
// //     paddingHorizontal: 20,
// //     paddingTop: 50,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 10,
// //     marginBottom: 20,
// //   },
// //   title: {
// //     fontSize: 20,
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   searchContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#1C1F26',
// //     borderRadius: 10,
// //     paddingHorizontal: 10,
// //     paddingVertical: 8,
// //     marginBottom: 20,
// //   },
// //   searchIcon: {
// //     marginRight: 8,
// //   },
// //   searchInput: {
// //     flex: 1,
// //     color: '#fff',
// //   },
// //   scrollContainer: {
// //     paddingBottom: 20,
// //   },
// //   sectionTitle: {
// //     fontSize: 16,
// //     color: '#aaa',
// //     fontWeight: '600',
// //     marginBottom: 10,
// //   },
// //   card: {
// //     backgroundColor: '#1C1F26',
// //     borderRadius: 10,
// //     padding: 15,
// //     marginBottom: 10,
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   name: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   purpose: {
// //     color: '#aaa',
// //     fontStyle: 'italic',
// //   },
// // });


// import React, { useState, useCallback } from 'react';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Ionicons } from '@expo/vector-icons';

// export default function SuperAdminHistoryScreen() {
//   const navigation = useNavigation();
//   const [search, setSearch] = useState('');
//   const [todayData, setTodayData] = useState([]);
//   const [yesterdayData, setYesterdayData] = useState([]);

//   useFocusEffect(
//     useCallback(() => {
//       const loadVisitors = async () => {
//         const data = await AsyncStorage.getItem('visitors');
//         if (data) {
//           const allVisitors = JSON.parse(data);

//           const today = new Date();
//           today.setHours(0, 0, 0, 0);

//           const yesterday = new Date();
//           yesterday.setDate(yesterday.getDate() - 1);
//           yesterday.setHours(0, 0, 0, 0);

//           const todayList = [];
//           const yesterdayList = [];

//           allVisitors.forEach((visitor) => {
//             const checkIn = new Date(visitor.checkInTime);
//             checkIn.setHours(0, 0, 0, 0);

//             if (checkIn.getTime() === today.getTime()) {
//               todayList.push(visitor);
//             } else if (checkIn.getTime() === yesterday.getTime()) {
//               yesterdayList.push(visitor);
//             }
//           });

//           setTodayData(todayList);
//           setYesterdayData(yesterdayList);
//         }
//       };

//       loadVisitors();
//     }, [])
//   );

//   const renderVisitorCard = (visitor) => (
//     <View key={visitor.id} style={styles.card}>
//       <Text style={styles.name}>{visitor.name}</Text>
//       <Text style={styles.purpose}>{visitor.purpose || 'No purpose'}</Text>
//     </View>
//   );

//   const filterVisitors = (list) =>
//     list.filter(
//       (visitor) =>
//         visitor.name?.toLowerCase().includes(search.toLowerCase()) ||
//         visitor.purpose?.toLowerCase().includes(search.toLowerCase())
//     );

//   const filteredToday = filterVisitors(todayData);
//   const filteredYesterday = filterVisitors(yesterdayData);

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.title}>History</Text>
//       </View>

//       {/* Search */}
//       <View style={styles.searchContainer}>
//         <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search"
//           placeholderTextColor="#999"
//           value={search}
//           onChangeText={setSearch}
//         />
//         <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
//           <Ionicons name="options-outline" size={20} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/* History List */}
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* {filteredToday.length > 0 && (
//           <>
//             <Text style={styles.sectionTitle}>Today</Text>
//             {filteredToday.map(renderVisitorCard)}
//           </>
//         )} */}
//         {filteredToday.length > 0 && (
//   <>
//     <Text style={styles.sectionTitle}>Today</Text>
//     {filteredToday.map(renderVisitorCard)}
//   </>
// )}


//         {filteredYesterday.length > 0 && (
//           <>
//             <Text style={styles.sectionTitle}>Yesterday</Text>
//             {filteredYesterday.map(renderVisitorCard)}
//           </>
//         )}

//         {filteredToday.length === 0 && filteredYesterday.length === 0 && (
//           <Text style={styles.noData}>No visitors found</Text>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0C0F14',
//     paddingHorizontal: 20,
//     paddingTop: 50,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     // gap: 10,
//     marginRight: 10 ,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#1C1F26',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     marginBottom: 20,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     color: '#fff',
//   },
//   scrollContainer: {
//     paddingBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     color: '#aaa',
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   card: {
//     backgroundColor: '#1C1F26',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   name: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   purpose: {
//     color: '#aaa',
//     fontStyle: 'italic',
//   },
//   noData: {
//     color: '#aaa',
//     textAlign: 'center',
//     marginTop: 40,
//   },
// });

import React, { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function SuperAdminHistoryScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [todayData, setTodayData] = useState([]);
  const [yesterdayData, setYesterdayData] = useState([]);

  const handleDownload = async () => {
  const generateHTML = () => {
    const formatVisitors = (title, visitors) =>
      visitors.length > 0
        ? `<h2>${title}</h2><ul>${visitors
            .map(
              (v) =>
                `<li><strong>${v.name}</strong> - ${v.purpose} at ${new Date(
                  v.checkInTime
                ).toLocaleTimeString()}</li>`
            )
            .join('')}</ul>`
        : '';

    return `
      <html>
        <head><meta charset="utf-8" /></head>
        <body>
          <h1>Visitor History</h1>
          ${formatVisitors('Today', filteredToday)}
          ${formatVisitors('Yesterday', filteredYesterday)}
        </body>
      </html>
    `;
  };

  const html = generateHTML();
  const { uri } = await Print.printToFileAsync({ html });

  await Sharing.shareAsync(uri, {
    mimeType: 'application/pdf',
    dialogTitle: 'Share Visitor History PDF',
    UTI: 'com.adobe.pdf',
  });
};

  useFocusEffect(
    useCallback(() => {
      const loadVisitors = async () => {
        const data = await AsyncStorage.getItem('visitors');
        if (data) {
          const allVisitors = JSON.parse(data);

          const today = new Date();
          today.setHours(0, 0, 0, 0);

          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          yesterday.setHours(0, 0, 0, 0);

          const todayList = [];
          const yesterdayList = [];

          allVisitors.forEach((visitor) => {
            const checkIn = new Date(visitor.checkInTime);
            checkIn.setHours(0, 0, 0, 0);

            if (checkIn.getTime() === today.getTime()) {
              todayList.push(visitor);
            } else if (checkIn.getTime() === yesterday.getTime()) {
              yesterdayList.push(visitor);
            }
          });

          setTodayData(todayList);
          setYesterdayData(yesterdayList);
        }
      };

      loadVisitors();
    }, [])
  );

  const renderVisitorCard = (visitor) => {
    if (!visitor) return null;

    return (
      <View key={visitor.id} style={styles.card}>
        <Text style={styles.name}>{visitor.name || 'No Name'}</Text>
        <Text style={styles.purpose}>{visitor.purpose || 'No purpose'}</Text>
      </View>
    );
  };

  const filterVisitors = (list) =>
    list.filter(
      (visitor) =>
        visitor.name?.toLowerCase().includes(search.toLowerCase()) ||
        visitor.purpose?.toLowerCase().includes(search.toLowerCase())
    );

  const filteredToday = filterVisitors(todayData);
  const filteredYesterday = filterVisitors(yesterdayData);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>History</Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
          <Ionicons name="options-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* History List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredToday.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Today</Text>
            {filteredToday.map(renderVisitorCard)}
          </>
        )}

        {filteredYesterday.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Yesterday</Text>
            {filteredYesterday.map(renderVisitorCard)}
          </>
        )}

        {filteredToday.length === 0 && filteredYesterday.length === 0 && (
          <Text style={styles.noData}>No visitors found</Text>
        )}

        <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
  <Ionicons name="download-outline" size={20} color="#fff" />
  <Text style={styles.downloadText}>Download PDF</Text>
</TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0F14',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  downloadButton: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#cc442fff',
  padding: 10,
  borderRadius: 10,
  marginBottom: 15,
  justifyContent: 'center',
},

downloadText:
 {
  color: '#fff',
  marginLeft: 8,
  fontWeight: 'bold',
},

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft:10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1F26',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#aaa',
    fontWeight: '600',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#1C1F26',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
  },
  purpose: {
    color: '#aaa',
    fontStyle: 'italic',
  },
  noData: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 40,
  },
});

