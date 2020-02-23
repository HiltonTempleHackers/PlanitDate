function postActivityWithFood(){
    choices2.food = document.getElementById('food').value;

    var sendobj = {obj1: choices, obj2: choices2};

    postWithAxios(sendobj);
}