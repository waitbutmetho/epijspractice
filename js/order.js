$(document).ready(function(){
  // form submitted
  $("form.input").submit(function(event){
    // get input from user
    var customerName = $("#fullName").val();
    var customerAddress = $("#fullAddress").val();
    // replace the text in the modal
    $("span.customerName").text(customerName);
    $(".mailingDiv").html(customerName + " <br> " + customerAddress);
    // show the modal
    $(".modal").show();
    event.preventDefault();
  });
  $("#closemodal").click(function(){
    $(".modal").hide();
  });

});
