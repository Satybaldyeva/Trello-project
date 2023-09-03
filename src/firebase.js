import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeMAxUN6RykL6_9yehjphtIpRis9Chn78",
  authDomain: "auth-example-6a787.firebaseapp.com",
  projectId: "auth-example-6a787",
  storageBucket: "auth-example-6a787.appspot.com",
  messagingSenderId: "180699106649",
  appId: "1:180699106649:web:9c2efaa0fc6877ecfe5048",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
