function convertToGrams(weight, unit) {
	let value =;
	if(unit === 'lbs' || unit ==='lb'){
		return weight * 453.592;
	}else if(unit === 'oz') {
		return weight * 28.3495;
	}else if(unit === 'kg') {
		return weight * 1000;
	}else if(unit === 'g') {
		return weight;
	}else if(unit === 'mg') {
		return weight / 1000;
	}else{return 'Please enter a valid unit of measurement.'}
}

