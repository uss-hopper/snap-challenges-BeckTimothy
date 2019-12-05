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
		let breedList = Object.keys(breeds.data.message).map(x => `<li>${x}</li>`).toString().replace(/,/g, '');
		target.innerHTML = breedList;
		console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
	}
};
