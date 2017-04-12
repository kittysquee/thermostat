'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('has a default temperature of 20', function(){
    expect(thermostat.temperature()).toEqual(20);
  });
  it('increases temperature by 1', function(){
    thermostat.increase();
    expect(thermostat.temperature()).toEqual(21);
  });
  it('decreases temperature by 1', function(){
    thermostat.decrease();
    expect(thermostat.temperature()).toEqual(19);
  });
});
