import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-native-paper';

import { deleteTrip } from '../utils/firebase';

import ListItems from './list_items';
import EditTime from './edit_time';

import { setTrip } from '../utils/firebase';

function CardTrip(props) {
  const { data } = props;

  const [ startPlace, setStartPlace ] = useState(data.startPlace);
  const [ goalPlace, setGoalPlace ] = useState(data.goalPlace);
  
  const [ bus, setBus ] = useState(data.bus);

  const [ startTime, setStartTime ] = useState(data.startTime);
  const [ goalTime, setGoalTime ] = useState(data.goalTime);

  // =====================================================================

  useEffect(() => {
    const _dbID = data.key;
    const _bus = data.bus;
    const _startPlace = startPlace;
    const _goalPlace = data.goalPlace;
    const _startTime = data.startTime;
    const _goalTime = data.goalTime;
    
    setTrip(_dbID, _bus, _startPlace, _goalPlace, _startTime, _goalTime)
  }, [startPlace]);

  // =====================================================================

  useEffect(() => {
    const _dbID = data.key;
    const _bus = data.bus;
    const _startPlace = data.startPlace;
    const _goalPlace = goalPlace;
    const _startTime = data.startTime;
    const _goalTime = data.goalTime;
    
    setTrip(_dbID, _bus, _startPlace, _goalPlace, _startTime, _goalTime)
  }, [goalPlace]);

  // =====================================================================

  useEffect(() => {
    const _dbID = data.key;
    const _bus = data.bus;
    const _startPlace = data.startPlace;
    const _goalPlace = data.goalPlace;
    const _startTime = startTime;
    const _goalTime = data.goalTime;
    
    setTrip(_dbID, _bus, _startPlace, _goalPlace, _startTime, _goalTime)
  }, [startTime]);

  // =====================================================================

  useEffect(() => {
    const _dbID = data.key;
    const _bus = data.bus;
    const _startPlace = data.startPlace;
    const _goalPlace = data.goalPlace;
    const _startTime = data.startTime;
    const _goalTime = goalTime;
    
    setTrip(_dbID, _bus, _startPlace, _goalPlace, _startTime, _goalTime)
  }, [goalTime]);

  // =====================================================================

  useEffect(() => {
    const _dbID = data.key;
    const _bus = bus;
    const _startPlace = data.startPlace;
    const _goalPlace = data.goalPlace;
    const _startTime = data.startTime;
    const _goalTime = data.goalTime;
    
    setTrip(_dbID, _bus, _startPlace, _goalPlace, _startTime, _goalTime)
  }, [bus]);

  // =====================================================================

  const deleteButton = () => {
    deleteTrip(data.key);
  };

  // ======================================================================

  return (
    <Card>
      <Card.Content>

        <ListItems title={"Lugar de partida"} description={startPlace} exportSelected={setStartPlace} typeItems="places" />
        <ListItems title={"Lugar de llegada"} description={goalPlace} exportSelected={setGoalPlace} typeItems="places" />

        <ListItems title={"Combi"} description={bus} exportSelected={setBus} typeItems="buses" />

        <EditTime title={"Hora de partida"} description={startTime} exportTime={setStartTime} />
        <EditTime title={"Hora de llegada"} description={goalTime} exportTime={setGoalTime} />

        <Card.Actions>          
          <Button onPress={deleteButton}>
            Eliminar
          </Button>
        </Card.Actions>

      </Card.Content>
    </Card>
  );
}

export default CardTrip;
