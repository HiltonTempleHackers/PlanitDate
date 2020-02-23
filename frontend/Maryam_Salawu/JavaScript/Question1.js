function Question1(id) {
    var contentHolder = document.getElementById(id);




    var content = `
 <div id="Question">
                <h1 class="cover-heading">First Date Ideas</h1>
                <p class="lead"> What location would you prefer?</p>
                <p class="lead">
                    <input type="text" id="state" placeholder="State">
                    <input type="text" id="city" placeholder="City">
                    <br />
                    <br />
                <p class="lead">
                    <a href="#" onclick="Question2()" id="button" class="btn btn-lg btn-secondary">Next</a>
                </p>
                </div>
`;
    contentHolder.innerHTML = content;

}
