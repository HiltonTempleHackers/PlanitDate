function Question2(id) {
    
    answers.State = document.getElementById("state").innerText;
    answers.City = document.getElementById("city").innerText;
    
    var contentHolder = document.getElementById("Question");



    var content = `
        <h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead"> What type of food would you like?</p>
        <p class="lead">
        <select id="food">
  <option value="Chinese">Chinese</option>
  <option value="Japanese">Japanese</option>
  <option value="Korean">Korean</option>
  <option value="Thai">Thai</option>
  <option value="Mediterranean">Mediterranean</option>
  <option value="Italian">Italian</option>
  <option value="Mexican">Mexican</option>
  <option value="Vietnamese">Vietnamese</option>
  <option value="American">American</option>
  <option value="African">African</option>
 <option value="French">French</option>
</select>
                    
            </p>
         <br />
         <br />
                <p class="lead">
                    <a href="#" onclick="Question3()" id="button" class="btn btn-lg btn-secondary">Next</a>
                </p>
       
`;
    contentHolder.innerHTML = content;

}















