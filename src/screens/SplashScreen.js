import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 2000); // Navegar para a tela de login após 2 segundos

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flood Alert App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
  },
});

export default SplashScreen;