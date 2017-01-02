//operation
//advancement through steps
var unit01 = new frame.basic();
var unit02 = new frame.basic();

$(".forward").click(function setName () {
  unit01.name = $("#pcName").val();
  unit02.name = $("#aiName").val();
})


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


$(".forward").click( function(e){
  var unitType = $(e.target).attr("value");
  console.log(unitType)
  var finalUnit = new frame.[unitType]();

  console.log(finalUnit)
})
