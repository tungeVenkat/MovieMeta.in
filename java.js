document.querySelector(".videoplay1").addEventListener("mouseover",function(){
    this.play();
});
document.querySelector(".videoplay1").addEventListener("mouseleave",function(){
    this.pause();
});
document.querySelector(".videoplay2").addEventListener("mouseover",function(){
    this.play();
});
document.querySelector(".videoplay2").addEventListener("mouseleave",function(){
    this.pause();
});
document.querySelector(".videoplay3").addEventListener("mouseover",function(){
    this.play();
});
document.querySelector(".videoplay3").addEventListener("mouseleave",function(){
    this.pause();
});
document.querySelector(".videoplay4").addEventListener("mouseover",function(){
    this.play();
});
document.querySelector(".videoplay4").addEventListener("mouseleave",function(){
    this.pause();
});
document.querySelector(".videoplay5").addEventListener("mouseover",function(){
    this.play();
});
document.querySelector(".videoplay5").addEventListener("mouseleave",function(){
    this.pause();
});
document.querySelector(".videoplay6").addEventListener("mouseover",function(){
    this.play();
});
document.querySelector(".videoplay6").addEventListener("mouseleave",function(){
    this.pause();
});
document.querySelector(".videoplay7").addEventListener("mouseover",function(){
    this.play();
});
document.querySelector(".videoplay7").addEventListener("mouseleave",function(){
    this.pause();
});


function calcTotal(){
    var total=0;
    var item=document.getElementsByTagName('input');
    for (var i=0;i<item.length;i++){
        if (item[i].checked){
            total+=parseInt(item[i].value);
        }
    }
    document.getElementById('total').innerHTML= total+".00 Including GST click below button";
    let payment = document.getElementById("pay");
    let calc = document.getElementById("calcButton");
    calc.onclick = function(){
        payment.style.backgroundColor="red";
        payment.style.color="white";
        payment.innerText= total +"₹ pay";
    }
    }
 
