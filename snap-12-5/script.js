//const axios = require('axios');

function onPageLoad() {
	listBreeds();
}

const getBreeds = async () => {
	try {
		console.log('api connection made');
		return await axios.get('https://dog.ceo/api/breeds/list/all')
	} catch (error) {
		console.error(error)
	}
};

const listBreeds = async () => {
	const breeds = await getBreeds();

	if (breeds.data.message) {
		let target = document.getElementById('target');
		let breedList = Object.keys(breeds.data.message);
		target.innerHTML = Object.keys(breeds.data.message).map(x => `<li>${x}</li>`).toString().replace(/,/g, '');
		console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
	}
};

// const getBreeds = async () => {
// 	try {
// 		console.log('api connection made');
// 		return await axios.get('https://dog.ceo/api/breeds/list/all');
// 	} catch (error) {
// 		console.error(error)
// 	}
// };
// const listBreeds = async () => {
// 	const breeds = await getBreeds();
// 	console.log('breeds recieved');
// 	let target = document.getElementById('target');
// 	target.innerText = breeds.data.message;
// 	return Object.keys(breeds.data.message);
// };
// const getBreeds = async () => {
// 	try {
// 		return await axios.get('https://dog.ceo/api/breeds/list/all')
// 	} catch (error) {
// 		console.error(error)
// 	}
// };
//
// const printBreeds = async () => {
// 	const breeds = await getBreeds();
//
// 	if (breeds.data.message) {
// 		console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
// 		return Object.entries(breeds.data.message);
// 	}
// };

onPageLoad();