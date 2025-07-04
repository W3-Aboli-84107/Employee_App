import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Platform,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DashboardScreen({ navigation, route }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [visitors, setVisitors] = useState([]);
  const [newVisitor, setNewVisitor] = useState('');

  // Handle new visitor from form submission
  useEffect(() => {
    if (route.params?.newVisitor) {
      const visitor = route.params.newVisitor;
      const newEntry = {
        id: Date.now().toString(),
        name: visitor.name || 'No Name Provided',
      };
      setVisitors([newEntry, ...visitors]);
      // Clear the param to avoid duplicate additions
      navigation.setParams({ newVisitor: null });
    }
  }, [route.params?.newVisitor]);

  const handleCalendarPress = () => {
    setShowCalendar(true);
  };

  const onDateChange = (event, date) => {
    if (Platform.OS === 'android') {
      setShowCalendar(false);
    }
    if (date) setSelectedDate(date);
  };

  const handleLogout = () => navigation.replace('Login');

  const addVisitor = () => {
    if (!newVisitor.trim()) {
      Alert.alert('Error', 'Please enter a visitor name.');
      return;
    }
    const newEntry = {
      id: Date.now().toString(),
      name: newVisitor.trim(),
    };
    setVisitors([newEntry, ...visitors]);
    setNewVisitor('');
  };

  const renderVisitor = ({ item }) => (
    <View style={styles.visitorCard}>
      <Text style={styles.visitorName}>{item.name}</Text>
      <View style={styles.visitorIcons}>
        <Ionicons name="call-outline" size={20} color="white" style={styles.visitorIcon} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Hello, <Text style={styles.bold}>Suraj</Text>
        </Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={handleCalendarPress} style={styles.iconWrapper}>
            <Ionicons name="calendar-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.iconWrapper}>
            <Ionicons name="log-out-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
      </View>

      {/* Date */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>Today</Text>
      </View>

      {/* Show Calendar */}
      {showCalendar && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onDateChange}
        />
      )}

      {/* Visitor List */}
      <View style={styles.visitorListContainer}>
        <FlatList
          data={visitors}
          keyExtractor={(item) => item.id}
          renderItem={renderVisitor}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No visitors yet. Tap + to add.</Text>
          }
        />
      </View>

      {/* Floating Action Button */}
      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate('VisitorFormScreen')}
        >
          <View style={styles.fabCircle}>
            <Text style={styles.fabText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2C',
    paddingTop: 50,
  },
  header: {
    backgroundColor: '#C0392B',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: { color: '#fff', fontSize: 20 },
  bold: { fontWeight: 'bold' },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  iconWrapper: { marginLeft: 16, padding: 6 },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    backgroundColor: '#2C2C3A',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
    fontSize: 16,
  },
  dateContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  dateText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  visitorListContainer: {
    flex: 1,
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 20,
  },
  visitorCard: {
    backgroundColor: '#2C2C3A',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  visitorName: { 
    color: '#fff', 
    fontSize: 16,
    fontWeight: '500',
  },
  visitorIcons: { flexDirection: 'row' },
  visitorIcon: {
    backgroundColor: '#4CAF50',
    padding: 6,
    borderRadius: 20,
  },
  emptyText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fabCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#C0392B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '300',
    marginTop: -2,
  },
});