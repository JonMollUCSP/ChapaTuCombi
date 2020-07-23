import React, { useState } from 'react';
import { Card, TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

import { setBus, deleteBus } from '../utils/firebase';

function CardBus(props) {
  const { dbID, _name, uri } = props;
  const [ name, setName ] = useState(_name);
  const [ imageURI, setImageURI ] = useState(uri);

  // ======================================================================
  
  const setSaveName = (name) => {
    setName(name);
    setBus(dbID, name, imageURI);
  };

  // ======================================================================

  const deleteButton = () => {
    deleteBus(dbID);
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
        setBus(dbID, name, result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
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

        <Card.Actions>
          <Button onPress={deleteButton}>
            Eliminar
          </Button>
        </Card.Actions>

      </Card.Content>
    </Card>
  );
}

export default CardBus;
