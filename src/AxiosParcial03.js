import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Button, ListItem, Overlay, SearchBar, Text } from '@rneui/themed';

const AxiosParcial03 = () => {
  const [data, setData] = useState([]);  // Estado para almacenar los datos obtenidos de la API
  const [search, setSearch] = useState('');  // Estado para el texto de búsqueda
  const [filteredData, setFilteredData] = useState([]);  // Estado para almacenar los datos filtrados
  const [selectedItem, setSelectedItem] = useState(null);  // Estado para el ítem seleccionado
  const [visible, setVisible] = useState(false);  // Estado para mostrar/ocultar el modal

  // Petición a la API usando `fetch` al cargar el componente
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        setData(data);  // Almacena los datos completos
        setFilteredData(data);  // Inicialmente los datos filtrados son los mismos
      })
      .catch(error => console.error('Error fetching data: ', error.message));
  }, []);

  // Actualizar la búsqueda y filtrar los datos
  const updateSearch = (search) => {
    setSearch(search);
    setFilteredData(
      data.filter(item => item.email.toLowerCase().includes(search.toLowerCase()))
    );
  };

  // Función para mostrar/ocultar el overlay
  const toggleOverlay = (item) => {
    setSelectedItem(item);
    setVisible(!visible);
  };

  return (
    <View>
      {/* Barra de búsqueda */}
      <SearchBar
        round
        placeholder="Buscar por correo..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, shadowColor: 'white' }}
      />

      {/* Lista de correos */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem bottomDivider onPress={() => toggleOverlay(item)}>
            <ListItem.Content>
              <ListItem.Title>{item.email}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
      />

      {/* Modal para mostrar más detalles del correo seleccionado */}
      {selectedItem && (
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Email: {selectedItem.email}</Text>
            <Text style={{ marginTop: 10 }}>Comentario: {selectedItem.body}</Text>
            <Button
              title="Cerrar"
              onPress={toggleOverlay}
              buttonStyle={{ marginTop: 20, backgroundColor: '#ff6347' }}
            />
          </View>
        </Overlay>
      )}
    </View>
  );
};

export default AxiosParcial03;
