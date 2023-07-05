
a=0
b=100
function add() {
a=a+1

    document.getElementById("text").value=a
    b=a*100
    document.getElementById("ee").innerHTML="OFF-₹"+b
    if(b>1000 && a>10){
        b=a*150
        d=b
        c="Your Offer closed "
       

        document.getElementById("ee").innerHTML=c+d
        }
    
}


function sub() {
    a=a-1
    if(a<0){
        a=a*0
        
    }
        document.getElementById("text").value=a
        b=a*100
       
        document.getElementById("ee").innerHTML="OFF-₹"+b
        
        if(b>1000 && a>10){
            b=a*150
            d=b
            c="Your Offer closed "
           
    
            document.getElementById("ee").innerHTML=c+d
            }
    }


    // text pra