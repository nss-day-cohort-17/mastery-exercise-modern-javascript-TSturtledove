//operation
//advancement through steps
var unit01;
var unit02;

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
});


$("#player-setup").show();

$(".card__link").click(function(e) {
  var nextCard = $(this).attr("next");
  var moveAlong = false;

  switch (nextCard) {
    case "card--battleground":
      moveAlong = ($("#player-name").val() !== "");
      break;
  }

  if (moveAlong) {
    $(".card").hide();
    $("." + nextCard).show();
  }
});
