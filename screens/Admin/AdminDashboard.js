import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../constants/colors';
import VisitorCard from '../../components/VisiterCard';

export default function AdminDashboard({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVisitors, setFilteredVisitors] = useState([]);

  const visitors = [
    'Suresh Khanna',
    'Preeti Ahuja',
    'Arav Sharma',
    'Priya Patel',
    'Sujata Singh',
    'Suraj Yadav',
    'Shravani Padwal'
  ];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredVisitors(visitors);
    } else {
      const filtered = visitors.filter((name) =>
        name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredVisitors(filtered);
    }
  }, [searchQuery]);

  return (
    <View style={styles.screen}>
      {/* Header Section with search */}
      <HeaderBar onSearch={setSearchQuery} />

      {/* Visitor List Section */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Today</Text>
        {filteredVisitors.map((name, index) => (
          <VisitorCard
            key={index}
            name={name}
            date={'In Time: 10:00 AM'}
            onCall={() => console.log('Calling', name)}
          />
        ))}
        {filteredVisitors.length === 0 && (
          <Text style={{ color: '#aaa', marginTop: 20 }}>No visitors found.</Text>
        )}
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('VisitorForm')}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 16,
    paddingBottom: 100,
  },
  label: {
    color: colors.text,
    fontSize: 16,
    marginBottom: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    backgroundColor: '#F46D5D',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});
