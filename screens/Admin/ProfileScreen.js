import React, { useState, useCallback } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Image, Dimensions, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState(null);

  // Reload user data when screen is focused
  useFocusEffect(
    useCallback(() => {
      const loadUser = async () => {
        const data = await AsyncStorage.getItem('user');
        const image = await AsyncStorage.getItem('userImage');
        if (data) setUser(JSON.parse(data));
        if (image) setUserImage(image);
      };
      loadUser();
    }, [])
  );

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('userImage');
    navigation.replace('Login');
  };

  if (!user) return null;

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Icon name="create-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Profile Image */}
      <View style={styles.avatarContainer}>
        <Image
          source={userImage ? { uri: userImage } : require('../../assets/image.png')}
          style={styles.avatar}
        />
      </View>

      {/* Profile Info */}
      <View style={styles.infoSection}>
        <InfoRow icon="person" text={`${user.firstName} ${user.lastName}`} />
        <InfoRow icon="call" text={user.phone} />
        <InfoRow icon="mail" text={user.email} />
        <InfoRow icon="location" text={user.address} />

        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.resetText}>Password reset</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const InfoRow = ({ icon, text }) => (
  <View style={styles.row}>
    <Icon name={icon} size={20} color="#E74C3C" />
    <Text style={styles.infoText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D1A',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.09,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: height * 0.03,
  },
  avatar: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: width * 0.11,
    borderWidth: 2,
    borderColor: '#E74C3C',
  },
  infoSection: {
    marginTop: height * 0.02,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.012,
  },
  infoText: {
    color: '#fff',
    marginLeft: 12,
    fontSize: width * 0.045,
  },
  resetText: {
    color: '#E74C3C',
    marginTop: height * 0.01,
    marginLeft: 32,
    fontSize: width * 0.04,
  },
  logoutButton: {
    marginTop: height * 0.05,
    backgroundColor: '#E74C3C',
    paddingVertical: height * 0.02,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.045,
  },
});

export default ProfileScreen;
