import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HeaderBar({ onSearch }) {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [greeting, setGreeting] = useState('Hello');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const parsedData = JSON.parse(userData);
          setFirstName(parsedData.firstName);
        }
      } catch (error) {
        console.error('Failed to load user data:', error);
      }
    };

    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) {
        setGreeting('Good Morning');
      } else if (hour < 17) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };

    getUserData();
    updateGreeting();
  }, []);

  const openHistory = () => {
    navigation.navigate('History');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.greetingSection}>
          <Text style={styles.greetingText}>{greeting}</Text>
          <Text style={styles.userName}>{firstName || 'User'}</Text>
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
          onChangeText={(text) => {
            if (onSearch) onSearch(text);
          }}
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
});


