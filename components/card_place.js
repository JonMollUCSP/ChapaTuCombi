import React, { useState } from 'react';
import { Card, TextInput, DataTable, Button } from 'react-native-paper';
import * as Linking from 'expo-linking';
import * as ImagePicker from 'expo-image-picker';

import { setPlace, deletePlace } from '../utils/firebase';

function CardPlace(props) {
  const { dbID, location, _name, _latitude, _longitude, uri } = props;

  // ======================================================================

  const [ name, setName ] = useState(_name);
  const [ latitude, setLatitude ] = useState(_latitude);
  const [ longitude, setLongitude ] = useState(_longitude);
  const [ imageURI, setImageURI ] = useState(uri);

  // ======================================================================

  const setLatitudeLongitude = () => {
    const currentLatitude = location.coords.latitude;
    const currentLongitude = location.coords.longitude;

    setLatitude(currentLatitude);
    setLongitude(currentLongitude);

    setPlace(dbID, name, currentLatitude, currentLongitude, imageURI);
  };

  // ======================================================================

  const setSaveName = (name) => {
    setName(name);
    setPlace(dbID, name, latitude, longitude, imageURI);
  };

  // ======================================================================

  const deleteButton = () => {
    deletePlace(dbID);
  };

  // ======================================================================

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImageURI(result.uri);
        setPlace(dbID, name, latitude, longitude, result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  // ======================================================================

  const openMaps = () => {
    Linking.openURL('https://www.google.com/maps/@' 
      + latitude.toString() 
      + ',' 
      + longitude.toString() 
      + ',17.5z');
  };

  // ======================================================================

  return (
    <Card>
      <Card.Content>

        <TextInput
          label="Nombre"
          value={name}
          onChangeText={name => setSaveName(name)}
        />
        
        <Card.Cover source={{ uri: imageURI }} />

        <Button icon="camera" mode="contained" onPress={pickImage}>
          Elegir imagen
        </Button>

        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Latitud</DataTable.Title>
            <DataTable.Title>Longitud</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>{latitude}</DataTable.Cell>
            <DataTable.Cell>{longitude}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        <Button icon="map" mode="contained" onPress={openMaps}>
          Abrir en Maps
        </Button>
      
        <Card.Actions>
          <Button onPress={setLatitudeLongitude}>
            Autocompletar
          </Button>
          
          <Button onPress={deleteButton}>
            Eliminar
          </Button>
        </Card.Actions>

      </Card.Content>
    </Card>
  );
}

export default CardPlace;
