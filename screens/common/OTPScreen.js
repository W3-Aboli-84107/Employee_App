import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function OTPScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { email, otp: generatedOtp } = route.params;

    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(60);

    const inputs = useRef([]);

    // Countdown
    useEffect(() => {
        if (timer === 0) return;
        const countdown = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(countdown);
    }, [timer]);

    // Resend OTP
    const handleResend = () => {
        const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
        console.log('Resent OTP:', newOtp);
        route.params.otp = newOtp;
        setTimer(60);
        setOtp(['', '', '', '']);
        inputs.current[0].focus();
    };

    // Handle OTP change
    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Auto focus next input
        if (text && index < 3) {
            inputs.current[index + 1].focus();
        }

        // Auto blur last box
        if (index === 3 && text) {
            inputs.current[index].blur();
        }
    };

    // Verify OTP
    const handleSubmit = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp.length < 4) {
            Alert.alert('Please enter the full 4-digit OTP');
        } else if (enteredOtp !== generatedOtp) {
            //   Alert.alert('Incorrect OTP');
            navigation.navigate('OtpUnsuccess')
        } else {
            //   Alert.alert('OTP Verified!');
            navigation.navigate('OtpSuccess', { email });
        }
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={28} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.title}>OTP</Text>
            <Text style={styles.subtitle}>
                Enter OTP sent on your registered email ID
            </Text>

            {/* OTP Boxes */}
            <View style={styles.otpRow}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputs.current[index] = ref)}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        keyboardType="numeric"
                        maxLength={1}
                        style={styles.otpBox}
                        placeholderTextColor="#aaa"
                    />
                ))}
            </View>

            {/* Timer */}
            <Text style={styles.timerText}>
                OTP expires in <Text style={{ fontStyle: 'italic' }}>{timer} sec</Text>
            </Text>

            {/* Buttons */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.resendBtn} onPress={handleResend}>
                    <Text style={styles.resendText}>Send again</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b0f1c',
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 24,
    },
    subtitle: {
        color: '#ccc',
        marginVertical: 12,
    },
    otpRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
        marginBottom: 16,
    },
    otpBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        width: 55,
        height: 55,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    },
    timerText: {
        color: '#ccc',
        marginTop: 8,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    resendBtn: {
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    resendText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    submitBtn: {
        backgroundColor: '#e74c3c',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    submitText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
