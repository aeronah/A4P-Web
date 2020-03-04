client = new Paho.MQTT.Client("127.0.0.1", 9001, "ubuntu-web"); //10.42.0.1
client.onMessageArrived = onReceive;

client.connect({
  onSuccess: onConnect,
  onFailure: onFail
});

function onConnect() {
  alert("connected");
  client.subscribe("topic/WebTest");
}

function onFail() {
  alert("failed");
  client.connect(); // reconect if failed
}

function onReceive(msg) {
  //received a msg
  alert(msg.payloadString + "muahahaha");
}

// Home Page
function onHomeStartBtnClick () {
    location.href='start.html';
    alert("START");
    message = new Paho.MQTT.Message("START");
    message.destinationName = "topic/A4P";
    client.send(message);
}

function onHomeControlBtnClick () {
    location.href='control.html';
}

function onHomeConfigurationBtnClick () {
    location.href='configuration.html';
}

// Start Page

function onStartStopBtnClick() {
    location.href='home.html';
    alert("STOP");
    message = new Paho.MQTT.Message("STOP");
    message.destinationName = "topic/A4P";
    client.send(message);
}

//Control Page

function onControlBackBtnClick() {
    location.href='home.html';
}

function onControlLaunchBtnClick() {
    alert("LAUNCH");
    message = new Paho.MQTT.Message("LAUNCH");
    message.destinationName = "topic/A4P";
    client.send(message);
}

function onControlLeftBtnClick() {
    alert("STEPLEFT");
    message = new Paho.MQTT.Message("STEPLEFT");
    message.destinationName = "topic/A4P";
    client.send(message);
}

function onControlRightBtnClick() {
    alert("STEPRIGHT");
    message = new Paho.MQTT.Message("STEPRIGHT");
    message.destinationName = "topic/A4P";
    client.send(message);
}

//Scoreboard Page
function onScoreboardNextBtnClick() {
    location.href='home.html';
}

//Configuration Page
function onConfigurationBtnClick() {
    location.href='home.html';
}

function onConfigurationTrainingBtnClick() {
    location.href='training.html';
}

function onConfigurationDispenserBtnClick() {
    location.href='dispenser.html';
}

function onConfigurationRotationBtnClick() {
    location.href='rotation.html';
}

function onConfigurationLauncherBtnClick() {
    location.href='launcher.html';
}

//Training Page

$('.dropdown-item').on('click',  function(){
    var btnObj = $(this).parent().siblings('button');
    $(btnObj).text($(this).text());
    $(btnObj).val($(this).text());
});

function onTrainingSaveBtnClick() {
    location.href='home.html';
    alert(document.getElementById("number-passes").value);
    alert(document.getElementById("difficulty").value);
    message = new Paho.MQTT.Message(document.getElementById("number-passes").value);
    message.destinationName = "topic/A4P/PPS";
    client.send(message);
    message = new Paho.MQTT.Message(document.getElementById("difficulty").value);
    message.destinationName = "topic/A4P/DIFFICULTY";
    client.send(message);
}

//Dispenser Page
function onDispenserBackBtnClick() {
    location.href='configuration.html';
}

function onDispenserRunBtnClick() {
    alert("DRUN");
    message = new Paho.MQTT.Message("DRUN");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onDispenserStepBtnClick() {
    alert("DSTEP");
    message = new Paho.MQTT.Message("DSTEP");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onDispenserCWBtnClick() {
    alert("DCW");
    message = new Paho.MQTT.Message("DCW");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onDispenserCCWBtnClick() {
    alert("DCCW");
    message = new Paho.MQTT.Message("DCCW");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onDispenserStopBtnClick() {
    alert("DSTOP");
    message = new Paho.MQTT.Message("DSTOP");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

//Rotation Page
function onRotationBackBtnClick() {
    location.href='configuration.html';
}

function onRotationRunBtnClick() {
    alert("RRUN");
    message = new Paho.MQTT.Message("RRUN");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onRotationStepBtnClick() {
    alert("RSTEP");
    message = new Paho.MQTT.Message("RSTEP");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onRotationCWBtnClick() {
    alert("RCW");
    message = new Paho.MQTT.Message("RCW");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onRotationCCWBtnClick() {
    alert("RCCW");
    message = new Paho.MQTT.Message("RCCW");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onRotationStopBtnClick() {
    alert("RSTOP");
    message = new Paho.MQTT.Message("RSTOP");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

//Launcher Page
function onLauncherBackBtnClick() {
    location.href='configuration.html';
}

function onLauncherRunBtnClick() {
    alert("LRUN");
    message = new Paho.MQTT.Message("LRUN");
    message.destinationName = "topic/A4P/LAUNCHER";
    client.send(message);
}

function onLauncherUpBtnClick() {
    alert("LSU");
    message = new Paho.MQTT.Message("LSU");
    message.destinationName = "topic/A4P/LAUNCHER";
    client.send(message);
}

function onLauncherDownBtnClick() {
    alert("LSD");
    message = new Paho.MQTT.Message("LSD");
    message.destinationName = "topic/A4P/LAUNCHER";
    client.send(message);
}

function onLauncherStopBtnClick() {
    alert("LSTOP");
    message = new Paho.MQTT.Message("LSTOP");
    message.destinationName = "topic/A4P/LAUNCHER";
    client.send(message);
}