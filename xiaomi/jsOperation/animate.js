function createAnimation(options) {
    var from = options.from;
    var to = options.to;
    var totalMS = options.totalMS || 1000;

    var duration = options.duration || 15;
    var times = Math.floor(totalMS / duration);
    var delta = (to - from)/times
    var curTimes = 0;
    var timer = setInterval(function(){
        from += delta;
        curTimes++;
        if(curTimes >= times) {
            from = to;
            options.onend && options.onend();
            clearInterval(timer);
        }
        options.onmove && options.onmove(from);
    },duration)

}