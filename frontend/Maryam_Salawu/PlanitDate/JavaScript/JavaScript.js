

function currentQuestion() {
   var AnswerOne = new Object();
    AnswerOne.State = document.getElementById("state").value;
    AnswerOne.City = document.getElementById("city").value;
    document.getElementById("Question").innerHTML = "";
    document.getElementById("Question").innerHTML = question2;
   

}   


var question2 = `
        <h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead"> What type of food would you like?</p>
        <p class="lead">
           <select id="food">
  <option value="Chinese">Chinese</option>
  <option value="Indian">Indian</option>
  <option value="Japanese">Japanese</option>
  <option value="Korean">Korean</option>
  <option value="Thai">Thai</option>
  <option value="Mediterranean">Mediterranean</option>
  <option value="Italian">Italian</option>
  <option value="Mexican">Mexican</option>
  <option value="Vietnamese">Vietnamese</option>
  <option value="American">American</option>
  <option value="African">African</option>
</select>
                    
            </p>
         <br />
         <br />
                <p class="lead">
                    <a href="#" onclick="Question2()" id="button" class="btn btn-lg btn-secondary">Next</a>
                </p>
       
`;





