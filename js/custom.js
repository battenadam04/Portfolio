


$(document).ready(function (){
	
	
	

   /* this is the code for the slideshow 
	   
	   $(".Prev").css("color","#FC1501");
 
  //ensure tables underneath top table showing in web applications are still hidden even though they are hidden in css to ensure linear transition 
  $("#tableApps table:eq(0)").fadeToggle( "slow", "linear" );
  $("#tableApps table:eq(1)").fadeToggle( "slow", "linear" );
  $("#tableApps table:eq(2)").fadeToggle( "slow", "linear" );
  
  //when next button in web applications is clicked go to next application image
 $(document).on('click','.Next',function(){
	
	 $(".Prev").on("click");
	 
	 $(".Prev").css("color","");
	 var val=$(this).parent().prev("td").find("button").attr("id");
	 //alert(val);
	 if(val == 1)
	 {
		  $(".Next").off("click");
		  $(".Next").css("color","#FC1501");
		  
	 }
	 
	 if(val >= 1)
	 {
	  $(this).closest('table').fadeToggle( "slow", "linear" );
	  $(this).closest('table').prev('.overlap').fadeToggle( "slow", "linear" );
	 }
 
 });
 
 
  //when prev button in web applications is clicked go to prev application image
 $(document).on('click','.Prev',function(){
	 
	  $(".Next").on("click");
	  $(".Next").css("color","");
	  var prevval=$(this).parent().next("td").find("button").attr("id");  

     
	 if(prevval == 2)
	 {
		  $(".Prev").off("click");
		 
		  $(".Next").on("click");
		  $(".Prev").css("color","#FC1501");
		  
		  
		 //$("table").prev("table").fadeToggle( "slow", "linear" );
	 }

	
	   if(prevval <= 2)
	   {
	 	 
	 $(this).closest('table').fadeToggle( "slow", "linear" );
	   $(this).closest('table').next('.overlap').fadeToggle( "slow", "linear" );
	  }
	  
	  else{
		 // $(".Prev").css("color","#FC1501");
		  
	  }
	 	 
 });*/


/*----------JS for snav scolling to specific div-------------*/



$('a[href*=#]:not([href=#])').click(function() {
	 $( "#drop" ).prop( "checked", false);
	 
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});




 $(".app-info").hide();
 

/*--------------------Following code is for details button for further details on applications----------------------*/
$(".Details").click(function(){
	
	 document.getElementById("overlay").style.display = "block";

	 var id = $(this).prop('id');
    
	if (id == "0")
	{
            $(".flex-container").animate({
            right: '-250px',
            opacity: '0'
            
            }, 500, function() {
           $(this).hide();
           });
           
            $(".app-info:eq(0)").animate({
            right: '250px',
            opacity: '1'
            
            
            }, 500, function() {
           $(this).show('slow'); 
           });
 
           
   } 
   
   else if(id == "1")
	{
            $(".flex-container").animate({
            right: '-250px',
            opacity: '0'
            
            }, 500, function() {
           $(this).hide(); 
           });
    
    
            $(".app-info:eq(1)").animate({
            right: '250px',
            opacity: '1'
            
            }, 500, function() {
           $(this).show('slow'); 
     
       });
     
   } 
   
   else if(id == "2")
	{
            $(".flex-container").animate({
            right: '-250px',
            opacity: '0'
            
            }, 500, function() {
           $(this).hide(); // applies display: none; to the element .panel
           });
    
    
           $(".app-info:eq(2)").animate({
            right: '250px',
            opacity: '1'
            
            }, 500, function() {
           $(this).show('slow'); 
           });
     
   } 
   
    else if(id == "3")
	{
            $(".flex-container").animate({
            right: '-250px',
            opacity: '0'
            
            }, 500, function() {
           $(this).hide(); // applies display: none; to the element .panel
           });
    
    
           $(".app-info:eq(3)").animate({
            right: '250px',
            opacity: '1'
            
            }, 500, function() {
           $(this).show('slow'); 
           });
       
   }  
    else if(id == "4")
	{
            $(".flex-container").animate({
            right: '-250px',
            opacity: '0'
            
            }, 500, function() {
           $(this).hide(); // applies display: none; to the element .panel
           });
    
    
           $(".app-info:eq(4)").animate({
            right: '250px',
            opacity: '1'
            
            }, 500, function() {
           $(this).show('slow'); 
           });
       
   }   
   
});  


/*--------------------Following code is for back button in WebApps----------------------*/
  $(".Back").click(function(){
	  
	  function off() {
    document.getElementById("overlay").style.display = "none";
}
	  
	  var id = $(this).attr('id');

	if (id == "4")
	{
            $(".app-info").animate({
            right: '-250px',
            opacity: '0'
            
            }, 500, function() {
           $(this).hide('slow'); 
           });
    
           $(".flex-container").animate({
            left:'0',
            opacity: '1'
            
            }, 500, function() {
           $(this).show('slow'); 
           });
           off();
       
   } 
   
   else if(id == "5")
	{
            $(".app-info").animate({
            right: '-250px',
            opacity: '0'
            
            }, 500, function() {
           $(this).hide('slow'); 
           });
    
    
           $(".flex-container").animate({
            left:'0',
            opacity: '1'
            
            }, 500, function() {
           $(this).show('slow'); 
           });
           off();
   } 
   
   else if(id == "6")
	{
            $(".app-info").animate({
            right: '250px',
            opacity: '0'
            
            }, 500, function() {
           $(this).hide('slow'); 
           });
    
    
          $(".flex-container").animate({
            left:'0',
            opacity: '1'
            
            }, 500, function() {
           $(this).show('slow');  
           });
           off();
   } 
   
    else if(id == "7")
	{
            $(".app-info").animate({
            right: '250px',
            opacity: '0'
            
            }, 500, function() {
           $(this).hide('slow'); 
           });
    
    
          $(".flex-container").animate({
            left:'0',
            opacity: '1'
            
            }, 500, function() {
           $(this).show('slow');  
           });
           off();
   } 
   
      else if(id == "8")
	{
            $(".app-info").animate({
            right: '250px',
            opacity: '0'
            
            }, 500, function() {
           $(this).hide('slow'); 
           });
    
    
          $(".flex-container").animate({
            left:'0',
            opacity: '1'
            
            }, 500, function() {
           $(this).show('slow');  
           });
           off();
   } 
	    
	  });
	

    $("#Menu li a").click(function(){
	    	
	   $( "#drop" ).prop( "checked", false );
  
   });
  
  
    $(".toggle").click(function(){
	    	
	    $( ".toggle" ).prop( "checked", true );
  
   });
  

});//close the document.ready function


 function off() {
    document.getElementById("overlay").style.display = "none";
}

