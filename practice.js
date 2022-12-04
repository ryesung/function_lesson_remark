
// function gasPump(gallons){

//   const price = gallons * 4.16;
//   const decimal_price = price.toFixed(2);
//   console.log(`Please pay $${decimal_price} for ${gallons} gallons. Thank you for choosing Mobile!`);
//   return price;
// }

// const value = gasPump(5);
// console.log(value);

function multiply(number1, number2) {
  console.log(number2)
  return number1 * number2;
}

console.log(multiply(3));

// function isSuperhuman(name = null){
//   if (!name){
//     return "There are no superhumans around.";
//   }else {
//     return `${name} has superpowers!!!`;
//   }
// }

// console.log(isSuperhuman());
// console.log(isSuperhuman('Chris'));


// let constellation = 'Big Dipper';
// console.log(constellation)

// function changeStars(){
//   constellation = 'little dipper'
//   return 'Stars changed.'
// }

// changeStars();
// console.log(constellation);

// let state = 'New York'

// function scopePractice(){
//   let city = 'NYC';
//     if (state=== 'New York' && city === 'NYC' ){
//       let borough = 'Brooklyn';
//       console.log(borough) 
//     }
    
//    console.log(city);
// }

// scopePractice()

// let exerciseArray = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 mile run', '60 second plank', 'Burpees', 'Jumping Jacks', 'Squats', 'Weighted Squats', 'Inch Worms'];

// function exerciseGenerator(num_of_excercises) {
//   let selectedExercise;
//   let indexNum;
//   for (let i = 0; i < num_of_excercises; i++) {
//       indexNum = Math.floor(Math.random() * exerciseArray.length);
//      selectedExercise = exerciseArray[indexNum];
//   console.log(selectedExercise)
// };
// };

// // exerciseGenerator(8)

// const arrowGenerator = num_of_excercises => {
//   let selectedExercise;
//   let indexNum;
//   for (let i = 0; i < num_of_excercises; i++) {
//       indexNum = Math.floor(Math.random() * exerciseArray.length);
//       selectedExercise = exerciseArray[indexNum];
//       console.log(selectedExercise);
// };

// };

// // arrowGenerator(3);

// let arnoldsList = ['Squats', 'Weighted Squats', '60 second plank', '1 mile run', 'Sit-ups'];


// function exerciseWithArnold(num_of_excercises) {
//   let selectedExercise;
//   let indexNum;
//   for (let i = 0; i < num_of_excercises; i++) {
//       indexNum = Math.floor(Math.random() * exerciseArray.length);
//      selectedExercise = exerciseArray[indexNum];
//      console.log(selectedExercise);
//      for (let a = 0; a < arnoldsList.length; a++){
//        if (selectedExercise == arnoldsList[a]) {
//          console.log("ARNOLD SAYS: This is a good exercise. I am going to PUMP YOU UP!");
//          break;
//        }
//      }
// }
// }

// exerciseWithArnold(10);

// function bonusExerciseWithArnold(num_of_excercises) {
//   let selectedExercise;
//   let indexNum;
//   for (let i = 0; i < num_of_excercises; i++) {
//       indexNum = Math.floor(Math.random() * exerciseArray.length);
//      selectedExercise = exerciseArray[indexNum];
//      console.log(selectedExercise);
//      let arnoldCriticism = true;
//      for (let a = 0; a < arnoldsList.length; a++){
//        if (selectedExercise == arnoldsList[a]) {
//          console.log("ARNOLD SAYS: This is a good exercise. I am going to PUMP YOU UP!");
//          arnoldCriticism = false
//          break;
//        } else if (a == (arnoldsList.length - 1) && arnoldCritism == true) {
//         console.log
//        }
//      }
// }
// }

// let desertArray = ['cake', 'ice cream', 'cookies'];

// let value = desertArray.push('whipped cream')

// console.log(value);
// console.log(desertArray);

// let desertArray = ['cake', 'ice cream', 'cookies'];

// let value = desertArray.shift();

// console.log(value);
// console.log(desertArray);

// let desertArray = ['cake', 'ice cream', 'cookies'];

// let value = desertArray.join();

// console.log(typeof value);
// console.log(value);


// let statement = desertArray.join(' and ');

// console.log('I like ' + statement + '!');


// let names = ['mashed potatoes', 'french fries', ['mayo', 'hot sauce', 'ketchup'], 'baked potatoes'];



// //ho


// let names = ['mashed potatoes', 'french fries', ['mayo', 'hot sauce', 'ketchup'], 'baked potatoes'];

// for (let i=0; i < names.length; i++){
//   console.log('Good afternoon, ' + names[i] + '!');
// };

// prints Good afternoon, 

//ho


let namesList = ['Sam', 'Greg', 'Layla', 
'Tom', 'Sasha', 'Samantha'];

// let s_names = []

// for (let i=0; i < names.length; i++){
  
//   if (names[i][0] == 'S'){
//   s_names.push(names[i].toLowerCase());
//   }
// };

// console.log(s_names);




//Challenge  

// how can we populate names2 all lower case values of names


// const names = ['Sam', 'Greg', 'Layla', 'Tom', 'Sasha', 'Samantha'];

// let lower_case = [];

// for (let i=0; i < names.length; i++ ){
    
//   lower_case.push(names[i].toLowerCase());
   
//   };

//   console.log(lower_case)

// function holidayMessage() {  
//   return 'Happy Holidays!';
// };

//inner function option #2

// function birthdayMessage() {
//   return 'Happy Birthday!';
// };

//higher-order function

// function sendMessage(func, name){
//     const occasion = func();
//     return "Dear " + name + ", " + occasion
// };

// console.log(sendMessage(birthdayMessage, 'Chris'));



// function evensOnly(arr) {


//   return arr.filter(num => num % 2 === 0);

// }

// console.log(evensOnly([3, 6, 8, 2])); 

// /// [6, 8, 2]








// Q1 Define a function called cleanNames that accepts an array of strings containing additional space characters at the beginning and end. The cleanNames() function should use the array map method to return a new array full of trimmed names(hint: string method .trim. For example:

//   cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "]) 
//   should give
//   ["avengers", "captain_america", "ironman", "black panther"]

const names = [" avengers", "   captain_america", "ironman   ", " black panther   "];

function cleanNames(arr){
  return arr.map(n => n.trim());
}

const cleanArray = cleanNames(names);
console.log(cleanArray);

console.log(names.map(n => n.trim()));


















// Q2 Write a function convertMilesToKilometers that uses an array as a parameter. Using the map() function and returns a new array, kilomArray, with miles converted to kilometers. Then using the reduce()  function add up all the items in the kilomArray and return it to the variable- totalDistanceInKilometers.  Console.log  totalDistanceInKilometers with only 2 decimal places!

// Conversion to km-  mile*1.609
  

const milesArray = [30, 12, 16, 20, 35];

function convertMilesToKilometers(arr){
  return arr.map(miles => miles *1.609);
}

const kilamArray = convertMilesToKilometers(milesArray);
// console.log(kilamArray);

const totalDistanceInKilometers = kilamArray.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
} )

console.log(totalDistanceInKilometers.toFixed(2) + ' total kms');


function multiply(a,   ) {
  return a * b;
}












let num = 5;

function addFive(number){
  number += 5
  return number
}

addFive(num)
console.log(num)







// function convertMilesToKilometers(arr) {
//   return arr.map(miles => miles * 1.609);
// }

// const kilamArray = convertMilesToKilometers(milesArray);
// // console.log(kilamArray);

// const totalDistanceInKilometers = kilamArray.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }
//  )

//  console.log(totalDistanceInKilometers);

// const kilomArray = milesArray.map(mile => mile*1.609)



// console.log(kilomArray);


// const totalDistance = kilomArray.reduce((accumulator, currentValue) => accumulator + currentValue );
// console.log(totalDistance.toFixed(2) + ' total km');


