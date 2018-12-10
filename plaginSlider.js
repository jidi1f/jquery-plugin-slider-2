(function($){
  $.fn.slider = function(settings) {
  	
  	var options = $.extend({
  		

  		images: ' ',
  		buttonNext: ' ',
        buttonPrev: ' ',
        auto: false
       
        
  	},settings);
  	console.log(options);
    
     
   return this.each(function(){
  		
         
  		 this.images = $(options.images);
  		
         var i = 0;
         var isRun = false;
         console.log(this);
        
        this.prev = function() {
         
         alert("1");
         if(isRun){
         	return;
         } 

         isRun = true; 

     options.images.eq(i).css({
        	left: 0,
        	top: 0
        }).animate({
      	width: 0
      }, 500);
       i--;
     
       if (i < 0) {
        i = slider.images.length - 1;
       }
       
      options.images.eq(i) .css({
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


     document.querySelector(options.buttonPrev).onclick = slider.prev;
    
    
  	})
   
 

  };
})(jQuery); 