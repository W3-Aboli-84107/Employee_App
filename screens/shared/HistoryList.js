import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import VisitorCard from '../../components/VisiterCard'; // Adjust path if needed
import AsyncStorage from '@react-native-async-storage/async-storage';

// Helper function to group by date
const groupByDate = (visitors) => {
  const groups = {};
  visitors.forEach((visitor) => {
    const date = new Date(visitor.inTime).toDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(visitor);
  });
  return groups;
};

const HistoryList = () => {
  const [search, setSearch] = useState('');
  const [groupedVisitors, setGroupedVisitors] = useState({});

  useEffect(() => {
    const loadVisitors = async () => {
      try {
        const storedData = await AsyncStorage.getItem('visitors');
        const visitors = storedData ? JSON.parse(storedData) : [];

        // Optional: sort by inTime descending
        visitors.sort((a, b) => new Date(b.inTime) - new Date(a.inTime));

        const grouped = groupByDate(visitors);
        setGroupedVisitors(grouped);
      } catch (error) {
        console.error('Error loading visitors:', error);
      }
    };

    loadVisitors();
  }, []);

  const filterVisitors = (visitors) => {
    if (!search.trim()) return visitors;
    return visitors.filter((v) =>
      v.name?.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <Ionicons name="search" size={20} color="#888" style={{ marginLeft: 10 }} />
        <TextInput
          placeholder="Search by visitor name"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <ScrollView style={styles.scrollArea}>
        {Object.entries(groupedVisitors).map(([date, visitors]) => {
          const filtered = filterVisitors(visitors);
          if (filtered.length === 0) return null;

          return (
            <View key={date} style={styles.dateSection}>
              <Text style={styles.dateHeading}>{date}</Text>
              {filtered.map((visitor, index) => (
                <VisitorCard
                  key={index}
                  name={visitor.name}
                  date={visitor.purpose}
                  onPress={() => console.log('View', visitor.name)}
                  onCall={() => console.log('Call', visitor.name)}
                  onCheckOut={null} // Add logic if needed
                />
              ))}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 5,
    height: 45,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  scrollArea: {
    marginTop: 10,
  },
  dateSection: {
    marginBottom: 20,
  },
  dateHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
});

export default HistoryList;
