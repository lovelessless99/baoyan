import { initializeApp } from "firebase/app";


export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAiM6pzSvmwctGs7XjY0oT691XH2q3qce8",
        authDomain: "baoyan-11f97.firebaseapp.com",
        databaseURL: "https://baoyan-11f97-default-rtdb.firebaseio.com",
        projectId: "baoyan-11f97",
        storageBucket: "baoyan-11f97.appspot.com",
        messagingSenderId: "358671499158",
        appId: "1:358671499158:web:e1cae231176fbe4cae67b7",
        measurementId: "G-YWDWR4GZDH"
    }
}

export const app = initializeApp(environment.firebaseConfig);