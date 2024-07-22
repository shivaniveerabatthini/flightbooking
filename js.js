document.querySelector("#return").addEventListener("click",()=>{
    
    document.querySelector("#return").style.backgroundColor="#39B8ED";
    document.querySelector("#one").style.backgroundColor="#fff";
    document.querySelector("#returnform").style.display="flex";
    document.querySelector("#oneway").style.display="none";
})

document.querySelector("#one").addEventListener("click",()=>{
    
    document.querySelector("#return").style.backgroundColor="#fff";
    document.querySelector("#one").style.backgroundColor="#39B8ED";
    document.querySelector("#returnform").style.display="none";
    document.querySelector("#oneway").style.display="flex";
})