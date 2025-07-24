// // import React, { useState } from 'react';
// // import {
// //   View, Text, TextInput, StyleSheet, TouchableOpacity,
// //   ScrollView, Alert
// // } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';
// // import { Picker } from '@react-native-picker/picker';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // export default function EditVisitorScreen({ route, navigation }) {
// //   const { visitorData } = route.params;
// //   const [form, setForm] = useState({ ...visitorData });

// //   const handleChange = (key, value) => {
// //     setForm(prev => ({ ...prev, [key]: value }));
// //   };

// //   const handleSave = async () => {
// //     if (!form.name || !form.phone || !form.email) {
// //       Alert.alert('Validation', 'Name, Phone, and Email are required.');
// //       return;
// //     }

// //     try {
// //       const storedVisitors = await AsyncStorage.getItem('visitors');
// //       let visitors = storedVisitors ? JSON.parse(storedVisitors) : [];

// //       const updatedVisitors = visitors.map((v) =>
// //         v.id === form.id ? form : v
// //       );

// //       await AsyncStorage.setItem('visitors', JSON.stringify(updatedVisitors));

// //       navigation.navigate('AdminDashboard', {
// //         updatedVisitor: form,
// //       });
// //     } catch (error) {
// //       console.error('Error updating visitor', error);
// //       Alert.alert('Error', 'Failed to save visitor.');
// //     }
// //   };

// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       <View style={styles.headerRow}>
// //   <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// //     <Ionicons name="arrow-back" size={24} color="#fff" />
// //   </TouchableOpacity>
// //   <Text style={styles.headerTitle}>Edit Visitor’s Details</Text>
// // </View>


// //       <CustomInput icon="person" placeholder="Name" value={form.name}
// //         onChangeText={(text) => handleChange('name', text)} />

// //       <CustomInput icon="call" placeholder="Phone" keyboardType="phone-pad"
// //         value={form.phone} onChangeText={(text) => handleChange('phone', text)} />

// //       {/* <CustomInput icon="mail" placeholder="Email" keyboardType="email-address"
// //         value={form.email} onChangeText={(text) => handleChange('email', text)} /> */}

// // <CustomInput
// //   icon="mail"
// //   placeholder="Email"
// //   keyboardType="email-address"
// //   autoCapitalize="none"
// //   value={form.email}
// //   onChangeText={(text) =>
// //     handleChange('email', text.toLowerCase().replace(/[^a-z0-9@._]/g, ''))
// //   }
// // />

// //       <CustomInput icon="location" placeholder="Address"
// //         value={form.address} onChangeText={(text) => handleChange('address', text)} />

// //       <CustomPicker icon="male" selectedValue={form.gender}
// //         onValueChange={(value) => handleChange('gender', value)}
// //         options={['Male', 'Female', 'Other']} 
// //          />

// //       <CustomPicker icon="briefcase" selectedValue={form.purpose}
// //         onValueChange={(value) => handleChange('purpose', value)}
// //         options={['Interview', 'Meeting', 'Delivery', 'Other']} />

// //       <CustomInput icon="document-text" placeholder="Purpose Description"
// //         value={form.description} onChangeText={(text) => handleChange('description', text)} />
// //       <CustomInput icon="person-circle" placeholder="Whom to Meet"
// //         value={form.whomToMeet} onChangeText={(text) => handleChange('whomToMeet', text)} />

// //       <CustomPicker icon="card" selectedValue={form.idProof}
// //         onValueChange={(value) => handleChange('idProof', value)}
// //         options={['Adhar card', 'PAN Card', 'Driving License']} />

// //       <CustomPicker icon="people" selectedValue={form.relation}
// //         onValueChange={(value) => handleChange('relation', value)}
// //         options={['Friend', 'Family', 'Business', 'Other']} />

// //       <View style={styles.buttonRow}>
// //         <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
// //           <Text style={styles.cancelText}>Cancel</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
// //           <Text style={styles.saveText}>Save</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </ScrollView>
// //   );
// // }

// // const CustomInput = ({ icon, ...props }) => (
// //   <View style={styles.inputContainer}>
// //     <Ionicons name={icon} size={20} color="#E74C3C" style={styles.icon} />
// //     <TextInput style={styles.input} placeholderTextColor="#999" {...props} />
// //   </View>
// // );

// // const CustomPicker = ({ icon, selectedValue, onValueChange, options }) => (
// //   <View style={styles.inputContainer}>
// //     <Ionicons name={icon} size={20} color="#E74C3C" style={styles.icon}  />
// //     <Picker selectedValue={selectedValue} onValueChange={onValueChange} style={styles.picker} dropdownIconColor="#fff" >
// //       {options.map((item, idx) => (
// //         <Picker.Item key={idx} label={item} value={item} />
// //       ))}
// //     </Picker>
// //   </View>
// // );


// // const styles = StyleSheet.create({
// //   container: {
// //     backgroundColor: '#0D0D1A',
// //     padding: 16,
// //     paddingBottom: 100,
// //   },

// //   headerRow: {
// //   flexDirection: 'row',
// //   alignItems: 'center',
// //   marginBottom: 20,
// // },
// // backButton: {
// //   marginRight: 10,
// // },
// // headerTitle: {
// //   color: '#fff',
// //   fontSize: 20,
// //   fontWeight: 'bold',
// //   marginTop:40,
// //   marginLeft:30,
// // },

// // headerRow: {
// //   flexDirection: 'row',
// //   alignItems: 'center',
// //   marginTop: 30,
// //   marginBottom: 20,
// // },
// // backButton: {
// //   marginRight: 12,
// // },
// // headerTitle: {
// //   color: '#fff',
// //   fontSize: 20,
// //   fontWeight: 'bold',
// // },

// //   heading: {
// //     color: '#fff',
// //     fontSize: 20,
// //     marginTop:30,
// //     fontWeight: 'bold',
// //     marginBottom: 30,
   
// //   },
// //   inputContainer: {
// //     backgroundColor: '#1C1C2E',
// //     borderRadius: 8,
// //     paddingHorizontal: 10,
// //     paddingVertical: 12,
// //     marginBottom: 14,
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
  
// //   icon: {
    
// //     marginRight: 8,
   
// //   },
// //   input: {
// //     color: '#fff',
// //     flex: 1,
    
// //     fontSize: 16,
// //   },
// //   picker: {
// //     flex: 1,
// //     color: '#fff',
// //   },
// //   buttonRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: 24,
// //   },
// //   cancelButton: {
// //     flex: 1,
// //     backgroundColor: '#333',
// //     padding: 14,
// //     borderRadius: 8,
// //     marginRight: 8,
// //     alignItems: 'center',
// //   },
// //   saveButton: {
// //     flex: 1,
// //     backgroundColor: '#E74C3C',
// //     padding: 14,
// //     borderRadius: 8,
// //     marginLeft: 8,
// //     alignItems: 'center',
// //   },
// //   cancelText: {
// //     color: '#fff',
// //     fontWeight: '600',
// //   },
// //   saveText: {
// //     color: '#fff',
// //     fontWeight: '600',
// //   },
// // });

// import React, { useState } from 'react';
// import {
//   View, Text, TextInput, StyleSheet, TouchableOpacity,
//   ScrollView, Alert, Image
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { Picker } from '@react-native-picker/picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as ImagePicker from 'expo-image-picker';

// export default function EditVisitorScreen({ route, navigation }) {
//   const { visitorData } = route.params;
//   const [form, setForm] = useState({ photoUri: '', ...visitorData });

//   const handleChange = (key, value) => {
//     setForm(prev => ({ ...prev, [key]: value }));
//   };

//   const pickImage = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (!permissionResult.granted) {
//       Alert.alert('Permission Denied', 'Permission to access media library is required!');
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 1,
//       allowsEditing: true,
//     });

//     if (!result.canceled) {
//       handleChange('photoUri', result.assets[0].uri);
//     }
//   };

//   const handleSave = async () => {
//     if (!form.name || !form.phone || !form.email) {
//       Alert.alert('Validation', 'Name, Phone, and Email are required.');
//       return;
//     }

//     try {
//       const storedVisitors = await AsyncStorage.getItem('visitors');
//       let visitors = storedVisitors ? JSON.parse(storedVisitors) : [];

//       const updatedVisitors = visitors.map((v) =>
//         v.id === form.id ? form : v
//       );

//       await AsyncStorage.setItem('visitors', JSON.stringify(updatedVisitors));

//       navigation.navigate('AdminDashboard', {
//         updatedVisitor: form,
//       });
//     } catch (error) {
//       console.error('Error updating visitor', error);
//       Alert.alert('Error', 'Failed to save visitor.');
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.headerRow}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Edit Visitor’s Details</Text>
//       </View>

//       <View style={styles.imageContainer}>
//         {form.photoUri ? (
//           <Image source={{ uri: form.photoUri }} style={styles.image} />
//         ) : (
//           <Text style={styles.imagePlaceholder}>No Photo Selected</Text>
//         )}
//         <TouchableOpacity onPress={pickImage} style={styles.editPhotoButton}>
//           <Text style={styles.editPhotoText}>Edit Photo</Text>
//         </TouchableOpacity>
//       </View>

//       <CustomInput icon="person" placeholder="Name" value={form.name}
//         onChangeText={(text) => handleChange('name', text)} />

//       <CustomInput icon="call" placeholder="Phone" keyboardType="phone-pad"
//         value={form.phone} onChangeText={(text) => handleChange('phone', text)} />

//       <CustomInput
//         icon="mail"
//         placeholder="Email"
//         keyboardType="email-address"
//         autoCapitalize="none"
//         value={form.email}
//         onChangeText={(text) =>
//           handleChange('email', text.toLowerCase().replace(/[^a-z0-9@._]/g, ''))
//         }
//       />

//       <CustomInput icon="location" placeholder="Address"
//         value={form.address} onChangeText={(text) => handleChange('address', text)} />

//       <CustomPicker icon="male" selectedValue={form.gender}
//         onValueChange={(value) => handleChange('gender', value)}
//         options={['Male', 'Female', 'Other']} />

//       <CustomPicker icon="briefcase" selectedValue={form.purpose}
//         onValueChange={(value) => handleChange('purpose', value)}
//         options={['Interview', 'Meeting', 'Delivery', 'Other']} />

//       <CustomInput icon="document-text" placeholder="Purpose Description"
//         value={form.description} onChangeText={(text) => handleChange('description', text)} />

//       <CustomInput icon="person-circle" placeholder="Whom to Meet"
//         value={form.whomToMeet} onChangeText={(text) => handleChange('whomToMeet', text)} />

//       <CustomPicker icon="card" selectedValue={form.idProof}
//         onValueChange={(value) => handleChange('idProof', value)}
//         options={['Adhar card', 'PAN Card', 'Driving License']} />

//       <CustomPicker icon="people" selectedValue={form.relation}
//         onValueChange={(value) => handleChange('relation', value)}
//         options={['Friend', 'Family', 'Business', 'Other']} />

//       <View style={styles.buttonRow}>
//         <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
//           <Text style={styles.cancelText}>Cancel</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//           <Text style={styles.saveText}>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const CustomInput = ({ icon, ...props }) => (
//   <View style={styles.inputContainer}>
//     <Ionicons name={icon} size={20} color="#E74C3C" style={styles.icon} />
//     <TextInput style={styles.input} placeholderTextColor="#999" {...props} />
//   </View>
// );

// const CustomPicker = ({ icon, selectedValue, onValueChange, options }) => (
//   <View style={styles.inputContainer}>
//     <Ionicons name={icon} size={20} color="#E74C3C" style={styles.icon} />
//     <Picker selectedValue={selectedValue} onValueChange={onValueChange} style={styles.picker} dropdownIconColor="#fff">
//       {options.map((item, idx) => (
//         <Picker.Item key={idx} label={item} value={item} />
//       ))}
//     </Picker>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#0D0D1A',
//     padding: 16,
//     paddingBottom: 100,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 30,
//     marginBottom: 20,
//   },
//   backButton: {
//     marginRight: 12,
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     backgroundColor: '#1C1C2E',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 12,
//     marginBottom: 14,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     marginRight: 8,
//   },
//   input: {
//     color: '#fff',
//     flex: 1,
//     fontSize: 16,
//   },
//   picker: {
//     flex: 1,
//     color: '#fff',
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 24,
//   },
//   cancelButton: {
//     flex: 1,
//     backgroundColor: '#333',
//     padding: 14,
//     borderRadius: 8,
//     marginRight: 8,
//     alignItems: 'center',
//   },
//   saveButton: {
//     flex: 1,
//     backgroundColor: '#E74C3C',
//     padding: 14,
//     borderRadius: 8,
//     marginLeft: 8,
//     alignItems: 'center',
//   },
//   cancelText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   saveText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   image: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 10,
//     borderWidth: 2,
//     borderColor: '#E74C3C',
//   },
//   imagePlaceholder: {
//     color: '#ccc',
//     marginBottom: 10,
//   },
//   editPhotoButton: {
//     backgroundColor: '#444',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 6,
//   },
//   editPhotoText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
// });
import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
  ScrollView, Alert, Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

export default function EditVisitorScreen({ route, navigation }) {
  const { visitorData } = route.params;
  const [form, setForm] = useState({ photoUri: '', ...visitorData });

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission Denied', 'Media library access is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      handleChange('photoUri', result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission Denied', 'Camera access is required!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      handleChange('photoUri', result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    if (!form.name || !form.phone || !form.email) {
      Alert.alert('Validation', 'Name, Phone, and Email are required.');
      return;
    }

    try {
      const storedVisitors = await AsyncStorage.getItem('visitors');
      let visitors = storedVisitors ? JSON.parse(storedVisitors) : [];

      const updatedVisitors = visitors.map((v) =>
        v.id === form.id ? form : v
      );

      await AsyncStorage.setItem('visitors', JSON.stringify(updatedVisitors));

      navigation.navigate('AdminDashboard', {
        updatedVisitor: form,
      });
    } catch (error) {
      console.error('Error updating visitor', error);
      Alert.alert('Error', 'Failed to save visitor.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Visitor’s Details</Text>
      </View>

      <View style={styles.imageContainer}>
        {form.photoUri ? (
          <Image source={{ uri: form.photoUri }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>No Photo Selected</Text>
        )}
        <View style={styles.photoButtonRow}>
          <TouchableOpacity onPress={takePhoto} style={styles.editPhotoButton}>
            <Text style={styles.editPhotoText}>📷 Capture Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={pickImage} style={styles.editPhotoButton}>
            <Text style={styles.editPhotoText}>🖼️ Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>

      <CustomInput icon="person" placeholder="Name" value={form.name}
        onChangeText={(text) => handleChange('name', text)} />

      <CustomInput icon="call" placeholder="Phone" keyboardType="phone-pad"
        value={form.phone} onChangeText={(text) => handleChange('phone', text)} />

      <CustomInput
        icon="mail"
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={form.email}
        onChangeText={(text) =>
          handleChange('email', text.toLowerCase().replace(/[^a-z0-9@._]/g, ''))
        }
      />

      <CustomInput icon="location" placeholder="Address"
        value={form.address} onChangeText={(text) => handleChange('address', text)} />

      <CustomPicker icon="male" selectedValue={form.gender}
        onValueChange={(value) => handleChange('gender', value)}
        options={['Male', 'Female', 'Other']} />

      <CustomPicker icon="briefcase" selectedValue={form.purpose}
        onValueChange={(value) => handleChange('purpose', value)}
        options={['Interview', 'Meeting', 'Delivery', 'Other']} />

      <CustomInput icon="document-text" placeholder="Purpose Description"
        value={form.description} onChangeText={(text) => handleChange('description', text)} />

      <CustomInput icon="person-circle" placeholder="Whom to Meet"
        value={form.whomToMeet} onChangeText={(text) => handleChange('whomToMeet', text)} />

      <CustomPicker icon="card" selectedValue={form.idProof}
        onValueChange={(value) => handleChange('idProof', value)}
        options={['Adhar card', 'PAN Card', 'Driving License']} />

      <CustomPicker icon="people" selectedValue={form.relation}
        onValueChange={(value) => handleChange('relation', value)}
        options={['Friend', 'Family', 'Business', 'Other']} />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const CustomInput = ({ icon, ...props }) => (
  <View style={styles.inputContainer}>
    <Ionicons name={icon} size={20} color="#E74C3C" style={styles.icon} />
    <TextInput style={styles.input} placeholderTextColor="#999" {...props} />
  </View>
);

const CustomPicker = ({ icon, selectedValue, onValueChange, options }) => (
  <View style={styles.inputContainer}>
    <Ionicons name={icon} size={20} color="#E74C3C" style={styles.icon} />
    <Picker selectedValue={selectedValue} onValueChange={onValueChange} style={styles.picker} dropdownIconColor="#fff">
      {options.map((item, idx) => (
        <Picker.Item key={idx} label={item} value={item} />
      ))}
    </Picker>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D1A',
    padding: 16,
    paddingBottom: 100,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 12,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#E74C3C',
  },
  imagePlaceholder: {
    color: '#ccc',
    marginBottom: 10,
  },
  photoButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  editPhotoButton: {
    backgroundColor: '#444',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  editPhotoText: {
    color: '#fff',
    fontWeight: '600',
  },
  inputContainer: {
    backgroundColor: '#1C1C2E',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    color: '#fff',
    flex: 1,
    fontSize: 16,
  },
  picker: {
    flex: 1,
    color: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#333',
    padding: 14,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#E74C3C',
    padding: 14,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  cancelText: {
    color: '#fff',
    fontWeight: '600',
  },
  saveText: {
    color: '#fff',
    fontWeight: '600',
  },
});
