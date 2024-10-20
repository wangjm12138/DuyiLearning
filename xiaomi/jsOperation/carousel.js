(function(){
    var imgList = [
        './img/Wallpaper1.jpg',
        './img/Wallpaper2.jpg',
        './img/Wallpaper3.jpg',
        './img/Wallpaper4.jpg',
        './img/Wallpaper5.jpg',
    ]
    
    var carouselList = document.querySelector(".carousel-list");
    var indicator  = document.querySelector(".indicator");
    var btnList = [];

    for(var i = 0;i < imgList.length; i++) {
        var imgDom = document.createElement("img");
        imgDom.src = imgList[i];
        imgDom.classList.add("carousel-item");
        carouselList.appendChild(imgDom)
        var div = document.createElement("div");
        div.classList.add("indicator-item");
        indicator.appendChild(div);
        btnList.push(div);
    }

    // var firstImg = carouselList.firstElementChild.cloneNode(true);
    // carouselList.appendChild(firstImg);

    var lastImg = carouselList.lastElementChild.cloneNode(true);
    carouselList.insertBefore(lastImg, carouselList.firstElementChild);
    lastImg.style.position = 'absolute'
    lastImg.style.transform = 'translateX(-100%)'

    for(var i = 0;i < btnList.length; i++){
        (function(i) {
            btnList[i].onclick = function(){
                move();
            };
        })(i);
    }


    var indicatorList = document.querySelectorAll(".indicator .indicator-item");
    indicatorList[0].classList.add("active");
    console.log(indicatorList[0])

    var imgList = document.querySelectorAll(".carousel-list>img");
    console.log(imgList)
    var currentIndex = 0;


    function move() {
        carouselList.style.transition = 'all 0.5s ease-in-out'
        carouselList.style.transform = 'translateX(100%)'        
    }
    // var timer = setInterval(function(){
    //     nextSlide()
    // },
    // 3000)
    function moveTo(index) {
        carouselList.style.transform = `translateX(-${index * 100}%)`
        carouselList.style.transition = '.5s'
  
        // // 去掉导航点选中效果
        // let active = document.querySelector('.indicator span.active')
        // active.classList.remove('active')
        // // 添加选中效果
        // doms.indicator[index].classList.add('active')
        currentIndex = index
      }
  

      //核心点在于，复制最后一张图片到第一张图片前面，
      //5 1 2 3 4 5，
    function nextSlide(){
        if(currentIndex == 4){

            carouselList.style.transition = 'none'
            carouselList.style.transform = 'translateX(100%)'
            //核心语句，可以立刻触发渲染
            carouselList.clientHeight
            moveTo(0)
        } else {
            moveTo(currentIndex + 1)
        }
    }

})();
