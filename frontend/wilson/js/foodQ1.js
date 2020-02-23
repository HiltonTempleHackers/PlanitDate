//ask price for food
function foodQ1(){
    //save previous question data to object

    var contentHolder = document.getElementById("contentArea");
    var content = `
        <h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead"> What is your price range?</p>
        <p class="lead">
        <select id="priceRange">
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
        </select>
        <br/>
        <br/>
        <p class="lead">
            <span  id="button" onclick="foodQ2()" class="btn btn-lg btn-secondary">Next</span>
        </p>
`;
    console.log(choices);
    contentHolder.innerHTML = content;
}