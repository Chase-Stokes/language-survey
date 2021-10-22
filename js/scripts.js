$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();
    $("#survey-hide").hide();
  })
})