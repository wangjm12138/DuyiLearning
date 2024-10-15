(function(){
    var recommend_data = data;

    var images = document.querySelector('.images');
    var images_a = images.querySelector('.images>a');
    var sideBar = document.querySelector('.side-bar');

    var navDom = [];
    var activeDom=null;
    var index = 0;

    for(var i = 0; i < recommend_data.length; i++){
        var a = document.createElement('a');
        a.classList.add('nav')
        var span = document.createElement('span');
        span.innerText = recommend_data[i].title;
        a.appendChild(span);
        sideBar.appendChild(a);
        navDom.push(a);
        a.onmouseenter = function(){
            clearInterval(timer);
            var inner_index = navDom.indexOf(this);
            if(activeDom){
                activeDom.classList.remove('active');
            }
            activeDom = this;
            images_a.style.backgroundImage = 'url(' + recommend_data[inner_index].img + ')';
            images_a.style.backgroundColor = recommend_data[inner_index].bg;
            images_a.style.display = 'block';
            this.classList.add('active');
        }
        a.onmouseleave = function(){
            index = 0;
            timer = setInterval(move, 3000);
        }
    }

    var timer = setInterval(move, 3000);


    function move() {
        if(activeDom){
            activeDom.classList.remove('active');
        }
        activeDom = navDom[index];
        images_a.style.backgroundImage = 'url(' + recommend_data[index].img + ')';
        images_a.style.backgroundColor = recommend_data[index].bg;
        images_a.style.display = 'block';
        activeDom.classList.add('active');
        index++;
        if(index >= recommend_data.length){
            index = 0;
        }
    }
})();