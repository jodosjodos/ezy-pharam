import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendResetLink = () => {
    // Placeholder for your API call to send the reset link
    if (email) {
      setMessage('Password reset link sent to your email!');
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  return (
    <SafeAreaView className='bg-white h-full w-full'>

    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        Enter your email below, and we'll send you a password reset link.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSendResetLink}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => console.log('Back to login')}>
        <Text style={styles.linkText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#007bff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  message: {
    color: '#28a745',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ForgotPasswordPage;
