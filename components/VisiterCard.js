import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../constants/colors';

const VisitorCard = ({ name, date, onCall, onPress, onCheckOut }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardContent}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name || 'Unknown Visitor'}</Text>
          <Text style={styles.date}>{date || 'No time recorded'}</Text>
        </View>

        <View style={styles.actions}>
          {/* <TouchableOpacity onPress={onCheckOut} style={styles.iconButton}>
            <MaterialCommunityIcons name="logout" size={22} color="#fff" />
          </TouchableOpacity> */}
          {onCheckOut && (
  <TouchableOpacity onPress={onCheckOut} style={styles.iconButton}>
    <MaterialCommunityIcons name="logout" size={22} color="#fff" />
  </TouchableOpacity>
)}

          <TouchableOpacity
            onPress={onCall}
            style={styles.iconButton}
          >
            <Ionicons name="call-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  date: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconButton: {
    backgroundColor: colors.primary,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10, // replaces "gap"
  },
});

export default VisitorCard;