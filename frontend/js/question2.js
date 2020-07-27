function question2(){
    //save previous question data to object
    choices.state = document.getElementById('txtState').innerText;
    choices.city = document.getElementById('txtCity').innerText;

    var contentHolder = document.getElementById("contentArea");
    var content = `
        <h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead"> What is your popularity preference?</p>
        <p class="lead">
            <select id="sctPopularity">
                <option value="1">1 star</option>
                <option value="2">2 star</option>
                <option value="3">3 star</option>
                <option value="4">4 star</option>
                <option value="5">5star</option>
            </select>
        </p>
        <br/>
        <br/>
        <p class="lead">
            <span  id="button" onclick="question3()" class="btn btn-lg btn-secondary">Next</span>
        </p>           
`;
    console.log(choices);
    contentHolder.innerHTML = content;
}
