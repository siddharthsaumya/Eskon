
//***********************************************************************
$(window).scroll(function() {
    if ($(window).scrollTop() > 30) {
        $('#nav-bar').addClass('floatingNav');
    } else {
        $('#nav-bar').removeClass('floatingNav');
    }
});

//***********************************************************************




$(document).ready(function(){
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
	});
});

//*******************************

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  	$('#nav-icon2').toggleClass('open');
}


//***********************************************************************


var thehours = new Date().getHours();
	var themessage;
	var morning = ('Good morning');
	var afternoon = ('Good afternoon');
	var evening = ('Good evening');

	if (thehours >= 0 && thehours < 12) {
		themessage = morning;

	} else if (thehours >= 12 && thehours < 16) {
		themessage = afternoon;

	} else if (thehours >= 16 && thehours < 24) {
		themessage = evening;
	}

	$('#greeting').prepend(themessage);


//***********************************************************************


$( "#person1 .qualification" ).mouseenter(function( event ) {
  $("#person1 .qualification").text("FIE, FIV")
});

$( "#person1 .qualification" ).mouseleave(function( event ) {
  $("#person1 .qualification").text("Cheif Consultant")
});
//********


$( "#person2 .qualification" ).mouseenter(function( event ) {
  $("#person2 .qualification").text("B.Arch")
});

$( "#person2 .qualification" ).mouseleave(function( event ) {
  $("#person2 .qualification").text("Architect")
});
//*********************************************************************




var slideIndex = 0;
showSlides();
var slides,dots,timer;


function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    //put the timeout in the timer variable
    timer = setTimeout(showSlides, 4000); // Change image every 8 seconds
}

function plusSlides(position) {
    //clear/stop the timer
    clearTimeout(timer);
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    //create a new timer
    timer = setTimeout(showSlides, 4000);
}


function currentSlide(index) {
    //clear/stop the timer
    clearTimeout(timer);
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    //set the slideIndex with the index of the function
    slideIndex = index;
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";
    dots[index-1].className += " active";
    //create a new timer
    timer = setTimeout(showSlides, 4000);
}


//********************************************************************
