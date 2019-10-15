import ClockController from "./clockController";
import document from "document";
import * as messaging from "messaging";
import analytics from "fitbit-google-analytics/app";

analytics.configure({
  tracking_id: "UA-149776747-1"
});

let clockTime = document.getElementById("clock");
let clockDate = document.getElementById("shortDate");

let clock = new ClockController();

// Message is received
messaging.peerSocket.onmessage = evt => {
  if (evt.data.key === "clockColor" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    clockTime.style.fill = color;
  }

  if (evt.data.key === "dateColor" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    clockDate.style.fill = color;
  }
};
