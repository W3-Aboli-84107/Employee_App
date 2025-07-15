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
import colors from '../../constants/colors'; // ✅ make sure this path is correct

const groupVisitorsByDate = (visitors) => {
  const grouped = {};

  const formatDateLabel = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB'); // DD/MM/YYYY
  };

  visitors.forEach((visitor) => {
    const label = formatDateLabel(visitor.checkInTime);
    if (!grouped[label]) {
      grouped[label] = [];
    }
    grouped[label].push(visitor);
  });

  return grouped;
};

export default function HistoryScreen({ navigation }) {
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
          Object.entries(groupedVisitors).map(([date, visitors]) => (
            <View key={date} style={styles.section}>
              <Text style={styles.dateLabel}>{date}</Text>
              {visitors.map((visitor, index) => (
                <View key={index} style={styles.visitorCard}>
                  <Text style={styles.visitorName}>{visitor.name}</Text>
                  <Text style={styles.visitorPurpose}>{visitor.purpose}</Text>
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
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
    backgroundColor: '#1E1E2C',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
    height: 40,
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
    color: '#ccc',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  visitorCard: {
    backgroundColor: '#2A2A3B',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  visitorName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
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
