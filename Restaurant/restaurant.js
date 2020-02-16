function validateForms(){
	
	var nameTextInput = document.getElementById('name').value;
	var emailTextInput = document.getElementById('email').value;
	var phoneTextInput = document.getElementById('phone').value;
    var check = document.getElementsByClassName("form-check-input");
	
	if (nameTextInput ==='' || nameTextInput == null){
		alert("Name field is require.");
		return false;
	}
	
	if (emailTextInput ==='' || emailTextInput == null){
		alert("Email field is require.");
		return false;
	}
		
		if (phoneTextInput ==='' || phoneTextInput == null){
		alert("Phone field is require.");
		return false;
	}
	
	if(check[0].checked === false &&
		check[1].checked === false &&
		check[2].checked === false &&
		check[3].checked === false &&
		check[4].checked === false){
			alert("Please select atleast one best day to contact you.");
			return false;
		}
	
	else{
		alert("Information is valid and has been submitted into the abyss.")
	}
	
}