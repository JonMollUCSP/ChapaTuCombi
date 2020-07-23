import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import { Appbar, FAB  } from 'react-native-paper';
import * as Location from 'expo-location';

import { getPlaces, setPlace } from '../utils/firebase';
import CardPlace from '../components/card_place';

function PagePlaces() {
  const [ location, setLocation ] = useState(null);
  const [ errorMsg, setErrorMsg ] = useState(null);

  // ======================================================================

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
  
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  // ======================================================================

  const savedPlaces = getPlaces();
  const [ places, setPlaces ] = useState([]);

  useEffect(() => {
    setPlaces(savedPlaces);
  }, [savedPlaces]);

  // ======================================================================

  const pushPlace = () => {
    const dbID = places[places.length-1].key + 1;
    const name = "";
    const latitude = 0.0;
    const longitude = 0.0;
    const uri = "https://picsum.photos/700";

    setPlace(dbID, name, latitude, longitude, uri);
  };
  
  // ======================================================================

  return (
    <>
      <StatusBar/>

      <Appbar.Header>
       <Appbar.Content title="Lugares" subtitle={'Agregue o edite los lugares de sus viajes'} />
      </Appbar.Header>
      
      <ScrollView>
        {places.map((place) =>
          location && <CardPlace key={place.key} dbID={place.key} location={location} _name={place.name} _latitude={place.latitude} _longitude={place.longitude} uri={place.uri}/>
        )}
      </ScrollView>
      
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={pushPlace}
      />
    </>
  );
}

export default PagePlaces;

const styles = StyleSheet.create({  
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
