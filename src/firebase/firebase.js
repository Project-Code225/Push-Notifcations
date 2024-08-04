import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDuzZIxaZq3nyiH8RWKJS0K6vqfuev5pB4",
  authDomain: "aviralpushproject-baed3.firebaseapp.com",
  projectId: "aviralpushproject-baed3",
  storageBucket: "aviralpushproject-baed3.appspot.com",
  messagingSenderId: "230327434675",
  appId: "1:230327434675:web:8853753c26de856d021fc6",
  measurementId: "G-Y5902YNJE2"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: "BN_BRM-1wohG-paf8T5KwPMLPJrmCOjakDHggcBRDPh7wQkm3T-QWvkGIdiKu_XnINDgWd7qY7sY_kdwdqh0B-c" })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});