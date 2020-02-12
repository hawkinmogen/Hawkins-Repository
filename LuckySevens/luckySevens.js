function validateItems(){
    var regex = /^\d*(\.{1}\d{1,2})?$/;
    var startingBet = document.getElementById("startingBet").value;
	
	
	if(startingBet=="")
    {
      alert("Starting Bet field can not be left blank");
      document.getElementById("startingBet").focus();
      return false;
    }
	
	
	if(regex.test(startingBet) == false){
   alert("Input must follow the format: (dollars).(cents)");
   document.getElementById("startingBet").focus();
   return false;
    }
    
    return true;
  }