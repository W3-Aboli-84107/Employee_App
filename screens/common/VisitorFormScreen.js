<<<<<<< HEAD

// // import React, { useState } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// // export default function VisitorFormScreen({ navigation }) {
// //   const [name, setName] = useState('');

// //   const handleSubmit = () => {
// //     if (!name.trim()) {
// //       Alert.alert('Error', 'Name is required');
// //       return;
// //     }

// //     const newVisitor = {
// //       name: name.trim(),
// //       checkInTime: new Date().toISOString(),
// //     };

// //     navigation.navigate('AdminDashboard', { newVisitor });
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.label}>Visitor Name:</Text>
// //       <TextInput
// //         placeholder="Enter visitor name"
// //         value={name}
// //         onChangeText={setName}
// //         style={styles.input}
// //         placeholderTextColor="#aaa"
// //       />
// //       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// //         <Text style={styles.buttonText}>Submit Visitor</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 20, backgroundColor: '#1E1E2C' },
// //   label: { color: '#fff', fontSize: 16, marginBottom: 10 },
// //   input: {
// //     backgroundColor: '#2C2C3A',
// //     color: '#fff',
// //     padding: 12,
// //     borderRadius: 6,
// //     marginBottom: 20,
// //   },
// //   button: {
// //     backgroundColor: '#F46D5D',
// //     padding: 14,
// //     borderRadius: 6,
// //     alignItems: 'center',
// //   },
// //   buttonText: { color: '#fff', fontWeight: 'bold' },
// // });

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
//   Image,
//   Modal
// } from 'react-native';
// import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
// import { Picker } from '@react-native-picker/picker';
// import * as ImagePicker from 'expo-image-picker';
// import Checkbox from 'expo-checkbox';

// export default function VisitorFormScreen({ navigation }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     address: '',
//     gender: '',
//     description: '',
//     whomToMeet: '',
//     idProof: '',
//     reference: '',
//   });
//   const [photo, setPhoto] = useState(null);
//   const [remark, setRemark] = useState('');
//   const [purposeOptions, setPurposeOptions] = useState([
//     { id: 1, label: 'Meeting', value: false },
//     { id: 2, label: 'Delivery', value: false },
//     { id: 3, label: 'Interview', value: false },
//     { id: 4, label: 'Personal', value: false },
//   ]);
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleTakePhoto = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert('Permission required', 'Camera access is needed to take photos');
//       return;
//     }
//     const result = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 0.8,
//     });
//     if (!result.canceled) {
//       setPhoto(result.assets[0].uri);
//     }
//   };

//   const togglePurposeOption = (id) => {
//     setPurposeOptions(prevOptions =>
//       prevOptions.map(option =>
//         option.id === id ? { ...option, value: !option.value } : option
//       )
//     );
//   };

//   const getSelectedPurposes = () => {
//     return purposeOptions
//       .filter(option => option.value)
//       .map(option => option.label)
//       .join(', ');
//   };

//   const handleSubmit = () => {
//     if (!formData.name || !formData.phone || !formData.whomToMeet) {
//       Alert.alert('Missing Information', 'Please fill in all required fields');
//       return;
//     }
//     if (!/^[0-9]{10,15}$/.test(formData.phone)) {
//       Alert.alert('Invalid Phone', 'Please enter a valid 10-15 digit phone number');
//       return;
//     }
//     if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       Alert.alert('Invalid Email', 'Please enter a valid email address');
//       return;
//     }

//     const visitorData = {
//       ...formData,
//       purposes: purposeOptions.filter(option => option.value).map(option => option.label),
//       photo,
//       remark,
//       checkInTime: new Date().toISOString(),
//     };
    
//     console.log('Visitor Data:', visitorData);
//     Alert.alert('Success', 'Visitor information saved successfully');
//     navigation.goBack();
//   };

//   return (
//     <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Visitor's Detail</Text>
//       </View>

//       <View style={styles.section}>
//         {/* Basic Inputs */}
//         {[
//           { icon: 'person-outline', field: 'name', placeholder: 'Visitor Name*' },
//           { icon: 'call-outline', field: 'phone', placeholder: 'Phone Number*', keyboardType: 'phone-pad' },
//           { icon: 'mail-outline', field: 'email', placeholder: 'Email', keyboardType: 'email-address' },
//           { icon: 'location-outline', field: 'address', placeholder: 'Address' }
//         ].map((item, index) => (
//           <View key={index} style={styles.inputGroup}>
//             <Ionicons name={item.icon} size={20} color="#F46D5D" />
//             <TextInput
//               style={styles.input}
//               placeholder={item.placeholder}
//               placeholderTextColor="#aaa"
//               value={formData[item.field]}
//               keyboardType={item.keyboardType || 'default'}
//               onChangeText={text => handleInputChange(item.field, text)}
//             />
//           </View>
//         ))}

//         {/* Gender Picker */}
//         <View style={styles.inputGroup}>
//           <Ionicons name="male-female-outline" size={20} color="#F46D5D" />
//           <Picker
//             selectedValue={formData.gender}
//             onValueChange={value => handleInputChange('gender', value)}
//             style={styles.picker}
//             dropdownIconColor="#F46D5D"
//           >
//             <Picker.Item label="Select Gender" value="" />
//             <Picker.Item label="Male" value="male" />
//             <Picker.Item label="Female" value="female" />
//             <Picker.Item label="Other" value="other" />
//           </Picker>
//         </View>

//         {/* Purpose Multi-select */}
//         <TouchableOpacity 
//           style={styles.inputGroup} 
//           onPress={() => setModalVisible(true)}
//         >
//           <Ionicons name="calendar-outline" size={20} color="#F46D5D" />
//           <Text style={[styles.input, { color: getSelectedPurposes() ? '#fff' : '#aaa' }]}>
//             {getSelectedPurposes() || 'Purpose of Visit'}
//           </Text>
//         </TouchableOpacity>

//         {/* Purpose Selection Modal */}
//         <Modal
//           visible={modalVisible}
//           animationType="slide"
//           transparent
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Select Purpose(s)</Text>
              
//               {purposeOptions.map((option) => (
//                 <View key={option.id} style={styles.checkboxContainer}>
//                   <Checkbox
//                     value={option.value}
//                     onValueChange={() => togglePurposeOption(option.id)}
//                     color={option.value ? '#F46D5D' : undefined}
//                   />
//                   <Text style={styles.checkboxLabel}>{option.label}</Text>
//                 </View>
//               ))}
              
//               <TouchableOpacity 
//                 onPress={() => setModalVisible(false)} 
//                 style={styles.modalButton}
//               >
//                 <Text style={styles.modalButtonText}>Done</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>

//         {/* Description */}
//         <View style={[styles.inputGroup, { alignItems: 'flex-start' }]}>
//           <Ionicons name="document-text-outline" size={20} color="#F46D5D" />
//           <TextInput
//             style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
//             placeholder="Description"
//             placeholderTextColor="#aaa"
//             multiline
//             value={formData.description}
//             onChangeText={text => handleInputChange('description', text)}
//           />
//         </View>

//         {/* Meeting Info */}
//         <View style={styles.inputGroup}>
//           <FontAwesome name="user-o" size={20} color="#F46D5D" />
//           <TextInput
//             style={styles.input}
//             placeholder="Whom to Meet*"
//             placeholderTextColor="#aaa"
//             value={formData.whomToMeet}
//             onChangeText={text => handleInputChange('whomToMeet', text)}
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <MaterialCommunityIcons name="card-account-details-outline" size={20} color="#F46D5D" />
//           <TextInput
//             style={styles.input}
//             placeholder="ID Proof (optional)"
//             placeholderTextColor="#aaa"
//             value={formData.idProof}
//             onChangeText={text => handleInputChange('idProof', text)}
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <MaterialCommunityIcons name="account-search-outline" size={20} color="#F46D5D" />
//           <Picker
//             selectedValue={formData.reference}
//             onValueChange={value => handleInputChange('reference', value)}
//             style={styles.picker}
//             dropdownIconColor="#F46D5D"
//           >
//             <Picker.Item label="Reference By (optional)" value="" />
//             <Picker.Item label="Manager" value="manager" />
//             <Picker.Item label="HR" value="hr" />
//             <Picker.Item label="Employee" value="employee" />
//           </Picker>
//         </View>
//       </View>

//       {/* Photo & Remark */}
//       <View style={styles.section}>
//         <View style={styles.rowButtons}>
//           <TouchableOpacity style={styles.photoButton} onPress={handleTakePhoto}>
//             <Ionicons name="camera" size={20} color="#fff" />
//             <Text style={styles.buttonText}>Photo</Text>
//             {photo && <View style={styles.photoIndicator} />}
//           </TouchableOpacity>

//           <TouchableOpacity 
//             style={styles.remarkButton} 
//             onPress={() => navigation.navigate('Remark', { remark, setRemark })}
//           >
//             <Ionicons name="create-outline" size={20} color="#fff" />
//             <Text style={styles.buttonText}>Remark (optional)</Text>
//           </TouchableOpacity>
//         </View>
//         {photo && <Image source={{ uri: photo }} style={styles.photoPreview} />}
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.actionButtons}>
//         <TouchableOpacity 
//           style={styles.cancelButton} 
//           onPress={() => navigation.goBack()}
//         >
//           <Text style={styles.cancelButtonText}>Cancel</Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={styles.saveButton} 
//           onPress={handleSubmit}
//         >
//           <Text style={styles.saveButtonText}>Save Visitor</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0D1117',
//   },
//   contentContainer: {
//     padding: 16,
//     paddingBottom: 40,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginLeft: 16,
//   },
//   section: {
//     marginBottom: 24,
//     backgroundColor: '#161B22',
//     borderRadius: 10,
//     padding: 16,
//   },
//   inputGroup: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   input: {
//     flex: 1,
//     color: '#fff',
//     marginLeft: 12,
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#30363D',
//   },
//   picker: {
//     flex: 1,
//     color: '#fff',
//     marginLeft: 12,
//   },
//   rowButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   photoButton: {
//     flexDirection: 'row',
//     backgroundColor: '#F46D5D',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     flex: 1,
//     marginRight: 8,
//   },
//   remarkButton: {
//     flexDirection: 'row',
//     backgroundColor: '#30363D',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     flex: 1,
//     marginLeft: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     marginLeft: 8,
//   },
//   photoIndicator: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#34C759',
//     marginLeft: 8,
//   },
//   photoPreview: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginTop: 12,
//     alignSelf: 'center',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 16,
//   },
//   cancelButton: {
//     backgroundColor: 'transparent',
//     borderWidth: 1,
//     borderColor: '#F46D5D',
//     padding: 16,
//     borderRadius: 8,
//     flex: 1,
//     marginRight: 8,
//     alignItems: 'center',
//   },
//   saveButton: {
//     backgroundColor: '#F46D5D',
//     padding: 16,
//     borderRadius: 8,
//     flex: 1,
//     marginLeft: 8,
//     alignItems: 'center',
//   },
//   cancelButtonText: {
//     color: '#F46D5D',
//     fontWeight: 'bold',
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#161B22',
//     borderRadius: 10,
//     padding: 20,
//   },
//   modalTitle: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   checkboxLabel: {
//     color: '#fff',
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   modalButton: {
//     backgroundColor: '#F46D5D',
//     padding: 12,
//     borderRadius: 8,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   modalButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });


=======
>>>>>>> 4e9bf1653d9abda0ea05c73f8bcd6ed38f8f127f
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
