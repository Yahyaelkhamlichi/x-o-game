let   cd ="x";

let title =document.querySelector(".title")
let item1 =document.getElementById("item1")
let item2 =document.getElementById("item2")
let item3 =document.getElementById("item3")
let item4 =document.getElementById("item4")
let item5 =document.getElementById("item5")
let item6 =document.getElementById("item6")
let item7 =document.getElementById("item7")
let item8 =document.getElementById("item8")
let item9 =document.getElementById("item9")

function winner(item1,item2,item3){
    item1.style.backgroundColor=" rgb(59, 13, 97)"
    item2.style.backgroundColor=" rgb(59, 13, 97)"
    item3.style.backgroundColor=" rgb(59, 13, 97)"
    title.innerHTML= `<span>winner</span>     ${item1.innerHTML} `
    title.style.color="white"
    
   let x = setInterval(function(){
     
        location.reload()
    },1500)
   
}

function olb(){
if( item1.innerHTML==item2.innerHTML &&item2.innerHTML==item3.innerHTML&& item1.innerHTML!=""){
    winner(item1,item2,item3)
}
 else if( item4.innerHTML==item5.innerHTML &&item4.innerHTML==item6.innerHTML&& item4.innerHTML!=""){
    winner(item4,item5,item6)


}
 else if( item7.innerHTML==item8.innerHTML &&item8.innerHTML==item9.innerHTML&& item7.innerHTML!=""){

    winner(item7,item8,item9)

}


// 
 else if( item1.innerHTML==item4.innerHTML &&item4.innerHTML==item7.innerHTML&& item7.innerHTML!=""){
    winner(item1,item4,item7)

}
 else if( item2.innerHTML==item5.innerHTML &&item5.innerHTML==item8.innerHTML&& item2.innerHTML!=""){

    winner(item2,item5,item8)

}
 else if( item3.innerHTML==item6.innerHTML &&item6.innerHTML==item9.innerHTML&& item3.innerHTML!=""){


    winner(item3,item6,item9)

}
// 
else if( item1.innerHTML==item5.innerHTML &&item5.innerHTML==item9.innerHTML&& item1.innerHTML!=""){



    winner(item1,item5,item9)
    
    }
else if( item3.innerHTML==item5.innerHTML &&item5.innerHTML==item7.innerHTML&& item3.innerHTML!=""){


   
    winner(item3,item5,item7)
    
    }

    

}





function run(id){

let elment =document.getElementById(id)
if(cd==="x" &&elment.innerHTML=="" ){
elment.innerHTML="X"
title.innerHTML="o"
cd ="o";
}
else if(cd=== "o" && elment.innerHTML==""){
    elment.innerHTML="o"
    title.innerHTML="x"
    cd ="x";
}
olb()
}


let loading = document.getElementById("loading");

window.onload = function() {
    loading.style.display="block"
    setInterval(function() {
       
        loading.style.display="none"
    }, 2000);
}
