import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VisitorFormScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [purpose, setPurpose] = useState('');
  const [description, setDescription] = useState('');
  const [whomToMeet, setWhomToMeet] = useState('');
  const [idProof, setIdProof] = useState('');
  const [reference, setReference] = useState('');

  const handleSave = async () => {
    const visitorData = {
      name,
      phone,
      email,
      address,
      gender,
      visitType: purpose,
      inTime: '12:30 pm',
      outTime: '1:00 pm',
      purpose: description,
      department: whomToMeet,
      idProof,
      reference,
      vehicle: 'MH 14 KV 2533',
      photoUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      timestamp: Date.now(),
    };

    try {
      const existingData = await AsyncStorage.getItem('visitors');
      const parsedData = existingData ? JSON.parse(existingData) : [];
      parsedData.push(visitorData);
      await AsyncStorage.setItem('visitors', JSON.stringify(parsedData));

      navigation.navigate('VisitorDetails', { visitor: visitorData });
    } catch (error) {
      console.error('Error saving visitor:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Visitor’s Detail</Text>

      <View style={styles.inputBox}>
        <Ionicons name="person" size={20} color="#E74C3C" style={styles.icon} />
        <TextInput
          placeholder="Visitor Name"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="call" size={20} color="#E74C3C" style={styles.icon} />
        <TextInput
          placeholder="Phone number"
          placeholderTextColor="#aaa"
          style={styles.input}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <View style={styles.inputBox}>
        <MaterialCommunityIcons name="email-outline" size={20} color="#E74C3C" style={styles.icon} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#aaa"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="location-outline" size={20} color="#E74C3C" style={styles.icon} />
        <TextInput
          placeholder="Address"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <View style={styles.pickerBox}>
        <Ionicons name="male-female" size={20} color="#E74C3C" style={styles.icon} />
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <View style={styles.pickerBox}>
        <Ionicons name="calendar" size={20} color="#E74C3C" style={styles.icon} />
        <Picker
          selectedValue={purpose}
          onValueChange={(itemValue) => setPurpose(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Purpose" value="" />
          <Picker.Item label="Meeting" value="Meeting" />
          <Picker.Item label="Delivery" value="Delivery" />
          <Picker.Item label="Interview" value="Interview" />
        </Picker>
      </View>

      <View style={styles.textAreaBox}>
        <Ionicons name="document-text-outline" size={20} color="#E74C3C" style={styles.icon} />
        <TextInput
          placeholder="Description"
          placeholderTextColor="#aaa"
          style={styles.textArea}
          multiline
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <View style={styles.inputBox}>
        <FontAwesome name="users" size={20} color="#E74C3C" style={styles.icon} />
        <TextInput
          placeholder="Whom to meet"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={whomToMeet}
          onChangeText={setWhomToMeet}
        />
      </View>

      <View style={styles.inputBox}>
        <MaterialCommunityIcons name="card-account-details-outline" size={20} color="#E74C3C" style={styles.icon} />
        <TextInput
          placeholder="ID proof (optional)"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={idProof}
          onChangeText={setIdProof}
        />
      </View>

      <View style={styles.pickerBox}>
        <MaterialCommunityIcons name="account-search-outline" size={20} color="#E74C3C" style={styles.icon} />
        <Picker
          selectedValue={reference}
          onValueChange={(itemValue) => setReference(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Reference by (optional)" value="" />
          <Picker.Item label="Manager" value="Manager" />
          <Picker.Item label="HR" value="HR" />
          <Picker.Item label="Employee" value="Employee" />
          <Picker.Item label="Friend" value="Friend" />
        </Picker>
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.actionText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.actionText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D1A',
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputBox: {
    flexDirection: 'row',
    backgroundColor: '#1E1E2C',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    color: '#fff',
    marginLeft: 10,
    flex: 1,
  },
  icon: {
    marginLeft: 4,
  },
  pickerBox: {
    flexDirection: 'row',
    backgroundColor: '#1E1E2C',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  picker: {
    flex: 1,
    color: '#fff',
  },
  textAreaBox: {
    flexDirection: 'row',
    backgroundColor: '#1E1E2C',
    borderRadius: 8,
    padding: 10,
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  textArea: {
    color: '#fff',
    marginLeft: 10,
    flex: 1,
    height: 80,
    textAlignVertical: 'top',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  cancelButton: {
    backgroundColor: '#1E1E2C',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  saveButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
