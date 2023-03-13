//1 - log with console function
console.log("Hello World!"); //English
console.log("Merhaba, Dünya!"); //Turkish

//2 - use different quotes types for log with console function
console.log("I'm awesome");

//3 - declare and initilize a number type variable
let x;
console.log("The value of x will be: undefined");
console.log(x);
x = 54;
console.log("The value of x will be: 54");
console.log(x);

//4 - declare and initilize a string type variable
let y = "My name is Jack!";
console.log('The value of y will be: "My name is Jack!"');
console.log(y);
y = "No, your name is Jackson!";
console.log('The value of y will be: "No, your name is Jackson!" ');
console.log(y);

//5 - use Math function for round number and find max.
let z = 7.25;
console.log(z);
let a = Math.floor(z);
console.log(a);
let b = Math.max(a, z);
console.log(b);

//6 - declare array and add a new element to it
let favFruits = [""];
console.log("The value of favFruits will be: []");
console.log(favFruits);
let favAnimals = ["cat", "dog", "lion", "squirrel"];
console.log(favAnimals);
favAnimals.push = "baby pig";
console.log(favAnimals);

//7 - obtain a string length
let myString = "this is a test";
console.log(myString);
let myStringLength = myString.length;
console.log(myStringLength);

//8 - obtain different data types of variables and compare them
let firstName = "Jack";
console.log("The value of my variable firstName is: " + firstName);
console.log("The type of my variable firstName is: string");
console.log(typeof firstName);

let age = 30;
console.log("The value of my variable age is: " + age);
console.log("The type of my variable age is: number");
console.log(typeof age);

let adultCheck = true;
console.log("The value of my variable adultCheck is: " + adultCheck);
console.log("The type of my variable adultCheck is: boolean");
console.log(typeof adultCheck);

let phoneNumber = 12345678991;
console.log("The value of my variable phoneNumber is: " + phoneNumber);
console.log("The type of my variable phoneNumber is: number");
console.log(typeof phoneNumber);

typeCheck(firstName, age);
typeCheck(firstName, adultCheck);
typeCheck(firstName, phoneNumber);
typeCheck(age, adultCheck);
typeCheck(age, phoneNumber);
typeCheck(adultCheck, phoneNumber);

function typeCheck(var1, var2) {
  if (typeof var1 === typeof var2) {
    console.log(
      `"${var1}"(${typeof var1}) and "${var2}"(${typeof var2}) are SAME TYPE`
    );
  } else {
    console.log(
      `"${var1}"(${typeof var1}) and "${var2}"(${typeof var2}) are not SAME TYPE.`
    );
  }
}

//9 - How to use modulus operator
let x5 = 7;
x5 = x5 % 3;
console.log("The new value of my variable x5 is: 1 ");
console.log(x5);
console.log("x5 = x5 % 5 will be 2");
console.log("x5 = x5 % 4 will be 3");
console.log(
  "Modulus operator (%) returns the remainder left over when one operand is divided by secons operand. "
);
console.log(
  "In this case, when we divide 7 by 3, we obtained 1 as left over.  "
);
console.log("This can be use to determine if a number even or odd.  ");

//10 - Data types in arrays and infinitives
let arr = ["apple", 5, "orange", 95, false];
console.log(arr);
console.log("Arrays can contain a mix of different data types.");

if (6 / 0 === 10 / 0) {
  console.log("Yep, they are equal.");
} else {
  console.log("Nope, they are not equal.");
}
console.log(
  "6/0 === 10/0 comparison gives us true, so we can compare infinites. Infinity === Infinity is true."
);
