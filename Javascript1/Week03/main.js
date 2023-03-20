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
