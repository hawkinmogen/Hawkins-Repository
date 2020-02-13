/*
	Author: Hawkin Mogen
	Created: 2/11/2020
	Last Modified:
	*Javascript for luckySevens.html*
	*/
	

function rollDice(){
	return Math.floor(Math.random()*6)+1;
}

//rounds a value to a certain precicsion (decimal places) Used to round maxWinnings to two decimal places.
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}


function playGame(){
	var startingBet= document.getElementById("startingBet").value;
	var gameMoney = startingBet;
	var firstDie;
	var secondDie;
	var diceSum;
	var diceRolls=0;
	var maxWinnings=0;
	var rollsAtMax=0;
	
	//Adds the character '0' to the end of startingBet if it only has one decimal place
	//Fixed so that startingBet is only split if it contains a '.'
	if(startingBet.includes(".")){
	var split = startingBet.split('.', 2);
	var decimals = split[1];
	if(decimals.length ===1){
		startingBet=startingBet+0;
	}
	}
	
	while (gameMoney >= 1){
		firstDie = rollDice();
		secondDie = rollDice();
		
		diceSum= firstDie+secondDie;
		diceRolls++;
		
		if(diceSum != 7){
			gameMoney--;
			console.log("lost");
		}
		
		else{
			gameMoney +=4;
			if (gameMoney > maxWinnings){
				maxWinnings=round(gameMoney,2);
				rollsAtMax=diceRolls;
				
			}
			console.log("win");
		}
		
		
	}
	
	var maxWinningsTwoDecimals = maxWinnings.toFixed(2);
	document.getElementById("submitButton").innerText = "Play Again!";
    document.getElementById("start").innerHTML = "$"+startingBet;
	document.getElementById("diceRolls").innerHTML = diceRolls;
	document.getElementById("maxWinnings").innerHTML = "$"+maxWinningsTwoDecimals;
	document.getElementById("rollsAtMax").innerHTML = rollsAtMax;
	return false;
     
}



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
   alert("Input must follow the format: (dollars).(cents) ###.##");
   document.getElementById("startingBet").focus();
   return false;
    }
	
	/*If "startingBet" is not empty and meets the regex criteria, 
		the div with id="gameInfo" will display*/
    document.getElementById("gameInfo").style.display="";
 	playGame();
    return false;
	//False is returned so that the form does not submit and we see the results//
	
}

