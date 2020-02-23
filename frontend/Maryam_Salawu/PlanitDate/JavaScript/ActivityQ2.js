function Activity2() {
    var answers2 = {};
    answers2.Food = document.getElementById("priceRange").value;
 

        var contentHolder = document.getElementById("Question");
        var content = `
        <h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead"> Do you prefer an indoor or outdoor activity?</p>
        <p class="lead">
            <span onclick="btnClick(this, 'btnOutdoor')" class="btn  btn-lg btn-secondary btn-option" id="btnIndoor">Indoor</span>
            <span onclick="btnClick(this, 'btnIndoor')" class="btn  btn-lg btn-secondary btn-option" id="btnOutdoor">Outdoor</span>
            
            <div style='clear:both;'></div>
            <select id="indoor">
                <option value="mini_golf">Mini Golf</option>
                <option value="bowling">Bowling</option>
                <option value="skatingrinks">Skating</option>
                <option value="rock_climbing">Rock climbing</option>
                <option value="arcades">Arcades</option>
                <option value="movietheaters">Movie Theater</option>
            </select>
            <select id="outdoor">
                <option value="amusementparks">Amusement Park</option>
                <option value="waterparks">Water Parks</option>
                <option value="parks">Park</option>
                <option value="fishing">Fishing</option>
                <option value="hiking">Hiking</option>
                <option value="zoos">Zoo</option>
            </select>
        <br/>
        <br/>
        <p class="lead">
           <span onclick="POST" id="button" class="btn btn-lg btn-secondary">Submit</span>
        </p>
        </p>
`;

        contentHolder.innerHTML = content;



    }