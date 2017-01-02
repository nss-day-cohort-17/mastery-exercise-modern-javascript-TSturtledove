// base frame for robo's
// needs to have health, name, and battle
var frame = frame || {};
frame.basic = function(name) {
  this.health = 80
  this.attackstr = 25
  this.unitname = name || "unit01"
}
