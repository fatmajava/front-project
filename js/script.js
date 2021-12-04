let scrollToTop= document.querySelector(".scroll-to-top")
let stickyNav = document.querySelector(".sticky-navbar")
let body = document.querySelector("html,body")

window.addEventListener("scroll" , ()=>{
    if(body.scrollTop >= 100){
        scrollToTop.style.display="block"
        scrollToTop.addEventListener('click' , ()=>{
            window.scrollTo(0 , 0)
        });

    }else{
        scrollToTop.style.display= "none"
    }
})

window.addEventListener("scroll" , ()=> {
    if(body.scrollTop>= 100){
        
        stickyNav.style.display="block";
        
        
            
    }else{
        stickyNav.style.display="none";
        

    }
})


let hidespreads= document.querySelector(".spreads-hidden")
let hideDisease = document.querySelector(".diseasey")
let hideProtects=document.querySelector(".protects-hidden")
let hideSymptom=document.querySelector(".symptom-hidden")
let hideOutbreak=document.querySelector(".outbreak-hidden")
let hideBusters=document.querySelector(".busters-hidden")
let activeDisease=document.querySelector(".active")
let SpreadBtn= document.querySelector(".spready")
let protectyBtn=document.querySelector(".protecty")
let symptomBtn=document.querySelector(".symptomy")
let outbreakBtn=document.querySelector(".outbreaky")
let busterBtn=document.querySelector(".bustersy")


SpreadBtn.addEventListener("click" , ()=>{
   
    hidespreads.style.display="block";
        hideDisease.style.display="none";
        hideProtects.style.display="none";
        hideOutbreak.style.display="none";
        hideBusters.style.display="none";
        hideSymptom.style.display="none";
    
})
protectyBtn.addEventListener("click" , ()=>{

    hideProtects.style.display="block";
    hidespreads.style.display="none";
    hideDisease.style.display="none";
    hideOutbreak.style.display="none";
    hideBusters.style.display="none";
    hideSymptom.style.display="none";

})
symptomBtn.addEventListener("click" , ()=>{

    hideSymptom.style.display="block";
    hidespreads.style.display="none";
    hideProtects.style.display="none";
    hideDisease.style.display="none";
    hideOutbreak.style.display="none";
    hideBusters.style.display="none";

})
outbreakBtn.addEventListener("click" , ()=>{

    hideOutbreak.style.display="block";
    hideSymptom.style.display="none";
    hidespreads.style.display="none";
    hideProtects.style.display="none";
    hideDisease.style.display="none";
    hideBusters.style.display="none";

    
})
busterBtn.addEventListener("click" , ()=>{

    hideBusters.style.display="block";
    hideOutbreak.style.display="none";
    hideSymptom.style.display="none";
    hidespreads.style.display="none";
    hideProtects.style.display="none";
    hideDisease.style.display="none";
    
})






