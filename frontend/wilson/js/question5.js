function question5(){
    //save previous question data to object
    choices.startTime = document.getElementById('txtStartTime').text;    
    choices.endTime = document.getElementById('txtEndTime').text;   
    
    


    var contentHolder = document.getElementById("contentArea");
    var content = `
        <h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead">Would you like an indoor or outdoor activity?</p>
        <p class="lead">
            <span onclick="btnClick(this)" class="btn  btn-lg btn-secondary btn-option" id="btnIndoor">Indoor</span>
            <span onclick="btnClick(this)" class="btn  btn-lg btn-secondary btn-option" id="btnOutdoor">Outdoor</span>
            <br/>
            <br/>
        </p>
        <p class="lead">
            <input type="submit"  id="button" value="Submit">
        </p>

`;

    contentHolder.innerHTML = content;

    

}
