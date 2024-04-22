"use strict";
// ----------------------NET01 - CRONOMETRO----------------------------
var n1 = new Date();
var start_net01;
let hour_net01 = 0;
let minute_net01 = 0;
let second_net01 = 0;
let millisecond_net01 = 0;
let cron_net01;

function play_net01() {
  if (millisecond_net01 == 0) {
    start_net01 = n1.toLocaleTimeString();
    document.getElementById('start_net01').innerText = start_net01;
  }
  pause_net01();
  cron_net01 = setInterval(() => { timer_net01(); }, 10);
}

function pause_net01() {
  clearInterval(cron_net01);
}

function reset_net01() {
  hour_net01 = 0;
  minute_net01 = 0;
  second_net01 = 0;
  millisecond_net01 = 0;
  document.getElementById('hour_net01').innerText = '00';
  document.getElementById('minute_net01').innerText = '00';
  document.getElementById('second_net01').innerText = '00';
  document.getElementById('start_net01').innerText = '00:00:00';
  pause_net01();
}

function timer_net01() {
  if ((millisecond_net01 += 10) == 1000) {
    millisecond_net01 = 0;
    second_net01++;
  }
  if (second_net01 == 60) {
    second_net01 = 0;
    minute_net01++;
  }
  if (minute_net01 == 60) {
    minute_net01 = 0;
    hour_net01++;
  }
  document.getElementById('hour_net01').innerText = returnData(hour_net01);
  document.getElementById('minute_net01').innerText = returnData(minute_net01);
  document.getElementById('second_net01').innerText = returnData(second_net01);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}

// ----------------------NET02 - CRONOMETRO----------------------------
var n2 = new Date();
var start_net02;
let hour_net02 = 0;
let minute_net02 = 0;
let second_net02 = 0;
let millisecond_net02 = 0;
let cron_net02;

function play_net02() {
  if (millisecond_net02 == 0) {
    start_net02 = n2.toLocaleTimeString();
    document.getElementById('start_net02').innerText = start_net02;
  }
  pause_net02();
  cron_net02 = setInterval(() => { timer_net02(); }, 10);
}

function pause_net02() {
  clearInterval(cron_net02);
}

function reset_net02() {
  hour_net02 = 0;
  minute_net02 = 0;
  second_net02 = 0;
  millisecond_net02 = 0;
  document.getElementById('hour_net02').innerText = '00';
  document.getElementById('minute_net02').innerText = '00';
  document.getElementById('second_net02').innerText = '00';
  pause_net02();
  document.getElementById('start_net02').innerText = '00:00:00';
}

function timer_net02() {
  if ((millisecond_net02 += 10) == 1000) {
    millisecond_net02 = 0;
    second_net02++;
  }
  if (second_net02 == 60) {
    second_net02 = 0;
    minute_net02++;
  }
  if (minute_net02 == 60) {
    minute_net02 = 0;
    hour_net02++;
  }
  document.getElementById('hour_net02').innerText = returnData(hour_net02);
  document.getElementById('minute_net02').innerText = returnData(minute_net02);
  document.getElementById('second_net02').innerText = returnData(second_net02);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}


// ----------------------NET03 - CRONOMETRO----------------------------
var n3 = new Date();
var start_net03;
let hour_net03 = 0;
let minute_net03 = 0;
let second_net03 = 0;
let millisecond_net03 = 0;
let cron_net03;

function play_net03() {
  if (millisecond_net03 == 0) {
    start_net03 = n3.toLocaleTimeString();
    document.getElementById('start_net03').innerText = start_net03;
  }
  pause_net03();
  cron_net03 = setInterval(() => { timer_net03(); }, 10);
}

function pause_net03() {
  clearInterval(cron_net03);
}

function reset_net03() {
  hour_net03 = 0;
  minute_net03 = 0;
  second_net03 = 0;
  millisecond_net03 = 0;
  document.getElementById('hour_net03').innerText = '00';
  document.getElementById('minute_net03').innerText = '00';
  document.getElementById('second_net03').innerText = '00';
  pause_net03();
  document.getElementById('start_net03').innerText = '00:00:00';
}

function timer_net03() {
  if ((millisecond_net03 += 10) == 1000) {
    millisecond_net03 = 0;
    second_net03++;
  }
  if (second_net03 == 60) {
    second_net03 = 0;
    minute_net03++;
  }
  if (minute_net03 == 60) {
    minute_net03 = 0;
    hour_net03++;
  }
  document.getElementById('hour_net03').innerText = returnData(hour_net03);
  document.getElementById('minute_net03').innerText = returnData(minute_net03);
  document.getElementById('second_net03').innerText = returnData(second_net03);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}