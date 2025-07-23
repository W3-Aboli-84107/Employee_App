import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {  useRoute } from '@react-navigation/native';

export default function OtpUnsuccessfulScreen() {
    const navigation = useNavigation();
       const route = useRoute();

    const handleTryAgain = () => {
        navigation.replace('OTPScreen', {
            email: route.params?.email,
            otp: route.params?.otp,
        });
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                <Ionicons name="chevron-back" size={28} color="#fff" />
            </TouchableOpacity>

            {/* Failed Icon */}
            <View style={styles.iconWrapper}>
                <View style={styles.errorIcon}>
                    <Feather name="x" size={32} color="#fff" />
                </View>
                <Text style={styles.title}>Unsuccessful</Text>
                <Text style={styles.subtitle}>OTP verification unsuccessful.</Text>
            </View>

            {/* Button */}
            <TouchableOpacity style={styles.button} onPress={handleTryAgain}>
                <Text style={styles.buttonText}>Verify again</Text>
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
    iconWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorIcon: {
        backgroundColor: '#e74c3c',
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 6,
    },
    subtitle: {
        color: '#ccc',
        fontSize: 14,
    },
    button: {
        backgroundColor: '#e74c3c',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 32,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
