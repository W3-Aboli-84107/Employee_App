import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert,
  Modal, Pressable, Image
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import Checkbox from 'expo-checkbox';

export default function VisitorFormScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [whomToMeet, setWhomToMeet] = useState('');
  const [remark, setRemark] = useState('');
  const [photoUri, setPhotoUri] = useState('');
<<<<<<< HEAD

=======
  const [panNumber, setPanNumber] = useState('');
  const [otherIdDetails, setOtherIdDetails] = useState('');
>>>>>>> 0bfe15c7cfb8dbee8cc4e6833479c6bbe6657dc7
  const [gender, setGender] = useState('');
  const [genderModalVisible, setGenderModalVisible] = useState(false);

  const [purposeOptions, setPurposeOptions] = useState([
<<<<<<< HEAD
    { label: 'Meeting', selected: false },
    { label: 'Delivery', selected: false },
    { label: 'Interview', selected: false },
=======
    { id: 1, label: 'IT', value: false },
    { id: 2, label: 'Interview', value: false },
    { id: 3, label: 'HealthCare', value: false },
    { id: 4, label: 'Digital Marketing', value: false },
    { id: 5, label: 'Training', value: false },
    { id: 6, label: 'BD', value: false },
    { id: 7, label: 'Others', value: false },
>>>>>>> 0bfe15c7cfb8dbee8cc4e6833479c6bbe6657dc7
  ]);
  const [purposeModalVisible, setPurposeModalVisible] = useState(false);

  const [referenceOptions, setReferenceOptions] = useState([
    { label: 'Manager', selected: false },
    { label: 'HR', selected: false },
    { label: 'Employee', selected: false },
    { label: 'Friend', selected: false },
  ]);
  const [referenceModalVisible, setReferenceModalVisible] = useState(false);

  const [idProofModalVisible, setIdProofModalVisible] = useState(false);
  const [selectedIdProof, setSelectedIdProof] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Camera access is required to capture photo.');
      }
    })();
  }, []);

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  const getSelectedPurpose = () =>
    purposeOptions.filter(p => p.selected).map(p => p.label).join(', ');
  const getSelectedReference = () =>
    referenceOptions.filter(r => r.selected).map(r => r.label).join(', ');

  const handleSave = async () => {
    if (!name.trim() || !phone.trim() || !email.trim() || !address.trim() || !gender || !getSelectedPurpose() || !description.trim() || !whomToMeet.trim()) {
      Alert.alert('Validation Error', 'All required fields must be filled.');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      Alert.alert('Invalid Phone Number', 'Phone number must be 10 digits.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Enter a valid email address.');
      return;
    }
    if (selectedIdProof === 'Aadhar Card' && !/^\d{12}$/.test(aadharNumber)) {
      Alert.alert('Invalid Aadhar Number', 'Aadhar number must be 12 digits.');
      return;
    }
    if (!photoUri) {
      Alert.alert('Photo Missing', 'Please capture a photo.');
      return;
    }

    const visitorData = {
      name,
      phone,
      email,
      address,
      gender,
      visitType: getSelectedPurpose(),
      inTime: new Date().toLocaleTimeString(),
      outTime: '',
      purpose: description,
      department: whomToMeet,
      idProof: selectedIdProof,
      aadharNumber: selectedIdProof === 'Aadhar Card' ? aadharNumber : '',
      reference: getSelectedReference(),
      remark,
      photoUrl: photoUri,
      timestamp: Date.now(),
    };

    try {
      const existingData = await AsyncStorage.getItem('visitors');
      const visitors = existingData ? JSON.parse(existingData) : [];
      visitors.push(visitorData);
      await AsyncStorage.setItem('visitors', JSON.stringify(visitors));
      navigation.navigate('VisitorDetails', { visitor: visitorData });
    } catch (error) {
      console.error('Error saving visitor:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Visitor’s Detail</Text>

      {/* Name, Phone, Email, Address */}
      {[{ icon: 'person', placeholder: 'Visitor Name', value: name, setter: setName },
<<<<<<< HEAD
        { icon: 'call', placeholder: 'Phone number', value: phone, setter: setPhone, keyboardType: 'phone-pad', maxLength: 10 },
        { icon: 'email-outline', placeholder: 'Email', value: email, setter: setEmail, keyboardType: 'email-address' },
        { icon: 'location-outline', placeholder: 'Address', value: address, setter: setAddress }].map((field, i) => (
=======
      { icon: 'call', placeholder: 'Phone number', value: phone, setter: setPhone, keyboardType: 'phone-pad', maxLength: 10 },
      { icon: 'email-outline', placeholder: 'Email', value: email, setter: setEmail, keyboardType: 'email-address' },
      { icon: 'location-outline', placeholder: 'Address', value: address, setter: setAddress }].map((field, i) => (
>>>>>>> 0bfe15c7cfb8dbee8cc4e6833479c6bbe6657dc7
        <View key={i} style={styles.inputBox}>
          <Ionicons name={field.icon} size={20} color="#E74C3C" style={styles.icon} />
          <TextInput
            placeholder={field.placeholder}
            placeholderTextColor="#aaa"
            style={styles.input}
            value={field.value}
            onChangeText={field.setter}
            keyboardType={field.keyboardType || 'default'}
            maxLength={field.maxLength}
          />
        </View>
      ))}

      {/* Gender */}
      <TouchableOpacity style={styles.inputBox} onPress={() => setGenderModalVisible(true)}>
        <Ionicons name="male-female" size={20} color="#E74C3C" style={styles.icon} />
        <Text style={[styles.input, { paddingTop: 12 }]}>{gender || 'Select Gender'}</Text>
      </TouchableOpacity>

      {/* Purpose */}
      <TouchableOpacity style={styles.inputBox} onPress={() => setPurposeModalVisible(true)}>
        <Ionicons name="calendar" size={20} color="#E74C3C" style={styles.icon} />
        <Text style={[styles.input, { paddingTop: 12 }]}>{getSelectedPurpose() || 'Select Purpose'}</Text>
      </TouchableOpacity>

      {/* Description */}
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

      {/* Whom to meet */}
      <View style={styles.inputBox}>
        <FontAwesome name="users" size={20} color="#E74C3C" style={styles.icon} />
        <TextInput placeholder="Whom to meet" placeholderTextColor="#aaa" style={styles.input} value={whomToMeet} onChangeText={setWhomToMeet} />
      </View>

      {/* ID Proof */}
      <TouchableOpacity style={styles.inputBox} onPress={() => setIdProofModalVisible(true)}>
        <MaterialCommunityIcons name="card-account-details-outline" size={20} color="#E74C3C" style={styles.icon} />
        <Text style={[styles.input, { paddingTop: 12 }]}>
          {selectedIdProof || 'Select ID Proof'}
        </Text>
      </TouchableOpacity>
<<<<<<< HEAD

      {/* Aadhar Number */}
      {selectedIdProof === 'Aadhar Card' && (
        <View style={styles.inputBox}>
          <MaterialCommunityIcons name="card-bulleted-outline" size={20} color="#E74C3C" style={styles.icon} />
          <TextInput
            placeholder="Enter your Aadhar number"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={aadharNumber}
            onChangeText={setAadharNumber}
            keyboardType="numeric"
            maxLength={12}
          />
        </View>
      )}

=======

      {/* Aadhar Number */}
      {selectedIdProof === 'Aadhar Card' && (
        <View style={styles.inputBox}>
          <MaterialCommunityIcons name="card-bulleted-outline" size={20} color="#E74C3C" style={styles.icon} />
          <TextInput
            placeholder="Enter your Aadhar number"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={aadharNumber}
            onChangeText={setAadharNumber}
            keyboardType="numeric"
            maxLength={12}
          />
          {/* PanCard Number */}
          {selectedIdProof === 'Pan Card' && (
            <View style={styles.inputBox}>
              <MaterialCommunityIcons name="card-text-outline" size={20} color="#E74C3C" style={styles.icon} />
              <TextInput
                placeholder="Enter your PAN number"
                placeholderTextColor="#aaa"
                style={styles.input}
                value={panNumber}
                onChangeText={setPanNumber}
                autoCapitalize="characters"
                maxLength={10}
              />
            </View>
          )}

          {selectedIdProof === 'Others' && (
            <View style={styles.inputBox}>
              <MaterialCommunityIcons name="card-text-outline" size={20} color="#E74C3C" style={styles.icon} />
              <TextInput
                placeholder="Enter ID details"
                placeholderTextColor="#aaa"
                style={styles.input}
                value={otherIdDetails}
                onChangeText={setOtherIdDetails}
              />
            </View>
          )}

        </View>
      )}

>>>>>>> 0bfe15c7cfb8dbee8cc4e6833479c6bbe6657dc7
      {/* Reference */}
      <TouchableOpacity style={styles.inputBox} onPress={() => setReferenceModalVisible(true)}>
        <MaterialCommunityIcons name="account-search-outline" size={20} color="#E74C3C" style={styles.icon} />
        <Text style={[styles.input, { paddingTop: 12 }]}>{getSelectedReference() || 'Select Reference'}</Text>
      </TouchableOpacity>

      {/* Photo capture */}
      <View style={styles.photoSection}>
        {photoUri ? <Image source={{ uri: photoUri }} style={styles.image} /> : <Text style={styles.photoPlaceholderText}>No photo captured</Text>}
        <TouchableOpacity onPress={takePhoto} style={styles.photoButton}>
          <Text style={styles.photoButtonText}>Capture Photo</Text>
        </TouchableOpacity>
      </View>

      {/* Remark */}
      <View style={styles.textAreaBox}>
        <MaterialCommunityIcons name="comment-outline" size={20} color="#E74C3C" style={styles.icon} />
        <TextInput placeholder="Remark (optional)" placeholderTextColor="#aaa" style={styles.textArea} multiline value={remark} onChangeText={setRemark} />
      </View>

      {/* Action buttons */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.actionText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.actionText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Gender Modal */}
      <Modal visible={genderModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Select Gender</Text>
            {['Male', 'Female', 'Other'].map(option => (
              <TouchableOpacity key={option} style={styles.radioItem} onPress={() => { setGender(option); setGenderModalVisible(false); }}>
                <Ionicons name={gender === option ? 'radio-button-on' : 'radio-button-off'} size={20} color="#E74C3C" />
                <Text style={styles.modalText}>{option}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setGenderModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.photoButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Purpose Modal */}
      <Modal visible={purposeModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Select Purpose</Text>
            {purposeOptions.map((option, i) => (
              <TouchableOpacity key={i} style={styles.checkboxItem} onPress={() => {
                const updated = [...purposeOptions];
                updated[i].selected = !updated[i].selected;
                setPurposeOptions(updated);
              }}>
                <Checkbox value={option.selected} color="#E74C3C" />
                <Text style={styles.modalText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setPurposeModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.photoButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Reference Modal */}
      <Modal visible={referenceModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Select Reference</Text>
            {referenceOptions.map((option, i) => (
              <TouchableOpacity key={i} style={styles.checkboxItem} onPress={() => {
                const updated = [...referenceOptions];
                updated[i].selected = !updated[i].selected;
                setReferenceOptions(updated);
              }}>
                <Checkbox value={option.selected} color="#E74C3C" />
                <Text style={styles.modalText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setReferenceModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.photoButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
<<<<<<< HEAD

      {/* ID Proof Modal */}
      <Modal visible={idProofModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Select ID Proof</Text>
            {['Pan Card', 'Aadhar Card', 'Others'].map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.radioItem}
                onPress={() => {
                  setSelectedIdProof(option);
                  if (option !== 'Aadhar Card') setAadharNumber('');
                  setIdProofModalVisible(false);
                }}>
                <Ionicons name={selectedIdProof === option ? 'radio-button-on' : 'radio-button-off'} size={20} color="#E74C3C" />
                <Text style={styles.modalText}>{option}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setIdProofModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.photoButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
=======

      {/* ID Proof Modal */}
      <Modal visible={idProofModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Select ID Proof</Text>

            {['Pan Card', 'Aadhar Card', 'Others'].map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.radioItem}
                onPress={() => {
                  setSelectedIdProof(option);
                  if (option !== 'Aadhar Card') setAadharNumber('');
                  if (option !== 'Pan Card') setPanNumber('');
                  if (option !== 'Others') setOtherIdDetails('');
                }}
              >
                <Ionicons
                  name={selectedIdProof === option ? 'radio-button-on' : 'radio-button-off'}
                  size={20}
                  color="#E74C3C"
                />
                <Text style={styles.modalText}>{option}</Text>
              </TouchableOpacity>
            ))}

            {/* Aadhar input field */}
            {selectedIdProof === 'Aadhar Card' && (
              <View style={styles.inputBox}>
                <MaterialCommunityIcons
                  name="card-account-details-outline"
                  size={20}
                  color="#E74C3C"
                  style={styles.icon}
                />
                <TextInput
                  placeholder="Enter your Aadhar number"
                  placeholderTextColor="#aaa"
                  style={styles.input}
                  value={aadharNumber}
                  onChangeText={setAadharNumber}
                  keyboardType="numeric"
                  maxLength={12}
                />
              </View>
            )}

            {/* PAN Card input field */}
            {selectedIdProof === 'Pan Card' && (
              <View style={styles.inputBox}>
                <MaterialCommunityIcons
                  name="card-text-outline"
                  size={20}
                  color="#E74C3C"
                  style={styles.icon}
                />
                <TextInput
                  placeholder="Enter your PAN number"
                  placeholderTextColor="#aaa"
                  style={styles.input}
                  value={panNumber}
                  onChangeText={(text) => setPanNumber(text.toUpperCase())}
                  autoCapitalize="characters"
                  maxLength={10}
                />
              </View>
            )}

            {/* Others ID input field */}
            {selectedIdProof === 'Others' && (
              <View style={styles.inputBox}>
                <MaterialCommunityIcons
                  name="card-text-outline"
                  size={20}
                  color="#E74C3C"
                  style={styles.icon}
                />
                <TextInput
                  placeholder="Enter ID details"
                  placeholderTextColor="#aaa"
                  style={styles.input}
                  value={otherIdDetails}
                  onChangeText={setOtherIdDetails}
                />
              </View>
            )}

            <TouchableOpacity
              onPress={() => setIdProofModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.photoButtonText}>Close</Text>
            </TouchableOpacity>
          </View>


>>>>>>> 0bfe15c7cfb8dbee8cc4e6833479c6bbe6657dc7
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D0D1A', padding: 20 },
  title: { fontSize: 18, color: '#fff', fontWeight: 'bold', marginBottom: 16 },
  inputBox: {
    flexDirection: 'row', backgroundColor: '#1E1E2C', borderRadius: 8,
    padding: 10, alignItems: 'center', marginBottom: 10,
  },
  input: { color: '#fff', marginLeft: 10, flex: 1 },
  icon: { marginLeft: 4 },
  textAreaBox: {
    flexDirection: 'row', backgroundColor: '#1E1E2C', borderRadius: 8,
    padding: 10, alignItems: 'flex-start', marginBottom: 10,
  },
  textArea: { color: '#fff', marginLeft: 10, flex: 1, height: 80, textAlignVertical: 'top' },
  photoSection: { alignItems: 'center', marginVertical: 20 },
  image: { width: 100, height: 100, borderRadius: 8, marginBottom: 10 },
  photoPlaceholderText: { color: '#aaa', marginBottom: 10 },
  photoButton: { backgroundColor: '#E74C3C', padding: 10, borderRadius: 6 },
  photoButtonText: { color: '#fff', fontWeight: 'bold' },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  cancelButton: { backgroundColor: '#1E1E2C', paddingVertical: 14, paddingHorizontal: 28, borderRadius: 8 },
  saveButton: { backgroundColor: '#E74C3C', paddingVertical: 14, paddingHorizontal: 28, borderRadius: 8 },
  actionText: { color: '#fff', fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
  modalBox: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '80%' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  checkboxItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  radioItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 6 },
  modalText: { fontSize: 16, marginLeft: 10 },
  closeButton: { backgroundColor: '#E74C3C', padding: 10, marginTop: 10, borderRadius: 6, alignItems: 'center' },
<<<<<<< HEAD
});
=======
});
>>>>>>> 0bfe15c7cfb8dbee8cc4e6833479c6bbe6657dc7
