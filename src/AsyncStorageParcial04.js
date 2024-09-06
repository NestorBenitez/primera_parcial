// src/primera-parcial/AsyncStorageParcial04.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [materia, setMateria] = useState('');
  const [calificaciones, setCalificaciones] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    leerDatos();
  }, []);

  const almacenarDatos = async () => {
    const nuevaEntrada = { codigo, materia, calificaciones };
    const nuevaLista = [...lista, nuevaEntrada];
    setLista(nuevaLista);
    await AsyncStorage.setItem('datos', JSON.stringify(nuevaLista));
    setCodigo('');
    setMateria('');
    setCalificaciones('');
  };

  const leerDatos = async () => {
    const datosAlmacenados = await AsyncStorage.getItem('datos');
    if (datosAlmacenados) {
      setLista(JSON.parse(datosAlmacenados));
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Calificaciones"
        value={calificaciones}
        onChangeText={setCalificaciones}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Almacenar Datos" onPress={almacenarDatos} />

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{`Código: ${item.codigo}, Materia: ${item.materia}, Calificaciones: ${item.calificaciones}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AsyncStorageParcial04;
