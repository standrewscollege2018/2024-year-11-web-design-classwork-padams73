function setScore() {
    let score = 0;
    document.getElementById("score").innerHTML = score;
}

function disable(field,buttonName) {
    document.getElementById(field).disabled = true;
    document.getElementById(buttonName).disabled = true;
}
function changeFormat(field, status) {
    const fieldName = document.getElementById(field);  // Get the DIV element
    fieldName.classList.remove("inputStyle"); // Remove original class from DIV
    fieldName.classList.add(status); // Add correct class to DIV
}

function checkYear() {
    var year = document.getElementById("year").value;
    if (year == 2024) {
      console.log("Correct");
        //   Increase the score by 1
        document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML)+1;
        var status = "correct";
    } else {
        console.log("Wrong");
        var status = "wrong";

    }
    disable("year", "yearButton");
    changeFormat("year", status);
  }

  function checkAnswer(question) {

    // Dictionary of questions and answers
    var answerList = { year : 2024 , 
        subject : "maths",
        html : "Hypertext"
      };

    var buttonName = question+'Button';
    var answer = document.getElementById(question).value;
    console.log('answer:'+answerList[question]);
    console.log('myanswer:'+answer);
    if (answer == answerList[question]) {
    //   console.log("Correct");
        //   Increase the score by 1
        document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML)+1;
        var status = "correct";
    } else {
        // console.log("Wrong");
        var status = "wrong";

    }
    disable(question, buttonName);
    changeFormat(question, status);
  }
function reset() {
    location.reload();
 }
