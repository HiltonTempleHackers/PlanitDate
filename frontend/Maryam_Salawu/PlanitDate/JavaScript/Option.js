function ActivityOption() {
    var AnswerFive = new Object();
    AnswerFive.StartTime = document.getElementById("startTime").value;
    AnswerFive.EndTime = document.getElementById("endTime").value;
    AnswerFive.Date = document.getElementById("date").value;
    document.getElementById("Question").innerHTML = question5;
    return AnswerFive.Date;
    return AnswerFive.StartTime;
    return AnswerFive.EndTime;
    var Answers = new Object();
    Answers.push(currentQuestion());
    Answers.push(Question2());
    Answers.push(Question3());
    Answers.push(Question4());
    
}
var question5 = `
 <h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead">Would you like to add an activity?</p>
        <p class="lead">
            <span style="width:35%" onclick="btnClick(this, 'btnNo')" class="btn  btn-lg btn-secondary btn-option" id="btnYes">Yes, let's do an activity!</span>
            <span style="width:35%" onclick="btnClick(this, 'btnYes')" class="btn  btn-lg btn-secondary btn-option" id="btnNo">No, submit what I have!</a>
        </p>
        <p class="lead">
            <span id="button" class="btn btn-lg btn-secondary">Next</span>
        </p>


`;