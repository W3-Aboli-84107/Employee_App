// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function SuperAdminDashboardScreen() {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Welcome Super Admin!</Text>
// //       {/* Add Super Admin-specific content here */}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#0D1117', justifyContent: 'center', alignItems: 'center' },
// //   title: { color: '#34C759', fontSize: 24, fontWeight: 'bold' },
// // });

// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import HeaderBar from '../../components/HeaderBar';
// import CustomButton from '../../components/CustomButton';
// import colors from '../../constants/colors';

// const SuperAdminDashboard = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//       <HeaderBar title="Super Admin" />

//       <View style={styles.box}>
//         <Text style={styles.heading}>Welcome Super Admin 👑</Text>
//         <Text style={styles.subText}>Manage overall access and analytics</Text>
//       </View>

//       <CustomButton
//         title="View All Admins"
//         onPress={() => navigation.navigate('AdminList')}
//         style={{ marginBottom: 20 }}
//       />

//       <CustomButton
//         title="Visitor Logs"
//         onPress={() => navigation.navigate('VisitorLogs')}
//         style={{ marginBottom: 20 }}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//     padding: 16,
//   },
//   box: {
//     marginBottom: 24,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   subText: {
//     fontSize: 14,
//     color: '#ccc',
//     marginTop: 4,
//   },
// });

// export default SuperAdminDashboard;

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import CustomButton from '../../components/CustomButton';
import colors from '../../constants/colors'; // Ensure this path is correct

const SuperAdminDashboard = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <HeaderBar title="Super Admin" />
      <View style={styles.box}>
        <Text style={styles.heading}>Welcome Super Admin 👑</Text>
        <Text style={styles.subText}>Manage overall access and analytics</Text>
      </View>
      <CustomButton
        title="View All Admins"
        onPress={() => navigation.navigate('AdminList')}
        style={{ marginBottom: 20 }}
      />
      <CustomButton
        title="Visitor Logs"
        onPress={() => navigation.navigate('VisitorLogs')}
        style={{ marginBottom: 20 }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  box: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  subText: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 4,
  },
});

export default SuperAdminDashboard;