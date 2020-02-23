function makeContentCard(id, heading, innerContent){
    var card = document.createElement('div');

    var myHeading = document.createElement('h1');
    myHeading.innerText = heading;
    card.appendChild(myHeading);

    var myContent = document.createElement('p');
    myContent.innerText = innerContent;
    card.appendChild(myContent);

    document.getElementById(id).appendChild(card);
    card.classList.add('contentCard');
    return card;
}