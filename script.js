var result1 = 1;
var result2 = 2;
var result3 = 3;
var result4 = 4;
var result5 = 5;

function score () {
  return "You scored" + total;
}
$(document).ready(function() {
  $("#button1").click(function() {
    var question1 = $("input:radio[name='question1']:checked").val();
    var question2 = $("input:radio[name='question2']:checked").val();
    var question3 = $("input:radio[name='question3']:checked").val();
    var question4 = $("input:radio[name='question4']:checked").val();
    var question5 = $("input:radio[name='question5']:checked").val();
    console.log(question1);
    console.log(question2);
    console.log(question3);
    console.log(question4);
    console.log(question5);

    if (question1 === "10") {
      result1 = 10;
    }else {
      result1 = 0;
    }
    if (question2 ==="10") {
      result2 = 10;
    } else {
      result2 = 0;
    }
    if (question3 === "10") {
      result3 = 10;
    } else {
      result3 = 0;
    }
    if (question4 === "10") {
      result4 = 10;
    } else {
      result4 = 0;
    }
    if (question5 === "10") {
      result5 = 10;
    }else {
      result5= 0;
    }
    var score = (result1 + result2 + result3 + result4 + result5);
    console.log(score);

    $("#result").text(`You scored ${score} points.`);

    
  })
})