//operation
//advancement through steps
var unit01;
var unit02;

var unit01Attack;
var unit02Attack;

var unit01Health;
var unit02Health;

$(".forward").click(function setName () {
  var unitType01 = $("#unit01Type").val();
  console.log(unitType01);
  var unitType02 = $("#unit02Type").val();
  console.log(unitType02);
  unit01 = new frame[unitType01]();
  unit02 = new frame[unitType02]();
  unit01.name = $("#pcName").val();
  console.log(unit01);
  unit02.name = $("#aiName").val();
  console.log(unit02)
  $("#pcUnitInfo").html(`<h4>Unit Name: ${unit01.name} </h4> <h4>Unit Health: ${unit01.health} </h4>`)
  $("#aiUnitInfo").html(`<h4>Unit Name: ${unit02.name} </h4> <h4>Unit Health: ${unit02.health} </h4>`)
  unit01Attack = unit01.attackstr;
  unit02Attack = unit02.attackstr;

  unit01Health = unit01.health;
  unit02Health = unit02.health;
});


$("#player-setup").show();

$(".card__link").click(function() {
  var nextCard = $(this).attr("next");
  var moveAlong = false;

  switch (nextCard) {
    case "card--battleground":
      moveAlong = ($("#pcName").val() && $("#aiName") !== "");
      break;
  }

  if (moveAlong) {
    $(".card").hide();
    $("." + nextCard).show();
  }
});

function damage(){
  unit01Health -= unit02Attack;
  unit02Health -= unit01Attack;
}

$("#attackButton").click( function () {
  damage();
  if (unit01Health && unit02Health > 0){
    $("#pcUnitInfo").html(`<h4>Unit Name: ${unit01.name} </h4> <h4>Unit Health: ${unit01Health} </h4>`)
    $("#aiUnitInfo").html(`<h4>Unit Name: ${unit02.name} </h4> <h4>Unit Health: ${unit02Health} </h4>`)
    $("#damageReport").html(`<h4>Unit ${unit01.name} has suffered ${unit02Attack} points of damage</h4>
                              <h4>Unit ${unit02.name} has suffered ${unit01Attack} points of damage</h4>`)

  }else if (unit02 <=0) {
    $("#damageReport").html(`<h4>Trial complete, Unit ${unit02.name} has ceased functioning</h4>
                            <h4>Unit ${unit01.name} remains functioning`)
    $("#repeatButton").html(`<button id="startOver" class="btn-text">Reset Trial</button>`)
    $("#pcUnitInfo").hide()
    $("#aiUnitInfo").hide()
    $("#attackButton").hide()
  }else{
    $("#damageReport").html(`<h4>Trial complete, Unit ${unit01.name} has ceased functioning</h4>
                            <h4>Unit ${unit02.name} remains functioning`)
    $("#repeatButton").html(`<button id="startOver" class="btn-text">Reset Trial</button>`)
    $("#pcUnitInfo").hide()
    $("#aiUnitInfo").hide()
    $("#attackButton").hide()
  };
  $("#startOver").click(function hardSet() {
    window.history.go(0)
  })
})
