import React, { useState, useEffect } from 'react';
import { requestForToken, onMessageListener } from '../firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications = () => {
 
    const [, setNotification] = useState({title: '', body: ''});

  useEffect(() => {
    requestForToken();

    const unsubscribe = onMessageListener().then(payload => {
      setNotification({title: payload.notification.title, body: payload.notification.body});
      toast.info(`${payload.notification.title}: ${payload.notification.body}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch(err => console.log('failed: ', err));

    return () => {
      unsubscribe.catch(err => console.log('failed: ', err));
    }
  }, []);

  return (
    <div>
      <ToastContainer />
    </div>
  )
}

export default Notifications;