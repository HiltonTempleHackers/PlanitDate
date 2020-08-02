function btnClick(me, opposite){
    console.log(me)
    document.getElementById(opposite).style.backgroundColor = 'white';

    me.style.backgroundColor = '#e9e7dd';
    me.style.boxShadow = '10px 10px 10px black;'

    let activityResp;

    if (me.id === 'btnIndoor'){
        choices.indoor = true;
        document.getElementById('indoor').disabled = false;
        document.getElementById('outdoor').disabled = true;
    } 
    
    else if (me.id === 'btnOutdoor') {
        choices.indoor = false;
        document.getElementById('indoor').disabled = true;
        document.getElementById('outdoor').disabled = false;
    }

    else if (me.id === 'btnYes'){
        document.getElementById('button').innerText = 'Next';
        document.getElementById('button').onclick = function(){foodQ1()};
    }
    else if (me.id === 'btnNo'){
        document.getElementById('button').innerText = 'Submit';
        document.getElementById('button').onclick = async function() {
            activityResp = await postUserData('http://localhost:3000/api/activity', choices).catch(e => console.log(e))
            console.log(activityResp);
        };
    }


    console.log(choices);
}