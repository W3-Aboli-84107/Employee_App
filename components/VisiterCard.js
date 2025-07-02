// // components/VisitorCard.js
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import colors from '../constants/colors';

// export default function VisitorCard({ name, onView, onCall }) {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.name}>{name}</Text>
//       <View style={styles.icons}>
//         <TouchableOpacity onPress={onView}>
//           <Ionicons name="eye-outline" size={18} color="#fff" style={styles.icon} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={onCall}>
//           <Ionicons name="call-outline" size={18} color="#fff" style={[styles.icon, styles.callIcon]} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: colors.card,
//     borderRadius: 10,
//     padding: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   name: {
//     color: colors.text,
//     fontSize: 16,
//   },
//   icons: {
//     flexDirection: 'row',
//   },
//   icon: {
//     marginLeft: 10,
//   },
//   callIcon: {
//     backgroundColor: '#2ecc71',
//     borderRadius: 20,
//     padding: 4,
//   },
// });

// src/components/VisitorCard.js
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import colors from '../constants/colors';

// const VisitorCard = ({ name, onView, onCall }) => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.name}>{name}</Text>
//       <View style={styles.icons}>
//         <TouchableOpacity onPress={onView}>
//           <Ionicons name="eye-outline" size={18} color="#fff" style={styles.icon} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={onCall}>
//           <Ionicons name="call-outline" size={18} color="#fff" style={[styles.icon, styles.callIcon]} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: colors.card,
//     borderRadius: 10,
//     padding: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   name: {
//     color: colors.text,
//     fontSize: 16,
//   },
//   icons: {
//     flexDirection: 'row',
//   },
//   icon: {
//     marginLeft: 10,
//   },
//   callIcon: {
//     backgroundColor: '#2ecc71',
//     borderRadius: 20,
//     padding: 4,
//   },
// });

// export default VisitorCard;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const VisitorCard = ({ name, date, onView, onCall }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{name}</Text>
        {date && <Text style={styles.date}>{date}</Text>}
      </View>
      <View style={styles.icons}>
        <TouchableOpacity onPress={onView}>
          {/* <Ionicons name="eye-outline" size={18} color="#fff" style={styles.icon} /> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={onCall}>
          <Ionicons 
            name="call-outline" 
            size={18} 
            color="#fff" 
            style={[styles.icon, styles.callIcon]} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  date: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  callIcon: {
    backgroundColor: '#2ecc71',
    borderRadius: 20,
    padding: 4,
  },
});

export default VisitorCard;