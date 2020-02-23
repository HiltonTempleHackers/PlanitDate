function Question5() {
    answers.StartTime = document.getElementById("startTime").value;
    answers.EndTime = document.getElementById("endTime").value;
    answers.Date = document.getElementById("date").value;

    var contentHolder = document.getElementById("Question");
    var content = `
        <h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead"> What is your price range?</p>
        <p class="lead">
        <select id="priceRange">
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
        </select>
        <br/>
        <br/>
        <p class="lead">
            <span  id="button" onclick="ActivityOption()" class="btn btn-lg btn-secondary">Next</span>
        </p>
`;
   
    contentHolder.innerHTML = content;
} 