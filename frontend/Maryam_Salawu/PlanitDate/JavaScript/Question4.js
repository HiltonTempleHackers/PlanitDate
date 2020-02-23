function Question4() {
    var AnswerFour = new Object();
    AnswerFour.popularity = document.getElementById("popularity").value;
    document.getElementById("Question").innerHTML = "";
    document.getElementById("Question").innerHTML = question5;
    var AnswerFive = new Object();
    AnswerFive.StartTime = document.getElementById("startTime").value;
    AnswerFive.EndTime = document.getElementById("endTime").value;

}

var question5 = `
<h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead"> What time of day would you like?</p>
        <p class="lead">
        <input type="text" id = "startTime" placeholder="Time ex. 9:00 AM">
        <input type="text" id = "endTime" placeholder="Time ex. 12:00 PM">
 </p>

<br />
 <br />
                <p class="lead">
                   <input type="submit"  id="button" value="Submit">
                </p>
       
                    
  
        
`;
