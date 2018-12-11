(function($){
  $.fn.slider = function(settings) {

  	var options = $.extend({


  	  	images: ' ',
  		  buttonNext: ' ',
        buttonPrev: ' ',
        auto: false


  	},settings);
  	console.log(options);


         var images = $(options.images);
  		   var i = 0;
         var isRun = false;


	      $(options.buttonPrev).on('click',function() {


	         if(isRun){
	         	return;
	         }

	         isRun = true;

	         images.eq(i).css({
	        	left: 0,
	        	top: 0
	        }).animate({
	      	   width: 0
	           }, 1000);
	       i--;

	       if (i < 0) {
	         i = images.length - 1;
	       }

	      images.eq(i).css({
	            bottom: 0,
	            right: 0,
	            top: 'auto',
	            left: 'auto'
	        }).animate({
	      	      width: '100%'
	           }, 1000, function(){
	      	        isRun = false;
	              });

	    });

      $(options.buttonNext).on('click',function() {
            images.eq(i).css({
               bottom: 0,
               right: 0,
               top: 'auto',
               left: 'auto'
             }).animate({
      	           width: 0
                }, 300);
                i++;

         if (i >= images.length) {
             i = 0;
         }
          images.eq(i).css({
              top: 0,
              left: 0
          })
          .animate({
      	    width: '100%'
          }, 300);
      })





  return this;

  };
})(jQuery);
