'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSaverOn = true;
};

  const MINIMUMTEMP = 10;
  const MAXTEMPPOWERSAVE = 25;
  const MAX_TEMP_POWER_SAVE_OFF = 32;

Thermostat.prototype.increase = function() {
    if (this.powerSaverOn && this.temperature < MAXTEMPPOWERSAVE) {
    this.temperature += 1;
    }
  else if (this.powerSaverOn = false && this.temperature < 32) {
    this.temperature += 1;
  }
  else {}
};

Thermostat.prototype.decrease = function(){
  if (this.temperature > MINIMUMTEMP) {
  this.temperature -= 1;
}
};

Thermostat.prototype.powerSaveSwitchOff = function() {
  if (this.powerSaverOn) {
    this.powerSaverOn = false;
  }
};

Thermostat.prototype.powerSaveSwitchOn = function() {
  if (this.powerSaverOn = false) {
    this.powerSaverOn = true;
  }
};


Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.powerUsage = function() {
  if (this.temperature < 18) {
    return 'Low usage'
  }
  else if (this.temperature > 17 && this.temperature < 25) {
    return 'Medium usage'
  }
  else {
    return 'High usage'
  }
};
