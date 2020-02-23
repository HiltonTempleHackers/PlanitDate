function Question4() {
    var AnswerFour = new Object();
    AnswerFour.popularity = document.getElementById("popularity").value;
    document.getElementById("Question").innerHTML = "";
    document.getElementById("Question").innerHTML = question5;
    return AnswerFour.popularity;


}

var question5 = `
<h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead"> What time of day would you like?</p>
        <p class="lead">
         <input type="text" id = "date" placeholder= "Date ex. 02/13/2020">
        <input type="text" id = "startTime" placeholder="Time ex. 9:00 AM">
        <input type="text" id = "endTime" placeholder="Time ex. 12:00 PM">
 </p>

<br />
 <br />
                <p class="lead">
                    <a href="#"  id="button" onclick="ActivityOption()" class="btn btn-lg btn-secondary">Next</a>
                </p>
       
                    
  
        
`;
