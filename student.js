export default class Student {
	constructor(name, age, score) {
		this._firstName = firstName;
		this._age = age;
		this._score = score;
	}
	get firstName() {
		return this._firstName;
	}
	get age() {
		return this._age;
	}
	set score(score) {
		this._score = 5;
	}
}
