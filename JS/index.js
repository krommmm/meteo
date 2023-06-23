// app qui charge la température et la ville suivant coords et qui charge la température suivant la ville

//déclarations
var changerVille = document.querySelector('#changer');
var temp = document.querySelector('#temperature_label');
var ville = document.querySelector('#ville');

//gestionnaire d'evenement qui affiche la température suivant la ville
changerVille.addEventListener('click', function () {
	var newVille = prompt('Saisir une ville');
	address = `https://api.openweathermap.org/data/2.5/weather?q=${newVille}&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric`;
	console.log(address);
	getTempPerTown(address);
	ville.textContent = newVille;
});

//fonction qui retourne l'url de l'api avec les coordonnées longitude et latitude
const getPosition = async () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				let lat = position.coords.latitude;
				let lon = position.coords.longitude;
				console.log(lat);
				console.log(lon);
				let APIkey = 'dc8c9152e8adaad0ec8bf635818c0d42';
				// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
				let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
				resolve(url);
			},
			(error) => {
				reject(error);
			}
		);
	});
};

getPosition()
	.then((url) => {
		return getTempPerTownInit(url);
	})
	.catch((error) => {
		console.log(error);
	});

//fonction qui affiche la ville et la température suivant l'url avec coords
const getTempPerTownInit = async (url) => {
	try {
		var response = await fetch(url);
		var response2Json = await response.json();
		console.log(response2Json);
		temp.textContent = response2Json.main.temp;
		ville.innerHTML = response2Json.name;
	} catch (err) {
		console.log(err);
	}
};

//fonction qui affiche la température suivant une ville
const getTempPerTown = async (url) => {
	try {
		var response = await fetch(url);
		var response2Json = await response.json();
		temp.textContent = response2Json.main.temp;
	} catch (err) {
		console.log(err);
	}
};
