
var Calculator = require('./../js/pingpong.js').calculatorModule;




$(document).ready(function(){
  $('#ping-pong-form').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();

    var simpleCalc = new Calculator('hotpink');
    var output = simpleCalc.pingPong(goal);
  
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
