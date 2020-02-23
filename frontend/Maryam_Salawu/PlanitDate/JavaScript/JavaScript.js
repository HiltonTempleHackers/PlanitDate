
function currentQuestion() {
    document.getElementById("Question").innerHTML = "";
  //  document.getElementById("button").style.display = "";
    document.getElementById("Question").innerHTML = question2;

}   


var question2 = `
        <h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead"> What type of food would you like?</p>
        <p class="lead">
            <input type="text" placeholder="Food">
                    
            </p>
         <br />
         <br />
                <p class="lead">
                    <a href="#" onclick="Question2()" id="button" class="btn btn-lg btn-secondary">Next</a>
                </p>
       
`;





