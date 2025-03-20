import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup1();
warmup2();
warmup3();
warmup4();
warmup5();
function warmup1() {
	console.log("Exercise week 1");
	document.querySelector("#button-1a").addEventListener("click", function () {
		document.querySelector("#content-1").innerHTML =
			"<p>Hallo, dit is de oefening van Alyssa</p>";
	});
	document.querySelector("#button-1b").addEventListener("click", function () {
		document.querySelector("#section-1").style.backgroundColor = "lightblue";
	});
	document.querySelector("#button-1c").addEventListener("click", function () {
		const newText = document.createElement("h1");
		newText.id = "content-1";
		newText.className = "content";
		newText.innerHTML = "<h1>Ik ben er klaar voor.</h1>";
		document.querySelector("#content-1").append(newText);
	});
}

function warmup2() {
	console.log("Exercise week 2");
	let scores = getRandomScores(10);
	//TODO: detect button click
	document.querySelector("#button-2a").addEventListener("click", function () {
		//TODO: --scores toevoegen--
		//TODO: ul toevoegen

		let html = "<ul>";

		//TODO: li per score
		scores.forEach(function (score) {
			//TODO: li toevoegen
			html += `<li>${score}</li>`;
		});
		html += "</ul>";
		//TODO: toevoegen aan html
		document.querySelector("#content-2").innerHTML = html;
	});

	//TODO: scores sorteren
	document.querySelector("#button-2b").addEventListener("click", function () {
		console.log("a");
		scores.sort(function (a, b) {
			if (a > b) {
				return 1;
			} else {
				return -1;
			}
		});
		let html = "<ul>";
		scores.forEach(function (score) {
			html += `<li>${score}</li>`;
		});
		html += "</ul>";
		document.querySelector("#content-2").innerHTML = html;
	});
	document.querySelector("#button-2c").addEventListener("click", function () {
		console.log("a");
		const sum = scores.reduce(function (total, current) {
			return total + current;
		});
		const newText = document.createElement("h1");
		newText.className = "content";
		newText.innerHTML = `<h1>Totale score: ${sum}</h1>`;
		document.querySelector("#content-2").append(newText);
	});
}

function warmup3() {
	document.querySelector("#button-3a").addEventListener("click", function () {
		let student = getStudentJSON();
		let object = JSON.parse(student);
		console.log(object);
	});
	document.querySelector("#button-3b").addEventListener("click", function () {
		let student = getStudentJSON();
		let object = JSON.parse(student);
		document.querySelector(
			"#content-3"
		).innerHTML = `<h2>${object.firstname}</h2>`;
		document.querySelector("#content-3").innerHTML += `<h2>${object.age}</h2>`;
	});
}

function warmup4() {
	let main, min, max;
	document.querySelector("#button-4a").addEventListener("click", function () {
		console.log("button werkt");
		const URL =
			"https://api.openweathermap.org/data/2.5/weather?q=Brussels&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric";
		fetch(URL)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				main = data.main.temp;
				min = data.main.temp_min;
				max = data.main.temp_max;
			});
	});
	document
		.querySelector("#button-4b")
		.addEventListener("click", function (data) {
			console.log("button werkt");
			document.querySelector("#content-4").innerHTML = `
		<h2>Temp: ${main}</h2>
		<h2>Min temp: ${min}</h2>
		<h2>Max temp: ${max}</h2>
		`;
		});
}

function warmup5() {
	document
		.querySelector("#button-5a")
		.addEventListener("click", function () {
			console.log("This button works")
		});
		document
		.querySelector("#button-5b")
		.addEventListener("click", function () {
			console.log("This button works")
		});
}

//const URL = 'weatherApi'

//function innit(){
//fetch(URL).then{function(
//console.log(response);
//return response.json();
//)}.then(function(data){
// console.log(data);renderHTML(data);
//})
//}
// function renderHTML{
// 	document.queryselector('#container').innerhtml = `
// <h1>${data.name}</h1>
// <h4>Lat:${data.latitude}</h4>
// <h4>Lon:${data.longitude}</h4>
// `
//}
//innit();
//in de body verwachten we de data
