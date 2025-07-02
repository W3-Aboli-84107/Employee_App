// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   StyleSheet,
// //   TouchableOpacity,
// //   ScrollView,
// //   Alert,
// //   Image
// // } from 'react-native';
// // import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
// // import { Picker } from '@react-native-picker/picker';
// // import * as ImagePicker from 'expo-image-picker';

// // export default function VisitorFormScreen({ navigation }) {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     phone: '',
// //     email: '',
// //     address: '',
// //     gender: '',
// //     purpose: '',
// //     description: '',
// //     whomToMeet: '',
// //     idProof: '',
// //     reference: '',
// //   });

// //   const [photo, setPhoto] = useState(null);
// //   const [remark, setRemark] = useState('');

// //   const handleInputChange = (field, value) => {
// //     setFormData(prev => ({ ...prev, [field]: value }));
// //   };

// //   const handleTakePhoto = async () => {
// //     const { status } = await ImagePicker.requestCameraPermissionsAsync();
// //     if (status !== 'granted') {
// //       Alert.alert('Permission required', 'Camera access is needed to take photos');
// //       return;
// //     }

// //     const result = await ImagePicker.launchCameraAsync({
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //       quality: 0.8,
// //     });

// //     if (!result.canceled) {
// //       setPhoto(result.assets[0].uri);
// //     }
// //   };

// //   const handleSubmit = () => {
// //     if (!formData.name || !formData.phone || !formData.whomToMeet) {
// //       Alert.alert('Missing Information', 'Please fill in all required fields');
// //       return;
// //     }

// //     if (!/^\d{10,15}$/.test(formData.phone)) {
// //       Alert.alert('Invalid Phone', 'Please enter a valid 10-15 digit phone number');
// //       return;
// //     }

// //     if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //       Alert.alert('Invalid Email', 'Please enter a valid email address');
// //       return;
// //     }

// //     const visitorData = {
// //       ...formData,
// //       photo,
// //       remark,
// //       checkInTime: new Date().toISOString(),
// //     };

// //     console.log('Visitor data:', visitorData);
// //     Alert.alert('Success', 'Visitor information saved successfully');
// //     navigation.goBack();
// //   };

// //   return (
// //     <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Ionicons name="arrow-back" size={24} color="#fff" />
// //         </TouchableOpacity>
// //         <Text style={styles.title}>Visitor's Detail</Text>
// //       </View>

// //       {/* Unified Form Section */}
// //       <View style={styles.section}>
// //         <View style={styles.inputGroup}>
// //           <Ionicons name="person-outline" size={20} color="#F46D5D" />
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Visitor Name*"
// //             placeholderTextColor="#aaa"
// //             value={formData.name}
// //             onChangeText={(text) => handleInputChange('name', text)}
// //           />
// //         </View>

// //         <View style={styles.inputGroup}>
// //           <Ionicons name="call-outline" size={20} color="#F46D5D" />
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Phone Number*"
// //             placeholderTextColor="#aaa"
// //             keyboardType="phone-pad"
// //             value={formData.phone}
// //             onChangeText={(text) => handleInputChange('phone', text)}
// //           />
// //         </View>

// //         <View style={styles.inputGroup}>
// //           <Ionicons name="mail-outline" size={20} color="#F46D5D" />
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Email"
// //             placeholderTextColor="#aaa"
// //             keyboardType="email-address"
// //             value={formData.email}
// //             onChangeText={(text) => handleInputChange('email', text)}
// //           />
// //         </View>

// //         <View style={styles.inputGroup}>
// //           <Ionicons name="location-outline" size={20} color="#F46D5D" />
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Address"
// //             placeholderTextColor="#aaa"
// //             value={formData.address}
// //             onChangeText={(text) => handleInputChange('address', text)}
// //           />
// //         </View>

// //         <View style={styles.inputGroup}>
// //           <Ionicons name="male-female-outline" size={20} color="#F46D5D" />
// //           <Picker
// //             selectedValue={formData.gender}
// //             onValueChange={(value) => handleInputChange('gender', value)}
// //             style={styles.picker}
// //             dropdownIconColor="#F46D5D"
// //           >
// //             <Picker.Item label="Select Gender" value="" />
// //             <Picker.Item label="Male" value="male" />
// //             <Picker.Item label="Female" value="female" />
// //             <Picker.Item label="Other" value="other" />
// //           </Picker>
// //         </View>

// //         <View style={styles.inputGroup}>
// //           <Ionicons name="calendar-outline" size={20} color="#F46D5D" />
// //           <Picker
// //             selectedValue={formData.purpose}
// //             onValueChange={(value) => handleInputChange('purpose', value)}
// //             style={styles.picker}
// //             dropdownIconColor="#F46D5D"
// //           >
// //             <Picker.Item label="Purpose of Visit" value="" />
// //             <Picker.Item label="Meeting" value="meeting" />
// //             <Picker.Item label="Delivery" value="delivery" />
// //             <Picker.Item label="Interview" value="interview" />
// //           </Picker>
// //         </View>

// //         <View style={[styles.inputGroup, { alignItems: 'flex-start' }]}>
// //           <Ionicons name="document-text-outline" size={20} color="#F46D5D" />
// //           <TextInput
// //             style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
// //             placeholder="Description"
// //             placeholderTextColor="#aaa"
// //             multiline
// //             value={formData.description}
// //             onChangeText={(text) => handleInputChange('description', text)}
// //           />
// //         </View>

// //         <View style={styles.inputGroup}>
// //           <FontAwesome name="user-o" size={20} color="#F46D5D" />
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Whom to Meet*"
// //             placeholderTextColor="#aaa"
// //             value={formData.whomToMeet}
// //             onChangeText={(text) => handleInputChange('whomToMeet', text)}
// //           />
// //         </View>

// //         <View style={styles.inputGroup}>
// //           <MaterialCommunityIcons name="card-account-details-outline" size={20} color="#F46D5D" />
// //           <TextInput
// //             style={styles.input}
// //             placeholder="ID Proof (optional)"
// //             placeholderTextColor="#aaa"
// //             value={formData.idProof}
// //             onChangeText={(text) => handleInputChange('idProof', text)}
// //           />
// //         </View>

// //         <View style={styles.inputGroup}>
// //           <MaterialCommunityIcons name="account-search-outline" size={20} color="#F46D5D" />
// //           <Picker
// //             selectedValue={formData.reference}
// //             onValueChange={(value) => handleInputChange('reference', value)}
// //             style={styles.picker}
// //             dropdownIconColor="#F46D5D"
// //           >
// //             <Picker.Item label="Reference By (optional)" value="" />
// //             <Picker.Item label="Manager" value="manager" />
// //             <Picker.Item label="HR" value="hr" />
// //             <Picker.Item label="Employee" value="employee" />
// //           </Picker>
// //         </View>
// //       </View>

// //       {/* Photo & Remark Section */}
// //       <View style={styles.section}>
// //         <View style={styles.rowButtons}>
// //           <TouchableOpacity 
// //             style={styles.photoButton} 
// //             onPress={handleTakePhoto}
// //           >
// //             <Ionicons name="camera" size={20} color="#fff" />
// //             <Text style={styles.buttonText}>Photo</Text>
// //             {photo && <View style={styles.photoIndicator} />}
// //           </TouchableOpacity>

// //           <TouchableOpacity 
// //             style={styles.remarkButton}
// //             onPress={() => navigation.navigate('Remark', { remark, setRemark })}
// //           >
// //             <Ionicons name="create-outline" size={20} color="#fff" />
// //             <Text style={styles.buttonText}>Remark (optional)</Text>
// //           </TouchableOpacity>
// //         </View>

// //         {photo && (
// //           <Image 
// //             source={{ uri: photo }} 
// //             style={styles.photoPreview} 
// //           />
// //         )}
// //       </View>

// //       {/* Action Buttons */}
// //       <View style={styles.actionButtons}>
// //         <TouchableOpacity 
// //           style={styles.cancelButton}
// //           onPress={() => navigation.goBack()}
// //         >
// //           <Text style={styles.cancelButtonText}>Cancel</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity 
// //           style={styles.saveButton}
// //           onPress={handleSubmit}
// //         >
// //           <Text style={styles.saveButtonText}>Save Visitor</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#0D1117' },
// //   contentContainer: { padding: 16, paddingBottom: 40 },
// //   header: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
// //   title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginLeft: 16 },
// //   section: {
// //     marginBottom: 24,
// //     backgroundColor: '#161B22',
// //     borderRadius: 10,
// //     padding: 16,
// //   },
// //   inputGroup: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   input: {
// //     flex: 1,
// //     color: '#fff',
// //     marginLeft: 12,
// //     paddingVertical: 10,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#30363D',
// //   },
// //   picker: {
// //     flex: 1,
// //     color: '#fff',
// //     marginLeft: 12,
// //   },
// //   rowButtons: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   photoButton: {
// //     flexDirection: 'row',
// //     backgroundColor: '#F46D5D',
// //     padding: 12,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //     flex: 1,
// //     marginRight: 8,
// //   },
// //   remarkButton: {
// //     flexDirection: 'row',
// //     backgroundColor: '#30363D',
// //     padding: 12,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //     flex: 1,
// //     marginLeft: 8,
// //   },
// //   buttonText: { color: '#fff', marginLeft: 8 },
// //   photoIndicator: {
// //     width: 8,
// //     height: 8,
// //     borderRadius: 4,
// //     backgroundColor: '#34C759',
// //     marginLeft: 8,
// //   },
// //   photoPreview: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 8,
// //     marginTop: 12,
// //     alignSelf: 'center',
// //   },
// //   actionButtons: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: 16,
// //   },
// //   cancelButton: {
// //     backgroundColor: 'transparent',
// //     borderWidth: 1,
// //     borderColor: '#F46D5D',
// //     padding: 16,
// //     borderRadius: 8,
// //     flex: 1,
// //     marginRight: 8,
// //     alignItems: 'center',
// //   },
// //   saveButton: {
// //     backgroundColor: '#F46D5D',
// //     padding: 16,
// //     borderRadius: 8,
// //     flex: 1,
// //     marginLeft: 8,
// //     alignItems: 'center',
// //   },
// //   cancelButtonText: { color: '#F46D5D', fontWeight: 'bold' },
// //   saveButtonText: { color: '#fff', fontWeight: 'bold' },
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
//   const [purposeOptions, setPurposeOptions] = useState({
//     Meeting: false,
//     Delivery: false,
//     Interview: false,
//   });
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

//   const getSelectedPurposes = () => {
//     return Object.keys(purposeOptions).filter(key => purposeOptions[key]);
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
//       purpose: getSelectedPurposes(),
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
//         {[{ icon: 'person-outline', field: 'name', placeholder: 'Visitor Name*' },
//           { icon: 'call-outline', field: 'phone', placeholder: 'Phone Number*', keyboardType: 'phone-pad' },
//           { icon: 'mail-outline', field: 'email', placeholder: 'Email', keyboardType: 'email-address' },
//           { icon: 'location-outline', field: 'address', placeholder: 'Address' }].map((item, index) => (
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

//         {/* Purpose Multi-select Modal */}
//         <TouchableOpacity style={styles.inputGroup} onPress={() => setModalVisible(true)}>
//           <Ionicons name="calendar-outline" size={20} color="#F46D5D" />
//           <Text style={styles.input}>
//             {getSelectedPurposes().length > 0 ? getSelectedPurposes().join(', ') : 'Purpose of Visit'}
//           </Text>
//         </TouchableOpacity>

//         <Modal visible={modalVisible} animationType="slide" transparent>
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Select Purpose(s)</Text>
//               {Object.keys(purposeOptions).map((purpose, index) => (
//                 <View key={index} style={styles.checkboxRow}>
//                   <Checkbox
//                     value={purposeOptions[purpose]}
//                     onValueChange={(newValue) =>
//                       setPurposeOptions(prev => ({ ...prev, [purpose]: newValue }))
//                     }
//                     color={purposeOptions[purpose] ? '#F46D5D' : undefined}
//                   />
//                   <Text style={styles.checkboxLabel}>{purpose}</Text>
//                 </View>
//               ))}
//               <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
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

//           <TouchableOpacity style={styles.remarkButton} onPress={() => navigation.navigate('Remark', { remark, setRemark })}>
//             <Ionicons name="create-outline" size={20} color="#fff" />
//             <Text style={styles.buttonText}>Remark (optional)</Text>
//           </TouchableOpacity>
//         </View>
//         {photo && <Image source={{ uri: photo }} style={styles.photoPreview} />}
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.actionButtons}>
//         <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
//           <Text style={styles.cancelButtonText}>Cancel</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
//           <Text style={styles.saveButtonText}>Save Visitor</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#0D1117' },
//   contentContainer: { padding: 16, paddingBottom: 40 },
//   header: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
//   title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginLeft: 16 },
//   section: {
//     marginBottom: 24,
//     backgroundColor: '#161B22',
//     borderRadius: 10,
//     padding: 16,
//   },
//   inputGroup: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
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
//      marginLeft: 12 },

//   rowButtons: { flexDirection: 'row', justifyContent: 'space-between' },
//   photoButton: {
//     flexDirection: 'row', backgroundColor: '#F46D5D', padding: 12,
//     borderRadius: 8, alignItems: 'center', flex: 1, marginRight: 8,
//   },
//   remarkButton: {
//     flexDirection: 'row', backgroundColor: '#30363D', padding: 12,
//     borderRadius: 8, alignItems: 'center', flex: 1, marginLeft: 8,
//   },
//   buttonText: { color: '#fff', marginLeft: 8 },
//   photoIndicator: {
//     width: 8, height: 8, borderRadius: 4,
//     backgroundColor: '#34C759', marginLeft: 8,
//   },
//   photoPreview: {
//     width: 100, height: 100, borderRadius: 8,
//     marginTop: 12, alignSelf: 'center',
//   },
//   actionButtons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
//   cancelButton: {
//     backgroundColor: 'transparent', borderWidth: 1,
//     borderColor: '#F46D5D', padding: 16,
//     borderRadius: 8, flex: 1, marginRight: 8, alignItems: 'center',
//   },
//   saveButton: {
//     backgroundColor: '#F46D5D', padding: 16,
//     borderRadius: 8, flex: 1, marginLeft: 8, alignItems: 'center',
//   },
//   cancelButtonText: { color: '#F46D5D', fontWeight: 'bold' },
//   saveButtonText: { color: '#fff', fontWeight: 'bold' },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#161B22',
//     borderRadius: 10,
//     padding: 20,
//   },
//   modalTitle: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   checkboxRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   checkboxLabel: {
//     color: '#fff',
//     marginLeft: 8,
//   },
//   modalButton: {
//     marginTop: 16,
//     backgroundColor: '#F46D5D',
//     padding: 10,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   modalButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });


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
  Modal
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
  const [purposeOptions, setPurposeOptions] = useState([
    { id: 1, label: 'Meeting', value: false },
    { id: 2, label: 'Delivery', value: false },
    { id: 3, label: 'Interview', value: false },
    { id: 4, label: 'Personal', value: false },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

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
    setPurposeOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === id ? { ...option, value: !option.value } : option
      )
    );
  };

  const getSelectedPurposes = () => {
    return purposeOptions
      .filter(option => option.value)
      .map(option => option.label)
      .join(', ');
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.whomToMeet) {
      Alert.alert('Missing Information', 'Please fill in all required fields');
      return;
    }
    if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      Alert.alert('Invalid Phone', 'Please enter a valid 10-15 digit phone number');
      return;
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    const visitorData = {
      ...formData,
      purposes: purposeOptions.filter(option => option.value).map(option => option.label),
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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Visitor's Detail</Text>
      </View>

      <View style={styles.section}>
        {/* Basic Inputs */}
        {[
          { icon: 'person-outline', field: 'name', placeholder: 'Visitor Name*' },
          { icon: 'call-outline', field: 'phone', placeholder: 'Phone Number*', keyboardType: 'phone-pad' },
          { icon: 'mail-outline', field: 'email', placeholder: 'Email', keyboardType: 'email-address' },
          { icon: 'location-outline', field: 'address', placeholder: 'Address' }
        ].map((item, index) => (
          <View key={index} style={styles.inputGroup}>
            <Ionicons name={item.icon} size={20} color="#F46D5D" />
            <TextInput
              style={styles.input}
              placeholder={item.placeholder}
              placeholderTextColor="#aaa"
              value={formData[item.field]}
              keyboardType={item.keyboardType || 'default'}
              onChangeText={text => handleInputChange(item.field, text)}
            />
          </View>
        ))}

        {/* Gender Picker */}
        <View style={styles.inputGroup}>
          <Ionicons name="male-female-outline" size={20} color="#F46D5D" />
          <Picker
            selectedValue={formData.gender}
            onValueChange={value => handleInputChange('gender', value)}
            style={styles.picker}
            dropdownIconColor="#F46D5D"
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>

        {/* Purpose Multi-select */}
        <TouchableOpacity 
          style={styles.inputGroup} 
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="calendar-outline" size={20} color="#F46D5D" />
          <Text style={[styles.input, { color: getSelectedPurposes() ? '#fff' : '#aaa' }]}>
            {getSelectedPurposes() || 'Purpose of Visit'}
          </Text>
        </TouchableOpacity>

        {/* Purpose Selection Modal */}
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
              
              <TouchableOpacity 
                onPress={() => setModalVisible(false)} 
                style={styles.modalButton}
              >
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
            placeholderTextColor="#aaa"
            multiline
            value={formData.description}
            onChangeText={text => handleInputChange('description', text)}
          />
        </View>

        {/* Meeting Info */}
        <View style={styles.inputGroup}>
          <FontAwesome name="user-o" size={20} color="#F46D5D" />
          <TextInput
            style={styles.input}
            placeholder="Whom to Meet*"
            placeholderTextColor="#aaa"
            value={formData.whomToMeet}
            onChangeText={text => handleInputChange('whomToMeet', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <MaterialCommunityIcons name="card-account-details-outline" size={20} color="#F46D5D" />
          <TextInput
            style={styles.input}
            placeholder="ID Proof (optional)"
            placeholderTextColor="#aaa"
            value={formData.idProof}
            onChangeText={text => handleInputChange('idProof', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <MaterialCommunityIcons name="account-search-outline" size={20} color="#F46D5D" />
          <Picker
            selectedValue={formData.reference}
            onValueChange={value => handleInputChange('reference', value)}
            style={styles.picker}
            dropdownIconColor="#F46D5D"
          >
            <Picker.Item label="Reference By (optional)" value="" />
            <Picker.Item label="Manager" value="manager" />
            <Picker.Item label="HR" value="hr" />
            <Picker.Item label="Employee" value="employee" />
          </Picker>
        </View>
      </View>

      {/* Photo & Remark */}
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
        <TouchableOpacity 
          style={styles.cancelButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.saveButton} 
          onPress={handleSubmit}
        >
          <Text style={styles.saveButtonText}>Save Visitor</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 16,
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#161B22',
    borderRadius: 10,
    padding: 16,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
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
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
  buttonText: {
    color: '#fff',
    marginLeft: 8,
  },
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
  cancelButtonText: {
    color: '#F46D5D',
    fontWeight: 'bold',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
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
});