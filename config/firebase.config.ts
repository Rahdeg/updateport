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

// const firebaseConfig = {
//   apiKey: "AIzaSyCpUnNFfoW91bFDAcaJcfgE12EOMGUWlgw",
//   authDomain: "mycv-702ac.firebaseapp.com",
//   projectId: "mycv-702ac",
//   storageBucket: "mycv-702ac.firebasestorage.app",
//   messagingSenderId: "652886656733",
//   appId: "1:652886656733:web:f639ef7831a399d1df7d34",
// };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
