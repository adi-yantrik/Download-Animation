
document.querySelector(".btn-primary").addEventListener("click",()=>{
    var a = document.querySelector("#dwn-design");
    a.className = "abc";
    var b = 0;
    c = 41;
    var id = setInterval(()=>{
    b+=10;
    c-=1;
    if(b==410){
        clearInterval(id);
        //alert(`Download successful`);
        document.querySelector("#txt").innerHTML= `Your download is now completed!!`;
        
    }else{
        a.style.width = b;
        document.querySelector("#txt").innerHTML= `Your download will be completed in ${c}`;
    }
    },1000)
})
