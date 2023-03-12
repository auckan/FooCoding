//obtain different data types of variables and compare them
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
