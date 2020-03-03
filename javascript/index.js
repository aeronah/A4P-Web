// Home Page
function onHomeStartBtnClick () {
    location.href='start.html';
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
    alert("clicked");
    message = new Paho.MQTT.Message("STOP");
    message.destinationName = "topic/A4P";
    client.send(message);
}

//Control Page

function onControlBackBtnClick() {
    location.href='home.html';
}

function onControlLaunchBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("LAUNCH");
    message.destinationName = "topic/A4P";
    client.send(message);
}

function onControlLeftBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("STEPRIGHT");
    message.destinationName = "topic/A4P";
    client.send(message);
}

function onControlRightBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("STEPLEFT");
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
    alert("clicked");
    message = new Paho.MQTT.Message(document.getElementById("number-passes").value);
    message.destinationName = "topic/A4P/PPS";
    client.send(message);
    alert("clicked");
    message = new Paho.MQTT.Message(ocument.getElementById("difficulty").value);
    message.destinationName = "topic/A4P/DIFFICULTY";
    client.send(message);
    //not sure if this is correct
    //note that the value could be blank (if nothing is selected)
}

//Launcher Page
function onLauncherBackBtnClick() {
    location.href='configuration.html';
}

function onLauncherRUNBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("LRUN");
    message.destinationName = "topic/A4P/LAUNCHER";
    client.send(message);
}

function onLauncherUpBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("LSU");
    message.destinationName = "topic/A4P/LAUNCHER";
    client.send(message);
}

function onLauncherDownBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("LSD");
    message.destinationName = "topic/A4P/LAUNCHER";
    client.send(message);
}

function onLauncherStopBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("LSTOP");
    message.destinationName = "topic/A4P/LAUNCHER";
    client.send(message);
}

//Dispenser Page
function onDispenserBackBtnClick() {
    location.href='configuration.html';
}

function onDispenserRunBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("DRUN");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onDispenserStepBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("DSTEP");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onDispenserCWBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("DCW");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onDispenserCCWBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("DCCW");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onDispenserStopBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("DSTRP");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

//Rotation Page
function onRotationBackBtnClick() {
    location.href='configuration.html';
}

function onRotationRunBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("RRUN");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onRotationStepBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("RSTEP");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onRotationCWBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("RCW");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onRotationCCWBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("RCCW");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}

function onRotationStopBtnClick() {
    alert("clicked");
    message = new Paho.MQTT.Message("RSTOP");
    message.destinationName = "topic/A4P/DISPENSER";
    client.send(message);
}