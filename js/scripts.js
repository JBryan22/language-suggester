var csharp = 0;
var jav = 0;
var php = 0;
var ruby = 0;
var questionNum = 1;

$(function() {
    $("#next").click(function(){
      if (questionNum === 1) {
        var answer = $("input:radio[name=q1-size]:checked").val();
        if (answer) {
          if (answer === "large") {
            csharp += 1;
            jav += 1;
            php += 1;
          } else {
            ruby += 1;
          }
          $("#question1").slideUp("fast");
          $("#question2").fadeIn("slow", "swing");
          questionNum += 1;
        } else {
          alert("Please Select An Answer");
        }
      } else if (questionNum === 2) {
        var answer = $("input:radio[name=q2-mobile]:checked").val();
        if (answer) {
          if (answer === "yes") {
            jav += 1;
          } else {
            csharp += 1;
            ruby += 1;
            php += 1;
          }
          $("#question2").slideUp("fast");
          $("#question3").fadeIn("slow", "swing");
          questionNum += 1;
        } else {
          alert("Please Select An Answer");
        }
      } else if (questionNum === 3) {
        var answer = $("input:radio[name=q3-appeal]:checked").val();
        if (answer) {
          if (answer === "internal") {
            csharp += 1;
            jav += 1;
          } else if (answer === "management"){
            php += 1;
          } else {
            ruby += 1;
          }
          $("#question3").slideUp("fast");
          $("#question4").fadeIn("slow", "swing");
          questionNum += 1;
        } else {
          alert("Please Select An Answer");
        }
      } else if (questionNum === 4) {
        var answer = $("input:radio[name=q4-backend]:checked").val();
        if (answer) {
          if (answer === "yes") {
            php += 1;
          }
          $("#question4").slideUp("fast");
          $("#question5").fadeIn("slow", "swing");
          questionNum += 1;
        } else {
          alert("Please Select An Answer");
        }
      } else if (questionNum === 5) {
        var answer = $("input:radio[name=q5-silly]:checked").val();
        if (answer) {
          if (answer === "music") {
            csharp += 1;
          } else if (answer === "coffee"){
            jav += 1;
          } else {
            ruby += 1;
          }
          $("#question5").slideUp("fast");

        } else {
          alert("Please Select An Answer");
        }
    });
});
