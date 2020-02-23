function question1(id){
    var contentHolder = document.getElementById(id);
    var content = `
        <h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead"> What location would you prefer?</p>
        <p class="lead">
            <input id="txtState" type="text" placeholder="State">
            <input id="txtCity" type="text" placeholder="City">
            <br />
            <br />
        <p class="lead">
            <span onclick="question2()" id="button" class="btn btn-lg btn-secondary">Next</span>
        </p>
`;

    contentHolder.innerHTML = content;

}


