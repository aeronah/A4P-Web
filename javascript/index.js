// Home page
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
}

//Control Page

function onControlLaunchBtnClick() {
    // Add MQTT communication
}

function onControlLeftBtnClick() {
    // Add MQTT communication
}

function onControlRightBtnClick() {
    // Add MQTT communication
}

//Configuration Page


//Training Page

$('.dropdown-item').on('click',  function(){
    var btnObj = $(this).parent().siblings('button');
    $(btnObj).text($(this).text());
    $(btnObj).val($(this).text());
});