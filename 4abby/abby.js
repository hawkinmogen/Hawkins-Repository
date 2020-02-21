


function randomMemoryGenerator(){
		
			var memory = ['When the car door lock attacked you!', 'Going to the Bark Park with Elvis','Having my first Whiskey Ginger with you',
				'Holding hands the entire way to New Hampshire','When you protected me from the chalk dust at the color run','Hearing about your ghost stories',
				'Joanna Newsom :0','VAMPIRE WEEKEND','The last night at Norberts','Vegan IHOP date','Picking out my glasses','Almost going flying together','Flying back from New Hampshire with you',
				'Doing lots of fun things with your family!','Visiting Molly','Making gnocchi and watching California On: Ghosts','Half-year date','Police encounters','First time visiting you in Menomonee Falls',
				"First Harry's date","Every Harry's date",'The mysterious bush creature in Sheboygan','Leaving our graffiti tag at the quarry','Wine tasting at DPW','Work from home Mondays','Star-gazing at Crossroads','Walking through the spooky forest',
				'Riding bikes in Sturg','The Coast Guard Station','When you "broke" my bike',"Madi's graduation",'Watching you eat crawfish','New Years Eve',"Walking to Harry's",'Milwaukee Art Museum','Spending the weekend with you and Andrew',
				'The cabin','The drive to the cabin',"Steak n' Shake",'When you waited for me at B Dubs']
			var randomNumber = Math.floor(Math.random()*(memory.length));
			
			document.getElementById("randomMemory").innerHTML = memory[randomNumber];
			document.getElementById("randomMemory").style.display="";
				
			
			
}

		var favorite = ['f', 'g','h','i','j']
function randomFavoriteGenerator(){
		
		
		
			
			if(favorite.length >0){
			var randomNumber = Math.floor(Math.random()*(favorite.length));
			
			
			document.getElementById("randomFavorite").innerHTML = favorite[randomNumber];
			document.getElementById("randomFavorite").style.display="";
			
			favorite.splice(randomNumber,1);}
			
			else{location.reload();}
}


function doNotClick1(){document.getElementById("doNotClick2").style.display="";}

function doNotClick2(){document.getElementById("doNotClick3").style.display="";}

function doNotClick3(){document.getElementById("doNotClick4").style.display="";}

function doNotClick4(){document.getElementById("final").style.display="";}

function reveal(){document.getElementById("secretPic").style.display="";
					return false;}