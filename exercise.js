// --- part 1 ---
//q1
// prints the words inside the console
console.log("---- q1 ----");
console.log("Hello, JS");

//q2
//prints my name, city and current year
console.log("---- q2 ----");
console.log("Zohar Monsonego\nDimona\n2026");

//q3
//prints inside a string the value in the variable city
console.log("---- q3 ----");
const city = "Dimona";
console.log(`${city}`);

//q4
//first, prints the value of the variable score. then, we change the value of 'score' and print it after the changes
console.log("---- q4 ----");
let score = 0;
console.log(`${score}`);

score = 10;
console.log(`${score}`);

//q5
//prints in the same console, in the same line a string and also a value of a variable
console.log("---- q5 ----");

console.log("score:", score);

//---- part 2 -----
//q7
console.log("---- q7 ----");
const pi = 3.14;
// pi = 3;

//the error is: TypeError: Assignment to constant variable. we tried to change a variable that has been defined as const

//q8
console.log("---- q8 ----");
let color = "blue";
color = "red";
// It works, and this is because 'let' allow us to change the value of a variable that has allready been assigned with a value

//q9
console.log("---- q9 ----");
let a = 1;
// let a = 2;

//the error i received is: SyntaxError: Identifier 'a' has already been declared. A ns this is because i tried to define another variable with the same name with 'let'

//q10
console.log("---- q10 ----");
var b = 1;
var b = 2;
console.log(b);

//the value of b is 2, it changed because 'var' allow us to define one varibale with some value and then to define another varaible with the same name, it will consider the second definition as chanfe for the first varibale. We don't use 'var' because it can make a lot of troubles

//q11
console.log("---- q11 ----");

let total;
console.log(total);
total = 5;
console.log(total);

//this is what was printed when it was undefined: undefined. but after i change its value to 5, the number 5 was printed to the screen.

//q12
console.log("---- q12 ----");
const birth_date = "06.03.2003";
let num_of_points = 30;
let last_name = "Monsonego";
let counter = 1;

//----part 3-------
//q13
console.log("---- q13 ----");
//the variables names that arn illegal are: my var,class,let, $price,
// let my var = 12; // it is really illegal
// let class = "zohar"; // illegal
// let let = 12; // illegal
let $price = 14; // it is legal

//q14
console.log("---- q14 ----");
let my_var = 12; // it is really illegal
let some_class = "zohar"; // illegal
let let123 = 12;

//q15
console.log("---- q15 ----");
let age = 20;
let Age = 30;

// those are two different varibles.
console.log("age: ", age);
console.log("Age: ", Age);

// that's what i got: age:  20, Age:  30

//q16
console.log("---- q16 ----");
let product_price;
let is_connected;
let num_of_kids;

//what makes a variable name to a good name is that the name clear, if someone read it they will understand what it contains without even know the code.

//------part 4 --------
//q17
console.log("---- q17 ----");
const isDriver = true;
const year = 2026;
const department = "Software engineering";

console.log(isDriver, year, department);

//q18
console.log("---- q18 ----");
const s = "zohar";
const s2 = "hadassa";
const s3 = `gym`;

console.log(s, s2, s3);

//q19
console.log("---- q19 ----");
console.log("hello how's your day?");

//q20
console.log("---- q20 ----");

const integer_num = 5;
const float_num = 5.5;

console.log(integer_num, typeof integer_num, float_num, typeof float_num);

//the type of the two of them is 'number'

//q21
console.log("---- q21 ----");

console.log(5 + 10);
console.log(5 - 10);
console.log(5 * 10);
console.log(4 / 10);
console.log(3 % 10);

//% - is when we want to know the leftover of the division of one number in another, for example, if we divided 10 in 3, so there is three times 3 in 10 but there is 1 leftover, so the result will be 1. in our case the result will be 3 becuase we can not divide 3 in 10.

//q22
console.log("---- q22 ----");

const isStudent = true;
const isVegan = false;

console.log(isStudent, isVegan);

//q23
console.log("---- q23 ----");

console.log(3 < 5); //boolean
console.log(3 > 5); //boolean
console.log(5 === 5); //boolean

//q24
console.log("---- q24 ----");
let emptyS = "";
console.log(emptyS);

let anotherEmptyS = "";
console.log(anotherEmptyS);

//the string "" is the same as '', the two of them are empty strings

//------part 5 ----------
//q25
console.log("---- q25 ----");
let something;
console.log(something);

//we got the value 'undefined'

//q26
console.log("---- q26 ----");
const middleName = null;
console.log(middleName);

//the difference between null and undefined is: null us when we defined a variable and We want to say that there is nothing inside it, and undefined is when we created a variable and we want to put some value but not yet, so at first we defined it as undefined and later we will put there a value.

//q27
console.log("---- q27 ----");
console.log(null == undefined);
console.log(null === undefined);

//so, in the first comparison with the oparator == we checked the values of each, and because the two of them have the same value - nothing so we got true. in the second comparison with the === operator we checked the type of each, and the type of null is not the same as the type of undefined so we got false.

//q28
console.log("---- q28 ----");
//let some_var = null;
//let isSleep = false;
//let max_iteration = 10;
//let address = "Beer Sheva";
//let u;

//----- part 6 -------
//q29
console.log("---- q29 ----");
console.log(
  typeof 42,
  typeof null,
  typeof undefined,
  typeof true,
  typeof "hello",
);

//q30
console.log("---- q30 ----");
//the type that was printed for 'null' is object, it was not what i expected, i expected for null

//q31
console.log("---- q31 ----");
console.log(typeof NaN);

//the type of 'NaN' i got is 'number' , it is surprising because NaN is not a number but its type is a number

//q32
console.log("---- q32 ----");
console.log(typeof typeof 42);

//the type of the type 'number' is 'string'

//q33
console.log("---- q33 ----");
let my_name = "zohar";
let my_age = 23;
let isDegree = true;
let v = null;
let p = undefined;

console.log(my_name, typeof my_name);
console.log(my_age, typeof my_age);
console.log(isDegree, typeof isDegree);
console.log(v, typeof v);
console.log(p, typeof p);

//q34
console.log("---- q34 ----");
let value1 = 5;
console.log(typeof value1);
value1 = "5";
console.log(typeof value1);

//that it changes according to the value the variable has

//----- part 7 --------
//q35
console.log("---- q35 ----");
const m_name = "zohar";
const m_age = 23;

console.log(`my name is ${m_name} and my age is ${m_age}`);

//q36
console.log("---- q36 ----");
console.log("my name is" + m_name, "my age is" + m_age);

//the clearer version is the first one with the $ inside the string

//q37
console.log("---- q37 ----");
console.log(`the sum of 3 and 4 is ${3 + 4}`);

//q38
console.log("---- q38 ----");
const price = 80;
const quantity = 3;

console.log(`the total sum is: ${80 * 3}`);

//q39
console.log("---- q39 ----");
console.log(`i am first line\nand i am second line`);

//q40
console.log("---- q40 ----");
let numberOfKids = 5;
console.log(`vegan: ${isVegan}, kids: ${numberOfKids}`);

//-----part 8 -------
//q41
console.log("---- q41 ----");
console.log(Number("42"));
console.log(typeof Number("42"));

//q42
console.log("---- q42 ----");
console.log(String(123));
console.log(typeof String(123));

//q43
console.log("---- q43 ----");
console.log(Number("12px"));
console.log(typeof Number("12px"));

//the value that we got is NaN and its type is 'number'

//q44
console.log("---- q44 ----");
console.log(Number("")); //0
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0
console.log(Number(false)); //0
console.log(Number(true)); //1

//q45
console.log("---- q45 ----");
console.log(String(undefined)); //undefined
console.log(String(null)); //null
console.log(String(true)); //true

//q46
console.log("---- q46 ----");
const input = "25";
console.log(input + 5);
console.log(input + Number(5));

//there is no difference, because it does not matter for a string if the type we add to it is a number or not, it will add it as a string even if it is not

//q47
console.log("---- q47 ----");
console.log("5" + 1);
console.log("5" - 1);
console.log("5" * 2);
console.log("10" / 2);

//the operator + converts the type we wants to add to it to a string , when we try to add something to a string

//------part 9 ------
//q48 - '55'
//q49 - 3
//q50 - '51'
//q51 - 2
//q52 - string
//q53 - object, undefined
//q54 - undefined, undefined
//q55 - NaN, number
//q56 - false
//q57 - error, we tried to put a value in a const variable

//------part 10---------
//q58
console.log("---- q58 ----");
const n = "Zohar Monsonego";
const ag = 23;
const ci = "Dimona";
const is_student = false;
const isCoffee = true;

console.log(
  `Name: ${n}\nAge: ${ag}\nCity: ${ci}\nStudent: ${is_student}\nLove coffee: ${isCoffee}`,
);
console.log(typeof n, typeof ag, typeof ci, typeof is_student, typeof isCoffee);

//q59
console.log("---- q59 ----");
const product1 = "cheese";
const product2 = "eggs";
const product3 = "bread";
let price_p1 = 10;
let price_p2 = 12;
let price_p3 = 5;

console.log(
  `Total amount:\n${product1} x 3 : ${price_p1 * 3}$\n${product2} x 2 : ${price_p2 * 2}$\n${product3} x 1 : ${price_p3 * 1}$`,
);

//q60
console.log("---- q60 ----");
const celsuise = 25;
const fahrenheit = (celsuise * 9) / 5 + 32;

console.log(`${celsuise}C = ${fahrenheit}F`);

//q61
console.log("---- q61 ----");
const heightInput = "1.75";
const ageInput = "30";

console.log(
  `before:\n${heightInput} -> ${typeof heightInput}\n${ageInput} -> ${typeof ageInput}`,
);

Number(heightInput);
Number(ageInput);
console.log(
  `after:\n${heightInput} -> ${typeof heightInput}\n${ageInput} -> ${typeof ageInput}`,
);

//q62
console.log("---- q62 ----");
let z;
let ab = null;
let drink = false;
let working = true;
const work_hours = 8.5;
let position = "developer";
let phone = "0555555555";
let driver_license = true;
let days_of_work = 20;
let ba;

console.log(`Type: ${typeof z} Value: ${z}`);
console.log(`Type: ${typeof ab} Value: ${ab}`);
console.log(`Type: ${typeof drink} Value: ${drink}`);
console.log(`Type: ${typeof working} Value: ${working}`);
console.log(`Type: ${typeof work_hours} Value: ${work_hours}`);
console.log(`Type: ${typeof position} Value: ${position}`);
console.log(`Type: ${typeof phone} Value: ${phone}`);
console.log(`Type: ${typeof driver_license} Value: ${driver_license}`);
console.log(`Type: ${typeof days_of_work} Value: ${days_of_work}`);
console.log(`Type: ${typeof ba} Value: ${ba}`);
