// create six varieties of robo based off of a single frame
// base: gives a modified health and attack
frame.base = function() {
  this.health = this.health + 10;
  this.attackstr = this.attackstr + 15;
  this.type = "All-rounder"
};
frame.base.prototype = new frame.basic();
// fox add Math.random()*20 + 60 health Math.random()*12 + 30 attack
frame.fox = function() {
  this.health = this.health + Math.floor(Math.random()*20 + 60);
  this.attackstr = this.attackstr + Math.floor(Math.random()*12 + 30);
};
frame.fox.prototype = new frame.base();
// weasel add Math.random()*15 + 50 health Math.random()*20 + 32 attack
frame.weasel = function() {
  this.health = this.health + Math.floor(Math.random()*15 + 50);
  this.attackstr = this.attackstr + Math.floor(Math.random()*20 + 32);
};
frame.weasel.prototype = new frame.base();

// flight: gives more attack than health
frame.flight = function() {
  this.health = this.health + 5;
  this.attackstr = this.attackstr + 20;
  this.type = "Flyer"
};
frame.flight.prototype = new frame.basic();
// sparrow add Math.random()*5 +30 health Math.random()*25 + 45 attack
frame.sparrow = function() {
  this.health = this.health + Math.floor(Math.random()*5 + 30);
  this.attackstr = this.attackstr + Math.floor(Math.random()*25 + 45);
};
frame.sparrow.prototype = new frame.flight();
// hawk add Math.random()*6 + 32 health Math.random()*30 + 50 attack
frame.hawk = function() {
  this.health = this.health + Math.floor(Math.random()*6 + 32);
  this.attackstr = this.attackstr + Math.floor(Math.random()*30 + 50);
};
frame.hawk.prototype = new frame.flight();

// armored: gives more health than attack
frame.armored = function() {
  this.health = this.health + 20;
  this.attackstr = this.attackstr + 5;
  this.type = "Armored"
};
frame.armored.prototype = new frame.basic();
// tortoise add Math.random()*30 + 70 health Math.random()*5 + 15 attack
frame.tortoise = function() {
  this.health = this.health + Math.floor(Math.random()*30 + 70);
  this.attackstr = this.attackstr + Math.floor(Math.random()*5 + 15);
};
frame.tortoise.prototype = new frame.armored();
// porcupine add Math.random()*27 + 65 health Math.random()*7 + 20 attack
frame.porcupine = function() {
  this.health = this.health + Math.floor(Math.random()*27 + 65);
  this.attackstr = this.attackstr + Math.floor(Math.random()*7 + 20);
};
frame.porcupine.prototype = new frame.armored();
