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
function filterArray(numbers, value) {
   // Change code below this line
let newArray = [];
  for (number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }
  return newArray;


  // Change code above this line
}