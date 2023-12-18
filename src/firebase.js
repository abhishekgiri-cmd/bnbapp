import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6kSkkcASnkbibCMk7mLXQcDFywqhZtLk",
    authDomain: "appzoy-react-authapp.firebaseapp.com",
    projectId: "appzoy-react-authapp",
    storageBucket: "appzoy-react-authapp.appspot.com",
    messagingSenderId: "910293930681",
    appId: "1:910293930681:web:17bc83b753396d93fd0168",
    measurementId: "G-DV4EQ476EG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;