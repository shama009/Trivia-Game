// Trivia Game
// display start button on page load
// build an array with questions and answers
// display questions with multiple choice to the user
// set timer to 30 seconds
// allow user to select only one option
// display correct/wrong answers and unanswered questions score when time's up or if user clicks "done" button
$(document).ready(function(){
// set timer variable
// set variable to hold intervalId
// counter for answers
    var time=10;
    var intervalId;
    var correct=0;
    var inCorrect=0;
    var unanswered=0;
    var container = $("#container");

    $("#start").on("click", function(){
        
        var triviadiv = $("<div id='triviaContainer'>");
        var timeRemaining= "<h2>Time Remaining:<span id='timeRemaining'></span></h2>";
        var questions= "<ol><li><p>What is the permanent memory built into your computer called?</p>"+
        "<input type='radio' name='q1Choices' id='opt1' value='CPU'>CPU"+
        "<input type='radio' name='q1Choices' id='opt2' value='RAM'>RAM"+
        "<input type='radio' name='q1Choices' id='opt3' value='ROM'>ROM"+
        "<input type='radio' name='q1Choices' id='opt4' value='CD-ROM'>CD-ROM</li></ol>"+
        "<input type='hidden' class='answer' value='ROM'>";
        var done= "<button id='done' type='submit'>DONE</button>";
        triviadiv.append(timeRemaining);
        triviadiv.append(questions);
        triviadiv.append(done);
        container.html(triviadiv);
        $("#timeRemaining").text(time+" seconds");
        intervalId=setInterval(runTimer,1000);
        console.log("start completed!!!");
        
    });
  
    // when user clicks done button display results
    
    $("#container").on("click", "#done", function(){
        console.log("start completed!!!");
        console.log("done");
        clearInterval(intervalId);
        displayResults();
    });

    // function to run timer and display results
    function runTimer(){
        time--;
        $("#timeRemaining").text(time+" seconds");
        if(time===0){
            clearInterval(intervalId);
            displayResults();
        }
    }
    // function to display results once game is over
    function displayResults(){
        // get checked value and correct value and compare both to display appropriate result
        var selectedVal = "";
        var selected = $("input[type='radio'][name='q1Choices']:checked");
        var correctAnswer= $(".answer").val();
        if (selected.length > 0) {
            selectedVal = selected.val();
            if(selectedVal===correctAnswer){
                correct++;
            }
            else {
                inCorrect++;
            }
        }
        else{
            unanswered++;
        }
        container.html("<div id='results'>");
        container.append("<h3>All Done!</h3>");
        container.append("<p> Correct Answers:"+correct+"</p>");
        container.append("<p> Incorrect Answers:"+inCorrect+"</p>");
        container.append("<p> Unanswered:"+unanswered+"</p>");
    }
});