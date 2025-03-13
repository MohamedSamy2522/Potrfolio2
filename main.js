

/////////menu/////////
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

/////////// Dark Mode /////////////
let btn = document.querySelector("#switchbtn");
let b = document.querySelector("body");
let darkmode =false;

btn.addEventListener("change", function(event){
    darkmode= (event.target.checked);
    if (darkmode==true) {
        b.classList.add("dark");
    }else{
        b.classList.remove("dark");
    }
});



////////transalte///////
document.addEventListener("DOMContentLoaded", () => {
    const langIcon = document.getElementById("language-icon");
    
    const elements = {
        "title": document.querySelector("title"),
        "nav-home": document.getElementById("nav-home"),
        "nav-services": document.getElementById("nav-services"),
        "nav-about": document.getElementById("nav-about"),
        "nav-projects": document.getElementById("nav-projects"),
        "nav-contact": document.getElementById("nav-contact"),
        "hello": document.getElementById("hello"),
        "intro": document.getElementById("intro"),
        "services-btn": document.getElementById("services-btn"),
        "portfolio-btn": document.getElementById("portfolio-btn"),
        "about-btn": document.getElementById("about-btn"),
        "about-me": document.getElementById("about-me"),
        "developer": document.getElementById("developer"),
        "dev-desc": document.getElementById("dev-desc"),
        "web-dev": document.getElementById("web-dev"),
        "ui-ux": document.getElementById("ui-ux"),
        "digital-marketing": document.getElementById("digital-marketing"),
        "product-design": document.getElementById("product-design"),
        "download-cv": document.getElementById("download-cv"),
        "our-services": document.getElementById("our-services"),
        "read-more-1": document.getElementById("read-more-1"),
        "explore-projects": document.getElementById("explore-projects"),
        "contact-me": document.getElementById("contact-me"),
        "full-name": document.getElementById("full-name"),
        "email": document.getElementById("email"),
        "mobile": document.getElementById("mobile"),
        "subject": document.getElementById("subject"),
        "message-placeholder": document.getElementById("message-placeholder"),
        "send-message": document.getElementById("send-message")
    };

    // استرجاع اللغة المحفوظة أو تعيينها إلى الإنجليزية بشكل افتراضي
    let currentLang = localStorage.getItem("language") || "en";

    function changeLanguage(lang) {
        fetch("lang.json")
            .then(response => response.json())
            .then(data => {
                const translations = data[lang];

                for (let key in translations) {
                    if (elements[key]) {
                        if (elements[key].tagName === "INPUT" || elements[key].tagName === "TEXTAREA") {
                            elements[key].placeholder = translations[key]; 
                        } else if (elements[key].tagName === "TITLE") {
                            document.title = translations[key];
                        } else {
                            elements[key].textContent = translations[key];
                        }
                    }
                }

                document.dir = lang === "ar" ? "rtl" : "ltr";
                localStorage.setItem("language", lang);
                currentLang = lang;
            })
            .catch(error => console.error("Error loading language file:", error));
    }

    // تبديل اللغة عند الضغط على الأيقونة
    langIcon.addEventListener("click", () => {
        const newLang = currentLang === "en" ? "ar" : "en";
        changeLanguage(newLang);
    });

    // تحميل اللغة المحفوظة عند فتح الصفحة
    changeLanguage(currentLang);
});