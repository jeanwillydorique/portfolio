// ceci est un commentare

// variables 

let navbar = document.querySelector("nav");
let logo = document.querySelector(".logo");
let textnav = document.querySelectorAll(".textnav");
let slideshow = document.querySelector(".slideshow"); // 
let slides = document.querySelectorAll(".slide"); // tableau des slides
let next = document.querySelector(".next"); // button next 
let previous = document.querySelector(".previous"); // button previous
let slide1 = document.querySelector("#slide1");
let start = document.querySelector('.start'); // button test animation slide 1
// let page2 = document.querySelector(".page2");
// let gotop = document.querySelector(".gotop");
let clickToScroll = document.querySelector('.clicktoscroll');
let clickToScrollText = document.querySelector('.clickToScrolltext');


// page2.addEventListener ('scroll', function(){
   // gotop.style.opacity= "1";
// })

// les étapes du slider : 
// Appuyer sur le next = Slide 1 => opacity 0 = Slide 2 => opacity 1;
// Appuyer sur previous = Slide 2 => opacity 0 = Slide 1 => opacity 1;
let i = 0; // variable i pour savoir quelle slide 
let k = slides.length ; // nombre de slide
let l = 1; // variable l 




// next.addEventListener('click', function() { // avancer d'une slide 
   //  i++; // i + 1
      // if ( i < slides.length) { // dans cas où i est inférieur au nombre de slide 
    //let j = i + 1; 
    //let currentSlide = document.querySelector("#slide" + i); // exemple slide 1 
    //let currentDot = document.querySelector("#dot" + i); // exemple dot1
    //currentSlide.style.opacity = "0"; // rendre invisible 
    //currentDot.style.borderBottom = "3px solid white"; // blanc
    //let futureSlide = document.querySelector("#slide" + j); // slide 2
    //let futuretDot = document.querySelector("#dot" + j); // dot 2
    //futureSlide.style.opacity = "1"; // visible
    //futuretDot.style.borderBottom = "3px solid red";} //rouge
    //else { // cas unique pour la dernier slide affiché 
    //let lastSlide = document.querySelector("#slide" + k); // dernière slide 
    //let lastDot = document.querySelector("#dot" + k); // dernier dot 
    //lastSlide.style.opacity = "0"; // invisible 
    //lastDot.style.borderBottom = "3px solid white"; // blanc
    //let fristSlide = document.querySelector("#slide" + l); // première slide 
    //let firstDot = document.querySelector("#dot" + l); // premier dot 
    //fristSlide.style.opacity = "1"; // visible 
    //firstDot.style.borderBottom = "3px solid red"; //rouge
    //i = i - k;}
    //})

//previous.addEventListener('click', function() { // reculer d'une slide 
  //  if (i <= 1){ // cas unique de la première slide ( pour créer une boucle dans affichage des slides)
  //  let lastSlide = document.querySelector("#slide" + k); // dernière slide
  //  let lastDot = document.querySelector("#dot" + k); // dernier dot 
  //  lastSlide.style.opacity = "1"; // visible 
  //  lastDot.style.borderBottom = "3px solid red"; // blanc
   // let fristSlide = document.querySelector("#slide" + l); // première slide 
   // let firstDot = document.querySelector("#dot" + l); // premier dot 
   // fristSlide.style.opacity = "0"; // invisible 
   // firstDot.style.borderBottom = "3px solid white"; //rouge
   // i = k;} // donc i = nombre de slide 
   // else{
   // let h = i - 1; 
   // let currentSlide = document.querySelector("#slide" + i); //exemple slide 2
   // let currentDot = document.querySelector("#dot" + i); // exemple dot 2
   // currentSlide.style.opacity = "0"; // invisible 
   // currentDot.style.borderBottom = "3px solid white"; // blanc
   // let futureSlide = document.querySelector("#slide" + h); // slide 1 
   // let futuretDot = document.querySelector("#dot" + h); // dot 1
   // futureSlide.style.opacity = "1"; // visible 
   // futuretDot.style.borderBottom = "3px solid red"; //rouge
   // i--;} // i baisse de 1
// })

// automatisation 

let textanimation = setInterval(textanim, 8000);
let anim2Boucle = setInterval(animslide2, 4000);
let slideranim = setInterval(slider, 4000); 
// animation slide 1 

// Variable //

let w1 = document.querySelector('.w1');
let elcome = document.querySelector('.elcome');
let a = document.querySelector('.a');
let w2 = document.querySelector('.w2');
let esome = document.querySelector('.esome');
let w3 = document.querySelector('.w3');
let orld = document.querySelector('.orld');
let to = document.querySelector('.to');
let my = document.querySelector('.my');
let djwcadre = document.querySelector('.djwcadre');
let doriquejeanwilly = document.querySelector('.doriquejeanwilly');
let marketingdeveloppement = document.querySelector('.marketingdeveloppement');
textanim();



// texte button //
//start.addEventListener ('click', textanim());

// fontcion animation //
function textanim () {
    animaW();
    setTimeout(() => {
        animaOthersletters()
    }, 750);
    setTimeout(() => {
        animaToandMy()
    }, 1150);
   setTimeout(() => {
     reset()
    }, 4000);
}


function animaW (){
    w1.style.opacity = "1";
    w1.style.transform = "translateX(0)";
    w2.style.opacity = "1";
    w2.style.transform = "translateX(0)";
    w3.style.opacity = "1";
    w3.style.transform = "translateX(0)";
}    

function animaOthersletters (){
    elcome.style.opacity = "1";
    elcome.style.transform = "translateX(0)";
    a.style.opacity = "1";
    a.style.transform = "translateX(0)";
    esome.style.opacity = "1";
    esome.style.transform = "translateX(0)";
    orld.style.opacity = "1";
    orld.style.transform = "translateX(0)";
} 

function animaToandMy(){
    to.style.opacity = "1";
    to.style.transform = "translateY(0)";
    my.style.opacity = "1";
    my.style.transform = "translateY(0)";
    clickToScroll.style.opacity = "1";
}

function reset() {
    w1.style.opacity = "0";
    w1.style.transform = "translateX(-50%)";
    w2.style.opacity = "0";
    w2.style.transform = "translateX(50%)";
    w3.style.opacity = "0";
    w3.style.transform = "translateX(-50%)";
    elcome.style.opacity = "0";
    elcome.style.transform = "translateX(-35%)";
    a.style.opacity = "0";
    a.style.transform = "translateX(35%)";
    esome.style.opacity = "0";
    esome.style.transform = "translateX(-35%)";
    orld.style.opacity = "0";
    orld.style.transform = "translateX(-35%)";
    to.style.opacity = "0";
    to.style.transform = "translateY(50%)";
    my.style.opacity = "0";
    my.style.transform = "translateY(-50%)";
}

function animslide2 (){
    djwcadrefunction();
    setTimeout(() => {
        djwtext1function()
    }, 1500);
    setTimeout(() => {
        djwtext2function()
    }, 2500);
   setTimeout(() => {
     resetdjwfunction()
    }, 4000);
}


function djwcadrefunction (){
    djwcadre.style.opacity = "1";
    djwcadre.style.transform = "scale(1.2)";
    clickToScrollText.style.color = "white";
}

function djwtext1function (){
    doriquejeanwilly.style.opacity = "1";
    doriquejeanwilly.style.transform = "scale(1.2)";
}
function djwtext2function (){
    marketingdeveloppement.style.opacity = "1";
    marketingdeveloppement.style.transform = "scale(1.2)";
}

function resetdjwfunction() {
    doriquejeanwilly.style.opacity = "0";
    doriquejeanwilly.style.transform = "scale(0.6)";
    marketingdeveloppement.style.opacity = "0";
    marketingdeveloppement.style.transform = "scale(0.6)";
    clickToScrollText.style.color = "black";
} 

function slider() {
    i++; // i + 1
    if ( i < slides.length) { // dans cas où i est inférieur au nombre de slide 
    let j = i + 1; 
    let currentSlide = document.querySelector("#slide" + i); // exemple slide 1 
    // let currentDot = document.querySelector("#dot" + i); // exemple dot1
    currentSlide.style.opacity = "0";
    currentSlide.style.transform = "scale(1)"; // rendre invisible 
    // currentDot.style.borderBottom = "3px solid white"; // blanc
    let futureSlide = document.querySelector("#slide" + j); // slide 2
    // let futuretDot = document.querySelector("#dot" + j); // dot 2
    futureSlide.style.opacity = "1";
    futureSlide.style.transform = "scale(1)";
    currentSlide.style.transform = "scale(1.2)"; } // visible
    // futuretDot.style.borderBottom = "3px solid red";} //rouge
    else { // cas unique pour la dernier slide affiché 
    let lastSlide = document.querySelector("#slide" + k); // dernière slide 
    // let lastDot = document.querySelector("#dot" + k); // dernier dot 
    lastSlide.style.opacity = "0";
    lastSlide.style.transform = "scale(1)"; // invisible 
    // lastDot.style.borderBottom = "3px solid white"; // blanc
    let firstSlide = document.querySelector("#slide" + l); // première slide 
    // let firstDot = document.querySelector("#dot" + l); // premier dot 
    firstSlide.style.opacity = "1"; // visible
    firstSlide.style.transform = "scale(1)";
    lastSlide.style.transform = "scale(1.2)";  
    // firstDot.style.borderBottom = "3px solid red"; //rouge
    i = i - k;}
} 


// navigation dot active //

let dotlink = document.querySelectorAll(".textlink");
let textlink = document.querySelectorAll(".textnav");
let textlinkvisible = document.querySelectorAll("#textnav");
let verticalNavBar = document.querySelector(".navigation");
let body = document.querySelector("body");
let bodyHeight = body.offsetHeight;
let demiBodyheight = bodyHeight/2;
let sections = document.querySelectorAll("section");
let documentHeight = bodyHeight * sections.length;

window.addEventListener("scroll", function(){
for (let i = 0; i < sections.length; i++) {
    let t = i + 1 ;
    let sectionTop = sections[i].offsetTop;
    let sectionBottom = sectionTop + sections[i].offsetHeight;
    let sectionMiddle = sectionBottom / 2;
    let sectionTopNext = sections[i].nextElementSibling.offsetTop;
    let sectionBottomNext = sectionTopNext + sections[i].nextElementSibling.offsetHeight;
    let sectionMiddleNext = sectionBottomNext / 2;
    let section1Bottom = sections[0].offsetTop + sections[0].offsetHeight;
    let sectionMiddle1 = section1Bottom / 2 ;
            if(pageYOffset < sectionMiddle1) {
                verticalNavBar.style.opacity = "0";
            } else if  ( pageYOffset >= sectionMiddle1 && pageYOffset >= sectionTop && pageYOffset <= sectionBottom) {
                verticalNavBar.style.opacity = "1";
                for (let v = 0; v < textlink.length; v++) {
                    textlink[v].style.opacity = "0";
                }
                dotlink[i].previousElementSibling.style.opacity = "1";
                dotlink[i].style.backgroundColor = "black";
            }
        }
   })  



for (let w = 0; w < dotlink.length; w++) {
    dotlink[w].addEventListener("click", function(){
        for (let v = 0; v < textlink.length; v++) {
            textlink[v].style.opacity = "0";
        }
        this.previousElementSibling.style.opacity = "1";
        this.style.backgroundColor = "black";
    });   
}

/* window.addEventListener("scroll", function(){
    if(pageYOffset < demiBodyheight) {
        verticalNavBar.style.opacity = "0";
    }
    if(pageYOffset >= demiBodyheight) {
        for (let v = 0; v < textlink.length; v++) {
            textlink[v].style.opacity = "0";
        }
        document.querySelector("#textnav2").style.opacity = "1";
        verticalNavBar.style.opacity = "1";
    }
    if(pageYOffset >= 1175) {
        for (let v = 0; v < textlink.length; v++) {
            textlink[v].style.opacity = "0";
        }
        document.querySelector("#textnav3").style.opacity = "1";
    }
    if(pageYOffset >= 2074) {
        for (let v = 0; v < textlink.length; v++) {
            textlink[v].style.opacity = "0";
        }
        document.querySelector("#textnav4").style.opacity = "1";
    }
    if(pageYOffset >= 3000) {
        for (let v = 0; v < textlink.length; v++) {
            textlink[v].style.opacity = "0";
        }
        document.querySelector("#textnav5").style.opacity = "1";
    }
}) */


// fonction flip box 

let buttonsflip = document.querySelectorAll(".buttonflip");
let buttonsflipreverse = document.querySelectorAll(".buttonflipreverse");

for (let c = 0; c < buttonsflip.length; c++) {
    buttonsflip[c].addEventListener('click', function(){
        this.parentElement.parentElement.classList.add("flip-box_flip");
        this.parentElement.parentElement.classList.remove("flip-box_flipreverse");
    })
}

for (let c = 0; c < buttonsflipreverse.length; c++) {
    buttonsflipreverse[c].addEventListener('click', function(){
        this.parentElement.parentElement.classList.add("flip-box_flipreverse");
        this.parentElement.parentElement.classList.remove("flip-box_flip");
    })
}

document.querySelector(".page3").addEventListener('mouseover',function(){
    document.querySelector(".rate").style.transform = "scale(1)";
})




















