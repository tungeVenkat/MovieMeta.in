var hr=document.getElementById('hour');   
        var min=document.getElementById('min');                
        var ses=document.getElementById('seconds');   
        var ampm1=document.getElementById('ampm');   
        function updateClock(){
            var date=new Date();
            h=date.getHours();
            m=date.getMinutes();
            s=date.getSeconds();
            ampm2="AM";
            if (h>12){
                h=h-12;
                ampm2="PM";
            }
            h=h<10?"0"+h:h;
            m=m<10?"0"+m:m;
            s=s<10?"0"+s:s;
            
            hr.innerText=h;
            min.innerText=m;
            sec.innerText=s;
            ampm1.innerText=ampm2;
