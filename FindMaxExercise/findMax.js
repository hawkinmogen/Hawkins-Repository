var array=[202,4,65,200,201,23,123,45,203]

function findMax(){
var maxNumber = array[0];


for(var i=0; i < array.length - 1; i++ ){
	var currentElement = array[i];
	var nextElement = array[i+1];
	
	if(currentElement >= nextElement && currentElement>= maxNumber){
		maxNumber= currentElement;
		
		}
	
	else if(nextElement>= maxNumber){
		maxNumber = nextElement;
	}
	
}
return maxNumber;
	console.log(maxNumber);
}