

// let count = 0;
// setInterval(() => {
//     const testDiv = document.getElementById('test');

//     if (count === 10) {
//         testDiv.innerHTML = ''; 
//         count = 0;              
//     }

//     const p = document.createElement('p');
//     p.textContent = "This is a simple HTML page with a JavaScript function.";
//     testDiv.appendChild(p);

//     count++;
    
// }, 1000);




function goToNextPage(page_current_num) {

    window.location.href = "index" + (page_current_num + 1) +".html";
}


function goToPrevPage(page_current_num) {

    window.location.href = "index" + (page_current_num - 1) +".html";
}






// let arr = ["pic1.png", "pic2.png", "pic3.png"];

// setInterval(() => {
//     let randomIndex = Math.floor(Math.random() * arr.length);

//     document.images[0].src = arr[randomIndex];
    
// }, 1000);