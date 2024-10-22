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
    var button = document.querySelector('#btn');
    var slider = document.querySelector('.slider');
    var title = document.querySelector('.imgContainer h3'); // 获取标题
    var span = document.querySelector('.slider span'); // 获取标题
    var changeImg = document.querySelector('.changeImg');
    //计算用到的值
    var imgWidth = imgBox.clientWidth;
    var imgHeight = imgBox.clientHeight;
    var imgBlockWidth = imgBlock.clientWidth;
    var imgBlockHeight = imgBlock.clientHeight;
    
    // var index = Math.floor(Math.random() * imgList.length);
    // imgBox.style.backgroundImage = 'url('+ imgList[index] +')';
    // imgBlock.style.backgroundImage = 'url('+ imgList[index] +')';
    generateimg();
    //imgblock 的取值范围坐标 是0 - 图片的宽度一半-50
    //imgGap 的取值范围坐标  是图片的宽度 - 图片的宽度-50
    //高度的取值范围是坐标 0 - 图片的高度-25

    function generateimg(){
        var index = Math.floor(Math.random() * imgList.length);
        imgBox.style.backgroundImage = 'url('+ imgList[index] +')';
        imgBlock.style.backgroundImage = 'url('+ imgList[index] +')';
        generateBlock();
    }

    function generateBlock(){
        var imgWidthRandom = Math.floor(Math.random() * (imgWidth / 2 -50));
        var imgHeightRandom = Math.floor(Math.random() * (imgHeight - 50));


        var imgBlockWidthMove  = imgWidthRandom;
        var imgGapWidthMove = imgWidthRandom + imgWidth/2;

        // console.log(imgWidth, imgRandom, imgBlockMove, imgGapMove);
        imgBlock.style.left = '0px';
        imgBlock.style.top = imgHeightRandom + 'px';
        imgBlock.style.backgroundPositionY =  -imgHeightRandom + 'px';
        imgBlock.style.backgroundPositionX = -imgGapWidthMove + 'px';
        imgGap.style.left = imgGapWidthMove + 'px';
        imgGap.style.top = imgHeightRandom + 'px';
    }


    function init() {
        button.onmousedown = function(e){

            // 设置拖动图块
            imgBlock.style.opacity = 1; // 让拖动图块可见
            imgBlock.style.transition = 'none'; // 关闭拖动图片块的过渡效果，让整个拖动更加的丝滑

            // 设置标题
            title.innerHTML = '拖动图片完成验证';
            title.style.color = 'black';

            // 设置滑动条的文字不可见
            span.style.opacity = 0;

        //计算button移动
        slider.onmousemove = function (ev) {

                // 接下来就会有一个很关键的点，我们需要得到用户移动鼠标时的最新的 left 值

                var newLeft = ev.clientX - slider.offsetLeft - e.offsetX;

                // 我们还需要进行一个边界判断
                if (newLeft < -2) {
                    newLeft = -2
                }
                if (newLeft > (imgBox.offsetWidth - imgBlock.offsetWidth)) {
                    newLeft = imgBox.offsetWidth - imgBlock.offsetWidth;
                }

                imgBlock.style.left = newLeft + 'px';
                btn.style.left = newLeft + 'px';
            }

            // 设置鼠标抬起事件
            document.onmouseup = function () {
                // 当我们的鼠标抬起的时候，进行验证

                var diffLeft = imgGap.offsetLeft - imgBlock.offsetLeft; // 获取两个图块的 left 差值

                if (diffLeft < 5 && diffLeft > -5) {
                    // 验证成功

                    // 设置两个图块隐藏
                    imgBlock.style.opacity = 0;
                    imgGap.style.opacity = 0;

                    // 设置 title
                    title.innerHTML = '验证成功';
                    title.style.color = 'red';

                    // 删除所有的事件
                    slider.onmousemove = btn.onmousedown = document.onmouseup = null;

                } else {
                    // 验证失败

                    // 设置拖动图块和按钮的 left 值
                    imgBlock.style.left = '0px';
                    btn.style.left = '-2px';

                    // 还需要添加上过渡
                    imgBlock.style.transition = 'all .5s';
                    btn.style.transition = 'all .5s';

                    slider.onmousemove = document.onmouseup = null;

                    // 设置 title
                    title.innerHTML = '验证失败';
                    title.style.color = 'green';

                    // 显示滑块区域的文字
                    span.style.opacity = 1;
                }
            }
        }
    }
    init();
    changeImg.onclick = generateimg;

})();