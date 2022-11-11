// დავალება:
// 1.შექმენით html და app.js ფაილები. შემოტანეთ app.js html-ში.
// 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც განვიხილეთ.
const myString = "some text";
const myNumber = 20;

const myBoolean = true,
	myNull = null,
	myUndefined = undefined;

// 3. დამატებით შექმენით ცვლადები myName, myLastName,  yearOfBirth, currentYear და მიანიჭეთ თქვენი სახელი, გვარი, დაბადების წელი, მიმდინარე წელი.
const myName = "alina",
	myLastName = "bregvadze",
	yearOfBirth = 1996,
	currentYear = 2022;

// 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება: My name is (აქ
// myName ცვლადი)  and my last name is( აქ   myLastName ცვლადი). I am  (აქ გამოთვალეთ ასაკი currentYear  და yearOfBirth -   ცვლადების გამოყენებით) years old. გამოიყენეთ წინადადების აწყობის, ლექციაზე განხილული ორივე სინტაქსი.

const text1 = `My name is ${myName}  and my last name is ${myLastName}. I am ${
	currentYear - yearOfBirth
} years old.`;

const text2 =
	"My name is " +
	myName +
	" and my last name is " +
	myLastName +
	". I am " +
	(currentYear - yearOfBirth) +
	" years old.";

// console.log(text1, text2);

// array მასივი
let myNum = 100;

const myArr = [10, myBoolean, 20, text1, myNull, 50, myNum];

// myArr = [10, 20, 30];

// console.log(myArr);
const index0 = 0;

const firstEl = myArr[index0];
const secondEl = myArr[1];
// არასწორია myArr['k']
const myArrLength = myArr.length;

const myArrLastElement = myArr[myArrLength - 1]; //length-ზე ერთით ნაკლებია ყოვეთვის ბოლო ელემენტის ინდექსი

// console.log(firstEl, secondEl, myArrLength);

const myNestedArr = [10, 20, [200, 300, 400], [[1, 2, 3], 1, 2, 3]];

// console.log(myNestedArr);
myArr.push([30, 10]); // ბოლოს ამატებს მასივში ელემენტებს

// console.log(myArr);
myArr.unshift("text");

// console.log(myArr);

const lastElement = myArr.pop(); //ბოლო ელემენტის მოშორება
const firstElement = myArr.shift(); //პირველი ელემენტის ამოღება
// console.log(myArr, firstElement, lastElement);

// ობიექტი, object

const studentArr = ["tea", 18, true, false, [123456, 65432123]];

const student = {
	name: "tea",
	age: 18,
	isStudent: true,
	isWorking: false,
	phoneNumbers: [123456, 65432123],
	address: {
		home: "tbilisi",
		work: "tbilisi 2",
	},
};

student.name = "nino";
student.lastName = "gelashvili";
// console.log(student.name);

// console.log(student.phoneNumbers[0]);
// console.log(student.address.home);

const nameProperty = "name";

// console.log(student["address"], student[nameProperty]);

const countries = [
	{
		name: {
			common: "Georgia",
			official: "Georgia",
			nativeName: {
				kat: {
					official: "საქართველო",
					common: "საქართველო",
				},
			},
		},
		currencies: {
			GEL: {
				name: "lari",
				symbol: "₾",
			},
		},
		capital: ["Tbilisi"],
		altSpellings: ["GE", "Sakartvelo"],
	},
	{
		name: {
			common: "Germany",
			official: "Federal Republic of Germany",
			nativeName: {
				deu: {
					official: "Bundesrepublik Deutschland",
					common: "Deutschland",
				},
			},
		},
		currencies: {
			EUR: {
				name: "Euro",
				symbol: "€",
			},
		},
		capital: ["Berlin"],
		altSpellings: [
			"DE",
			"Federal Republic of Germany",
			"Bundesrepublik Deutschland",
		],
	},
];

const georgia = countries[0];
// console.log(countries[0], countries[0].capital[0]);

// const h1 = document.querySelector("h1");
// h1.innerText = countries[0].capital[0];

let number1 = 10;
let number2 = number1;
// console.log(number1, number2);

number2 = 20;
// console.log(number1, number2);

const subjectsGroup1 = ["english", "math"];
const subjectsGroup2 = subjectsGroup1;
const subjectsGroup3 = [...subjectsGroup1, "german"];

// subjectsGroup2 = [1, 2, 3]
// console.log(subjectsGroup1, subjectsGroup2);

subjectsGroup2.push("history");
subjectsGroup3.push("geography");

// console.log(subjectsGroup1, subjectsGroup2, subjectsGroup3);

// console.clear();

// console.error("error text");

// console.log("log text");

// console.table(myArr);
// console.table(student);
