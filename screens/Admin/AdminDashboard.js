import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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

  useEffect(() => {
    const loadVisitors = async () => {
      const storedVisitors = await AsyncStorage.getItem('visitors');
      if (storedVisitors) {
        setVisitors(JSON.parse(storedVisitors));
      }
    };
    loadVisitors();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('visitors', JSON.stringify(visitors));
    setFilteredVisitors(visitors);
  }, [visitors]);

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

  const handleCheckOut = (id) => {
    const updatedVisitors = visitors.map((visitor) =>
      visitor.id === id
        ? { ...visitor, outTime: new Date().toISOString() }
        : visitor
    );
    setVisitors(updatedVisitors);
  };

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.updatedVisitor) {
        const updatedVisitor = route.params.updatedVisitor;
        const updatedList = visitors.map((v) =>
          v.id === updatedVisitor.id ? updatedVisitor : v
        );
        setVisitors(updatedList);
        navigation.setParams({ updatedVisitor: null });
      }
    }, [route.params?.updatedVisitor])
  );

  useEffect(() => {
    if (route.params?.newVisitor) {
      const newVisitor = {
        ...route.params.newVisitor,
        id: Date.now().toString(),
        checkInTime:
          route.params.newVisitor.checkInTime || new Date().toISOString(),
      };
      setVisitors((prev) => [newVisitor, ...prev]);
      navigation.setParams({ newVisitor: null });
    }
  }, [route.params?.newVisitor]);

  const handleCallVisitor = (phone) => {
    console.log('Calling:', phone);
  };

  return (
    <View style={styles.screen}>
      <HeaderBar onSearch={setSearchQuery} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Today's Visitors</Text>

        {filteredVisitors.map((visitor, index) => (
          <VisitorCard
            key={visitor.id || index}
            name={visitor.name}
            date={`Checked in at ${new Date(visitor.checkInTime).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}`}
            onCall={() => handleCallVisitor(visitor.phone)}
            onCheckOut={() => handleCheckOut(visitor.id)}
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
              setVisitors((prev) => [newVisitorWithId, ...prev]);
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
