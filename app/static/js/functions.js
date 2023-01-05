// Validate if a objects exist in the doom
function validate_exist_object(div) {
  if($(div).length == 0)
    return false;
  else
    return true
}

function validate_inputs_email(form_id){	

	var validate_state = true;

	$(form_id).find(":input").each(function(index, value){

		switch ($(value).attr("name")) {
			case "name":
			case "lastname":
				if(validate_input_kind(value, "just_text") == false)
					validate_state = false;
			break;			
			case "email":
				if(validate_input_kind(value, "email") == false)
					validate_state = false;
			break;
			case "phone":
				if(validate_input_kind(value, "phone_number") == false)
					validate_state = false;
			break;
		}

	});

	return validate_state;
}

function validate_input_kind(input, kind){
	var response = false;
	var letters = /^[A-Za-z]+$/;
	var numbers = /^[0-9]+$/;
	var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	switch (kind) {
		case "just_text":
			if (input.value.match(letters))
				response = true;
			break;
		case "just_number":
			if (input.value.match(numbers))
				response = true;
			break;
		case "phone_number":
			if (input.value.match(numbers) && input.value.length == 10)
				response = true;
			break;
		case "email":
			if (email.test(input.value))
				response = true;
			break;
	}

	if (response == false) {
		$(input).css("border-color", "#eb1c24");
		var input_parent = $(input).parent().parent();
		if(!validate_exist_object($(input_parent).children("p")))
			$(input_parent).append("<p>Insert a validate "+$(input).attr("name")+"</p>").css("color", "#eb1c24");
	} else {
		$(input).css("border-color", "#dedbdb");
		var input_parent = $(input).parent().parent();
		$(input_parent).css("color", "#666");
		$(input_parent).children("p").remove();		
	}

	return response;
}