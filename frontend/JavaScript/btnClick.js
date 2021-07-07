function btnClick(me, opposite) {

    document.getElementById(opposite).style.backgroundColor = 'white';

    me.style.backgroundColor = '#e9e7dd';
    me.style.boxShadow = '10px 10px 10px black;'

    if (me.id === 'btnIndoor') {
        answers.indoor = true;
        document.getElementById('indoor').disabled = false;
        document.getElementById('outdoor').disabled = true;
    }

    else if (me.id === 'btnOutdoor') {
        answers.indoor = false;
        document.getElementById('indoor').disabled = true;
        document.getElementById('outdoor').disabled = false;
    }

    else if (me.id === 'btnYes') {
        document.getElementById('button').innerText = 'Next';
        document.getElementById('button').onclick = function () { Activity1() };
    }
    else if (me.id === 'btnNo') {
        document.getElementById('button').innerText = 'Submit';
        document.getElementById('button').onclick = async function() {
            foodResp = await postUserData('http://localhost:3000/api/food', answers).catch(e => console.log(e))
            console.log(foodResp);
        }; //function that will POST
    }



}
