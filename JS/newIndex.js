var changerVille = document.querySelector('#changer');
var temp = document.querySelector('#temperature_label');
var ville = document.querySelector('#ville');

// `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
// `https://api.openweathermap.org/data/2.5/weather?q=${newVille}&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric`;
// dc8c9152e8adaad0ec8bf635818c0d42

var cpt = 0;

const wait2Seconds = async (cpt) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			let msgTimer = `compteur : ${cpt}`;
			resolve(msgTimer);
		}, 2000);
	});
};

const repeat = async () => {
	for (let i = 0; i < 3; i++) {
		cpt++;
		const result = await wait2Seconds(cpt);
		console.log(result);
	}
};

repeat();
