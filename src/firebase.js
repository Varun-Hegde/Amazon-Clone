//CONNECTING FIREBASE TO REACT FRONTEND

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCsxEyWt4IQfyj-9KStHykhFzztC43YWKc',
	authDomain: 'clone-3dda8.firebaseapp.com',
	databaseURL: 'https://clone-3dda8.firebaseio.com',
	projectId: 'clone-3dda8',
	storageBucket: 'clone-3dda8.appspot.com',
	messagingSenderId: '652535112070',
	appId: '1:652535112070:web:cde2566e21e584217fcc07',
	measurementId: 'G-PFEPB2N0Q6'
});

const auth = firebase.auth();

export { auth };
