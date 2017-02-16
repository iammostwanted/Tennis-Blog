          // PAGE DOWNLOADING 

var myVar;

function loadFunction() {

	$( function() {
      var progressbar = $( "#progressbar" ),
        progressLabel = $( ".progress-label" );
   
      progressbar.progressbar({
        value: false,
        change: function() {
          progressLabel.text( progressbar.progressbar( "value" ) + "%" );
        },
        complete: function() {
          progressLabel.text( "Complete!" );
        }
      });
   
      function progress() {
        var val = progressbar.progressbar( "value" ) || 0;
   
        progressbar.progressbar( "value", val + 8 );
   
        if ( val < 99 ) {
          setTimeout( progress, 80 );
        }
      }
   
      setTimeout( progress, 600 );
  } );


    myVar = setTimeout(showPage, 2500);
}

function showPage() {	
	// document.getElementById("loader").style.display = "none";	
	document.getElementById("loading-page").style.display = "none";
	document.getElementById("header").style.display = "block";
	document.getElementById("main").style.display = "block";
	document.getElementById("footer").style.display = "block";
}


          // THIS IS SCROLL FIXED

$(window).scroll(function(){
	if ($(this).scrollTop() > 135) {
          $('#second').addClass('head-second-row');
	          $('#second menu li a').removeClass('active')
	          $('#second menu li a').addClass('change-color');
	          $('#active').addClass('change-color-active');	          
  		} else {
	        $('#second').removeClass('head-second-row');
	        $('#second menu ul li a').removeClass('change-color');
	        $('#active').removeClass('change-color-active');
	        $('#active').addClass('active');
 		}
});


// THIS IS SHAKING EFFECT

function periodical() {
  $('#shaker').effect('shake', { times:3 }, 200);
}
$(document).ready(function() {
  $('#shaker').hide().css('display','').fadeIn(600);
  var shake = setInterval(periodical, 7500);
  
  /* updated: click clear */
  $('#shaker').click(function() {
    clearInterval(shake);
  })  
});
