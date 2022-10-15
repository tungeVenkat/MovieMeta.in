


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
