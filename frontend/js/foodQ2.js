//ask type of food
function foodQ2(){
    //save previous question data to object
    var choices2 = {};
    choices2.price = document.getElementById('priceRange').value;

    var contentHolder = document.getElementById("contentArea");
    var content = `

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
        <br/>
        <br/>
        <p class="lead">
            <span onclick="postActivityWithFood()" id="button" class="btn btn-lg btn-secondary">Submit</span>
        </p>
`;
    console.log(choices);
    contentHolder.innerHTML = content;
}