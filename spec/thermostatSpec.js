'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('has a default temperature of 20', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases temperature by 1', function(){
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });
  it('decreases temperature by 1', function(){
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });
  it('has a minimum temperature of 10', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.decrease();
      }
      expect(thermostat.temperature).toEqual(10);
  });
  it('has a default power save mode', function(){
    expect(thermostat.powerSaverOn).toBe(true);
  });
  it('when in power saving mode has max temp of 25', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.increase();
    }
    expect(thermostat.temperature).toEqual(25);
  });

  it('switch power save mode off', function() {
    thermostat.powerSaveSwitch();
    expect(thermostat.powerSaverOn).toBe(false);
  });

  // it('when not in power saving mode has max temp of 32', function() {
  //   thermostat.powerSaveSwitch();
  //   for (var i = 0; i < 13; i++) {
  //     thermostat.increase();
  //   }
  //   expect(thermostat.temperature).toEqual(32);
  // });
});
