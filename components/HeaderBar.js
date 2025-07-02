import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function HeaderBar({ userName = 'Suraj' }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log('Selected date:', date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={showDatePicker}>
            <Ionicons name="calendar-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#ccc" style={{ marginLeft: 8 }} />
        <TextInput placeholder="Search" placeholderTextColor="#ccc" style={styles.searchInput} />
      </View>

      {/* Date Picker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#D32F2F',
    padding: 16,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topRow: {
    
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  searchBox: {
    height:50,
    flexDirection: 'row',
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 6,
    marginTop: 12,
  },
  searchInput: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
    flex: 1,
  },   
});


