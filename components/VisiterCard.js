import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const VisitorCard = ({ name, date, onCall }) => {
  const [outTime, setOutTime] = useState(null);
  const [isTimedOut, setIsTimedOut] = useState(false);

  const handleTimeout = () => {
    console.log('Marking timeout...');
    setTimeout(() => {
      const currentTime = new Date();
      const formattedTime = currentTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });

      setOutTime(formattedTime);
      setIsTimedOut(true);

      console.log(`Visitor has been timed out at ${formattedTime}`);
    }, 2000); // 2 seconds delay
  };

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>
          {isTimedOut ? `Out Time: ${outTime}` : date}
        </Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={handleTimeout}
          disabled={isTimedOut} // prevent multiple clicks
        >
          <Ionicons
            name="time-outline"
            size={20}
            color={isTimedOut ? '#aaa' : '#fff'}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onCall}>
          <Ionicons
            name="call-outline"
            size={20}
            color="#fff"
            style={[styles.icon, styles.callIcon]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  date: {
    color: "gray",
    fontSize: 12,
    marginTop: 4,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  callIcon: {
    // backgroundColor: '#2ecc71',
    borderRadius: 20,
    padding: 4,
  },
});

export default VisitorCard;
