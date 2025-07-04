import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const dummyVisitors = [
  {
    id: '1',
    name: 'Suresh Khanna',
    phone: '91-7845767896',
    email: 'sureshkhanne@gmail.com',
    address: '12-48, sector-2, lane-6, kuruli, Pune 411025',
    gender: 'Male',
    visitType: 'Interview',
    inTime: '12:30 pm',
    outTime: '1:00 pm',
    purpose: 'Came for an UI/UX design interview',
    department: 'HR',
    idProof: 'Adhar card (2435 3424 2453)',
    reference: 'Friend',
    vehicle: 'MH 14 KV 2533',
    photoUrl: 'https://example.com/image.jpg',
  }
];

export default function VisitorListScreen() {
  const navigation = useNavigation();

  return (
    <FlatList
      data={dummyVisitors}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('VisitorDetails', { visitor: item })}
        >
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.phone}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
  card: {
    backgroundColor: '#1E1E2E',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});
