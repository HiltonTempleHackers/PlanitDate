function question3(){
    //save previous question data to object
    choices.popularity = document.getElementById('sctPopularity').value;

    var contentHolder = document.getElementById("contentArea");
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
            <span  id="button" onclick="question4()" class="btn btn-lg btn-secondary">Next</span>
        </p>
`;
    console.log(choices);
    contentHolder.innerHTML = content;
}