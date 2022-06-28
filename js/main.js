const user = document.querySelector(".logo");
const menu = document.querySelector(".open");
const aside = document.querySelector("#aside");
const closeAside = document.querySelector("#close-aside")
closeAside.addEventListener("click",()=>{
aside.setAttribute("data-visible","false")
})
user.addEventListener("click",()=>{

aside.style.animationPlayState="running"
const attr = aside.getAttribute("data-visible")
if(attr=="false"){
aside.setAttribute("data-visible","true");
}else{
aside.setAttribute("data-visible","false");
}
})
