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
    //Add MQTT Communication
}

//Control Page

function onControlBackBtnClick() {
    location.href='home.html';
}

function onControlLaunchBtnClick() {
    // Add MQTT communication
}

function onControlLeftBtnClick() {
    // Add MQTT communication
}

function onControlRightBtnClick() {
    // Add MQTT communication
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

//Launcher Page


//Dispenser Page

//Rotation Page