function home(id){
    var contentHolder = document.getElementById(id);
    var content = `
            <h1 class="cover-heading">Date Planning</h1>
            <p class="lead">Planning a first date can be stressful. It can be easy to get lost in all the little details: where to go, what to wear, what to say...</p>
            <p class="lead">We'll take care of it for you so you can focus on the bigger picture. After answering a few simple questions, it'll take a second to get your full first date package</p>
            <p class="lead">
                <a href="#" class="btn btn-lg btn-secondary" id="btnStart">Plan Your Date</a>
            </p>




`;

    contentHolder.innerHTML = content;
}