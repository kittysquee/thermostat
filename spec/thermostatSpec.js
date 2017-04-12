'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('has a default temperature of 20', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });
  it('increases temperature by 1', function(){
    thermostat.increase();
    expect(thermostat.getTemperature()).toEqual(21);
  });
  it('decreases temperature by 1', function(){
    thermostat.decrease();
    expect(thermostat.getTemperature()).toEqual(19);
  });
  it('has a minimum temperature of 10', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.decrease();
      }
      expect(thermostat.getTemperature()).toEqual(10);
    });
});
