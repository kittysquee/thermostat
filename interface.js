var thermostat = new Thermostat;

var temperatureDisplay = function() {
  $("#temperature").text(thermostat.temperature);
  $("#power-saving-status").text(thermostat.powerUsage());
  $('#temperature').attr('class', thermostat.powerUsage());
};


$(document).ready(function() {
  temperatureDisplay();
  $('#temperature-up').click(function(){
    thermostat.increase();
    temperatureDisplay();
  });
  $("#temperature-down").click(function(){
    thermostat.decrease();
    temperatureDisplay();
  });
  $("#temperature-reset").click(function(){
    thermostat.reset();
    temperatureDisplay();
  });
  $("#powersaving-on").click(function(){
    thermostat.powerSaveSwitchOn();
    temperatureDisplay();
  });
  $("#powersaving-off").click(function(){
    thermostat.powerSaveSwitchOff();
    temperatureDisplay();
  });
});
