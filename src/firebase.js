import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_REIBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_REIBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_REIBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_REIBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_REIBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_REIBASE_APP_ID
})

export const firebaseHelper = {
	auth: app.auth(),
	app
}