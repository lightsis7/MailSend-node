<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>GET POST exercise</title>
	
	<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>


	<script type="text/javascript">

	$(document).ready(function() {
		
		$("input[type=email]").blur(function(){
			  var email = $(this).val();
			  if( email == '' || email == 'undefined') return;
			  if(! email_check(email) ) {
				$(".result-email").text('이메일 형식으로 적어주세요');
				$(this).focus();
				return false;
			  }else {
				$(".result-email").text('');
			  }
			});
		
	});

	function email_check( email ) {    
		var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		return (email != '' && email != 'undefined' && regex.test(email)); 
	}

	function sendmail(){

		//alert("Thank you for the contact us, We will send you brief information soon");
		var region = $('#region').val();
		var type = $('#type').val();
		var name = $('#name').val();
		var email = $('#email').val();
		
		/*
		var frm = document.emailsendfrm ;
		frm.action = "/real_estate/sendmail.do";
		frm.method = "post"; 
		frm.submit();
		*/
		//Ajax POST Method TEST
		
                $.ajax({
                    url: '/api/sendmail',
                      dataType: 'text',
                      type: 'POST',
                      data: {"region" : region,
							 "type" : type,
							 "name" : name,
							 "email" : email
							}
                  
                  }).done(function(result) {          //성공했을 때 함수 인자 값으로 결과 값 나옴
				  alert(result);
				 $('#post_output').text(result);
					  });
					  
	}

	</script>

  </head>
  <body>

    <form  >
      <h1>Where do you want to live?</h1>
	   <h2>Just fill out below ~, Our Consultants find you soon</h2>
      지역 : <input type="text" id="region" name="region" placeholder='ex) 종로구 , 서초동' /><br>
      <br>
      주거형태 : <input type="text" id="type" name="type" placeholder='ex) 아파트 , 빌라' /><br>
	  
	  <br>
	  
	  이름 : <input type="text" id="name" name="name" placeholder='이름' /><br>
	   <br>
	  이메일 주소 : <input type="email" placeholder="email" name="email" id="email" maxlength="30" /><br>
      	<div id="error_mail" class="result-email result-check"></div> <br>
		
		<button id="button1" onclick="sendmail();">send</button>
	  <!--<input type="submit" name="submit">-->
	  <br>
	  <p id ='post_output'>
    </form>
  </body>
</html>