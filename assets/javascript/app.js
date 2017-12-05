// Trivia Game
// display start button on page load
// build an array with questions and answers
// display questions with multiple choice to the user
// set timer to 30 seconds
// allow user to select only one option
// display correct/wrong answers and unanswered questions score when time's up or if user clicks "done" button
$(document).ready(function () {
    // set timer variable
    // set variable to hold intervalId
    // counter for answers
    var time = 30;
    var intervalId;
    var correct = 0;
    var inCorrect = 0;
    var unanswered = 0;
    var container = $("#container");
    var quiz = [{
        "question": "What is the permanent memory built into your computer called?",
        "choices": [
            "CPU",
            "RAM",
            "ROM",
            "CD-ROM"
        ],
        "correct": "ROM",
    }, {
        "question": "Which of the following is not an output device? ",
        "choices": [
            "Speakers",
            "Printer",
            "Monitor",
            "Keyboard"
        ],
        "correct": "Keyboard",

    },
    {

        "question": " Which of these is a not a computer manufacturer? ",
        "choices": [
            "Microsoft",
            "Sun",
            "IBM",
            "Apple"
        ],
        "correct": "Microsoft",
    },
    {
        "question": "Which of the following companies is famous for manufacturing computer processors? ",
        "choices": [
            "Corel",
            "Sony",
            "Intel",
            "Macromedia"
        ],
        "correct": "Intel",

    },
    {
        "question": "The capacity of your hard drive is measured in ",
        "choices": [
            "Mbps",
            "MHZ",
            "Gigabytes",
            "52X"
        ],
        "correct": "Gigabytes",

    },
    {
        "question": "Which device allows your computer to talk to other computers over a telephone line as well as access the internet?",
        "choices": [
            "CD-ROM drive",
            "Modem",
            "Hard Drive",
            "RAM"
        ],
        "correct": "Modem",

    },
    {
        "question": "Which part is the 'brain' of the computer?",
        "choices": [
            "ROM",
            "CPU",
            "Monitor",
            "RAM"
        ],
        "correct": "CPU",

    },
    {
        "question": "Who invented USB?",
        "choices": [
            "Intel",
            "Microsoft",
            "AMD",
            "Samsung"
        ],
        "correct": "Intel",

    },
    {
        "question": "Who invented the Graphical User Interface (GUI)?",
        "choices": [
            "Microsoft",
            "Apple",
            "Bell Labs",
            "Xerox"
        ],
        "correct": "Xerox",

    },
    {
        "question": "WWW stands for?",
        "choices": [
            "world word web",
            "world wide web",
            "world white web",
            "world work web"
        ],
        "correct": "world wide web",

    }
    ];
    $("#start").on("click", function () {

        var triviadiv = $("<div id='triviaContainer'>");
        var timeRemaining = "<h2>Time Remaining:<span id='timeRemaining'></span></h2>";
        var done = "<br><br><p><button id='done' type='submit'>DONE</button></p>";
        triviadiv.append(timeRemaining);
        
        // iterate quiz array to display questions
        for (var i = 0; i < quiz.length; i++) {
            var question = quiz[i].question;
            question = "<br><br><p>" + question + "</p>";
            triviadiv.append(question);
            var choicesLength = quiz[i].choices.length;
            // loop through choices for each question
            for (var j = 0; j < choicesLength; j++) {
                var choices = quiz[i].choices[j];
                choices = "<input type='radio' name='q" + i + "Choices' value='" + choices + "'>" + choices;
                triviadiv.append(choices);
            }
        }

        triviadiv.append(done);
        container.html(triviadiv);
        // set timer and run it until it reaches 0 seconds
        $("#timeRemaining").text(time + " seconds");
        intervalId = setInterval(runTimer, 1000);

    });

    // when user clicks done button display results

    $("#container").on("click", "#done", function () {
        clearInterval(intervalId);
        evaluateResults();
        displayResults();
    });

    // function to run timer and display results
    function runTimer() {
        time--;
        $("#timeRemaining").text(time + " seconds");
        if (time === 0) {
            clearInterval(intervalId);
            evaluateResults();
            displayResults();
        }
    }

    // get checked value and correct value and compare both to display appropriate result
    function evaluateResults() {
        var selectedVal = "";
        // iterate quiz array to evaluate correct answers
        for (var i = 0; i < quiz.length; i++) {
            var selected = $("input[type='radio'][name='q" + i + "Choices']:checked");
            var correctAnswer = quiz[i].correct;
            if (selected.length > 0) {
                selectedVal = selected.val();
                if (selectedVal === correctAnswer) {
                    correct++;
                }
                else {
                    inCorrect++;
                }
            }
            else {
                unanswered++;
            }
        }
    }
    // function to display results once game is over
    function displayResults() {
        container.html("<div id='results'>");
        container.append("<h3>All Done!</h3>");
        container.append("<p> Correct Answers:" + correct + "</p>");
        container.append("<p> Incorrect Answers:" + inCorrect + "</p>");
        container.append("<p> Unanswered:" + unanswered + "</p>");
    }
});