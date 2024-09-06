// src/primera-parcial/PropsParcial02.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const PropsParcial02 = ({ route }) => {
  const { nombre, estado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mi nombre es: {nombre}</Text>
      <Text style={styles.text}>
        Actualmente estoy {estado ? 'ACTIVO' : 'INACTIVO'} en el 8º semestre
      </Text>
    </View>
  );
};

PropsParcial02.propTypes = {
  route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    color: '#333',
  },
});

export default PropsParcial02;
