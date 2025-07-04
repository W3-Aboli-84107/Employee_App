import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  Modal,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import Checkbox from 'expo-checkbox';

export default function VisitorFormScreen({ navigation }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    gender: '',
    description: '',
    whomToMeet: '',
    idProof: '',
    reference: '',
  });

  const [photo, setPhoto] = useState(null);
  const [remark, setRemark] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [purposeOptions, setPurposeOptions] = useState([
    { id: 1, label: 'Meeting', value: false },
    { id: 2, label: 'Delivery', value: false },
    { id: 3, label: 'Interview', value: false },
    { id: 4, label: 'Personal', value: false },
  ]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Camera access is needed to take photos');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const togglePurposeOption = (id) => {
    setPurposeOptions(prev =>
      prev.map(opt => (opt.id === id ? { ...opt, value: !opt.value } : opt))
    );
  };

  const getSelectedPurposes = () => {
    return purposeOptions.filter(opt => opt.value).map(opt => opt.label).join(', ');
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.whomToMeet) {
      return Alert.alert('Missing Information', 'Please fill in all required fields');
    }

    if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      return Alert.alert('Invalid Phone', 'Enter a valid 10-15 digit phone number');
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return Alert.alert('Invalid Email', 'Enter a valid email address');
    }

    const visitorData = {
      ...formData,
      purposes: purposeOptions.filter(opt => opt.value).map(opt => opt.label),
      photo,
      remark,
      checkInTime: new Date().toISOString(),
    };

    console.log('Visitor Data:', visitorData);
    Alert.alert('Success', 'Visitor information saved successfully');
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Visitor's Detail</Text>
      </View>

      {/* Form Section */}
      <View style={styles.section}>
        {/* Text Inputs */}
        {[
          { icon: 'person-outline', field: 'name', placeholder: 'Visitor Name*' },
          { icon: 'call-outline', field: 'phone', placeholder: 'Phone Number*', keyboardType: 'phone-pad' },
          { icon: 'mail-outline', field: 'email', placeholder: 'Email', keyboardType: 'email-address' },
          { icon: 'location-outline', field: 'address', placeholder: 'Address' },
        ].map((item, index) => (
          <View key={index} style={styles.inputGroup}>
            <Ionicons name={item.icon} size={20} color="#F46D5D" />
            <TextInput
              style={styles.input}
              placeholder={item.placeholder}
              placeholderTextColor="#fff"
              value={formData[item.field]}
              keyboardType={item.keyboardType || 'default'}
              onChangeText={text => handleInputChange(item.field, text)}
            />
          </View>
        ))}

        {/* Gender Radio Buttons */}
        <View style={[styles.inputGroup, { flexDirection: 'column', alignItems: 'flex-start' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <Ionicons name="male-female-outline" size={20} color="#F46D5D" />
            <Text style={{ color: '#fff', marginLeft: 12 }}>Gender</Text>
          </View>
          <View style={styles.radioGroup}>
            {['male', 'female', 'other'].map((value) => (
              <TouchableOpacity
                key={value}
                style={styles.radioOption}
                onPress={() => handleInputChange('gender', value)}
              >
                <View style={[styles.radioCircle, formData.gender === value && styles.radioSelected]} />
                <Text style={styles.radioLabel}>{value.charAt(0).toUpperCase() + value.slice(1)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Purpose Multi-select */}
        <TouchableOpacity style={styles.inputGroup} onPress={() => setModalVisible(true)}>
          <Ionicons name="calendar-outline" size={20} color="#F46D5D" />
          <Text style={[styles.input, { color: getSelectedPurposes() ? '#fff' : '#aaa' }]}>
            {getSelectedPurposes() || 'Purpose of Visit'}
          </Text>
        </TouchableOpacity>

        {/* Modal for Purpose Selection */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Purpose(s)</Text>
              {purposeOptions.map((option) => (
                <View key={option.id} style={styles.checkboxContainer}>
                  <Checkbox
                    value={option.value}
                    onValueChange={() => togglePurposeOption(option.id)}
                    color={option.value ? '#F46D5D' : undefined}
                  />
                  <Text style={styles.checkboxLabel}>{option.label}</Text>
                </View>
              ))}
              <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Description */}
        <View style={[styles.inputGroup, { alignItems: 'flex-start' }]}>
          <Ionicons name="document-text-outline" size={20} color="#F46D5D" />
          <TextInput
            style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
            placeholder="Description"
            placeholderTextColor="#fff"
            multiline
            value={formData.description}
            onChangeText={text => handleInputChange('description', text)}
          />
        </View>

        {/* Whom to Meet */}
        <View style={styles.inputGroup}>
          <FontAwesome name="user-o" size={20} color="#F46D5D" />
          <TextInput
            style={styles.input}
            placeholder="Whom to Meet*"
            placeholderTextColor="#fff"
            value={formData.whomToMeet}
            onChangeText={text => handleInputChange('whomToMeet', text)}
          />
        </View>

        {/* ID Proof */}
        <View style={styles.inputGroup}>
          <MaterialCommunityIcons name="card-account-details-outline" size={20} color="#F46D5D" />
          <TextInput
            style={styles.input}
            placeholder="ID Proof (optional)"
            placeholderTextColor="#fff"
            value={formData.idProof}
            onChangeText={text => handleInputChange('idProof', text)}
          />
        </View>

        {/* Reference Picker */}
        <View style={styles.inputGroup}>
          <MaterialCommunityIcons name="account-search-outline" size={20} color="#F46D5D" />
          <Picker
            selectedValue={formData.reference}
            onValueChange={value => handleInputChange('reference', value)}
            style={styles.picker}
            dropdownIconColor="#F46D5D"
          >
            <Picker.Item label="Reference By (optional)" value="" color="#aaa" />
            <Picker.Item label="Manager" value="manager" color="#fff" />
            <Picker.Item label="HR" value="hr" color="#fff" />
            <Picker.Item label="Employee" value="employee" color="#fff" />
          </Picker>
        </View>
      </View>

      {/* Photo and Remark Section */}
      <View style={styles.section}>
        <View style={styles.rowButtons}>
          <TouchableOpacity style={styles.photoButton} onPress={handleTakePhoto}>
            <Ionicons name="camera" size={20} color="#fff" />
            <Text style={styles.buttonText}>Photo</Text>
            {photo && <View style={styles.photoIndicator} />}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.remarkButton}
            onPress={() => navigation.navigate('Remark', { remark, setRemark })}
          >
            <Ionicons name="create-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>Remark (optional)</Text>
          </TouchableOpacity>
        </View>

        {photo && <Image source={{ uri: photo }} style={styles.photoPreview} />}
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
          <Text style={styles.saveButtonText}>Save Visitor</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D1117' },
  contentContainer: { padding: 16, paddingBottom: 40 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginLeft: 16 },
  section: {
    marginBottom: 24,
    backgroundColor: '#161B22',
    borderRadius: 10,
    padding: 16,
  },
  inputGroup: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#30363D',
  },
  picker: {
    flex: 1,
    color: '#fff',
    marginLeft: 12,
  },
  rowButtons: { flexDirection: 'row', justifyContent: 'space-between' },
  photoButton: {
    flexDirection: 'row',
    backgroundColor: '#F46D5D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  remarkButton: {
    flexDirection: 'row',
    backgroundColor: '#30363D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginLeft: 8,
  },
  buttonText: { color: '#fff', marginLeft: 8 },
  photoIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34C759',
    marginLeft: 8,
  },
  photoPreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginTop: 12,
    alignSelf: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#F46D5D',
    padding: 16,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#F46D5D',
    padding: 16,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },
  cancelButtonText: { color: '#F46D5D', fontWeight: 'bold' },
  saveButtonText: { color: '#fff', fontWeight: 'bold' },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#161B22',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxLabel: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  modalButton: {
    backgroundColor: '#F46D5D',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 8,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#F46D5D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioSelected: {
    backgroundColor: '#F46D5D',
  },
  radioLabel: {
    color: '#fff',
    fontSize: 16,
  },

});