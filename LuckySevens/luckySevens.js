/*
	Author: Hawkin Mogen
	Created: 2/11/2020
	Last Modified:
	*Javascript for luckySevens.html*
	*/

function validateItems(){
	
	/*Regular expression is used to ensure that "startingBet" is a valid dollar amount*/
    var regex = /^\d*(\.{1}\d{1,2})?$/;
    
	var startingBet = document.getElementById("startingBet").value;
	
	
	if(startingBet=="")
    {
      alert("Starting Bet field can not be left blank");
      document.getElementById("startingBet").focus();
      return false;
    }
	
	/*"startingBet" is compared against the regex to ensure it meets the criteria*/
	if(regex.test(startingBet) == false){
   alert("Input must follow the format: (dollars).(cents)");
   document.getElementById("startingBet").focus();
   return false;
    }
	
	/*If "startingBet" is not empty and meets the regex criteria, 
		the div with id="gameInfo" will display*/
    document.getElementById("gameInfo").style.display="";
    return false;
	//False is returned so that the form does not submit and we see the results//
	
}