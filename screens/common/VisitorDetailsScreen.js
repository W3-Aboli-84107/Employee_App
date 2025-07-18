import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons';

export default function VisitorDetailsScreen({ route, navigation }) {
  const [visitor, setVisitor] = useState(route.params.visitor);

  const handleEdit = () => {
    navigation.navigate('EditVisitorScreen', {
      visitorData: visitor,
      onSave: (updatedData) => {
        setVisitor(updatedData);
      },
    });
  };

  const formatTime = (timeString) => {
    if (!timeString) return '—';
    const date = new Date(timeString);
    if (isNaN(date.getTime())) return timeString;
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.titleWrapper}>
            <Text style={styles.screenTitle}>Visitor Details</Text>
          </View>

          <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
            <Ionicons name="pencil" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: visitor.photoUrl || 'https://randomuser.me/api/portraits/men/75.jpg',
            }}
            style={styles.avatar}
          />
        </View>

        {/* Visitor Info Cards */}
        <View style={styles.card}>
          <Ionicons name="person" size={20} color="#E74C3C" />
          <Text style={styles.cardText}>{visitor.name || 'Name'}</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="call" size={20} color="#E74C3C" />
          <Text style={styles.cardText}>{visitor.phone || 'Phone'}</Text>
        </View>

        <View style={styles.card}>
          <MaterialCommunityIcons name="email-outline" size={20} color="#E74C3C" />
          <Text style={styles.cardText}>{visitor.email || 'Email'}</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="location" size={20} color="#E74C3C" />
          <Text style={styles.cardText}>{visitor.address || 'Address'}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.halfCard}>
            <Ionicons name="calendar" size={20} color="#E74C3C" />
            <Text style={styles.cardText}>{visitor.purpose || 'Purpose'}</Text>
          </View>
          <View style={styles.halfCard}>
            <Ionicons name="male-female" size={20} color="#E74C3C" />
            <Text style={styles.cardText}>{visitor.gender || 'Gender'}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.halfCard}>
            <Ionicons name="time" size={20} color="#E74C3C" />
            <Text style={styles.cardText}>
              {visitor.inTime ? formatTime(visitor.inTime) : 'In Time'}
            </Text>
          </View>
          <View style={styles.halfCard}>
            <Ionicons name="time-outline" size={20} color="#E74C3C" />
            <Text style={styles.cardText}>
              {visitor.outTime ? formatTime(visitor.outTime) : 'Out Time'}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Ionicons name="information-circle-outline" size={20} color="#E74C3C" />
          <Text style={styles.cardText}>{visitor.description || 'Description'}</Text>
        </View>

        <View style={styles.card}>
          <FontAwesome name="building" size={20} color="#E74C3C" />
          <Text style={styles.cardText}>{visitor.whomToMeet || 'Whom to Meet'}</Text>
        </View>

        <View style={styles.card}>
          <MaterialCommunityIcons name="card-account-details-outline" size={20} color="#E74C3C" />
          <Text style={styles.cardText}>{visitor.idProof || 'ID Proof'}</Text>
        </View>

        <View style={styles.card}>
          <MaterialCommunityIcons name="account-search-outline" size={20} color="#E74C3C" />
          <Text style={styles.cardText}>{visitor.relation || 'Reference'}</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="car" size={20} color="#E74C3C" />
          <Text style={styles.cardText}>{visitor.vehicle || 'Vehicle Number'}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40,
    backgroundColor: '#0D0D1A',
  },
  container: {
    backgroundColor: '#0D0D1A',
    padding: 16,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: '#0D0D1A',
  },
  backButton: {
    padding: 4,
  },
  editButton: {
    padding: 4,
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: -24,
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
    padding: 16,
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
