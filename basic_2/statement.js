// task 1

console.log("TASK 1:pass or fail");
let score = 55;

if(score >= 50){
    console.log("you passed the exam...");
}
else{
    console.log("sorry,you fail the exam..!");
}

// task 2
console.log("TASK 2: even or odd");
let number = 7
if(number % 2 ===0){
    console.log("is even");
}
else{
    console.log("is odd");
}

// task 3
console.log("TASK 3:Age check");
let age = 20;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// task: 4
console.log("TASK 4:Grade Evaluation");
let scores = 45;

if(scores >= 90){
    console.log("you get A grade");
}else if(scores >= 80){
    console.log("you get B grade");
}else if(scores >= 70){
    console.log("you get C grade");
}else if(scores => 60){
    console.log("you get D grade");
}else{
    console.log("you get F grade");
}

// TASK 5: Time of day
console.log("TASK 5: Time of day"); 
let hour = 15;

if(hour >= 5 && hour < 11){
    console.log("Good Morning, Boss");
}else if(hour >= 12 && hour < 17){
    console.log("Good Afternoon, Boss");
}else if(hour >= 18 && hour < 21){
    console.log("Good Evening, Boss");
}else{
    console.log("Good night, Boss");
}

// TASK 6 : Leap year check
console.log("TASK 6 : Leap year check");
let year = 2024;
if((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)){
    console.log("This is leap year");
}else{
    console.log("This is not leap year");
}





