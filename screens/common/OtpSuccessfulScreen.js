import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function OtpSuccessfulScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const email = route?.params?.email || '';

  const handleCreateNewPassword = () => {
    navigation.navigate('NewPassword', { email });
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Ionicons name="chevron-back" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Success Icon */}
      <View style={styles.successWrapper}>
        <View style={styles.successIcon}>
          <Feather name="check" size={32} color="#fff" />
        </View>
        <Text style={styles.successText}>Successful</Text>
        <Text style={styles.subText}>OTP verification successful.</Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleCreateNewPassword}
      >
        <Text style={styles.buttonText}>Create new password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f1c',
    padding: 24,
  },
  backBtn: {
    marginTop: 10,
  },
  successWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successIcon: {
    backgroundColor: '#2ecc71',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  successText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subText: {
    color: '#ccc',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#e74c3c',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
