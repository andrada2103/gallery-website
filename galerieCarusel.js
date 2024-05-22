var slideIndex=0;

function showSlides(){
    var slides=document.getElementsByClassName("slide")
    for(var i=0; i<slides.length; i++){
        slides[i].style.transform="translateX(-"+slideIndex*100+"%)";
    }
}

function next(){
    var slides=document.getElementsByClassName("slide")
    if(slideIndex < slides.length -1){
        slideIndex++
    } else{
        slideIndex=0
    }
    showSlides()
}

function previous(){
    var slides=document.getElementsByClassName("slide")
    if(slideIndex>0){
        slideIndex--
    }
    else{
        slideIndex=slides.length-1
    }
    showSlides()
}
showSlides()

