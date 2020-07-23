import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC2iYITopT9S0q0Ju-jaNEuawyF4X2aqrw",
  authDomain: "chapatucombi-38a78.firebaseapp.com",
  databaseURL: "https://chapatucombi-38a78.firebaseio.com",
  projectId: "chapatucombi-38a78",
  storageBucket: "chapatucombi-38a78.appspot.com",
  messagingSenderId: "799737913480",
  appId: "1:799737913480:web:2044196797810284477f3d",
  measurementId: "G-8ETYQHEFXB"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// ======================================================================

var savedPlaces = []

firebase.database().ref('user/places').on('value', (snapshot) => {
  savedPlaces = snapshot.val();
});

export function getPlaces(){
  return savedPlaces;
}

// ======================================================================

export function setPlace(dbID, name, latitude, longitude, uri) {
  firebase.database().ref('user/places/' + dbID).set({
    key: dbID,
    name: name,
    latitude: latitude,
    longitude: longitude,
    uri: uri
  });
}

// ======================================================================

export function deletePlace(dbID) {
  firebase.database().ref('user/places/' + dbID).set({});
}

// ======================================================================

var savedBuses = []

firebase.database().ref('user/buses').on('value', (snapshot) => {
  savedBuses = snapshot.val();
});

export function getBuses(){
  return savedBuses;
}

// ======================================================================

export function setBus(dbID, name, uri) {
  firebase.database().ref('user/buses/' + dbID).set({
    key: dbID,
    name: name,
    uri: uri
  });
}

// ======================================================================

export function deleteBus(dbID) {
  firebase.database().ref('user/buses/' + dbID).set({});
}

// ======================================================================

var savedTrips = []

firebase.database().ref('user/trips').on('value', (snapshot) => {
  savedTrips = snapshot.val();
});

export function getTrips(){
  return savedTrips;
}

// ======================================================================

export function setTrip(dbID, bus, startPlace, goalPlace, startTime, goalTime) {
  firebase.database().ref('user/trips/' + dbID).set({
    key: dbID,
    bus: bus,
    startPlace: startPlace,
    goalPlace: goalPlace,
    startTime: startTime,
    goalTime: goalTime
  });
}

// ======================================================================

export function deleteTrip(dbID) {
  firebase.database().ref('user/trips/' + dbID).set({});
}
