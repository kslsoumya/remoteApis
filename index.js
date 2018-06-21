
let faceBookToken;
$(document).ready(()=>{

	faceBookToken =prompt('Enter your Access Token')
	if(faceBookToken =="null"|| faceBookToken =="") {
		alert("No token found")
	} else {
		getAllDetails()
	}
	})

	let  getAllDetails =()=>{

		$.ajax({

			type:'GET',
			dataType:'json',
			url:'https://graph.facebook.com/me?fields=name,birthday,picture,cover&access_token=' + faceBookToken,
			async:true,
			success:(response)=>{

			$('#dataSection').css("display","block") 
			console.log(response)
			$('#userName').append(response.name)
			$('#birthDate').append(response.birthday)
			$('#profilePhoto').html('<img src="' +response.picture.data.url+ '"class="img-fluid profileHeight"/>')
			
			$('#cover').css('background-image','url('  + response.cover.source+ ')')

			},

			error:(err)=>{

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

			}

		})
	}
