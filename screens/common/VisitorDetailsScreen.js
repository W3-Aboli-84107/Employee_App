import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

export default function VisitorDetailsScreen({ route, navigation }) {
  const [visitor, setVisitor] = useState(route.params.visitor);

  const handleEdit = () => {
    navigation.navigate('EditVisitorScreen', {
      visitorData: visitor,
      onSave: (updatedData) => {
        setVisitor(updatedData); // update local state with new visitor data
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.screenTitle}>Visitor Details</Text>
          <Text style={styles.headerTitle}>{visitor.name}</Text>
        </View>
        <TouchableOpacity onPress={handleEdit}>
          <Ionicons name="pencil" size={20} color="#E74C3C" />
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: visitor.photoUrl || 'https://randomuser.me/api/portraits/men/75.jpg',
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.card}>
        <Ionicons name="person" size={20} color="#E74C3C" />
        <Text style={styles.cardText}>{visitor.name}</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="call" size={20} color="#E74C3C" />
        <Text style={styles.cardText}>{visitor.phone}</Text>
      </View>

      <View style={styles.card}>
        <MaterialCommunityIcons name="email-outline" size={20} color="#E74C3C" />
        <Text style={styles.cardText}>{visitor.email}</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="location" size={20} color="#E74C3C" />
        <Text style={styles.cardText}>{visitor.address}</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.halfCard}>
          <Ionicons name="calendar" size={20} color="#E74C3C" />
          <Text style={styles.cardText}>{visitor.purpose}</Text>
        </View>
        <View style={styles.halfCard}>
          <Ionicons name="male-female" size={20} color="#E74C3C" />
          <Text style={styles.cardText}>{visitor.gender}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.halfCard}>
          <Ionicons name="time" size={20} color="#E74C3C" />
          <Text style={styles.cardText}>{visitor.inTime}</Text>
        </View>
        <View style={styles.halfCard}>
          <Ionicons name="time-outline" size={20} color="#E74C3C" />
          <Text style={styles.cardText}>{visitor.outTime}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Ionicons name="information-circle-outline" size={20} color="#E74C3C" />
        <Text style={styles.cardText}>{visitor.description}</Text>
      </View>

      <View style={styles.card}>
        <FontAwesome name="building" size={20} color="#E74C3C" />
        <Text style={styles.cardText}>{visitor.whomToMeet}</Text>
      </View>

      <View style={styles.card}>
        <MaterialCommunityIcons name="card-account-details-outline" size={20} color="#E74C3C" />
        <Text style={styles.cardText}>{visitor.idProof}</Text>
      </View>

      <View style={styles.card}>
        <MaterialCommunityIcons name="account-search-outline" size={20} color="#E74C3C" />
        <Text style={styles.cardText}>{visitor.relation}</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="car" size={20} color="#E74C3C" />
        <Text style={styles.cardText}>{visitor.vehicle}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D1A',
    padding: 16,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTextContainer: {
    alignItems: 'center',
  },
  screenTitle: {
    color: '#efe0deff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: '#E74C3C',
    borderWidth: 2,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E2C',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardText: {
    color: '#fff',
    marginLeft: 12,
    fontSize: 15,
    flexShrink: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E2C',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    width: '48%',
  },

  
});
