function start(id){
    var contentHolder = document.getElementById(id);
    var content = `
            <h1 class="cover-heading">First Date Ideas</h1>
            <p class="lead">Would you like to get food or do an activity?</p>
            <p class="lead">
                <a href="FoodForm.html" class="btn btn-lg btn-secondary btn-option" id="btnFood">Food</a>
                <a href="ActivityForm.html" class="btn btn-lg btn-secondary btn-option" id="btnActivity">Activity</a>
            </p>
`;

    contentHolder.innerHTML = content;
}