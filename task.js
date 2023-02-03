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
function slugify(title) {
    // Change code below this line
  
  return title.toLowerCase().split(' ').join('-');
  
    // Change code above this line
  }