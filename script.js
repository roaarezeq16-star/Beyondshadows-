// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});

// viral counter animation
let stats = document.querySelectorAll(".stats span");
stats.forEach(stat=>{
stat.style.opacity = 0;
setTimeout(()=>{
stat.style.opacity = 1;
},500);
});