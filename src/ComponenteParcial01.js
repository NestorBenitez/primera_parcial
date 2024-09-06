// src/primera-parcial/ComponenteParcial01.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const ComponenteParcial01 = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [estado, setEstado] = useState(false);

  // Items para la lista
  const listaItems = [
    { id: '1', title: 'PropsParcial02', screen: 'PropsParcial02' },
    { id: '2', title: 'AxiosParcial03', screen: 'AxiosParcial03' },
    { id: '3', title: 'AsyncStorageParcial04', screen: 'AsyncStorageParcial04' },
  ];

  const renderItem = ({ item }) => (
    <Button
      title={item.title}
      onPress={() => navigation.navigate(item.screen, { nombre, estado })}
      style={styles.listItemButton}
    />
  );

  return (
    <View style={styles.container}>
      {/* Título del examen */}
      <Text style={styles.title}>Examen Primera Parcial</Text>

      {/* Card con logo de la aplicación (imagen desde internet) */}
      <View style={styles.card}>
      <Image
  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png' }}
  style={styles.logo}
     />
      </View>

      {/* Input para ingresar el nombre */}
      <TextInput
        placeholder="Ingresar nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />

      {/* Lista de componentes */}
      <FlatList
        data={listaItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
      />
    </View>
  );
};

ComponenteParcial01.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  card: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  list: {
    marginTop: 20,
  },
  listItemButton: {
    marginVertical: 10,
  },
});

export default ComponenteParcial01;
