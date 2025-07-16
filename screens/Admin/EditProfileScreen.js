import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      const imageUri = await AsyncStorage.getItem('userImage');

      if (userData) {
        const user = JSON.parse(userData);
        setName(`${user.firstName} ${user.lastName}`);
        setPhone(user.phone || '');
        setEmail(user.email || '');
        setAddress(user.address || '');
      }

      if (imageUri) {
        setProfileImage(imageUri);
      }
    };
    loadUser();
  }, []);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permission required', 'Enable camera access');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    if (!name.trim() || !phone.trim() || !email.trim() || !address.trim()) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    const [firstName, ...lastParts] = name.trim().split(' ');
    const updatedUser = {
      firstName: firstName || '',
      lastName: lastParts.join(' ') || '',
      phone,
      email,
      address,
    };

    await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
    if (profileImage) {
      await AsyncStorage.setItem('userImage', profileImage);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      <View style={styles.avatarContainer}>
        <Image
          source={profileImage ? { uri: profileImage } : require('../../assets/image.png')}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.cameraIcon} onPress={pickImage}>
          <Ionicons name="camera" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="person" size={20} color="#E74C3C" />
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="call" size={20} color="#E74C3C" />
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      </View>

      <View style={styles.inputBox}>
        <MaterialCommunityIcons name="email-outline" size={20} color="#E74C3C" />
        <TextInput
          style={[styles.input, { color: '#aaa' }]} // make it visibly read-only
          value={email}
          editable={false}
          selectTextOnFocus={false}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="location" size={20} color="#E74C3C" />
        <TextInput
          style={[styles.input, { height: 60 }]}
          multiline
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D1A',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    marginTop:30,
  },
  avatarContainer: {
    alignSelf: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: '#fff',
    borderWidth: 2,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#E74C3C',
    borderRadius: 12,
    padding: 4,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E2C',
    padding: 12,
    borderRadius: 10,
    marginBottom: 14,
  },
  input: {
    color: '#fff',
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  cancelButton: {
    backgroundColor: '#1E1E2C',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  cancelText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
