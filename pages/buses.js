import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import { Appbar, FAB  } from 'react-native-paper';

import { getBuses, setBus } from '../utils/firebase';
import { instanceLocation } from '../utils/location';

import CardBus from '../components/card_bus';

function PageBuses() {
  instanceLocation();

  const savedBuses = getBuses();
  const [ buses, setBuses ] = useState( [] );

  useEffect(() => {
    setBuses(savedBuses);
  }, [savedBuses]);

  // ======================================================================

  const pushBus = () => {
    const dbID = buses[buses.length-1].key + 1;
    const name = "";
    const uri = "https://picsum.photos/700";

    setBus(dbID, name, uri);
  };

  // ======================================================================

  return (
    <>
      <StatusBar/>

      <Appbar.Header>
       <Appbar.Content title="Combis" subtitle={'Agregue o edite las combis de sus viajes'} />
      </Appbar.Header>

      <ScrollView>
        {buses.map((bus) =>
          <CardBus key={bus.key} dbID={bus.key} _name={bus.name} uri={bus.uri}/>
        )}
      </ScrollView>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={pushBus}
      />
    </>
  );
}

export default PageBuses;

const styles = StyleSheet.create({  
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
