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
import DateTimePicker from '@react-native-community/datetimepicker';


export default function AdminDashboard({ navigation }) {
  const route = useRoute();
  const [searchQuery, setSearchQuery] = useState('');
  const [visitors, setVisitors] = useState([]);
  const [filteredVisitors, setFilteredVisitors] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
          setSelectedDate(selectedDate);
          filterVisitorsByDate(selectedDate);
        }
      };


  // Load all visitors once on mount (only if needed for backup)
  useEffect(() => {
    const loadVisitors = async () => {
      const storedVisitors = await AsyncStorage.getItem('visitors');
      if (storedVisitors) {
        const parsed = JSON.parse(storedVisitors);
        setVisitors(parsed);
      }
    };
    loadVisitors();
  }, []);

  // Refresh today's visitors on focus
  useFocusEffect(
    useCallback(() => {
      const fetchVisitors = async () => {
        const storedVisitors = await AsyncStorage.getItem('visitors');
        if (storedVisitors) {
          const parsed = JSON.parse(storedVisitors);

          // Filter only today's visitors
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          const todayVisitors = parsed.filter((visitor) => {
            const checkInDate = new Date(visitor.checkInTime);
            checkInDate.setHours(0, 0, 0, 0);
            return checkInDate.getTime() === today.getTime();
          });

          setVisitors(
            todayVisitors.sort(
              (a, b) => new Date(b.checkInTime) - new Date(a.checkInTime)
            )
          );
        }
      };
      fetchVisitors();
    }, [])
  );

  // Save and update filtered list
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

  // Handle checkout
  const handleCheckOut = (id) => {
    const updatedVisitors = visitors.map((visitor) =>
      visitor.id === id
        ? { ...visitor, outTime: new Date().toISOString() }
        : visitor
    );
    setVisitors(updatedVisitors);
  };

  // Handle new visitor from route
  useEffect(() => {
    if (route.params?.newVisitor) {
      const newVisitor = {
        ...route.params.newVisitor,
        id: Date.now().toString(),
        checkInTime:
          route.params.newVisitor.checkInTime || new Date().toISOString(),
      };
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const checkInDate = new Date(newVisitor.checkInTime);
      checkInDate.setHours(0, 0, 0, 0);

      if (checkInDate.getTime() === today.getTime()) {
        setVisitors((prev) => [newVisitor, ...prev]);
      }

      navigation.setParams({ newVisitor: null });
    }
  }, [route.params?.newVisitor]);

  // Call visitor
  const handleCallVisitor = (phone) => {
    if (phone) {
      Linking.openURL(`tel:${phone}`).catch((err) =>
        console.error('Failed to open dialer:', err)
      );
    }
  };

  return (
    <View style={styles.screen}>
      {/* <HeaderBar onSearch={setSearchQuery} /> */}
      <HeaderBar 
          onSearch={setSearchQuery} 
          onDatePress={() => setShowDatePicker(true)} 
        />


  {showDatePicker && (
    <DateTimePicker
      value={selectedDate}
      mode="date"
      display="default"
      onChange={handleDateChange}
    />
  )}

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Today's Visitors</Text>

        {filteredVisitors.map((visitor, index) => (
          <VisitorCard
            key={visitor.id || index}
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
        onPress={() =>
          navigation.navigate('VisitorForm', {
            onSave: (newVisitor) => {
              const newVisitorWithId = {
                ...newVisitor,
                id: Date.now().toString(),
                checkInTime:
                  newVisitor.checkInTime || new Date().toISOString(),
              };

              const today = new Date();
              today.setHours(0, 0, 0, 0);
              const checkInDate = new Date(newVisitorWithId.checkInTime);
              checkInDate.setHours(0, 0, 0, 0);

              if (checkInDate.getTime() === today.getTime()) {
                setVisitors((prev) => [newVisitorWithId, ...prev]);
              }
            },
          })
        }
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
  selectedDate: {
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 8,
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
