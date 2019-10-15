import clock from "clock";
import document from "document";
import * as util from "./utils";
import { preferences } from "user-settings";

export default class ClockController {
  defaultArgs = {
    clockId: "clock",
    dateId: "shortDate",
    granularity: "minutes"
  };
  
  days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  clockElement = null;
  dateElement = null;
  settings = null;

  constructor(args = {}) {
    this.createSettings(args);
    this.populateElementProperties();
    this.setClockProperties();
  }

  createSettings(args) {
    this.settings = this.defaultArgs;
    
    if (args.hasOwnProperty('clockId')) {
      this.settings.clockId = args.clockId;
    }
    
    if (args.hasOwnProperty('granularity')) {
      this.settings.granularity = args.granularity;
    }
    
    if (args.hasOwnProperty('dateId')) {
      this.settings.dateId = args.dateId;
    }
  }

  populateElementProperties() {
    this.clockElement = document.getElementById(this.settings.clockId);
    this.dateElement = document.getElementById(this.settings.dateId);
  }

  setClockProperties() {
    clock.granularity = this.settings.granularity;
    clock.addEventListener('tick', this.handleTick.bind(this));
  }

  handleTick(event) {
    let timeModel = this.getTimeProperties(event.date);
    this.applyTime(timeModel);
    this.applyDate(timeModel);
  }

  getTimeProperties(today) {
    let timeModel = {
      dayName: "",
      day: 0,
      hours: "",
      minutes: ""
    };

    timeModel.dayName = this.days[today.getDay()];
    timeModel.day = util.zeroPad(today.getDate());
    timeModel.hours = this.formatHours(today.getHours());
    timeModel.minutes = util.zeroPad(today.getMinutes());
    
    return timeModel;
  }

  formatHours(currentHours) {
    let hours = null;
    
    if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = currentHours % 12 || 12;
    } else {
      // 24h format
      hours = util.zeroPad(currentHours);
    }
    
    return hours;
  }

  applyTime(timeModel) {
    this.clockElement.text = `${timeModel.hours}:${timeModel.minutes}`;
  }

  applyDate(timeModel) {
    this.dateElement.text = `${timeModel.dayName} ${timeModel.day}`;
  }
}
