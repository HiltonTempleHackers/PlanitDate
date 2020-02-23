function Question3() {
    var AnswerThree = new Object();
    AnswerThree.Price = document.getElementById("priceRange").value;
    document.getElementById("Question").innerHTML = "";
    document.getElementById("Question").innerHTML = question4;
    return AnswerThree.Price;
}

var question4 = `
<h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead"> What is your popularity preference?</p>
        <p class="lead">
           <select id="popularity">
  <option value="1">1 star</option>
  <option value="2">2 star</option>
  <option value="3">3 star</option>
  <option value="4">4 star</option>
  <option value="5">5 star</option>
</select>

<br />
 <br />
                <p class="lead">
                    <a href="#"  id="button" onclick="Question4()" class="btn btn-lg btn-secondary">Next</a>
                </p>
       
                    
   </p>
        
`;
