// import React, { useState, useCallback } from 'react';
// import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
// import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
// import { useNavigation, useFocusEffect } from '@react-navigation/native'; // 🔥 Added useFocusEffect
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function HeaderBar({ onSearch }) {
//   const navigation = useNavigation();
//   const [firstName, setFirstName] = useState('');
//   const [greeting, setGreeting] = useState('Hello');
//   const [profileImage, setProfileImage] = useState(null);

//   useFocusEffect( // 🔥 Runs every time screen comes into focus
//     useCallback(() => {
//       const getUserData = async () => {
//         try {
//           const userData = await AsyncStorage.getItem('user');
//           const userImage = await AsyncStorage.getItem('userImage');

//           if (userData) {
//             const parsedData = JSON.parse(userData);
//             setFirstName(parsedData.firstName);
//           }

//           if (userImage) {
//             setProfileImage(userImage);
//           } else {
//             setProfileImage(null); // fallback
//           }
//         } catch (error) {
//           console.error('Failed to load user data:', error);
//         }
//       };

//       const updateGreeting = () => {
//         const hour = new Date().getHours();
//         if (hour < 12) setGreeting('Good Morning');
//         else if (hour < 17) setGreeting('Good Afternoon');
//         else setGreeting('Good Evening');
//       };

//       getUserData();
//       updateGreeting();
//     }, [])
//   );

//   const openHistory = () => navigation.navigate('History');

//   return (
//     <View style={styles.container}>
//       <View style={styles.topRow}>
//         <View style={styles.profileAndGreeting}>
//           <TouchableOpacity onPress={() => navigation.navigate('AdminProfile')}>
//             <Image
//               source={profileImage ? { uri: profileImage } : require('../assets/image.png')}
//               style={styles.profileImage}
//             />
//           </TouchableOpacity>
//           <View style={styles.greetingSection}>
//             <Text style={styles.greetingText}>{greeting}</Text>
//             <Text style={styles.userName}>{firstName || 'User'}</Text>
//           </View>
//         </View>

//         <TouchableOpacity onPress={openHistory}>
//           <FontAwesome5 name="history" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.searchBox}>
//         <Ionicons name="search" size={22} color="#ccc" style={{ marginLeft: 8 }} />
//         <TextInput
//           placeholder="Search"
//           placeholderTextColor="#ccc"
//           style={styles.searchInput}
//           onChangeText={(text) => onSearch && onSearch(text)}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 200,
//     backgroundColor: '#D32F2F',
//     paddingHorizontal: 16,
//     paddingTop: 40,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     position: 'relative',
//   },
//   topRow: {
//     top: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   greetingSection: {
//     flexDirection: 'column',
//   },
//   greetingText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   userName: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 4,
//   },
//   searchBox: {
//     position: 'absolute',
//     left: 16,
//     right: 16,
//     bottom: 16,
//     height: 50,
//     flexDirection: 'row',
//     backgroundColor: '#1C1C1C',
//     borderRadius: 10,
//     alignItems: 'center',
//     paddingHorizontal: 8,
//   },
//   searchInput: {
//     color: '#fff',
//     marginLeft: 8,
//     fontSize: 16,
//     flex: 1,
//   },
//   profileAndGreeting: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   profileImage: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     marginRight: 10,
//     backgroundColor: '#fff',
//   },
// });

import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HeaderBar({ onSearch }) {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [greeting, setGreeting] = useState('Hello');
  const [profileImage, setProfileImage] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const getUserData = async () => {
        try {
          const userData = await AsyncStorage.getItem('user');
          const userImage = await AsyncStorage.getItem('userImage');

          if (userData) {
            const parsedData = JSON.parse(userData);
            setFirstName(parsedData.firstName || '');
          }

          setProfileImage(userImage || null);
        } catch (error) {
          console.error('Failed to load user data:', error);
        }
      };

      const updateGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 17) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');
      };

      getUserData();
      updateGreeting();
    }, [])
  );

  const openHistory = () => navigation.navigate('History');

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.profileAndGreeting}>
          <TouchableOpacity onPress={() => navigation.navigate('AdminProfile')}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <View style={[styles.profileImage, styles.fallbackImage]}>
                <Text style={styles.initialText}>{firstName?.charAt(0).toUpperCase() || 'U'}</Text>
              </View>
            )}
          </TouchableOpacity>
          <View style={styles.greetingSection}>
            <Text style={styles.greetingText}>{greeting}</Text>
            <Text style={styles.userName}>{firstName || 'User'}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={openHistory}>
          <FontAwesome5 name="history" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={22} color="#ccc" style={{ marginLeft: 8 }} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#ccc"
          style={styles.searchInput}
          onChangeText={(text) => onSearch && onSearch(text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#D32F2F',
    paddingHorizontal: 16,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
  },
  topRow: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  greetingSection: {
    flexDirection: 'column',
  },
  greetingText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  searchBox: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  searchInput: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
    flex: 1,
  },
  profileAndGreeting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  fallbackImage: {
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
