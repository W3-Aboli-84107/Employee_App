import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Login'); // Replace with your Login screen route name
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LinearGradient
      colors={['#FF5F6D', '#B22222']} // top to bottom gradient
      style={styles.container}
    >
      <View style={styles.content}>
        <Image
          source={require('../../assets/logo.png')} // Make sure the path is correct
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>MeetIn</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 180,
  },
  text: {
    marginTop: 15,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default SplashScreen;
