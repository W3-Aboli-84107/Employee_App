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

const allVisitors = {
  Today: generateVisitors('Today'),
  Yesterday: generateVisitors('Yesterday'),
  '2 Days Ago': generateVisitors('2 Days Ago'),
  '3 Days Ago': generateVisitors('3 Days Ago'),
  '4 Days Ago': generateVisitors('4 Days Ago'),
  '5 Days Ago': generateVisitors('5 Days Ago'),
};

const HistoryScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVisitors, setFilteredVisitors] = useState(allVisitors);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredVisitors(allVisitors);
    } else {
      const newFiltered = {};
      for (const [day, visitors] of Object.entries(allVisitors)) {
        const matches = visitors.filter((visitor) =>
          visitor.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (matches.length > 0) {
          newFiltered[day] = matches;
        }
      }
      setFilteredVisitors(newFiltered);
    }
  }, [searchQuery]);

  return (
    <View style={styles.screen}>
      <HeaderBar onSearch={setSearchQuery} />

      <ScrollView contentContainerStyle={styles.container}>
        {Object.keys(filteredVisitors).length === 0 ? (
          <Text style={{ color: '#aaa', marginTop: 20 }}>No visitors found.</Text>
        ) : (
          Object.entries(filteredVisitors).map(([day, visitors]) => (
            <View key={day} style={{ marginBottom: 20 }}>
              <Text style={styles.label}>{day}</Text>
              {visitors.map((visitor, index) => (
                <VisitorCard
                  key={`${day}-${index}`}
                  name={visitor.name}
                  onCall={() => console.log('Calling', visitor.name)}
                />
              ))}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;

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
});
