function btnClick(me){
    console.log(me)
    if (me.id === 'btnIndoor'){
        document.getElementById('btnOutdoor').style.backgroundColor = 'white';
        document.getElementById('btnOutdoor').style.boxShadow = 'none';
        choices.indoor = true;
    } 
    
    else {
        document.getElementById('btnIndoor').style.backgroundColor = 'white';
        document.getElementById('btnIndoor').style.boxShadow = 'none';
        choices.indoor = false;
    }

    me.style.backgroundColor = '#e9e7dd';
    me.style.boxShadow = '10px 10px 10px black;'
    console.log(choices);
    console.log(me)
}