var name = "Josh";
var age;
age = 45;
console.log(name);
console.log(age);


var myAge = 25;

/*BASIC OPERATORS*/
console.log("BASIC OPERATORS");
console.log(2 + 2);
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);


// 4 / 2 = 2
console.log(4 / 2);
//With a remainder of 0
console.log(4 % 2);

// 7 / 2 = 3.5
console.log(7 / 2);
//With a remainder of 1
console.log(7 % 2);

// If a number modulus other number is equal to 0
// it is a multiple of "other number"

// 8 is indeed a multiple of 2!
console.log(8 % 2 === 0);
// 9 is NOT a multiple of 2!
console.log(9 % 2 === 0);

myAge += 1;
console.log(myAge);


var i2 = 10 + 5 * 2 ** 3 / 4 - 6;
console.log(i2);

//  === 10 + 5 * 8 / 4 - 6
//  === 10 + 5 * 2 - 6
//  === 10 + 10 - 6
//  === 10 + 4
//  ==> 14



var expressionOne = ((2 * 2) + 5) * 6;
 console.log("54-->((2 * 2) + 5) * 6 --> "+expressionOne);

var expressionTwo = ((2* 2) + (5 * 3)) - 5;
 console.log("14-->((2* 2) + (5 * 3)) - 5 --> "+expressionTwo);

var expressionThree = (5 * 5) / (5 * 5);
 console.log("1 -->(5 * 5) / (5 * 5) --> "+expressionThree);

var expressionFour = 5 * 5 - 5 * 4;
 console.log("5-->5 * 5 - 5 * 4 --> "+expressionFour);


/*ARRAYS*/
console.log("**** ARRAYS ****");

 var animalArray = ["Dog", "Cat", "Fish"];

var myDog = animalArray[0];
console.log(myDog);

var myFish = animalArray[2];
console.log(myFish);

// returns undefined when the index element does not exists
var myUndefinedElement = animalArray[3];
console.log(myUndefinedElement);

console.log("animalLenght --> "+ animalArray.length);

var animalArray = ["Dog", "Cat", "Fish"];

for (var i = 0; i < animalArray.length; i++){
  console.log(animalArray[i]);
}

/*EXERCISE*/

console.log("Exercise \nCreate an array of at least 6 of your favorite foods. \nWith the loop of your choice, iterate through the array, but only print out the foods with an even index.");

// var foods=["meat","pizza","kebap","omelette","beer","tuna"];
// var i=0;
// 
// console.log(foods);
// for(i;i<=foods.length;i++){
//   if(i%2 || i===0){
//       console.log(""+foods[i]);
//   }
// }
