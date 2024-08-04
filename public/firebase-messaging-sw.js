/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const config = {
    apiKey: "AIzaSyDuzZIxaZq3nyiH8RWKJS0K6vqfuev5pB4",
    authDomain: "aviralpushproject-baed3.firebaseapp.com",
    projectId: "aviralpushproject-baed3",
    storageBucket: "aviralpushproject-baed3.appspot.com",
    messagingSenderId: "230327434675",
    appId: "1:230327434675:web:8853753c26de856d021fc6",
    measurementId: "G-Y5902YNJE2"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload, registration) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png'
    };

    registration.showNotification(notificationTitle, notificationOptions);
});