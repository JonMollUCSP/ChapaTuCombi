import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Appbar, FAB } from 'react-native-paper';

import { getTrips, setTrip, getPlaces, getBuses } from '../utils/firebase';
import { instanceLocation } from '../utils/location';

import CardTrip from '../components/card_trip';

function PageTrips() {
  instanceLocation();

  const savedTrips = getTrips();
  const [ trips, setTrips ] = useState([]);

  useEffect(() => {
    setTrips(savedTrips);
  }, [savedTrips]);

  // ======================================================================

  const pushTrip = () => {
    const dbID = trips[trips.length-1].key + 1;
    const bus = "Seleccione una combi";
    const startPlace = "Seleccione un lugar"; 
    const goalPlace = "Seleccione un lugar";
    const startTime = "Establezca una hora";
    const goalTime = "Establezca una hora";

    setTrip(dbID, bus, startPlace, goalPlace, startTime, goalTime);
  };

  // ======================================================================

  return (
    <>
      <StatusBar/>

      <Appbar.Header>
       <Appbar.Content title="Viajes" subtitle={"Agregue o edite sus viajes"} />
      </Appbar.Header>

      <ScrollView>
        {trips.map((trip) =>
          <CardTrip key={trip.key} data={trip}/>
        )}
      </ScrollView>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={pushTrip}
      />
    </>
  );
}

export default PageTrips;

const styles = StyleSheet.create({  
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

