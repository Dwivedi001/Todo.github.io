let btn =document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click",()=>{
    let item=document.createElement("li");
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");
    item.innerText=inp.value;
    ul.appendChild(item);
    item.appendChild(delBtn);
    inp.value="";
    
});
ul.addEventListener("click",(event)=>{
    console.dir(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        let list=event.target.parentElement;
        list.remove();
        console.log("delete");
        
    }   
    
});