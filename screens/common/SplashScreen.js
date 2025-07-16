

// // import React, { useEffect } from 'react';
// // import { View, Text, StyleSheet, Image } from 'react-native';

// // const SplashScreen = ({ navigation }) => {
// //   useEffect(() => {
// //     const timeout = setTimeout(() => {
// //       navigation.replace('Login');
// //     }, 3000);

// //     return () => clearTimeout(timeout);
// //   }, []);

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.content}>
// //         <Image
// //           source={require('../../assets/logo.png')}
// //           style={styles.logo}
// //           resizeMode="contain"
// //         />
// //         <Text style={styles.text}>MeetIn</Text>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#0f0e0eff',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   content: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   logo: {
// //     width: 180,
// //     height: 180,
// //   },
// //   text: {
// //     marginTop: 20,
// //     fontSize: 35,
// //     fontWeight: 'bold',
// //     color: '#eef2f6ff',
// //     alignItems: 'center',
// //     justifyContent: 'center', margintop: 100,
// //   },
// // });

// // export default SplashScreen;

// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       navigation.replace('Login');
//     }, 3000);

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../assets/logo.png')}
//         style={styles.logo}
//         resizeMode="contain"
//       />
//       <Text style={styles.text}>MeetIn</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0f0e0eff',
//     justifyContent: 'center',  // centers vertically
//     alignItems: 'center',      // centers horizontally
//   },
//   logo: {
//     width: 180,
//     height: 180,
//   },
//   text: {
//     marginTop: 20,
//     fontSize: 35,
//     fontWeight: 'bold',
//     color: '#eef2f6ff',
//     textAlign: 'center',       // ensure text centers on wide screens
//   },
// });

// export default SplashScreen;


import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LinearGradient
      colors={['#060606ff', '#0d0c0cff']} // top to bottom gradient
      style={styles.container}
    >
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>MeetIn</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // vertical center
    alignItems: 'center',     // horizontal center
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default SplashScreen;
