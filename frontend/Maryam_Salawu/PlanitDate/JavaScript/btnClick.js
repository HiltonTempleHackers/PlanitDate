function btnClick(me, opposite) {
    console.log(me)
    document.getElementById(opposite).style.backgroundColor = 'white';

    me.style.backgroundColor = '#e9e7dd';
    me.style.boxShadow = '10px 10px 10px black;'

    if (me.id === 'btnIndoor') {
        choices.indoor = true;
    }

    else if (me.id === 'btnOutdoor') {
        choices.indoor = false;
    }

    else if (me.id === 'btnYes') {
        document.getElementById('button').innerText = 'Next';
        document.getElementById('button').onclick = function () { foodQ1() };
    }
    else if (me.id === 'btnNo') {
        document.getElementById('button').innerText = 'Submit';
        document.getElementById('button').onclick = function () { return null }; //function that will POST
    }

}