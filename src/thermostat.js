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

Thermostat.prototype.powerSaveSwitch = function() {
  if (this.powerSaverOn) {
    this.powerSaverOn = false;
  }
  else {
    this.powerSaverOn = true;
  }
};
