let h = document.querySelector("header");
window.onscroll=function(){
    if(window.scrollY>=50){
        h.classList.add("active");
    }
    else{
        h.classList.remove("active")
    }
};
let nav_links =document.getElementById("links");
function open_close_menu(){
    nav_links.classList.toggle("active");
}