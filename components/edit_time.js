import React, { useState } from 'react';
import { Button, TextInput, Dialog, Portal, List } from 'react-native-paper';

function EditTime(props) {
  const { title, description, exportTime } = props;
  
  const [ itemDescription, setItemDescription ] = useState(description);

  const [ time, setTime ] = useState("");

  const today = new Date();
  const getCurrentTime = () => {
    setTime(today.getHours() + ":" + 
            today.getMinutes());
  }

  const [ visible, setVisible ] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => {
    setVisible(false);
    setItemDescription(time);
    exportTime(time);
  }

  return (
    <>
      <List.Item
        title={title}
        description={itemDescription}
        left={props => <List.Icon {...props} icon="clock" />}
        onPress={showDialog}
      />
      
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          
          <Dialog.Title>{title}</Dialog.Title>
          
          <Dialog.Content>
            <TextInput
              label="Hora"
              value={time}
              onChangeText={time => setTime(time)}
            />

          <Button icon="clock" mode="contained" onPress={getCurrentTime}>
            Hora actual
          </Button>

          </Dialog.Content>
          
          <Dialog.Actions>
            <Button onPress={hideDialog}>Aceptar</Button>
          </Dialog.Actions>
        
        </Dialog>
      </Portal>
    </>
  );
}

export default EditTime;
