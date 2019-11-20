function countNumsInArray(array) {
	let sortedArr = array.sort();
	let countedArray = [], count = array[0], incrementer = 0;
	for (i = 0; i <= array.length; i++) {
		if (count === array[i]) {incrementer = incrementer + 1;}
		else if (count !== array[i]) {
			countedArray[i] = `${count} is in the array ${incrementer} times`;
			count = array[i];
			incrementer = 1;}

	}

	return countedArray.filter(item => item.includes("is in the"));
}

function buzzfizz(int1, int2) {
	let min, max;
	if(int1 >= int2) {
		max = int1;
		min = int2;
	} else {
		max = int2;
		min = int1;
	}
	for (i = min; i <= max; i++) {
		if (i % 2 === 0 && i % 3 === 0) {console.log('baz');
		} else if (i % 2 === 0) {console.log('fizz');
		} else if (i % 3 === 0) {console.log('buzz');
		}
	}
}

console.log(buzzfizz(23,52));