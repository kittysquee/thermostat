'use strict';

function Thermostat() {
  this.temperature = 20;
};

  const MINIMUMTEMP = 10;

Thermostat.prototype.getTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increase = function() {
  this.temperature += 1;
};

Thermostat.prototype.decrease = function(){
  if (this.temperature > 10) {
  this.temperature -= 1;
};
};
