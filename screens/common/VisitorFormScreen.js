
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



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Platform,
//   Alert,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export default function DashboardScreen({ navigation }) {
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [visitors, setVisitors] = useState([]);
//   const [newVisitor, setNewVisitor] = useState('');

//   const handleCalendarPress = () => setShowCalendar(true);

//   const onDateChange = (event, date) => {
//     setShowCalendar(Platform.OS === 'ios');
//     if (date) setSelectedDate(date);
//   };

//   const handleLogout = () => navigation.replace('Login');

//   const addVisitor = () => {
//     if (!newVisitor.trim()) {
//       Alert.alert('Error', 'Please enter a visitor name.');
//       return;
//     }
//     const newEntry = {
//       id: Date.now().toString(),
//       name: newVisitor.trim(),
//     };
//     setVisitors([newEntry, ...visitors]);
//     setNewVisitor('');
//   };

//   const renderVisitor = ({ item }) => (
//     <View style={styles.visitorCard}>
//       <Text style={styles.visitorName}>{item.name}</Text>
//       <View style={styles.visitorIcons}>
//         <Ionicons name="eye-outline" size={20} color="white" style={styles.visitorIcon} />
//         <Ionicons name="call-outline" size={20} color="white" style={styles.visitorIcon} />
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>
//           Hello, <Text style={styles.bold}>Suraj</Text>
//         </Text>
//         <View style={styles.headerIcons}>
//           <TouchableOpacity onPress={handleCalendarPress} style={styles.iconWrapper}>
//             <Ionicons name="calendar-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleLogout} style={styles.iconWrapper}>
//             <Ionicons name="log-out-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {showCalendar && (
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display="default"
//           onChange={onDateChange}
//         />
//       )}

//       {/* Add Visitor Input */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Enter visitor name"
//           placeholderTextColor="#aaa"
//           style={styles.searchInput}
//           value={newVisitor}
//           onChangeText={setNewVisitor}
//         />
//         <TouchableOpacity onPress={addVisitor} style={styles.addButton}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Visitor List */}
//       <View style={styles.visitorListContainer}>
//         <Text style={styles.sectionTitle}>Today's Visitors</Text>
//         <FlatList
//           data={visitors}
//           keyExtractor={(item) => item.id}
//           renderItem={renderVisitor}
//           ListEmptyComponent={<Text style={{ color: '#ccc' }}>No visitors yet.</Text>}
//         />
//       </View>

//       {/* Floating Action Button - Centered + */}
//       <TouchableOpacity
//         style={styles.fab}
//         onPress={() => navigation.navigate('VisitorFormScreen')}
//       >
//         <Text style={styles.fabIcon}>+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     backgroundColor: '#1E1E2C', 
//     paddingTop: 50,
//     position: 'relative', // Needed for absolute positioning of FAB
//   },
//   header: {
//     backgroundColor: '#C0392B',
//     padding: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   greeting: { color: '#fff', fontSize: 20 },
//   bold: { fontWeight: 'bold' },
//   headerIcons: { flexDirection: 'row', alignItems: 'center' },
//   iconWrapper: { marginLeft: 16, padding: 6 },
//   searchContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     alignItems: 'center',
//     gap: 8,
//   },
//   searchInput: {
//     backgroundColor: '#2C2C3A',
//     borderRadius: 8,
//     padding: 10,
//     color: '#fff',
//     flex: 1,
//   },
//   addButton: {
//     backgroundColor: '#F46D5D',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   visitorListContainer: {
//     flex: 1,
//     backgroundColor: '#2C2C3A',
//     marginHorizontal: 12,
//     borderRadius: 10,
//     padding: 16,
//     marginTop: 10,
//     marginBottom: 80, // Add space for FAB
//   },
//   sectionTitle: { color: '#fff', fontSize: 16, marginBottom: 12 },
//   visitorCard: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#3A3A4A',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   visitorName: { color: '#fff', fontSize: 16 },
//   visitorIcons: { flexDirection: 'row' },
//   visitorIcon: {
//     marginLeft: 12,
//     backgroundColor: '#4CAF50',
//     padding: 6,
//     borderRadius: 20,
//   },
//   fab: {
//     position: 'absolute',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#C0392B',
//     justifyContent: 'center',
//     alignItems: 'center',
//     bottom: 50,
//     right: 50, // Changed from centered to right-aligned
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     zIndex: 1,
//   },
//   fabIcon: {
//     fontSize: 30,
//     color: 'white',
//     fontWeight: 'bold',
//     lineHeight: 30,
//   },
// });