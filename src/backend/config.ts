import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: 'AIzaSyCitZndUOJRmS2rwdad9q_EF7urDlMecx0',
        authDomain: 'cadastro-fullstack.firebaseapp.com',
        projectId: 'cadastro-fullstack',
    })
}

export default firebase

// apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//         authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,