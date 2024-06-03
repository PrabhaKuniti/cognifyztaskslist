let backgroundCol = document.getElementsByClassName("background2")[0];
let btn=document.getElementById("buttonn");
let col=['#a9c2eb','#e6baba','#fae7d4','#bfe3b6','#b6e3d3','#cbc6f7','#fae8fc','#edc5c5'];


btn.addEventListener('click',function changecol(){
    let p=col.length;
    let bgnum=(Math.ceil(Math.random()*p));
    if(bgnum==p){
        bgnum=p-1;
    }
    backgroundCol.style.backgroundColor=col[bgnum];
  
});

