import clock from "clock";
import document from "document";

import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "seconds";

// Get a handle on the <text> element
let myLabel = document.getElementById("myLabel");

// Update the <text> element with the current time
function updateClock() {
  let today = new Date();
  let hours = today.getHours();
  let mins = util.zeroPad(today.getMinutes());
  let secs = util.zeroPad(today.getSeconds());

  myLabel.text = `${hours}:${mins}:${secs}`;
}

// Update the clock every tick event
clock.ontick = () => updateClock();
