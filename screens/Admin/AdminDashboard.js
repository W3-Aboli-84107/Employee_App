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

const generateVisitors = (dayLabel) =>
  Array.from({ length: 20 }, (_, i) => ({
    name: `${dayLabel} Visitor ${i + 1}`,
    day: dayLabel,
  }));

export default function AdminDashboard({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [visitors, setVisitors] = useState(generateVisitors('Today'));
  const [filteredVisitors, setFilteredVisitors] = useState(visitors);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredVisitors(visitors);
    } else {
      const matches = visitors.filter((visitor) =>
        visitor.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredVisitors(matches);
    }
  }, [searchQuery]);

  return (
    <View style={styles.screen}>
      <HeaderBar onSearch={setSearchQuery} />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Today</Text>
        {filteredVisitors.length > 0 ? (
          filteredVisitors.map((visitor, index) => (
            <VisitorCard
              key={index}
              name={visitor.name}
              onCall={() => console.log('Calling', visitor.name)}
            />
          ))
        ) : (
          <Text style={{ color: '#aaa', marginTop: 20 }}>No visitors found.</Text>
        )}
      </ScrollView>

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
    fontWeight: 'bold',
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
