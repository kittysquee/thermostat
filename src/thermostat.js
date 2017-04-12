'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSaverOn = true;
};

  const MINIMUM_TEMP = 10;
  const MAX_TEMP_POWER_SAVE = 25;
  const MAX_TEMP_POWER_SAVE_OFF = 32;

Thermostat.prototype.increase = function() {
    if (this.powerSaverOn && this.temperature < MAX_TEMP_POWER_SAVE) {
    this.temperature += 1;
    }
  else if (this.powerSaverOn === false && this.temperature < MAX_TEMP_POWER_SAVE_OFF) {
    this.temperature += 1;
  }
};

Thermostat.prototype.decrease = function(){
  if (this.temperature > MINIMUM_TEMP) {
    this.temperature -= 1;
  }
};

Thermostat.prototype.powerSaveSwitchOff = function() {
  this.powerSaverOn = false;
};

Thermostat.prototype.powerSaveSwitchOn = function() {
  this.powerSaverOn = true;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.powerUsage = function() {
  if (this.temperature < 18) {
    return 'Low usage'
  } else if (this.temperature > 17 && this.temperature < 25) {
    return 'Medium usage'
  } else {
    return 'High usage'
  }
};
