(function(){
    //1. 初始化一开始做什么。
    var list = document.querySelector('.list');
    function cloneFirstItem(){
        var firstItem = list.firstElementChild;
        var clone = firstItem.cloneNode(true);
        console.log(clone);
        list.appendChild(clone);
    }
    cloneFirstItem();
    
    //2. 滚动
    var duration = 2000;
    setInterval(moveNext, duration);

    var curIndex = 0;
    var itemHeight = 30;
    function moveNext(){
        var from = curIndex * itemHeight; //计算当前到哪个li
        curIndex++;
        var to = curIndex * itemHeight; //计算要到哪个li
        
        var totalDuration = 500; //变化总时间
        var duration = 15; //变化的间隔时间
        var times = totalDuration / duration; //变化的次数
        var dis = (to - from) / times; //每次变化的距离
        var timer = setInterval(function(){
            from += dis;
            if (from >= to){
                clearInterval(timer);
                if(curIndex >= list.children.length - 1){
                    from = 0;
                    curIndex = 0;
                }
            }
            list.scrollTop = from;
        }, duration)
        //list.scrollTop = top;

    }
})();