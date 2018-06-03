$('document').ready(function()
		{
	
			/*the following code is for the update form, allowing user to update their weight*/
			
			$('#contactForm').submit(function(event)
			{
			 event.preventDefault();
				var formData = new FormData($(this)[0]);
			
                 $.ajax({
					type: "POST",
					url: "php/processForm.php",
					data: formData,
					async: false,
					success: function(data)
					{
			          
						var newdata =$.parseJSON(data);
					
						if(newdata == "Success")
						{	
						
					
							$("#submitMsg").html(newdata);
							$("#submitMsg").css({"background-color":"red","color":"white"});
				            
				                setInterval(function()
				                {   
					               $("#submitMsg").html("Send"); 
					               $("#submitMsg").css({"background-color":"","color":""});   
				                }, 3000);
				               
					        $('#contactForm')[0].reset();
					        $(".error").empty();
						}
						
						else
					{
					$(".error").empty();
				 
				 var i=0;
			
				 for(i=0; i < newdata.length; i++)
				 {
			  
				 // $(".error").append("<p>"+ newdata[i] +"</p>");
				 
				     if
					  (newdata[i] === "Name is required")
					  {
						  
						document.getElementsByName('name')[0].placeholder=newdata[i];
						$("#name").toggleClass("red-placeholder");
						  
					  }
					  
					   if
					  (newdata[i] === "Email is required")
					  {
						  
						document.getElementsByName('email')[0].placeholder=newdata[i];
						$("#email").toggleClass("red-placeholder");
						  
					  }
					  
					   if
					  (newdata[i] === "Purpose is required")
					  {
						  
						document.getElementsByName('purpose')[0].placeholder=newdata[i];
						$("#subject").toggleClass("red-placeholder");
						  
					  }
					  
					   if
					  (newdata[i] === "Message is required")
					  {
						  
						document.getElementsByName('message')[0].placeholder=newdata[i];
						$("#message").toggleClass("red-placeholder");
						  
					  }
					
				
					}
					}
						
							
				},
				
				cache: false,
				contentType: false,
				processData: false			
		});
			});
			
		return false;
	});
	