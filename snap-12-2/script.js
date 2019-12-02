window.onload = function () {
	//wait until window loads to run js
	startAppend();
};

function startAppend() {
	//assign elements to variables
	let appendButton = document.getElementById('appendData');
	let list = document.getElementById('list');
	//create event listener on button
	appendButton.addEventListener('click', () => {
		appendHTML();
	});
}

function appendHTML() {
	//insert data into targeted element
	const data = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', ' Sarah'];
	list.innerHTML = `<li>${data[0]}</li>
		<li>${data[1]}</li>
		<li>${data[2]}</li>
		<li>${data[3]}</li>
		<li>${data[4]}</li>
		<li>${data[5]}</li>`
}