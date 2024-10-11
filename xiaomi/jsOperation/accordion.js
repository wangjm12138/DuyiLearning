
var h2 = document.querySelectorAll('.menu h2');
for(var i = 0; i < h2.length; i++){
    h2[i].addEventListener("click", function(){
        var beforeOpen = document.querySelector(".submenu[status=opened]")
        if(beforeOpen){
            closeSubmenu(beforeOpen);
        }
        var UlElment = this.nextElementSibling;
        toggle(UlElment);
    })            
}


var itemHeight = 30;

// var testmenu = document.querySelector(".submenu");
function openSubmenu(subMenu){
    // submun state, open, close, play animation
    // self-defined attribute
    var status = subMenu.getAttribute("status");
    if(status !== "close" && status) 
        return;
    subMenu.setAttribute("status", "playing");

    createAnimation({
        from: 0,
        to: itemHeight * subMenu.children.length,
        totalMS: 500,
        onmove: function(height){
            subMenu.style.height = height + "px";
        },
        onend: function(){
            subMenu.setAttribute("status", "opened");
        },
    })
}
        
function closeSubmenu(subMenu){
    // submun state, open, close, play animation
    // self-defined attribute
    var status = subMenu.getAttribute("status");
    if(status !== "opened") 
        return;
    subMenu.setAttribute("status", "playing");

    createAnimation({
        from: itemHeight * subMenu.children.length,
        to: 0,
        totalMS: 500,
        onmove: function(height){
            subMenu.style.height = height + "px";
        },
        onend: function(){
            subMenu.setAttribute("status", "closed");
        },
    })
}

function toggle(subMenu){
    // submun state, open, close, play animation
    // self-defined attribute
    var status = subMenu.getAttribute("status");
    if(status === "playing"){
        return;
    } else if (status === "opened"){
        closeSubmenu(subMenu);
    } else {    // closed
        openSubmenu(subMenu);
    }
}