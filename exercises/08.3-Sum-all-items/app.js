function sumTheElements(theArray){
	
	var total = 0;
	
	for(let i = 0; i < theArray.length; i++){
		var total = total + theArray[i];
	}

	return total;
}

sumTheElements([925900, 30, 20, 10]);