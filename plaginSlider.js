(function($){
  $.fn.slider = function(settings) {
  	
  	var options = $.extend({

  		images: ' ',
  		buttonNext: ' ',
        buttonPrev: ' ',
        auto: false
       
        
  	},settings);
  	console.log(options);
    
     
  	this.each(function(){
  		
         
  		 this.images = $(options.images);
  		 var slider = this;
         var i = 0;
         var isRun = false;
         console.log(this);
        
        this.prev = function() {
         
          alert("1");
         if(isRun){
         	return;
         } 

         isRun = true; 

      slider.images.eq(i).css({
        	left: 0,
        	top: 0
        }).animate({
      	width: 0
      }, 500);
       i--;
     
       if (i < 0) {
        i = slider.images.length - 1;
       }
       
       slider.images.eq(i) .css({
            bottom: 0,
            right: 0,
            top: 'auto',
            left: 'auto' 
        }).animate({
      	width: '100%'
      }, 500, function(){
      	isRun = false;
      });
    };


     document.querySelector(slider.buttonPrev).onclick = slider.prev;
    
      if(slider.auto) {
      setInterval(slider.prev, slider.rate);
    }
  	})
     console.log( document.querySelector(slider.buttonPrev));
  	return this;

  };
})(jQuery); 