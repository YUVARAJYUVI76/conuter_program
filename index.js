//
const dec=document.getElementById("b1");
const res=document.getElementById("b2");
const inc=document.getElementById("b3");
const lab=document.getElementById("lab")

let count=0;

dec.onclick=function(){
    count--;
    lab.textContent=count;
}

res.onclick=function(){
    count=0;
    lab.textContent=count;
}

inc.onclick=function(){
    count++;
    lab.textContent=count;
}