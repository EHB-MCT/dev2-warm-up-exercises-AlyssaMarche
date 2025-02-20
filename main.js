import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup1();
warmup2();

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
	let student = getStudentJSON();
}

function warmup4() {
	let main, min, max;
}

function warmup5() {}
