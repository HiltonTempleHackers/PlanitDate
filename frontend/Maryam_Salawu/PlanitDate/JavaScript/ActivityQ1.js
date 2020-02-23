function Activity1() {
    
    
    var contentHolder = document.getElementById('Question');




    var content = `
<h1 class="cover-heading">First Date Ideas</h1>
        <p class="lead"> What is your price range?</p>
        <p class="lead">
           <select id="priceRange">
  <option value="1">$</option>
  <option value="2">$$</option>
  <option value="3">$$$</option>
  <option value="4">$$$$</option>
</select>

<br />
 <br />
          <p class="lead">
                    <a href="#"  id="button" onclick="Activity2()" class="btn btn-lg btn-secondary">Next</a>
           </p>
       
                    
   </p>
        
`;
  contentHolder.innerHTML = content;
}
