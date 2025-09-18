
// problem 1 in bonus

// function printSentence() {
//     for (let i = 1; i <= 6; i++) {
//         document.write("<h" + i + ">Welcome to my page</h" + i + ">");
//     }
// }

// printSentence();




// function takeString() {
//     let str = prompt("Enter a string:");
//     let divider = prompt("Enter the maximum number of characters in a word:");
//     divider = parseInt(divider);
//     editTheString(str, divider);
// }

// function editTheString(str, divider) {
//     let sz = str.length;
//     divider = Math.min(divider, sz);
    
//     let array = [];
//     for (let i = 0; i < sz; i += divider) {
//         let part = str.substring(i, i + divider);
//         if(part.length < divider) {
//             array[array.length - 1] += part;
//             break;
//         }
//         if (part.length > 0) {
//             array.push(part);
//         }
        
//     }

//     for (let i = 0; i < array.length; i++) {
//         let new_str = "";
//         for (let j = 0; j < array[i].length; j++) {
//             if (array[i][j] === 'a' || array[i][j] === 'A') {
//                 new_str += 's';
//             }
//             else{
//                 new_str += array[i][j];
//             }
//         }
//         array[i] = new_str;
//     }

//     for (let i = 0; i < array.length; i++) {
//         document.write("word number " + (i + 1) + ": " + array[i] + "<br>");
//     }
    
    

// }


// var userData = {
//     name: "adam",
//     age: 20,
//     add:function() {
//         let str = prompt("Enter a string:");
//         let where = document.getElementById("test");
//         where.appendChild(document.createTextNode(str));
//     },
//     remove:function() {
//         let where = document.getElementById("test");
//         if (where.hasChildNodes()) {
//             where.removeChild(where.lastChild);
//         } else {
//             alert("No more elements to remove.");
//         }
//     },
// };


// problem 1


// function getTip(){
//     let array = ["tip1", "tip2", "tip3", "tip4", "tip5", "tip6", "tip7", "tip8", "tip9", "tip10"];
//     let randomIndex = Math.floor(Math.random() * 10);

//     let tip = array[randomIndex];
//     document.writeln("<h1>" + tip + "</h1>");
    
// }


// problem 2

// function getCurrentDate() {
//     let date = new Date();
//     date = date.toLocaleString();
    

//     document.writeln("<h1>" + date + "</h1>");
// }


// problem 3


// function checkEmail() {

//     let email = prompt("Enter your email address:");
    
//     if(email[0] === '@' || email[email.length - 1] === '@') 
//     {
//         alert("Email cannot start or end with '@'.");
//         return;
//     }
    
//     let found = false;
//     for (let i = 0; i < email.length; i++) {
//         if (email[i] ===  '@') {
//             found = true;
//                 break;
//         }
//     }
//     if (!found) {
//         alert("Email must contain '@'.");
//         return;
//     }
//     else{
//         alert("Email is valid.");
//     }

    
// }

// checkEmail();


// problem 4

// function checkUserData() {

//     nameConditions = /^([A-Za-z]{3,})( [A-Za-z]{3,})+$/;

//     let name = prompt("Enter your name:");

//     while (!nameConditions.test(name)) {
//         alert("Incorrect name format.");
//         name = prompt("Enter your name:");
//     }

//     emailConditions = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu)\.eg$/;

//     let email = prompt("Enter your email address:");
//     while (!emailConditions.test(email)) {
//         alert("Incorrect email format.");
//         email = prompt("Enter your email address:");
//     }

//     document.writeln("<h1>Welcome " + name + "</h1>");
//     document.writeln("<h1>Your email is: " + email + "</h1>");

// }


// checkUserData();


// problem 6


    let grades = [60, 100, 10, 15, 85];
    grades.sort(function(a, b) {
        return b - a; 
    });

    document.write("<strong>Sorted Grades (Descending):</strong> " + grades.join(", ") + "<br>");

    
    let highestValid = grades.find(function(grade) {
        return grade <= 100;
    });

    document.write("<strong>Highest Grade ≤ 100:</strong> " + highestValid + "<br>");

    
    let failedStudents = grades.filter(function(grade) {
        return grade < 60;
    });

    document.write("<strong>Grades Below 60:</strong> " + failedStudents.join(", ") + "<br>");


