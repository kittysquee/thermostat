'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSaverOn = true;
};

  const MINIMUMTEMP = 10;
  const MAXTEMPPOWERSAVE = 25;

Thermostat.prototype.increase = function() {
    if (this.powerSaverOn && this.temperature < MAXTEMPPOWERSAVE) {
    this.temperature += 1;
  };
};

Thermostat.prototype.decrease = function(){
  if (this.temperature > MINIMUMTEMP) {
  this.temperature -= 1;
};

};
