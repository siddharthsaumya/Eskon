
var $table = $('.scroll'),
    $bodyCells = $table.find('tbody tr:first').children(),
    colWidth;


$(window).resize(function() {

    colWidth = $bodyCells.map(function() {
        return $(this).width();
    }).get();


    $table.find('thead .tr-spcl').children().each(function(i, v) {
        $(v).width(colWidth[i]);
    });
}).resize();
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
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
//*********************************************************************
