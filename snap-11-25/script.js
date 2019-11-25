function removeVowels(str) {
	//you would need to target each character in the string and remove the vowels
	//I think the most efficient way of doing this would be using the replace method with a global REGEX identifier.
	return str.replace(/[aeiou]/g, '');
}

function returnGreatest(arr) {
	//you would need to loop through the array and compare each integer against eachother
	//I believe it would be most efficiently done using the array reduce method
	const reducer = (newBiggest, nextValue) => {
		if (newBiggest > nextValue) {
			return newBiggest;
		} else {return nextValue;
		}
	};
	return arr.reduce(reducer);
}

function fibonacciAddition() {
	//you would loop 100 times, assigning a variable to 1 and reassigning the variable to itself each iteration then pushing it to an array
	let incrementTo = 100;
	const arr = [0, 1];
	while (arr.length < incrementTo) {
		arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	}
	return arr;
}

console.log(fibonacciAddition());