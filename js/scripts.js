
$(document).ready(function() {
  $("button").click(function(event) {

    var one = $("input#one").val();
    var two = $("input#two").val();
    var three = $("input#three").val();
    var four = $("input#four").val();
    var five = $("input#five").val();
    var six = $("input#six").val();
    var seven = $("input#seven").val();
    var eight = $("input#eight").val();
    var nine = $("input#nine").val();
    var ten = $("input#ten").val();
    var eleven = $("input#eleven").val();
    var twelve = $("input#twelve").val();
    var thirteen = $("input#thirteen").val();
    var fourteen = $("input#fourteen").val();
    var fifteen = $("input#fifteen").val();
    var sixteen = $("input#sixteen").val();

    $(".one").text(one);
    $(".two").text(two);
    $(".three").text(three);
    $(".four").text(four);
    $(".five").text(five);
    $(".six").text(six);
    $(".seven").text(seven);
    $(".eight").text(eight);
    $(".nine").text(nine);
    $(".ten").text(ten);
    $(".eleven").text(eleven);
    $(".twelve").text(twelve);
    $(".thirteen").text(thirteen);
    $(".fourteen").text(fourteen);
    $(".fifteen").text(fifteen);
    $(".sixteen").text(sixteen);

    $("#story").show();

    event.preventDefault();
  });
});
