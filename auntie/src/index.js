import React from "react";
import ReactDOM from "react-dom";
import { CometChat } from "@cometchat-pro/chat";

import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";

var appID = "21600108a5b2d4d8";
var region = "us";

var appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();
CometChat.init(appID, appSetting).then(
  () => {
    if (CometChat.setSource) {
      CometChat.setSource("ui-kit", "web", "reactjs");
    }
    console.log("Initialization completed successfully");

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      
        <App />
      
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

    reportWebVitals();
  },
  (error) => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);
