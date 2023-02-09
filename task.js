// task_3
// function checkStorage(available, ordered) {
//     // Change code below this line
    
  
//     if (ordered === 0) {
//       return "Your order is empty!";
//     }
//     if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     }
//       return "The order is accepted, our manager will contact you";
    
  
   
//     // Change code above this line
//   }
  
// task_9
// function getExtremeElements(array) {
//     // Change code below this line
//   return [array[0]].concat([array[array.length - 1]]);
  
//     // Change code above this line
//   }

// task_11
// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
 
//  return (message.split(' ').length) * pricePerWord;
 
//     // Change code above this line
//  }


// task_13
// function slugify(title) {
//     // Change code below this line
  
//   return title.toLowerCase().split(' ').join('-');
  
//     // Change code above this line
//   }

// task_14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3);

// task_16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// let newArray = firstArray.concat(secondArray);
// if (newArray.length > maxLength) {
//   return newArray = newArray.slice(0, maxLength);
// }
// return newArray;
//     // Change code above this line
//   }

// task_19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// task_20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (value of order) {
//     total += value;
//   }
//   // Change code above this line
//   return total;
// }

// task_21
// function findLongestWord(string) {
//   // Change code below this line
//   let array = string.split(' ');
//   let maxLongWord = '';
//   for (let i = 0; i < array.length; i += 1) {
//     if (maxLongWord.length < array[i].length) {
//       maxLongWord = array[i];
//     }
//   }
// return maxLongWord;

//   // Change code above this line
// }

// task_22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i += 1 ) {
//   numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }

// task_23
// function filterArray(numbers, value) {
//    // Change code below this line
// let newArray = [];
//   for (number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;


//   // Change code above this line
// }

// task_24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// task_25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {today: {high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;

// task_26
// Change code below this line
// function calculateMeanTemperature(forecast) {

//   const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;
//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }

// task_27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// task_28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// task_29
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// task_30
function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  const newObject = {category: "General", priority: "Normal", ...data, completed: false };
 return newObject;
 
  // Change code above this line
}


  
