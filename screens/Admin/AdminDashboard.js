import React, { useCallback, useState, useEffect } from 'react';

import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HeaderBar from '../../components/HeaderBar';
import VisitorCard from '../../components/VisiterCard';
import colors from '../../constants/colors';

export default function AdminDashboard({ navigation }) {
  const route = useRoute();
  const [searchQuery, setSearchQuery] = useState('');
  const [visitors, setVisitors] = useState([]);
  const [filteredVisitors, setFilteredVisitors] = useState([]);

  // Load all visitors from storage
  useFocusEffect(
    useCallback(() => {
      const fetchVisitors = async () => {
        const stored = await AsyncStorage.getItem('visitors');
        if (stored) {
          const parsed = JSON.parse(stored);
          setVisitors(parsed);
        }
      };
      fetchVisitors();
    }, [])
  );

  // Save visitors to storage when they change
  useEffect(() => {
    AsyncStorage.setItem('visitors', JSON.stringify(visitors));
    setFilteredVisitors(visitors);
  }, [visitors]);

  // Search filter
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredVisitors(visitors);
    } else {
      const filtered = visitors.filter((v) =>
        v.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredVisitors(filtered);
    }
  }, [searchQuery, visitors]);

  // Handle new visitor via route param
  useEffect(() => {
    if (route.params?.newVisitor) {
      const newVisitor = {
        ...route.params.newVisitor,
        // id: Date.now().toString(),
        id: `${Date.now()}-${Math.random()}`,

        checkInTime:
          route.params.newVisitor.checkInTime || new Date().toISOString(),
      };

      setVisitors((prev) => [newVisitor, ...prev]);
      navigation.setParams({ newVisitor: null });
    }
  }, [route.params?.newVisitor]);

  // Check-out logic
  const handleCheckOut = (id) => {
    const updatedVisitors = visitors.map((visitor) =>
      visitor.id === id
        ? { ...visitor, outTime: new Date().toISOString() }
        : visitor
    );
    setVisitors(updatedVisitors);
  };

  const handleCallVisitor = (phone) => {
    if (phone) {
      Linking.openURL(`tel:${phone}`).catch((err) =>
        console.error('Failed to open dialer:', err)
      );
    }
  };

  return (
    <View style={styles.screen}>
      <HeaderBar onSearch={setSearchQuery} />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>All Visitors</Text>

        

        {filteredVisitors.map((visitor) => (
          <VisitorCard
            key={visitor.id}
            name={visitor.name}
            date={
              visitor.outTime
                ? `Checked out at ${new Date(visitor.outTime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}`
                : `Checked in at ${new Date(visitor.checkInTime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}`
            }
            onCall={() => handleCallVisitor(visitor.phone)}
            onCheckOut={
              !visitor.outTime ? () => handleCheckOut(visitor.id) : null
            }
            onPress={() =>
              navigation.navigate('VisitorDetails', {
                visitor,
              })
            }
          />
        ))}

        {filteredVisitors.length === 0 && (
          <Text style={styles.noVisitorsText}>No visitors found</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  noVisitorsText: {
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});
