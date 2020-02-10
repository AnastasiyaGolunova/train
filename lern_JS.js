"use strict";

//Object
/*
const user = {
	name : "John",
	surname : "Smith",
};

user.name = "Peter";
//delete user.name;
console.log(user.name);
*/

/*
let schedule = {};
//schedule["8:30"] = "get up";
function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  console.log(isEmpty(schedule));
*/

/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = salaries["John"] + salaries["Ann"] + salaries["Pete"];
function isEmpty(salaries){
	for (let key in salaries){
		return sum;
	}
	return 0;
}
console.log(isEmpty(salaries));
*/

/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);
*/
/*
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
	for (let key in obj){
		if (typeof obj[key] == "number"){
			obj[key] *= 2;
		}
	}
}
multiplyNumeric(menu);
console.log(multiplyNumeric(menu));
*/

// This
/*
let сalculator = {
  	sum (){ 
	return this.a + this.b;
	},
	  	mul () {
	  	return this.a * this.b;
		},
			read () {
		  	this.a= +prompt("Number a:", 10);
		  	this.b= +prompt("Number b:", 10);
		  }	  	
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

/*
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
//ladder.up().up().down().showStep();
*/

// New
/*
function Calculator(a, b){
	this.read = function(){
		this.a = +prompt("Number a:", 0);
		this.b = +prompt("Number b:", 0);
	};
	this.sum = function(){
		return this.a + this.b;
	};
	this.mul = function(a, b){
		return this.a * this.b;
	};
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

/*
function Accumulator(startingValue){
	this.read = function(){
		this.value += +prompt("Number:", 0);
	};
		this.value = startingValue;
}
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value);
*/


//Тип данных

/*
let a = +prompt("Number a:", 0);
let b = +prompt("Number b:", 0);
function sum(a, b){
	return a + b;
}
sum();
console.log(sum(a, b));
*/

/*
alert( 1.35.toFixed(1) );
alert( 6.35.toFixed(1) ); alert( Math.round(6.35 * 10) / 10);
*/

/*
function readNumber(number){
	number = +prompt("Number:", 0);
	if (typeof number == "null"){
		return 0;
	} else {
		return number;
	}
}

alert(readNumber());
*/


/*
function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);
*/


/*
function random(min, max){
	return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) ); 
alert( random(1, 5) );
*/

/*
function randomInteger(min, max){
	return Math.floor(Math.random() * (max - min))+min;
}
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) ); 
alert( randomInteger(1, 5) );
*/

//String


/*
function ucFirst(str){
	if (!str) return str;
	return str[0].toUpperCase() + str.slice(1);
}
ucFirst();
console.log(ucFirst("vasya"));
*/

/*
function checkSpam(str){
	let lowerStr = str.toLowerCase();
	return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
*/

/*
function truncate(str, maxlength){
		return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
	}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
*/

/*
function extractCurrencyValue(str){
	return +str.slice(1);
}
//extractCurrencyValue();
console.log(extractCurrencyValue("$120"));
*/

/*
let styles = ["Jazz", "Blues"];
styles.push = "Rock`n`Roll";
styles[Math.round((styles.length - 1) /2)] = "Classic";
styles.shift(0);
styles.unshift("Rap", "Reggae");

console.log(styles);
*/



/*
function sumInput() {
	let arr = [];
	while (true){
		let num = prompt("Number", 0);
		if (num === " " || num === null || !isFinite(num)) break;
	arr.push(+num);
	}

	let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
};
console.log(sumInput());
*/

/*
function camelize(str){
	return str.split("-");
	
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
*/

/*
function unique(arr){
	return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );
*/
/*
function aclean(arr){
	let map = new Map();
	for (let worlds of arr){
	let sorted = worlds.toLowerCase();
	.split("")
	.sort()
	.join("");
	map.set(sorted, worlds);
}
return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
console.log( aclean(arr) );
*/


/*
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
console.log(keys());
*/

/*
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
let readMessages = new WeakSet();

readMessages.add(messages[1]);
readMessages.add(messages[0]);
readMessages.add(messages[0]);

alert("Read message 0: " + readMessages.has(messages[0])); 

messages.shift();
*/

/*
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
*/

/*
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

 function sumSalaries(salaries){
 	let sum = 0;
 	for (let salary of Object.values(salaries)){
 		sum += salary;
 	}
 	return sum;
 }
 console.log(sumSalaries(salaries));
*/


/*
let user = {
  name: 'John',
  age: 30
};

function count(obj){
	return Object.keys(user).length;
}

console.log( count(user) );
*/

/*
let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);
*/

/*
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries){
	let max = 0;
    let maxName = null;
	for (let [name, salary] of Object.entries(salaries)){
		if (max < salary) {
        max = salary;
        maxName = name;
      }
	}
	 return maxName;
};

console.log(topSalary(salaries));
*/


// Date

/*
let date = new Date(2012, 1, 20, 3, 12);
console.log(date);
*/

/*
let date = new Date(2014, 0, 3);

function getWeekDay(date){
	 
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
	return days[date.getDay()];
}
console.log( getWeekDay(date));
*/

/*
let date = new Date(2012, 0, 3); 
function getLocalDay(date){
	let day = date.getDay();
  
    if (day == 0) { 
      day = 7;
    }
  
    return day;
}
console.log( getLocalDay(date) ); 
*/

/*
let date = new Date(2015, 0, 2);
function getDateAgo(date, days){
	let dateCopy = new Date(date);
	dateCopy.setDate(date.getDate() - days);
  	return dateCopy.getDate();
}
console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
*/


/*
function getLastDayOfMonth(year, month){
	let date = new Date(year, month + 1, 0);
  	return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2013, 1));
*/

/*
function getSecondsToday(){
	let today = new Date();
	return Math.floor(today.getHours()*3600) + Math.floor(today.getMinutes()*60) + today.getSeconds();
}

console.log(getSecondsToday());
*/



/*
function getSecondsToTomorrow(){
	let today = new Date();
	let tomorrow = new Date();
	return 86400 - (Math.floor(today.getHours()*3600) + Math.floor(today.getMinutes()*60) + today.getSeconds());
}
console.log(getSecondsToTomorrow());
*/



/*
function getSecondsToTomorrow() {
  let now = new Date();

  // завтрашняя дата
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let diff = tomorrow - now; // разница в миллисекундах
  return Math.round(diff / 1000); // преобразуем в секунды
}
console.log(getSecondsToTomorrow());
*/

/*
function getSecondsToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}
console.log(getSecondsToTomorrow());
*/

/*
function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // форматирование
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;

  if (diffSec < 1) {
    return 'прямо сейчас';
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
  }
}
console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
*/

/*
let user = {
  name: "Василий Иванович",
  age: 35
};
let userJson = JSON.stringify(user);
let userJson1 = JSON.parse(userJson);
let user2 = JSON.parse(JSON.stringify(user));

console.log(userJson);
console.log(userJson1);
console.log(user2);
*/

/*
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
   return (key != "" && value == meetup) ? undefined : value;
}));

*/


/*
function sumTo(n){
	let result = 0;
	for (let i = 0; i <= n; i++){
		result += i;
	}
	return result;
}

console.log(sumTo(100));
*/


/*
function sumTo(n){
	if (n == 1){
		return 1;
	} else{
		return n + sumTo(n-1);
	}
}
console.log(sumTo(100));
*/

/*
function sumTo(n) {
  return n * (n + 1) / 2;
}

alert( sumTo(100) );
*/

/*
function factorial(n){
	if (n == 1){
		return 1;
	} else{
		for (let i = 0; i <= n; i++){
			return n * factorial(n-1)
		}
	
	}
}

console.log(factorial(5));
*/

/*
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
console.log( factorial(5) );
*/

/*
function fib(n){
	let a = 1;
	let b = 1;
	for (let i = 3; i <= n; i++) {
	    let c = a + b;
	    a = b;
	    b = c;
	}
	return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77));

*/

/*
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
*/

/*
function printList(list){
	 let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}
*/

/*
function printList(list) {

  console.log(list.value); // выводим текущий элемент

  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }

}

printList(list);
*/

/*
function printReverseList(list){
	 let tmp = list;
	 let arr = [];

  while (tmp) {
    arr.unshift(tmp.value);
    tmp = tmp.next;

  }
  arr.forEach(item => console.log(item));
}
printReverseList(list);
*/

/*
function printReverseList(list) {
	if (list.next) {
	    printReverseList(list.next);
	  }

	  console.log(list.value);

}

printReverseList(list);
*/

/*
function sum(a){
	let current = a; 
	function f(b){
		current += b;
		return f;
	}
	f.toString = function(){
		return current;
	}
	return f;
}
console.log(sum(1)(2));
console.log(sum(3)(4));
*/

/*
function sum(a){
	return function sum(b){
		return a+b;
	}
}

console.log(sum(1)(2));
console.log(sum(3)(4));
*/

/* .. ваш код для inBetween и inArray */

/*
let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a, b){
	return function(x){
		return x >= a && x <= b;
	}
}
function inArray(arr){
	return function(x){
		return arr.includes(x);
	}
}

console.log( arr.filter(inBetween(3, 6)) ); 

console.log( arr.filter(inArray([1, 2, 10])) );
*/

/*
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
function byField(field){
	return (a, b) => a[field] > b[field] ? 1 : -1;
	
}
users.sort(byField('name'));
users.forEach(user => console.log(user.name));
users.sort(byField('age'));
users.forEach(user => console.log(user.age));
*/

/*
function makeArmy() {
  let shooters = [];
	
  for (let i = 0; i < 10; i++) {

    let shooter = function (){ 

      console.log( i ); 
    };

    shooters.push(shooter);
    

  }
	return shooters;
  
}

let army = makeArmy();

army[0]();
army[5]();
*/

 /*

function makeCounter() {
    let count = 0;
    function counter(){
    	return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;
    return counter;
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  console.log( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  console.log( counter() ); // 10 (вместо 11)
 */

/*
function sum(a){
	let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}
console.log(sum(1)(2));
console.log(sum(1)(2)(3));
console.log(sum(5)(-1)(2));
console.log(sum(6)(-1)(-2)(-3));
console.log(sum(0)(1)(2)(3)(4)(5));
*/

/*
function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// использование:
printNumbers(5, 10);
*/

/*
function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

// использование:
printNumbers(5, 10);

*/

/*
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);
console.log(head.glasses);
*/

/*
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};


speedy.eat("apple");
console.log( speedy.stomach ); 

console.log( lazy.stomach );
*/

/*
function Obj(name) {
  this.name = name;
  alert(name);
}

let obj = new Obj("Obj");

let obj2 = new obj.constructor("Obj2");
*/

/*
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

f.defer(1000);
*/

/*
Function.prototype.defer = function(ms) {
  return (...args) => setTimeout(this, ms, ...args);
};

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2);
*/ 

/*
let dictionary = Object.create(null, {
   toString: { // определяем свойство toString
     value() { // значение -- это функция
       return Object.keys(this).join();
     }
   }
 });

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary);
*/

/*
class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
*/ 

/*
class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); 
alert(rabbit.name);
*/

/*
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision=1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};
*/

/*
class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') );
*/

/*
class FormatError extends SyntaxError{
	constructor (message){
		super(message);
		this.name = this.constructor.name;
	}
}
let err = new FormatError("ошибка форматирования");

console.log( err.message ); // ошибка форматирования
console.log( err.name ); // FormatError
console.log( err.stack ); // stack

console.log( err instanceof FormatError ); // true
console.log( err instanceof SyntaxError ); // true
*/

/*
function delay(ms) {
  return new Promise (resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => console.log('выполнилось через 3 секунды'));
*/

/*
async function loadJson(url) {          //Функция loadJson теперь асинхронная.
  let response = await fetch(url)       // Все .then внутри неё заменены на await.
      if (response.status == 200) {
        let json = await response.json;
        return json;
      } 
      throw new Error(response.status);
      }
   

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404
*/

/*
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url)
       if (response.status == 200) {
        let json = await response.json;
        return json;
      }
        throw new HttpError(response);
      }

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
	let user;
	while(true){
		let name = prompt("Введите логин?", "iliakan");
		try {
			user = await loadJson(`https://api.github.com/users/${name}`);
			break;
		} catch(err){
			if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        return demoGithubUser();
      } else {
        throw err;
      }
    }
}
   	alert(`Полное имя: ${user.name}.`);
    return user; 
}
  	

demoGithubUser();
*/

/*
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f() {
	wait().then(result => console.log(result));
}
f();
*/

/*
function* pseudoRandom(seed){
	while(true) yield seed = seed * 16807 % 2147483647;
}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value);
*/