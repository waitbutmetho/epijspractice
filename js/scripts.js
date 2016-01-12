function appendText(selector, text) {
  $(selector).append(text);
  $(selector).children("li").last().hover(function(){
    $(this).css("background-color", "green");
    $(this).click(function() {
        $(this).remove();
    });
  });
}
function catDog() {
    appendText("ul#user", "<li>Meow</li>");
    appendText("ul#webpage", "<li>Bark!!</li>");
}

function yellAtUser() {
    alert($("#asdf").val().toUpperCase());
}

function replaceText(selector) {
  $("span."+selector).text($("#"+selector).val());
}
$(document).ready(function(){
  $("#closemodal").click(function(){
    $(".modal").hide();
  });
  $("form.input").submit (function(event){
    // get input from form and replace the variables in the madlib
    replaceText("person1");
    replaceText("person2");
    replaceText("verb1");
    replaceText("verb2");
    replaceText("event");
    replaceText("adjective");
    // show madlib
    $(".modal").show();
    // prevent default page reloading
    event.preventDefault();
  });
  $("form.yelling").submit(function(event) {
    // yell at the user for using this form
    // six times
    yellAtUser();
    yellAtUser();
    yellAtUser();
    yellAtUser();
    yellAtUser();
    yellAtUser();
    // do you expect this to do something else?
    // clear the form
    $("#asdf").text("");
  });
});
