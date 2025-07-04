// AdminProfileScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const data = await AsyncStorage.getItem('user');
      if (data) {
        setUser(JSON.parse(data));
      }
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    navigation.replace('Login');
  };

  if (!user) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity>
          <Icon name="create-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        <Image
          source={require('../../assets/image.png')} // Replace with dynamic photo if needed
          style={styles.avatar}
        />
      </View>

      <View style={styles.infoSection}>
        <InfoRow icon="person" text={`${user.firstName} ${user.lastName}`} />
        <InfoRow icon="call" text={user.phone} />
        <InfoRow icon="mail" text={user.email} />
        <InfoRow icon="location" text={user.address} />
        <TouchableOpacity>
          <Text style={styles.resetText}>Password reset</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
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
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#E74C3C',
  },
  infoSection: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  infoText: {
    color: '#fff',
    marginLeft: 12,
    fontSize: 16,
  },
  resetText: {
    color: '#E74C3C',
    marginTop: 10,
    marginLeft: 32,
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: '#E74C3C',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
