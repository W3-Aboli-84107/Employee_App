import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import VisitorCard from '../../components/VisiterCard';
import colors from '../../constants/colors';

const groupVisitorsByDate = (visitors) => {
  const grouped = {};

  const getDayLabel = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    const diff = Math.floor((today - date) / (1000 * 60 * 60 * 24));

    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    return `${diff} Days Ago`;
  };

  visitors.forEach((visitor) => {
    const label = getDayLabel(visitor.checkInTime);
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
      <HeaderBar onSearch={setSearchQuery} />
      <ScrollView contentContainerStyle={styles.container}>
        {Object.keys(groupedVisitors).length === 0 ? (
          <Text style={styles.noVisitorsText}>No visitors found.</Text>
        ) : (
          Object.entries(groupedVisitors).map(([day, visitors]) => (
            <View key={day} style={{ marginBottom: 20 }}>
              <Text style={styles.label}>{day}</Text>
              {/* {visitors.map((visitor) => (
                <VisitorCard
                  key={visitor.id}
                  name={visitor.name}
                  date={`Checked in at ${new Date(visitor.checkInTime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}`}
                  onCall={() => console.log('Calling', visitor.phone)}
                  onPress={() =>
                    navigation.navigate('VisitorDetails', { visitor })
                  }
                />
              ))} */}

              {visitors.map((visitor, index) => (
  <VisitorCard
    key={visitor.id || `${visitor.name}-${index}`}
    name={visitor.name}
    date={`Checked in at ${new Date(visitor.checkInTime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })}`}
    onCall={() => console.log('Calling', visitor.phone)}
    onPress={() =>
      navigation.navigate('VisitorDetails', { visitor })
    }
  />
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
  noVisitorsText: {
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});
