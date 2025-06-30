// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
// import { Picker } from '@react-native-picker/picker';

// export default function VisitorFormScreen({ navigation }) {
//   const [gender, setGender] = useState('');
//   const [purpose, setPurpose] = useState('');
//   const [reference, setReference] = useState('');

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Visitor’s Detail</Text>

//       {/* Visitor Name */}
//       <View style={styles.inputBox}>
//         <Ionicons name="person" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput placeholder="Visitor Name" placeholderTextColor="#aaa" style={styles.input} />
//       </View>

//       {/* Phone Number */}
//       <View style={styles.inputBox}>
//         <Ionicons name="call" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput placeholder="Phone number" placeholderTextColor="#aaa" style={styles.input} keyboardType="phone-pad" />
//       </View>

//       {/* Email */}
//       <View style={styles.inputBox}>
//         <MaterialCommunityIcons name="email-outline" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput placeholder="Email" placeholderTextColor="#aaa" style={styles.input} keyboardType="email-address" />
//       </View>

//       {/* Address */}
//       <View style={styles.inputBox}>
//         <Ionicons name="location-outline" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput placeholder="Address" placeholderTextColor="#aaa" style={styles.input} />
//       </View>

//       {/* Gender Picker */}
//       <View style={styles.pickerBox}>
//         <Ionicons name="male-female" size={20} color="#E74C3C" style={styles.icon} />
//         <Picker
//           selectedValue={gender}
//           onValueChange={(itemValue) => setGender(itemValue)}
//           style={styles.picker}
//         >
//           <Picker.Item label="Gender" value="" />
//           <Picker.Item label="Male" value="Male" />
//           <Picker.Item label="Female" value="Female" />
//           <Picker.Item label="Other" value="Other" />
//         </Picker>
//       </View>

//       {/* Purpose Picker */}
//       <View style={styles.pickerBox}>
//         <Ionicons name="calendar" size={20} color="#E74C3C" style={styles.icon} />
//         <Picker
//           selectedValue={purpose}
//           onValueChange={(itemValue) => setPurpose(itemValue)}
//           style={styles.picker}
//         >
//           <Picker.Item label="Purpose" value="" />
//           <Picker.Item label="Meeting" value="Meeting" />
//           <Picker.Item label="Delivery" value="Delivery" />
//           <Picker.Item label="Interview" value="Interview" />
//         </Picker>
//       </View>

//       {/* Description */}
//       <View style={styles.textAreaBox}>
//         <Ionicons name="document-text-outline" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput
//           placeholder="Description"
//           placeholderTextColor="#aaa"
//           style={styles.textArea}
//           multiline
//         />
//       </View>

//       {/* Whom to meet */}
//       <View style={styles.inputBox}>
//         <FontAwesome name="users" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput placeholder="Whom to meet" placeholderTextColor="#aaa" style={styles.input} />
//       </View>

//       {/* ID Proof */}
//       <View style={styles.inputBox}>
//         <MaterialCommunityIcons name="card-account-details-outline" size={20} color="#E74C3C" style={styles.icon} />
//         <TextInput placeholder="ID proof (optional)" placeholderTextColor="#aaa" style={styles.input} />
//       </View>

//       {/* Reference By */}
//       <View style={styles.pickerBox}>
//         <MaterialCommunityIcons name="account-search-outline" size={20} color="#E74C3C" style={styles.icon} />
//         <Picker
//           selectedValue={reference}
//           onValueChange={(itemValue) => setReference(itemValue)}
//           style={styles.picker}
//         >
//           <Picker.Item label="Reference by (optional)" value="" />
//           <Picker.Item label="Manager" value="Manager" />
//           <Picker.Item label="HR" value="HR" />
//           <Picker.Item label="Employee" value="Employee" />
//         </Picker>
//       </View>

//       {/* Photo + Remark (you can add actual image picker later) */}
//       <View style={styles.rowButtons}>
//         <TouchableOpacity style={styles.buttonOutline}>
//           <Ionicons name="camera" size={20} color="#fff" />
//           <Text style={styles.buttonText}>Photo</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.buttonOutline}>
//           <Ionicons name="create-outline" size={20} color="#fff" />
//           <Text style={styles.buttonText}>Remark (optional)</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.actionRow}>
//         <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
//           <Text style={styles.actionText}>Cancel</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.saveButton}>
//           <Text style={styles.actionText}>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0D0D1A',
//     padding: 20,
//   },
//   title: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   inputBox: {
//     flexDirection: 'row',
//     backgroundColor: '#1E1E2C',
//     borderRadius: 8,
//     padding: 10,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   input: {
//     color: '#fff',
//     marginLeft: 10,
//     flex: 1,
//   },
//   icon: {
//     marginLeft: 4,
//   },
//   pickerBox: {
//     flexDirection: 'row',
//     backgroundColor: '#1E1E2C',
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   picker: {
//     flex: 1,
//     color: '#fff',
//   },
//   textAreaBox: {
//     flexDirection: 'row',
//     backgroundColor: '#1E1E2C',
//     borderRadius: 8,
//     padding: 10,
//     alignItems: 'flex-start',
//     marginBottom: 10,
//   },
//   textArea: {
//     color: '#fff',
//     marginLeft: 10,
//     flex: 1,
//     height: 80,
//     textAlignVertical: 'top',
//   },
//   rowButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   buttonOutline: {
//     flexDirection: 'row',
//     backgroundColor: '#1E1E2C',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     flex: 1,
//     marginRight: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     marginLeft: 8,
//   },
//   actionRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 30,
//   },
//   cancelButton: {
//     backgroundColor: '#1E1E2C',
//     paddingVertical: 14,
//     paddingHorizontal: 28,
//     borderRadius: 8,
//   },
//   saveButton: {
//     backgroundColor: '#E74C3C',
//     paddingVertical: 14,
//     paddingHorizontal: 28,
//     borderRadius: 8,
//   },
//   actionText: {
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
  Image
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

export default function VisitorFormScreen({ navigation }) {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    gender: '',
    purpose: '',
    description: '',
    whomToMeet: '',
    idProof: '',
    reference: '',
  });
  const [photo, setPhoto] = useState(null);
  const [remark, setRemark] = useState('');

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle photo capture
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

  // Handle form submission
  const handleSubmit = () => {
    // Required field validation
    if (!formData.name || !formData.phone || !formData.whomToMeet) {
      Alert.alert('Missing Information', 'Please fill in all required fields');
      return;
    }

    // Phone number validation
    if (!/^\d{10,15}$/.test(formData.phone)) {
      Alert.alert('Invalid Phone', 'Please enter a valid 10-15 digit phone number');
      return;
    }

    // Email validation (if provided)
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    // Prepare visitor data
    const visitorData = {
      ...formData,
      photo,
      remark,
      checkInTime: new Date().toISOString(),
    };

    // In a real app, you would save this to your backend
    console.log('Visitor data:', visitorData);
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

      {/* Visitor Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Visitor Information</Text>
        
        <View style={styles.inputGroup}>
          <Ionicons name="person-outline" size={20} color="#F46D5D" />
          <TextInput
            style={styles.input}
            placeholder="Visitor Name*"
            placeholderTextColor="#aaa"
            value={formData.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Ionicons name="call-outline" size={20} color="#F46D5D" />
          <TextInput
            style={styles.input}
            placeholder="Phone Number*"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
            value={formData.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Ionicons name="mail-outline" size={20} color="#F46D5D" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Ionicons name="location-outline" size={20} color="#F46D5D" />
          <TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor="#aaa"
            value={formData.address}
            onChangeText={(text) => handleInputChange('address', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Ionicons name="male-female-outline" size={20} color="#F46D5D" />
          <Picker
            selectedValue={formData.gender}
            onValueChange={(value) => handleInputChange('gender', value)}
            style={styles.picker}
            dropdownIconColor="#F46D5D"
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>

        <View style={styles.inputGroup}>
          <Ionicons name="calendar-outline" size={20} color="#F46D5D" />
          <Picker
            selectedValue={formData.purpose}
            onValueChange={(value) => handleInputChange('purpose', value)}
            style={styles.picker}
            dropdownIconColor="#F46D5D"
          >
            <Picker.Item label="Purpose of Visit" value="" />
            <Picker.Item label="Meeting" value="meeting" />
            <Picker.Item label="Delivery" value="delivery" />
            <Picker.Item label="Interview" value="interview" />
          </Picker>
        </View>

        <View style={[styles.inputGroup, { alignItems: 'flex-start' }]}>
          <Ionicons name="document-text-outline" size={20} color="#F46D5D" />
          <TextInput
            style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
            placeholder="Description"
            placeholderTextColor="#aaa"
            multiline
            value={formData.description}
            onChangeText={(text) => handleInputChange('description', text)}
          />
        </View>
      </View>

      {/* Meeting Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meeting Information</Text>
        
        <View style={styles.inputGroup}>
          <FontAwesome name="user-o" size={20} color="#F46D5D" />
          <TextInput
            style={styles.input}
            placeholder="Whom to Meet*"
            placeholderTextColor="#aaa"
            value={formData.whomToMeet}
            onChangeText={(text) => handleInputChange('whomToMeet', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <MaterialCommunityIcons name="card-account-details-outline" size={20} color="#F46D5D" />
          <TextInput
            style={styles.input}
            placeholder="ID Proof (optional)"
            placeholderTextColor="#aaa"
            value={formData.idProof}
            onChangeText={(text) => handleInputChange('idProof', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <MaterialCommunityIcons name="account-search-outline" size={20} color="#F46D5D" />
          <Picker
            selectedValue={formData.reference}
            onValueChange={(value) => handleInputChange('reference', value)}
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

      {/* Photo & Remark Section */}
      <View style={styles.section}>
        <View style={styles.rowButtons}>
          <TouchableOpacity 
            style={styles.photoButton} 
            onPress={handleTakePhoto}
          >
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

        {photo && (
          <Image 
            source={{ uri: photo }} 
            style={styles.photoPreview} 
          />
        )}
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
  sectionTitle: {
    color: '#F46D5D',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
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
});