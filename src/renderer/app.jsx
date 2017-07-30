import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";
import Room from "./Room";

import firebase from "firebase/firebase-browser";
 
// Routingの定義
const appRouting = (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="login" component={Login} />
            <Route path="signup" component={Signup} />
            <Route path="rooms" component={Rooms}>
                <Route path=":roomId" component={Room} />
            </Route>
        </Route>
    </Router>
);

// Routingの初期化
if(!location.hash.length) {
    location.hash = "#/login";
}

// firebaseの初期化
const config = {
    apiKey: "AIzaSyCalUp17rYhdwX2l66b5IuoQ-OCpOWnJ-0",
    authDomain: "electron-chat-be06b.firebaseapp.com",
    databaseURL: "https://electron-chat-be06b.firebaseio.com",
    storageBucket: "electron-chat-be06b.appspot.com",
  };
  firebase.initializeApp(config);

// Applicationの描画
render(appRouting, document.getElementById("app"));
