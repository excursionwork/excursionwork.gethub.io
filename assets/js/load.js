<<<<<<< HEAD
  var blocOne="<div class='col-sm-6 col-lg-3 feature-box'>"
							+"<div class='feature-box-inner'>"
							+"<div class='feature-box-icon'>"
							+"<i class='fa fa-lightbulb-o'></i>"
							+"<h3>Marketing Automation</h3></div>"
							+"<p >We are in total compliance with the CAN-SPAM ACT and we only"
							+"provide email addresses of key decision makers who have" 
							+"specifically opted-in to receive email marketing materials.</p></div></div>";
							
				var blocTwo="<div class='col-sm-6 col-lg-3 feature-box'>"
							+"<div class='feature-box-inner'>"
							+"<div class='feature-box-icon'>"
							+"<i class='fa fa-history'></i>"
							+"<h3>Our History</h3></div>"
							+"<p >Our founders have been in business from the time people would "
							+"dial-up via AOL and get excited when they see a message saying:<br> 'You’ve got mail!'</p></div></div>";		

				var blocThree="<div class='col-sm-6 col-lg-3 feature-box'>"
							+"<div class='feature-box-inner'>"
							+"<div class='feature-box-icon'>"
							+"<i class='fa fa-paper-plane'></i>"
							+"<h3>Email Marketing</h3>"
							+"</div>"
							+"<p >We do not run a fly-by-night operation. "
							+"Our highly competent staff will patiently listen to your needs and will only make "
							+"recommendations after they have a clear vision of your email marketing strategy.</p>"
							+"</div></div>";		

				var blocFour="<div class='col-sm-6 col-lg-3 feature-box'>"
							+"<div class='feature-box-inner'>"
							+"<div class='feature-box-icon'>"
							+"<i class='fa fa-newspaper-o'></i>"
							+"<h3>Build Campaigns</h3>"
							+"</div>"
							+"<p s>"
							+"Send personalized, gergeous, and automated email marketing campaigns "
							+"by displaying targeted content for different audiences based on what you know about them.</p></div></div>";		
            var cpt=0;
			$("#contentWhatWeDo").empty();
			$("#contentWhatWeDo").html(blocOne);
			
            $("#next").click(function(e){
			  cpt++;
			  console.log(cpt);
			  switch(cpt){
				case 1:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocTwo);
				 break;
				case 2:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocThree);				
				 break;
				case 3:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocFour);					
				 break;
				default:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocOne);	
				 cpt=0;
				 break;	
					
			  }
			  
			  });
			  
            $("#previous").click(function(e){
			  cpt--;
			  console.log(cpt);
			  switch(cpt){
				case 1:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocTwo);
				 break;
				case 2:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocThree);				
				 break;
				case 3:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocFour);					
				 break;
				default:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocOne);	
				 cpt=3;
				 break;	
					
			  }			  
			  
			  
			});		

		   $("#send").click(function(e){
		       var name=$("#contact-name").val();
			   var email=$("#contact-email").val();
			   var message=$("#contact-message").val();
		        if(name !="" && email !="" && message !="" && isEmail(email)){
				 $.post("http://formspree.io/contact@excursionwork.com","email="+email+"&message="+message,function( data ) {
					   swal({
						  position: 'center',
						  type: 'success',
						  title: 'Thank You\n\rYour form submission has been received.',
						  showConfirmButton: false,
						  timer: 2500
						})	
					
						name="";
						$("#contact-name").val("");
						email="";
						$("#contact-email").val("");
						message="";
						$("#contact-message").val("");	
				 });	
					
			}else{
				   swal({
					  position: 'center',
					  type: 'error',
					  title: 'Please !! check your from.',
					  showConfirmButton: false,
					  timer: 2500
					})				
			}	

					
			});

			$("#privacy").animatedModal({ 
				color:'#6d7c7d',
				animatedIn:'bounceInUp',
				animatedOut:'bounceOutDown',
			});
			
		   function isEmail(myVar){
			 
			 var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

			 return regEmail.test(myVar);
		   }			
=======
  var blocOne="<div class='col-sm-6 col-lg-3 feature-box'>"
							+"<div class='feature-box-inner'>"
							+"<div class='feature-box-icon'>"
							+"<i class='fa fa-lightbulb-o'></i>"
							+"<h3>Marketing Automation</h3></div>"
							+"<p >We are in total compliance with the CAN-SPAM ACT and we only"
							+"provide email addresses of key decision makers who have" 
							+"specifically opted-in to receive email marketing materials.</p></div></div>";
							
				var blocTwo="<div class='col-sm-6 col-lg-3 feature-box'>"
							+"<div class='feature-box-inner'>"
							+"<div class='feature-box-icon'>"
							+"<i class='fa fa-history'></i>"
							+"<h3>Our History</h3></div>"
							+"<p >Our founders have been in business from the time people would "
							+"dial-up via AOL and get excited when they see a message saying:<br> 'You’ve got mail!'</p></div></div>";		

				var blocThree="<div class='col-sm-6 col-lg-3 feature-box'>"
							+"<div class='feature-box-inner'>"
							+"<div class='feature-box-icon'>"
							+"<i class='fa fa-paper-plane'></i>"
							+"<h3>Email Marketing</h3>"
							+"</div>"
							+"<p >We do not run a fly-by-night operation. "
							+"Our highly competent staff will patiently listen to your needs and will only make "
							+"recommendations after they have a clear vision of your email marketing strategy.</p>"
							+"</div></div>";		

				var blocFour="<div class='col-sm-6 col-lg-3 feature-box'>"
							+"<div class='feature-box-inner'>"
							+"<div class='feature-box-icon'>"
							+"<i class='fa fa-newspaper-o'></i>"
							+"<h3>Build Campaigns</h3>"
							+"</div>"
							+"<p s>"
							+"Send personalized, gergeous, and automated email marketing campaigns "
							+"by displaying targeted content for different audiences based on what you know about them.</p></div></div>";		
            var cpt=0;
			$("#contentWhatWeDo").empty();
			$("#contentWhatWeDo").html(blocOne);
			
            $("#next").click(function(e){
			  cpt++;
			  console.log(cpt);
			  switch(cpt){
				case 1:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocTwo);
				 break;
				case 2:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocThree);				
				 break;
				case 3:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocFour);					
				 break;
				default:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocOne);	
				 cpt=0;
				 break;	
					
			  }
			  
			  });
			  
            $("#previous").click(function(e){
			  cpt--;
			  console.log(cpt);
			  switch(cpt){
				case 1:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocTwo);
				 break;
				case 2:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocThree);				
				 break;
				case 3:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocFour);					
				 break;
				default:
				 $("#contentWhatWeDo").empty();
				 $("#contentWhatWeDo").html(blocOne);	
				 cpt=3;
				 break;	
					
			  }			  
			  
			  
			});		

		   $("#send").click(function(e){
		       var name=$("#contact-name").val();
			   var email=$("#contact-email").val();
			   var message=$("#contact-message").val();
		        if(name !="" && email !="" && message !="" && isEmail(email)){
				 $.post("http://formspree.io/contact@excursionwork.com","email="+email+"&message="+message,function( data ) {
					   swal({
						  position: 'center',
						  type: 'success',
						  title: 'Thank You\n\rYour form submission has been received.',
						  showConfirmButton: false,
						  timer: 2500
						})	
					
						name="";
						$("#contact-name").val("");
						email="";
						$("#contact-email").val("");
						message="";
						$("#contact-message").val("");	
				 });	
					
			}else{
				   swal({
					  position: 'center',
					  type: 'error',
					  title: 'Please !! check your from.',
					  showConfirmButton: false,
					  timer: 2500
					})				
			}	

					
			});

			$("#privacy").animatedModal({ 
				color:'#6d7c7d',
				animatedIn:'bounceInUp',
				animatedOut:'bounceOutDown',
			});
			
		   function isEmail(myVar){
			 
			 var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

			 return regEmail.test(myVar);
		   }			
>>>>>>> 270509a16b971403e445b0a3efe33f0268801bb4
