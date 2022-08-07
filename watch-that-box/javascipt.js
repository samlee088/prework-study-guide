const button2 = document.getElementById('button2');


button2.addEventListener('click', function onClick(event) {

    const box = document.getElementById('box');

    box.style.backgroundColor = 'blue' ;

});

var boxheight = 150
var boxwidth = 150
var opacitycounter = 0.1


document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});


document.getElementById("button1").addEventListener("click", function(){

    if(boxheight > 900 && boxwidth > 900 ) {
        boxheight = 150 ;
        boxwidth = 150 ;
    }

    boxheight += 100
    boxwidth += 100

    document.getElementById("box").style.height = boxheight + "px"
    document.getElementById("box").style.width = boxwidth + "px"
  

});

document.getElementById("button3").addEventListener("click", function() {

    if(opacitycounter >1){
        opacitycounter = .1
    }
    
    opacitycounter += .1


    document.getElementById("box").style.opacity = opacitycounter


});

document.getElementById("button4").addEventListener("click", function() {

    document.getElementById("box").style.height = "150px"

    document.getElementById("box").style.width = "150px"

    document.getElementById("box").style.opacity = 1

    document.getElementById("box").style.backgroundColor = "orange"

});






