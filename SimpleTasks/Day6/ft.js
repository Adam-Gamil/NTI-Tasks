// problem 1
// alert("Welcome to my website!");

// let name = prompt("Enter your name: ");

// document.write("Hello " + name + "!<br>");





// problem 2

// function showMessage() {
//             alert("enter 2 numbers");
//             let num1 = parseFloat(prompt("Enter first number:"));
//             let num2 = parseFloat(prompt("Enter second number:"));

//             let sum = num1 + num2;
//             console.log("The sum is: " + sum);
// }




// problem 3

// function checkWhether(num) {

//     num >= 30 ? console.log("HOT")  : console.log("COLD")

// }

// let whether = prompt("Enter your temp: ");
// whether = parseInt(whether);
// checkWhether(whether);


// problem 4

// function checkWhether2(temp, actualTemp) {

//     if( temp >= 25 && actualTemp >= 25 && temp <= 30 && actualTemp <= 30) {
//         console.log("Normal");
//     }
//     else if(temp > 30 && actualTemp > 30) {
//         console.log("Hot");
//     }
//     else if(temp < 25 && actualTemp < 25) {
//         console.log("Cold");
//     }
//     else {
//         console.log("Ambiguous, can’t detect");
//     }

// }

// checkWhether2(5, 40);



// problem 5

// function checkPrograms(Faculty){
//     switch(Faculty) {
//         case "FCI":
//             console.log("You’re eligible to Programing tracks");
//             break;
//         case "Engineering":
//             console.log("You’re eligible to Network and Embedded tracks");
//             break;
//         case "Commerce":
//             console.log("You’re eligible to ERP and Social media tracks");
//             break;
//         default:
//             console.log("You’re eligible to SW fundamentals track");
//     }
// }

// checkPrograms("msa");


// problem 6

// function printOddNumbers(start, end) {
//     for (let i = start; i <= end; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }

// printOddNumbers(1, 100);


// problem 7



// function handleClick() {
//         const expression = prompt("Enter a math expression:");
//         evaluateExpression(expression);
// }

// function evaluateExpression(expr) {
            
//         const result = eval(expr);
//         alert(`You entered: ${expr}, and the result is: ${result}`);
        
// }



// problem 8


function takeUserData() {
    const name = prompt("Enter your name:");

    let birthYear = prompt("Enter your birth year and it should be 2010 or earlier:");
    birthYear = parseInt(birthYear);
    while (isNaN(birthYear) || birthYear > 2010) {
        alert("Please enter a valid birth year (2010 or earlier).");
        birthYear = parseInt(prompt("Enter your birth year:"));
    }

    console.log("taked data till now is name and birth year");

    let age = prompt("Enter your age:");
    age = parseInt(age);
    while (isNaN(age)) {
        alert("Please enter a valid age.");
        age = parseInt(prompt("Enter your age:"));
    }

    console.log("taked data till now is name, birth year and age");


    document.write("<strong>Name:</strong> " + name + "<br>");
    document.write("<strong>Birth Year:</strong> " + birthYear + "<br>");
    document.write("<strong>Age:</strong> " + age + "<br>");
}




// let x = prompt("Enter your mark: ");
// x = parseInt(x);

// if(x > 80){
//     console.log("Excellent");
// }
// else if(x > 60){
//     console.log("Good");
// }
// else if(x > 50){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// }


// switch(true){
//     case x > 80:
//         console.log("Excellent");
//         break;
//     case x > 60:
//         console.log("Good");
//         break;
//     case x > 50:
//         console.log("Pass");
//         break;
//     default:
//         console.log("Fail");
//         break;
//     }