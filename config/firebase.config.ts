import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMIAN!,
  projectId: process.env.NEXT_PUBLIC_PROJECTID!,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDERID!,
  appId: process.env.NEXT_PUBLIC_APPID,
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
