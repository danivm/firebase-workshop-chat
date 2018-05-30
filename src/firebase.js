import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyCMS6_Dl00vQvPrJv0QOpl8zLnTytfdIsg',
  authDomain: 'fir-workshop-e2803.firebaseapp.com',
  databaseURL: 'https://fir-workshop-e2803.firebaseio.com',
  projectId: 'fir-workshop-e2803',
  storageBucket: 'fir-workshop-e2803.appspot.com',
  messagingSenderId: '125257442814'
})

const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

export default db
