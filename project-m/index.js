

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
