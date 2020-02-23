function question4(){
    //save previous question data to object
    choices.priceRange = document.getElementById('priceRange').value;

    var contentHolder = document.getElementById("contentArea");
    var content = `
        <h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead">What time of day would you like?</p>
        <p class="lead">
            <input id="txtDate" type="text" placeholder="Date ex. 02-24-2020">
            <div style='clear:both'></div>
        </p>
        <br/>
        <br/>
        <p class="lead">
            <span onclick="question5()" id="button" class="btn btn-lg btn-secondary">Next</span>
        </p>
        
`;
    console.log(choices);
    contentHolder.innerHTML = content;
}
