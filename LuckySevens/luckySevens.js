/*
	Author: Hawkin Mogen
	Created: 2/11/2020
	Last Modified:
	*Javascript for luckySevens.html*
	*/
	

function rollDice(){
	return Math.floor(Math.random()*6)+1;
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
				maxWinnings=gameMoney;
				rollsAtMax=diceRolls;
			}
			console.log("win");
		}
	}

    document.getElementById("startingBet").innerHTML = startingBet;
	document.getElementById("diceRolls").innerHTML = diceRolls;
	document.getElementById("maxWinnings").innerHTML = maxWinnings;
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
   alert("Input must follow the format: (dollars).(cents)");
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

