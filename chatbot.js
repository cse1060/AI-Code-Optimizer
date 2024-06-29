let menu=document.querySelector(".menu");
let subMenu=document.querySelector(".sub-menu");
let logout=document.querySelector(".logout")
let history=document.querySelector(".history")
var click=0;
menu.addEventListener("click",()=>{
    click+=1;
    if(click%2!==0){
    subMenu.classList.remove("hide");
    }else{
        subMenu.classList.add("hide");
    }
})
history.addEventListener("click",()=>{
    history.style.color="#0066ff"
    window.open(url="history.html","_self");
 })
 logout.addEventListener("click",()=>{
     logout.style.color="#0066ff"
     let text="Are you sure you want to logout?";
     if(confirm(text)===true){
        window.close(url="chatbot.html");
        window.open(url="login.html");
     }
 })