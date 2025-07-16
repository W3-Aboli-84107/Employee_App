import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert,
  Modal, Pressable, Image
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import Checkbox from 'expo-checkbox';

export default function VisitorFormScreen({ navigation, route }) {
  const { onSave } = route.params || {};
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [whomToMeet, setWhomToMeet] = useState('');
  const [remark, setRemark] = useState('');
  const [photoUri, setPhotoUri] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');

  const [panNumber, setPanNumber] = useState('');
  const [otherIdDetails, setOtherIdDetails] = useState('');

  const [gender, setGender] = useState('');
  const [genderModalVisible, setGenderModalVisible] = useState(false);

  const [purposeOptions, setPurposeOptions] = useState([
    { label: 'Meeting', selected: false },
    { label: 'Delivery', selected: false },
    { label: 'Interview', selected: false },
    { id: 1, label: 'IT', value: false },
    { id: 2, label: 'Interview', value: false },
    { id: 3, label: 'HealthCare', value: false },
    { id: 4, label: 'Digital Marketing', value: false },
    { id: 5, label: 'Training', value: false },
    { id: 6, label: 'BD', value: false },
    { id: 7, label: 'Others', value: false },
  ]);
  const [purposeModalVisible, setPurposeModalVisible] = useState(false);

  const [referenceOptions, setReferenceOptions] = useState([
    { label: 'Social Media', selected: false },
    { label: 'Career Website', selected: false },
    { label: 'Friend', selected: false },
    { label: 'Others', selected: false },
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
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
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
      // inTime: new Date().toLocaleTimeString(),
      inTime: new Date().toISOString(),
      outTime: '',
      purpose: description,
      department: whomToMeet,
      idProof: selectedIdProof,
      aadharNumber: selectedIdProof === 'Aadhar Card' ? aadharNumber : '',
      panNumber: selectedIdProof === 'Pan Card' ? panNumber : '',
      otherIdDetails: selectedIdProof === 'Others' ? otherIdDetails : '',
      reference: getSelectedReference(),
      // remark,
      photoUrl: photoUri,
      vehicleNumber,
      timestamp: Date.now(),
    };

    try {
      const existingData = await AsyncStorage.getItem('visitors');
      const visitors = existingData ? JSON.parse(existingData) : [];
      visitors.push(visitorData);
      await AsyncStorage.setItem('visitors', JSON.stringify(visitors));

      if (onSave) {
        onSave(visitorData);
      }

      navigation.goBack();
    } catch (error) {
      console.error('Error saving visitor:', error);
    }
  };

//   return (
//     <ScrollView style={styles.container}>
//      <View style={styles.header}>
//   <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//     <Ionicons name="arrow-back" size={24} color="#fff" />
//   </TouchableOpacity>
//   <Text style={styles.title}>Visitor's Detail</Text>
//   <View style={{ width: 24 }} /> {/* to balance the layout visually */}
// </View>

return (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>Visitor's Detail</Text>
      <View style={{ width: 24 }} />
    </View>
      {[
        { icon: 'person', placeholder: 'Visitor Name', value: name, setter: setName },
        { icon: 'call', placeholder: 'Phone number', value: phone, setter: setPhone, keyboardType: 'phone-pad', maxLength: 10 },
        { icon: 'email-outline', placeholder: 'Email', value: email, setter: (text) => setEmail(text.toLowerCase()), keyboardType: 'email-address' },
        { icon: 'location-outline', placeholder: 'Address', value: address, setter: setAddress },
      ].map((field, i) => (
        <View key={i} style={styles.inputBox}>
          {field.icon === 'email-outline' ? (
            <MaterialCommunityIcons name={field.icon} size={20} color="#E74C3C" style={styles.icon} />
          ) : (
            <Ionicons name={field.icon} size={20} color="#E74C3C" style={styles.icon} />
          )}
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

      {/* Vehicle Number (optional) */}
      <View style={styles.inputBox}>
        <MaterialCommunityIcons name="car" size={20} color="#E74C3C" style={styles.icon} />
        <TextInput
          placeholder="Vehicle Number (optional)"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={vehicleNumber}
          onChangeText={setVehicleNumber}
          autoCapitalize="characters"
        />
      </View>

      {/* Gender */}
      <TouchableOpacity style={styles.inputBox} onPress={() => setGenderModalVisible(true)}>
        <Ionicons name="male-female" size={20} color="#E74C3C" style={styles.icon} />
        <Text style={[styles.input, { paddingTop: 12 }]}>{gender || 'Select Gender'}</Text>
      </TouchableOpacity>

      {/* Purpose */}
      <TouchableOpacity style={styles.inputBox} onPress={() => setPurposeModalVisible(true)}>
        <Ionicons name="calendar" 
        size={20}
         color="#E74C3C" 
         style={styles.icon} />
        <Text style={[styles.input, { paddingTop: 12 }]}>
          {getSelectedPurpose() || 'Select Purpose'}
          </Text>
      </TouchableOpacity>

      {/* Description */}
      <View style={styles.inputBox}>
  <Ionicons name="document-text-outline" size={20} color="#E74C3C" style={styles.icon} />
  <TextInput
    placeholder="Description"
    placeholderTextColor="#aaa"
    style={styles.input}
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

      {selectedIdProof === 'Pan Card' && (
        <View style={styles.inputBox}>
          <MaterialCommunityIcons name="card-text-outline" size={20} color="#E74C3C" style={styles.icon} />
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
      {/* <View style={styles.textAreaBox}>
        <MaterialCommunityIcons name="comment-outline" size={20} color="#E74C3C" style={styles.icon} />
        <TextInput placeholder="Remark (optional)" placeholderTextColor="#aaa" style={styles.textArea} multiline value={remark} onChangeText={setRemark} />
      </View> */}

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
              <Text style={styles.photoButtonText}>Ok</Text>
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
              <Text style={styles.photoButtonText}>ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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

            <TouchableOpacity
              onPress={() => setIdProofModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.photoButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D1A',
    padding: 20
  },
  
  header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 2,
  marginBottom: 20,
},

backButton: {
  padding: 4,
},

title: {
  fontSize: 20,
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 5,
  marginTop: 30,
},


 

  inputBox: {
    flexDirection: 'row',
    backgroundColor: '#303042ff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  input: {
    color: '#fff',
    marginLeft: 10,
    flex: 1
  },

  // icon: { marginLeft: 4 },
  // textAreaBox: {
  //   flexDirection: 'row',
  //   backgroundColor: '#1E1E2C',
  //   borderRadius: 8,
  //   padding: 10,
  //   alignItems: 'flex-start',
  //   marginBottom: 10,
  // },

  // textArea: {
  //   color: '#fff',
  //   marginLeft: 10,
  //   flex: 1,
  //   height: 80,
  //   textAlignVertical: 'top'
  // },

  photoSection: {
    alignItems: 'center',
    marginVertical: 20
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10
  },
  photoPlaceholderText: {
    color: '#aaa',
    marginBottom: 10
  },
  photoButton: {
    backgroundColor: '#E74C3C',
    padding: 10,
    borderRadius: 6
  },
  photoButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 40
  },
  cancelButton: {
    backgroundColor: '#777791ff',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  saveButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6
  },
  modalText: {
    fontSize: 16,
    marginLeft: 10
  },
  closeButton: {
    backgroundColor: '#E74C3C',
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    alignItems: 'center'
  },
});