var thermostat = new Thermostat;

var temperatureDisplay = function() {
  $("#temperature").text(thermostat.temperature);
  $("#power-saving-status").text(thermostat.powerUsage());
  $('#temperature').attr('class', thermostat.powerUsage());
};

var weather = function(city) {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=";
  var token = "&appid=7d44ddbe20e7f00ee69e31eb64603c83";
  var units = "&units=metric"
  $.get(url + city + token + units, function(data) {
  $("#current-temperature").text(data.main.temp);})
};

$(document).ready(function() {
  temperatureDisplay();
  weather();
  $('#temperature-up').click(function(){
    thermostat.increase();
    temperatureDisplay();
      $('#gaugeDemo .gauge-arrow').trigger('updateGauge', ((thermostat.temperature - 10)*4.5));
  });
  $("#temperature-down").click(function(){
    thermostat.decrease();
    temperatureDisplay();
      $('#gaugeDemo .gauge-arrow').trigger('updateGauge', ((thermostat.temperature - 10)*4.5));
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
  $("#city").change(function(){
    var city = $('#city').val();
    weather(city)
  });
  $('#gaugeDemo .gauge-arrow').cmGauge();
});
