function ActivityOption() {
    answers.priceRange = document.getElementById("priceRange").innerText;
    var contentHolder = document.getElementById("Question");




    var content = `
 <h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead">Would you like to add an activity?</p>
        <p class="lead">
            <span style="width:35%" onclick="btnClick(this, 'btnNo')" class="btn  btn-lg btn-secondary btn-option" id="btnYes">Yes, let's do an activity!</span>
            <span style="width:35%" onclick="btnClick(this, 'btnYes')" class="btn  btn-lg btn-secondary btn-option" id="btnNo">No, submit what I have!</a>
        </p>
        <p class="lead">
            <span id="button" class="btn btn-lg btn-secondary">Next</span>
        </p>
`;
    console.log(answers);
    contentHolder.innerHTML = content;
}
