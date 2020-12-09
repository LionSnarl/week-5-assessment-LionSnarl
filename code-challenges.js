// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"
//Create a function that takesin a string and returns a coded message.
//The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
//Create a function that takes in a string
const crazyCase = (string) => {
//create an array of substrings through .split in order to have an array to work with
  let newString = string.split("")
//  console.log(newString);
// .map over your newString since its nested inside an array.
  var mapOver = newString.map(value => {
//  if a value in my array is strictly equal to "a"
//return that value is equal to 4
//  else if a value in my array is strictly equal to "e"
//return that value is equal to 3
//  else if a value in my array is strictly equal to "i"
//return that value is equal to 1
//  else if a value in my array is strictly equal to "o"
//return that value is equal to 0
//  else return my value (value 'as is')
    if(value === "a"){
      return value = 4
    }else if (value === "e"){
      return value = 3
    }else if (value === "i"){
      return value = 1
    }else if (value === "o"){
      return value = 0
    }else {
      return value
    }
  })
//returns a coded message named mapOver
  return mapOver.join("")
}
console.log(crazyCase(secretCodeWord1));
console.log(crazyCase(secretCodeWord2));

// const crazyCase1 = (string) => {
//   var codedMessage = ""
//   for(var i = 0; i < string.length; i++){
//     if (i === "a"){
//       codedMessage = 4
//     }else if(i === "e"){
//       codedMessage = 3
//     }else if(i === "i"){
//       codedMessage = 1
//     }else if(i === "o"){
//       codedMessage = 0
//     }else{
//     }
// //   }
//   return codedMessage
// }
// console.log(crazyCase1(secretCodeWord1));


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

//create a function taking in an array of strings..
//I need to .filter for both A & a, assign newArray the filtering of value.includes ("a") || value.includes ("A")
//return newArray into a string "Apple" "Banana" "Peach", as stated.

const onlyAs = (arr) => {
  newArray = arr.filter(value => value.includes("a") || value.includes("A"))
  return newArray.join(" ")
}
console.log(onlyAs(arrayOfWords));
// const onlyAs1 = (arr) => {
//   return arr.filter(value => value.includes("a"))
// }
// console.log(onlyAs1(arrayOfWords));

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

/*Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.*/

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [3, 5, 3, 5, 3]
// Expected output: true

//A function taking an array of 5 numbers
//if you .sort the array and make 5 numbers in numerical order
// 6, 2, 4, 2, 2 >SORTED>>> 2, 2, 2, 4, 6
//there are only two possible "winning" scenarios if your logic in comparing only 5 "cards"
//if numbers start 0-4, if 0==1==2, and 3==4 or else if 0==1 and 2==3==4
//true (You have a full house)
//anything else would be false
//A function taking an array of 5 numbers
 const fullHouse = (array) => {
//.sort least to greatest
   let sortArray = array.sort((a,b)=>a-b)
//if index 0 equals index 1, index 2.....
   if (sortArray[0] === sortArray[1] && sortArray[0] === sortArray[2] && sortArray[3] === sortArray[4]){
     return true
   }else if (sortArray[0] === sortArray[1] && sortArray[2] === sortArray[3] && sortArray[2] === sortArray[4])
   {return true
   }else
   return false
 }
console.log(fullHouse(hand1));
console.log(fullHouse(hand2));
console.log(fullHouse(hand3));
console.log(fullHouse(hand4));

//// STRETCH:
var hand5 = ["K", 5, "K", 5, "K"]
//if I take my if/else statement above, .map more else if rules IF they are AKQJ, for comparing between the Aces/Kings/Queens/Jacks
// Expected output: true
var hand6 = ["A", "Q", "A", 5, 3]
// Expected output: false
