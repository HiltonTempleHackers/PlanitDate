//the last button changes from Next to Submit based on the first choice
//it should be an <a> tag -- it's href should change based on the choice as well
//this will be handled in the buttonClick() method
// '#' if next, 'actual link to submit 

function lastQuestion(){
    var contentHolder = document.getElementById("contentArea");
    var content = `
        <h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead">Would you like to add food?</p>
        <p class="lead">
            <span style="width:35%" onclick="btnClick(this, 'btnNo')" class="btn  btn-lg btn-secondary btn-option" id="btnYes">Yes, let's get some food!</span>
            <span style="width:35%" onclick="btnClick(this, 'btnYes')" class="btn  btn-lg btn-secondary btn-option" id="btnNo">No, submit what I have!</a>
        </p>
        <p class="lead">
            <span id="button" class="btn btn-lg btn-secondary">Next</span>
        </p>

`;

    contentHolder.innerHTML = content;
}