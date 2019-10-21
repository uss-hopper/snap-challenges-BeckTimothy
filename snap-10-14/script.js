let weight = document.getElementById(unitValue);
let unit = document.getElementById(unitType);


function convertToGrams(weight, unit) {
	if(unit.toLowerCase() === 'lbs' || unit.toLowerCase() ==='lb'){
		return weight * 453.592;
	}else if(unit.toLowerCase() === 'oz') {
		return weight * 28.3495;
	}else if(unit.toLowerCase() === 'kg') {
		return weight * 1000;
	}else if(unit.toLowerCase() === 'g') {
		return weight;
	}else if(unit.toLowerCase() === 'mg') {
		return weight / 1000;
	}else{return 'Please enter a valid unit of measurement.'}
}

function sumOfFactors(num) {
	num = Math.abs(num);
	let val = 0;
	for(i = num; i >= 0; i--){
		if(num % i === 0) {
			val += i;
		}
	}
	return val;
}
//store factor button
let factorButton = document.getElementById(funcButton);
//lister for factor button
factorButton.addEventListener("click", factorButtonClick);
//store factor return span
let factorReturn = document.getElementById(factReturn);
//Callback function that changes those elements
let factorButtonClick = function() {
	let num = document.getElementById(numToFactor);
	let inputHTML = sumOfFactors(num.value);
	return factReturn.innerHTML = `<p>Sum of Factors: ${inputHTML}</p>`;
};

/*
//Store Elements we want to interact with
//store conversion button
let convertButton = document.getElementById(convButton);

//fields we want to change
let convertReturn = document.getElementById(convReturn);


let convertButtonClick = function() {
	return convertReturn.textContent = `Equal to ${convertToGrams(weight.value, unit.value)} grams`;
};
//Event listeners for elements
//lister for unit value field
convertButton.addEventListener("click", convertButtonClick);

 */
