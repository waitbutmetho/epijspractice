$(document).ready(function(){
  $(".input").submit(function(event){
    // storing user input value from input#name
    var surveyName = $("#name").val();
    var surveyEmail = $("#email").val();
    var favFood = $("#food").val();
    var favInstrument = $("#instrument").val();
    var favCar = $("#car").val();
    var favColor = $("#color").val();
    // put info in modal

    // replace text span.name with surveyName
    $(".name").text(surveyName);
    $(".email").text(surveyEmail);
    $(".food").text(favFood);
    $(".instrument").text(favInstrument);
    $(".car").text(favCar);
    $(".color").text(favColor);

    // show modal
    $(".modal").show();
    event.preventDefault();
  });
    // add click function to close modal button that hides the modal
    $("#closemodal").click(function(){
      $(".modal").hide();
    });

    // click handler on colorSwitcher class to change the body class to dark
    $(".colorSwitcher").click(function(){

      if ($("body").hasClass("dark"))
        $("body").removeClass("dark");
      else
        $("body").addClass("dark");
    });

});
