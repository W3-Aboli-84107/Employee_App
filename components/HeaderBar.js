// components/HeaderBar.js
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function HeaderBar({ userName = 'Suraj' }) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {/* <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <Text style={styles.greeting}>Hello, <Text style={styles.userName}>{userName}</Text></Text> */}

        <View style={styles.icons}>
          <TouchableOpacity>
            <Ionicons name="calendar-outline" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 12 }}>
            <MaterialCommunityIcons name="sync" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#ccc" style={{ marginLeft: 8 }} />
        <TextInput placeholder="Search" placeholderTextColor="#ccc" style={styles.searchInput} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D32F2F',
    padding: 16,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  greeting: {
    color: '#fff',
    marginLeft: 12,
    fontSize: 16,
  },
  userName: {
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 6,
    marginTop: 12,
  },
  searchInput: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
    flex: 1,
  },
});

