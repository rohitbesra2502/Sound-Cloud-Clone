import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAX4hQEvpVxA9d6Gh04Yt5OuosC4tnehsw",
  authDomain: "sound-cloud-cef30.firebaseapp.com",
  projectId: "sound-cloud-cef30",
  storageBucket: "sound-cloud-cef30.appspot.com",
  messagingSenderId: "236387422305",
  appId: "1:236387422305:web:a02f1cc720d99378379a20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};

export default app;