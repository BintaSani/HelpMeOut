import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

chrome.runtime.onInstalled.addListener(() => {
  console.log('Chrome extension installed');
});

const firebaseConfig = {
  apiKey: "AIzaSyASUJlnUutu5AN9CXXcxyAC1cwX7P_Ez54",
  authDomain: "chrome-ext-40d06.firebaseapp.com",
  projectId: "chrome-ext-40d06",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Listen for messages from content scripts

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received in background script:', message);
  if (message.type === 'AUTH_WITH_TOKEN') {
    // const { token } = message;
    const token = message.token;
    console.log('Processing token:', token);
    if (!token) {
      console.error('No token received');
      sendResponse({ success: false, error: 'Token missing' });
      return;
    }

    firebase
      .auth()
      .signInWithCustomToken(token)
      .then(() => {
        const user = firebase.auth().currentUser;
        console.log('User signed in:', user?.uid);
        sendResponse({ success: true, userId: user?.uid });
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
        sendResponse({ success: false, error: error.message });
      });

    return true; // Keep the message channel open for async response
  }
});
