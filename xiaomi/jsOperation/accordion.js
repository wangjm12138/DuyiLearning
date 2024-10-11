(function(){
        var h1 = document.querySelectorAll('.container h1');
        console.log(h1);
        for(var i = 0; i < h1.length; i++){
            h1[i].addEventListener("click", function(){
                var UlElment = this.nextElementSibling;
                UlElment.style.display = "none";
            })            
        }
        // h1.onclick = function(){
        //     document.get
        //     ul.style.height = "0px";
        // };
})();