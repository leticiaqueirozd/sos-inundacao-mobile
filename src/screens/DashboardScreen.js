import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    // Substituir pela URL do seu backend
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => setSensorData(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      {sensorData.map((data, index) => (
        <View key={index} style={styles.dataContainer}>
          <Text>Nível da água: {data.water_level}</Text>
          <Text>Chuva: {data.rainfall}</Text>
        </View>
      ))}
      <Button title="Ver Histórico" onPress={() => navigation.navigate('History')} />
      <Button title="Ver Alertas" onPress={() => navigation.navigate('Alerts')} />
      <Button title="Configurações" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  dataContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default DashboardScreen;