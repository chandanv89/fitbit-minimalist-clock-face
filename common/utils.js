import { HeartRateSensor } from "heart-rate";

// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function getDateString(dateObj){
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  
  let dt = zeroPad(dateObj.getDate());
  let week = day[dateObj.getDay()];
  let mon = month[dateObj.getMonth()];
  
  return `${week} ${dt} ${mon}`;
}

export function getTimeString(dateObj){
  let hours = monoDigits(zeroPad(dateObj.getHours()));
  let mins = monoDigits(zeroPad(dateObj.getMinutes()));
  let secs = monoDigits(zeroPad(dateObj.getSeconds()));

  return `${hours}:${mins}:${secs}`;
}

// Convert a number to a special monospace number
export function monoDigits(digits) {
  var ret = "";
  var str = digits.toString();
  for (var index = 0; index < str.length; index++) {
    var num = str.charAt(index);
    ret = ret.concat(hex2a("0x1" + num));
  }
  return ret;
}

// Hex to string
export function hex2a(hex) {
  var str = '';
  for (var index = 0; index < hex.length; index += 2) {
    var val = parseInt(hex.substr(index, 2), 16);
    if (val) str += String.fromCharCode(val);
  }
  return str.toString();
}