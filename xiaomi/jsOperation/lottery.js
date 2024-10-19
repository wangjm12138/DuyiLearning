(function() {
    var lotteryBtn = document.querySelector('.lottery-btn');
    var itemList = document.querySelectorAll('.item');
    var lotteryNumber = document.querySelector('.choujiang>span');
    var dialogContainer = document.querySelector(".dialog-container")
    var dialogBtn = document.querySelector(".dialog-btn")
    var dialogClose = document.querySelector(".dialog-reminder .close")
    var dialogText = document.querySelector(".dialog-content>span")
    var timer = null
    var run = -1;
    var num = 5;

    itemList = Array.from(itemList);
    itemList.splice(4,1);

    reverseArr = itemList.slice().reverse();
    itemList = itemList.slice(0,3).concat(itemList.slice(4,5)).concat(reverseArr.slice(0,3)).concat(itemList.slice(3,4));


    dialogClose.addEventListener('click', function() {
        dialogContainer.style.display = 'none';
    })

    dialogBtn.addEventListener('click', function() {
        index = -1;
        dialogContainer.style.display = 'none';
        if (num == 0 || timer) return;
        runGame();
    })

    lotteryBtn.addEventListener('click', function() {
        if(timer) return;
        run = -1;
        if(num == 0) return;
        runGame();
    });

    function runGame() {
        var random = Math.floor(Math.random() * 6000 + 3000)

        timer = setInterval(function() {
            random -= 200
            if(random < 200) {
                clearInterval(timer);
                timer = null;
                openDialog();
                return;
            }
            clearActive(itemList);
            itemList[++run % 8].classList.add("active");
        }, 50);        
    }

    function clearActive(itemList) {
        for(var i = 0;i < itemList.length; i++){
            itemList[i].classList.remove('active');
        }
    }

    function openDialog() {
        lotteryNumber.innerText = --num;
        console.log(num);
        if(num === 0) {
            dialogBtn.innerHTML = '确定';
        }
        console.log(run % 8);
        if(run % 8 == 4) {
            dialogText.innerText = "很遗憾，您没有中奖";
        } else {
            dialogText.innerText = "恭喜您获得"+ itemList[run % 8].innerText;
        }
        dialogContainer.style.display = 'block';
    }

})();