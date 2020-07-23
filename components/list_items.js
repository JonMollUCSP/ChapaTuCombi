import React, { useState } from 'react';
import { Button, Dialog, Portal, RadioButton, List } from 'react-native-paper';

import { getPlaces, getBuses } from '../utils/firebase';

function ListItems(props) {
  const { title, description, exportSelected, typeItems } = props;
  //console.log(_items);
  
  const [ items, setItems ] = useState([]);

  const [ selected, setSelected ] = useState(description);
  
  const [ value, setValue ] = useState("Casa");

  const [ visible, setVisible ] = useState(false);
  
  const showDialog = () => {
    setVisible(true);

    if (typeItems == "places"){
      const savedPlaces = getPlaces();
      setItems(savedPlaces);
    }
    else if (typeItems == "buses"){
      const savedBuses = getBuses();
      setItems(savedBuses);
    }
  }
  
  const hideDialog = () => {
    setVisible(false);
    setSelected(value);
    exportSelected(value);
  }

  return (
    <>
      <List.Item
        title={title}
        description={selected}
        left={props => <List.Icon {...props} icon="pin" />}
        onPress={showDialog}
      />
      
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          
          <Dialog.Title>{title}</Dialog.Title>
          
          <Dialog.Content>
            <RadioButton.Group onValueChange={value => setValue(value) } value={value}>
              {items && items.map((item) =>
                <RadioButton.Item key={item.key} label={item.name} value={item.name} />
              )}
            </RadioButton.Group>
          </Dialog.Content>
          
          <Dialog.Actions>
            <Button onPress={hideDialog}>Aceptar</Button>
          </Dialog.Actions>
        
        </Dialog>
      </Portal>
    </>
  );
}

export default ListItems;
