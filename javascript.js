var a=document.getElementById("supplies");
var b=document.getElementById("enty");
var total=document.getElementById("tot");
var supply=document.getElementById("sup");
var sup=0;
var helped=0;
function accept(event)
{
    var a=event.target.parentNode;
    var b=a.parentNode;
    b.style.display="none";
    helped++;
    sup--;
    total.innerHTML=helped;
    supply.innerHTML=sup;

}

function add(){
    var x=document.createElement("div");
    var p=document.createElement("div");
    var q=document.createElement("div");
    var bb=document.createElement("button");
    bb.textContent="Accept";
    x.setAttribute("class","imp");
    p.setAttribute("class","text");
    q.setAttribute("class","but");
    bb.setAttribute("class","button");
    bb.addEventListener("click", accept);
    q.append(bb);
    p.textContent=a.value;
    x.append(p);
    x.append(q);
    b.append(x);
    sup=sup+1;
    total.innerHTML=helped;
    supply.innerHTML=sup;
    
    
}
