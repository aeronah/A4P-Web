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

function onClick() {
  alert("clicked");
  message = new Paho.MQTT.Message("hello");
  message.destinationName = "topic/WebTest";
  client.send(message);
}

function onReceive(msg) {
  //received a msg
  alert(msg.payloadString + "muahahaha");
}

function onHomeStartBtnClick() {
  //send START to rpi
}

function onHomeControlBtnClick() {
  // go to control page
}

function onHomeConfigurationBtnClick() {
  //go to configuration page
}
