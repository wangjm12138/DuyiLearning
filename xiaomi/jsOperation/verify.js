(function(){
    var imgList = [
        './img/t1.png',
        './img/t2.png',
        './img/t3.png',
        './img/t4.png',
        './img/t5.png',
    ]
    var imgBox = document.querySelector('.imgBox');
    var imgBlock = document.querySelector('.imgBlock');
    var imgGap = document.querySelector('.imgGap');
    //计算用到的值
    var imgWidth = imgBox.clientWidth;
    var imgHeight = imgBox.clientHeight;
    var imgBlockWidth = imgBlock.clientWidth;
    var imgBlockHeight = imgBlock.clientHeight;
    // var index = Math.floor(Math.random() * imgList.length);
    var index = 0;
    imgBox.style.backgroundImage = 'url('+ imgList[index] +')';

    //imgblock 的取值范围坐标 是0 - 图片的宽度一半-50
    //imgGap 的取值范围坐标  是图片的宽度 - 图片的宽度-50
    //高度的取值范围是坐标 0 - 图片的高度-25
    function generateBlock(){
        // var imgWidth = imgBox.clientWidth;
        // var imgHeight = imgBox.clientHeight;
        // var imgBlockWidth = imgBlock.clientWidth;
        // var imgBlockHeight = imgBlock.clientHeight;
        var imgBlockRandom = Math.floor(Math.random() * imgWidth / 2 - 50);
        imgBlock.style.left = imgBlockRandom + 'px';
        imgBlock.style.

    }



})();