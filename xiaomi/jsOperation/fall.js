(function(){
    var arr = [0, 0, 0, 0, 0, 0];
    var imgWidth = 220;

    var container =  document.querySelector('.container');
    createImgs();


    function createImgs(){
        for(var i = 0; i <= 40; i++){
            var img = document.createElement('img');
            img.src = `./img/${i}.jpg`;
            img.style.width = imgWidth + 'px';
            container.appendChild(img);
            img.onload = setPositions;
        }
    }


    function cal(){
        var containerWidth = container.clientWidth; // 容器的宽度
        // 列数 = 容器的宽度 / 图片的宽度
        var columns = Math.floor(containerWidth / imgWidth);
        // 还需要计算间隙
        // 总间隙 = 容器宽度 - （列数 * 图片宽度）
        var spaceNumber = columns + 1; // 间隙的数量
        var leftSpace = containerWidth - columns * imgWidth; // 计算剩余的空间
        var space = leftSpace / spaceNumber; // 每个间隙的空间
        return {
            space: space,
            columns: columns
        }
    }

    function setPositions(){
        // 在设置图片位置之前，我们首先需要知道几列
        var info = cal(); // 通过该方法，我们就可以得到列数和间隙

        // 接下来，我们就需要创建数组，数组里面保存每一列的高度
        var arr = new Array(info.columns);
        arr.fill(0); // 数组里面的每一项填充为 0

        // 至此，我们的准备工作就做好了。
        // 接下来下一步，我们就需要一张一张的图片计算 top 和 left

        for (var i = 0; i < container.children.length; i++) {
            // 获取当前的图片
            var img = container.children[i];
            // 接下来我们要寻找数组里面的最小值
            var minTop = getMin(arr);
            img.style.top = minTop + "px";

            // 接下来有一个非常非常重要的事情，就是要改变当前列的高度
            // 首先找到这个最小数对应的列数
            var index = arr.indexOf(minTop);
            // 新的高度 = 图片的高度 + 间隙的高度
            arr[index] += img.height + info.space;
            // 至此，整个 top 值就已经确定了，还需要确定 left 值
            var left = (index + 1) * info.space + index * imgWidth;
            img.style.left = left + 'px';
        }

        // // 因为图片是绝对定位，脱离了标准流，所以无法撑开盒子的高度
        // // 那么我就手动来计算盒子的高度
        var max = getMax(arr);
        container.style.height = max + 'px';
    }

    function getMin(arr){
        var min = arr[0];
        for(var i = 0; i < arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    }

    function getMax(arr){
        var max = arr[0];
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        return max;
    }

    var timerId = null;
    window.onresize = function(){

        if(timerId){
            clearTimeout(timerId);
        }

        timerId = setTimeout(function(){
            setPositions();
        }, 500);
        // setPositions();
    }


})();