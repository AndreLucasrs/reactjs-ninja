'use strict'

import firebase from 'firebase'

// Your web app's Firebase configuration
// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAT_7t0n_V0sUonCUzpoq4_8uR5cswHALk',
  authDomain: 'reactflix-63caf.firebaseapp.com',
  databaseURL: 'https://reactflix-63caf.firebaseio.com',
  projectId: 'reactflix-63caf',
  storageBucket: 'reactflix-63caf.appspot.com',
  messagingSenderId: '225041293323',
  appId: '1:225041293323:web:3d5bc65d3b8ac9ca2a670e',
  measurementId: 'G-3PX843D4S6'
})

const db = firebase.database()

export { db }
