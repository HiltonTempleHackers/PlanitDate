function Question4() {

    document.getElementById("Question").innerHTML = "";
    document.getElementById("Question").innerHTML = question5;

}

var question5 = `
<h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead"> What is your popularity preference?</p>
        <p class="lead">
           <select id="priceRange">
  <option value="1">1 star</option>
  <option value="2">2 star</option>
  <option value="3">3 star</option>
  <option value="4">4 star</option>
 <option value="5">5 star</option>
</select>


<br />
 <br />
                <p class="lead">
                    <a href="#"  id="button" onclick="Question5()"class="btn btn-lg btn-secondary">Next</a>
                </p>
       
                    
  
        
`;
