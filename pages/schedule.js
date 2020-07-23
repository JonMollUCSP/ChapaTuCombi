import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Appbar, Card, Button } from 'react-native-paper';

import ListItems from '../components/list_items';
import TableSchedule from '../components/table_schedule';
import { getTrips } from '../utils/firebase';

function PageSchedule() {
  const [ startPlace, setStartPlace ] = useState("");
  const [ goalPlace, setGoalPlace ] = useState("");
  const [ selectedTrips, setSelectedTrips ] = useState([]);

  // ======================================================================

  const getSchedule = () => {
    const savedTrips = getTrips();
    var selectedTrips = [];

    for (var i = 0; i < savedTrips.length; i++) {
      if (savedTrips[i].startPlace == startPlace && 
          savedTrips[i].goalPlace == goalPlace) {
            selectedTrips.push(savedTrips[i]);
          }
    }

    console.log(selectedTrips);
    setSelectedTrips(selectedTrips);
  };

  return (
    <>
      <StatusBar/>

      <Appbar.Header>
       <Appbar.Content title="Horarios" subtitle={'Seleccione los lugares de partida y llegada'} />
      </Appbar.Header>

      <Card>
        <Card.Content>
          <ListItems title={"Lugar de partida"} description={"Seleccione un lugar"} exportSelected={setStartPlace} typeItems="places" />
          <ListItems title={"Lugar de llegada"} description={"Seleccione un lugar"} exportSelected={setGoalPlace} typeItems="places" />

          <Button icon="calendar" mode="contained" onPress={getSchedule}>
            Buscar horarios
          </Button>
        </Card.Content>
      </Card>
      
      <TableSchedule items={selectedTrips} />
    </>
  );
}

export default PageSchedule;
