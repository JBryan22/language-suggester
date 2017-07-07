var csharp = 0;
var jav = 0;
var php = 0;
var ruby = 0;
var questionNum = 0;
var name = "";

var displayChosenLanguage = function(csharp, jav, php, ruby) {
  if (csharp < 3 && jav < 3 && php < 3 && ruby < 3) {
    csharp += 1;
    jav += 1;
    php += 1;
    ruby +=1;
    displayChosenLanguage(csharp, jav, php, ruby);
  } else {
    if (csharp >= 3) {
      $("#CSharp").fadeIn("slow");
    }
    if (jav >= 3) {
      $("#Java").fadeIn("slow");
    }
    if (php >= 3) {
      $("#PHP").fadeIn("slow");
    }
    if (ruby >= 3) {
      $("#Ruby").fadeIn("slow");
    }
  }
}

$(function() {
    $("#next").click(function(){
      if (questionNum === 0) {
        name = $("#name").val();
        if (name) {
          $("#nameRow").slideUp("fast");
          $("#question1").fadeIn("slow", "swing");
          questionNum += 1;
        } else {
          alert("Please Enter Your Name");
        }
      } else if (questionNum === 1) {
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
          $("#button-row").hide();
          $("#insertName").text(name + ", ");
          $("#nameDisplay").show();
          displayChosenLanguage(csharp, jav, php, ruby);
        } else {
          alert("Please Select An Answer");
        }
      }
    });
});
