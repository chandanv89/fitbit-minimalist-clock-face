import clock from "clock";
import document from "document";
import { HeartRateSensor } from "heart-rate";

import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "seconds";

// Get a handle on the <text> element
let date = document.getElementById("date");
let time = document.getElementById("time");
let hBpm = document.getElementById("heartRate");


var hrm = new HeartRateSensor();

hrm.onreading = function(){
  //hBpm.text = hrm.heartRate + " BPM";
  //console.log("Current heart rate: " + hrm.heartRate);
}

hrm.start();

// Update the <text> element with the current time
function updateClock() {
  let today = new Date();
  
  date.text = util.getDateString(today);
  time.text = util.getTimeString(today);
  hBpm.text = hrm.heartRate + " BPM"; 
}

// Update the clock every tick event
clock.ontick = () => updateClock();
