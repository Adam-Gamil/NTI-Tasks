

// function countSort(arr) {

//     let max = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     const count = new Array(max + 1).fill(0);

//     for (let i = 0; i < arr.length; i++) {
//         count[arr[i]]++;
//     }

//     const sortedArr = [];
//     for (let i = 0; i < count.length; i++) {
//         while (count[i] > 0) {
//             sortedArr.push(i);
//             count[i]--;
//         }
//     }

//     return sortedArr;
// }


// function bsFind(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = (left + (right - left) / 2); 
//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1; 
// }


// let arr = [4, 2, 2, 8, 3, 3, 1];
// document.writeln("Original array: " + arr + "<br> <br>");



// arr = countSort(arr);

// document.writeln("Sorted array: " + arr + "<br> <br>");

// let target = 30;
// let index = bsFind(arr, target);

// document.writeln("we found " + target + " at index: " + index + "<br>");



const students = [

    {
        ID: 1,
        name: "Adam",
        age: 21,
        address: "Cairo",
        skills: ["C++", "Python", "HTML"],
        isLeader: true
    },

    {
        ID: 2,
        name: "Ahmed",
        age: 22,
        address: null,  
        skills: ["Java", "SQL"],
        isLeader: false
    },

    {
        ID: 3,
        name: "Anas",
        age: 20,
        address: "Giza",
        skills: ["JavaScript", "React", "Node.js"],
        isLeader: true
    }
];

students.forEach(student => {
    console.log(`Name: ${student.name}`);
    console.log(`Skills: ${student.skills.join(", ")}`);
    console.log("----");
});
