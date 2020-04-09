
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
