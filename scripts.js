"use strict";

var Net15 = 4.50; 
var Net30 = 5.50;
var Net60 = 6.50;

var IHN1;
var IMN1;
var ISN1;

var FHN1;
var FMN1;
var FSN1;




var StatusN1 = 0;
// 0 Parado ---- 1 Rodando ----- 2 Pausado

// TICK INFINITO PARA ATUALIZAR OS NETS
setInterval(() => { Timer(); }, 3000);

function Timer() {
  // FUNÇÃO NOW DO TIMER GLOBAL
  var N1 = new Date(); 
  var Hour;
  var Minute;
  var Second;

  Hour = N1.getHours();
  Minute = N1.getMinutes();
  Second = N1.getSeconds();
  console.log("AGORA " + Hour + ' : ' + Minute + ' : ' + Second);
}





function GetNow(Hour,Minute,Second) {
  // FUNÇÃO PARA PEGAR E DEVOLVER HORARIO ATUAL
  var N1 = new Date(); 
  
  Hour;
  Minute;
  Second;

  Hour = N1.getHours();
  Minute = N1.getMinutes();
  Second = N1.getSeconds();

 console.log("GetNow pegou " + Hour + ' : ' + Minute + ' : ' + Second);

  return Hour,Minute,Second;
  // return Hour, Minute, Second;
  // document.getElementById('hour_net01').innerText = returnData(hour_net01);
  // document.getElementById('minute_net01').innerText = returnData(minute_net01);
  // document.getElementById('second_net01').innerText = returnData(second_net01);
}





function StartN1() {
  var N1 = new Date(); 

  GetNow( IHN1, IMN1, ISN1 );
  // IHN1 = N1.getHours();
  // IMN1 = N1.getMinutes();
  // ISN1 = N1.getSeconds();
  console.log("Inicial " + IHN1 + ' : ' + IMN1 + ' : ' + ISN1);
 
  StatusN1 = 1;    
}

function StopN1() {
  var N1 = new Date(); 
  FHN1 = N1.getHours();
  FMN1 = N1.getMinutes();
  FSN1 = N1.getSeconds();
  StatusN1 = 2;

  // VHN1 = FHN1 - IHN1;
  // VMN1 = FMN1 - IMN1;
  // VSN1 = FSN1 - ISN1;
  
  // console.log("Hora Final: " + VHN1 + ' : ' + VMN1 + ' : ' +VSN1);
  // FMN1 = N1.getMinutes();
}