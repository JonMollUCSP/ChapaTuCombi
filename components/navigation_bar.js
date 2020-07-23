import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

import PageSchedule from '../pages/schedule';
import PageTrips from '../pages/trips';
import PagePlaces from '../pages/places';
import PageBuses from '../pages/buses';

const page_schedule = () => <PageSchedule/>;
const page_trips = () => <PageTrips/>;
const page_places = () => <PagePlaces/>;
const page_buses = () => <PageBuses/>;

function NavigationBar() {
  const [index, set_index] = useState(0);
  
  const [routes] = useState([
    { key: 'schedule',  title: 'Horarios',  icon: 'calendar' },
    { key: 'trips',     title: 'Viajes',    icon: 'road' },
    { key: 'places',    title: 'Lugares',   icon: 'pin' },
    { key: 'buses',     title: 'Combis',    icon: 'car' },
  ]);

  const render_scene = BottomNavigation.SceneMap({
    schedule: page_schedule,
    trips: page_trips,
    places: page_places,
    buses: page_buses,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={set_index}
      renderScene={render_scene}
    />
  );
}

export default NavigationBar;
