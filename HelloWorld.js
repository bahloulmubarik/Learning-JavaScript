// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=15);

// let password;

// while(password!=="1234"){
//     password= prompt("Enter your password:");}

// console.log("Access granted!");

//for in-loop

// let student = {
//   name : "Bahloul",
//   age : 24,
//   city : "Islamabad",
//   cgpa : 3.8,
//   ispassed : true
// };

// for (let key in student){
//     console.log("key =", key, "value", student[key]);
// }

//print even numbers from 0 to 100

// for (let i=0; i<=100; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

//guess the number game

// let secretNumber = 7;

// let usernum = prompt("Guess the secret number"); //user will enter prompt to guess number

// while(usernum != secretNumber){
//     usernum = prompt("Wrong guess! Try again.");
// }

// console.log("Congratulations! You guessed the secret number.");

// let str = "Bahloul";

// console.log(str.length);


//string question

// let fullName = prompt("Enter your full name");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);
 
//arrays

// let marks = [12,24,43,53,64];
// console.log(marks);

// let Heros = ["Krish","superman","bahloul","spiderman","batman","ironman","captain america","thor","hulk"];

// for (let idx=0; idx<Heros.length; idx++){
//     console.log(Heros[idx]);
// }()

let marks = [12,24,43,53,64]; //sum and average of array elements
let sum = 0; //initialize sum to 0

for(let val of marks){ //for each loop
    sum += val; //add each element to sum
}
let avg = sum / marks.length;  //calculate average by dividing sum by number of elements in array 
console.log(`The average is: ${avg}`); //print average to console 
