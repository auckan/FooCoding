//1.Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString, ", Length: " + myString.length);
myString = myString.replaceAll(",", " ");
console.log(myString);

//2.Arrays!
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log(
  "The value of new array will be: ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']"
);
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log(
  "The item you are looking for is at index: " +
    favoriteAnimals.indexOf("meerkat")
);

//More JavaScript
//////////   1   //////////
const sum = (n1, n2, n3) => {
  let ntotal = n1 + n2 + n3;
  console.log("Sum of these numbers is: " + ntotal);
};

sum(5, 10, 6);

//////////   2   //////////
const colorCar = (color) => {
  console.log(`a ${color} car`);
};

colorCar("red");

//////////   3   //////////
const obj = {
  favcolor: "blue",
  favfruit: "apple",
  luckynumber: 9,
};

function printObjectProperties(object) {
  for (property in object) {
    console.log(property + ": " + object[property]);
  }
}

printObjectProperties(obj);

//////////   4   //////////
const vehicleType = (color1, code) => {
  let type = code === 1 ? "car" : "motorbike";
  console.log(`a ${color1} ${type}`);
};

vehicleType("blue", 2);

//////////   5   //////////
console.log(3 === 3 ? console.log("yes") : console.log("no"));

//////////   6   //////////
const vehicle = (color2, code2, age) => {
  let type1 = code2 === 1 ? "car" : "motorbike";
  let status = age <= 1 ? "new" : "used";
  console.log(`a ${color2} ${status} ${type1}`);
};

vehicle("blue", 1, 5);

//////////   7   //////////
const vehicles = ["motorbike", "caravan", "bike", "car"];
console.log(vehicles);

//////////   8   //////////
console.log(vehicles[2]);

//////////   9   //////////
const vehicle2 = (color3, code3, age2) => {
  let type2 = vehicles[code3 - 1];
  let status1 = age2 <= 1 ? "new" : "used";
  console.log(`a ${color3} ${status1} ${type2}`);
};

vehicle2("green", 3, 1);

//////////   10   //////////
const message = (arr) => {
  let newStr = `"Amazing Joe's Garage, we service `;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === 0) newStr = newStr + `and ${arr[i]}s."`;
    else {
      newStr = newStr + `${arr[i]}s, `;
    }
  }
  console.log(newStr);
};

message(vehicles);

//////////   11  //////////
vehicles.push("truck");
message(vehicles);

//////////   12  //////////
const emptyObj = {};

//////////   13  //////////
const myTeachers = {
  name1: "Frank",
  name2: "Emmy",
  name3: "Freddy",
};

//////////   14  //////////
const myTeachers2 = {
  Frank: "HTML",
  Emmy: "CSS",
  Freddy: "Javascript",
};

//////////   15  //////////
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log("The value of x == y is true ");
let eq1 = x == y ? "true" : "false";
console.log(eq1); //false

console.log("The value of x === y is false ");
let eq2 = x === y ? "true" : "false";
console.log(eq2); //false

console.log("The value of z == y is true ");
let eq3 = z == y ? "true" : "false";
console.log(eq3); //true

console.log("The value of z == x is false ");
let eq4 = z == x ? "true" : "false";
console.log(eq4); //false

//////////   16   //////////

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o2 = { foo: "pub" };
o1 = { foo: "home" };
console.log(o2);
console.log(o3);
console.log("Changing o2 does not change o3. Changing o1 hdoes not change o3.");

//////////   17   //////////
let bar = 42;
console.log(typeof typeof bar);

/* typeof bar will evaluate to "number", because bar is assigned the number 42.
typeof "number" will evaluate to "string", because typeof always returns a string representation. */
