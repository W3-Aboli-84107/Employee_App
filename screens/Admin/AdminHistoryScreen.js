import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import colors from '../../constants/colors'; // fallback to '#0D0D1A' if undefined

const groupVisitorsByDate = (visitors) => {
  const grouped = {
    Today: [],
    Yesterday: [],
  };

  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const formatKey = (date) => date.toISOString().split('T')[0]; // YYYY-MM-DD

  const todayKey = formatKey(today);
  const yesterdayKey = formatKey(yesterday);

  visitors.forEach((visitor) => {
    const visitDate = new Date(visitor.checkInTime);
    const visitKey = formatKey(visitDate);

    if (visitKey === todayKey) {
      grouped.Today.push(visitor);
    } else if (visitKey === yesterdayKey) {
      grouped.Yesterday.push(visitor);
    } else {
      if (!grouped[visitKey]) grouped[visitKey] = [];
      grouped[visitKey].push(visitor);
    }
  });

  return grouped;
};

export default function AdminHistoryScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [groupedVisitors, setGroupedVisitors] = useState({});
  const isFocused = useIsFocused();

  const loadVisitors = async () => {
    const stored = await AsyncStorage.getItem('visitors');
    const allVisitors = stored ? JSON.parse(stored) : [];

    const filtered = searchQuery.trim()
      ? allVisitors.filter((v) =>
          v.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : allVisitors;

    setGroupedVisitors(groupVisitorsByDate(filtered));
  };

  useEffect(() => {
    if (isFocused) {
      loadVisitors();
    }
  }, [isFocused, searchQuery]);

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>History</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Visitor List */}
      <ScrollView contentContainerStyle={styles.container}>
        {Object.keys(groupedVisitors).length === 0 ? (
          <Text style={styles.noVisitorsText}>No visitors found.</Text>
        ) : (
          Object.entries(groupedVisitors)
            .sort((a, b) => {
              const order = { Today: 0, Yesterday: 1 };
              if (order[a[0]] !== undefined || order[b[0]] !== undefined) {
                return (order[a[0]] ?? 99) - (order[b[0]] ?? 99);
              }
              return new Date(b[0]) - new Date(a[0]); // Newest first
            })
            .map(([date, visitors]) => (
              <View key={date} style={styles.section}>
                <Text style={styles.dateLabel}>
                  {date === 'Today' || date === 'Yesterday'
                    ? date
                    : new Date(date).toLocaleDateString('en-GB')}
                </Text>
                {visitors.map((visitor, index) => (
                  <View key={index} style={styles.visitorCard}>
                    <Text style={styles.visitorName}>{visitor.name || 'No Name'}</Text>
                    <Text style={styles.visitorPurpose}>
                      {visitor.purpose || ''}
                    </Text>
                  </View>
                ))}
              </View>
            ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background || '#0D0D1A',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
    height: 42,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  container: {
    paddingBottom: 100,
  },
  section: {
    marginBottom: 20,
  },
  dateLabel: {
    color: '#aaa',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
  },
  visitorCard: {
    backgroundColor: '#2A2A3B',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  visitorName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  visitorPurpose: {
    color: '#aaa',
    fontSize: 13,
    fontStyle: 'italic',
  },
  noVisitorsText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
});
