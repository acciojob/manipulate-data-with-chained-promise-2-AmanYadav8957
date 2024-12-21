//your JS code here. If required.
// Function that returns a promise resolving with an array after 3 seconds  
function getArrayAfterDelay() {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            resolve([1, 2, 3, 4]);  
        }, 3000);  
    });  
}  

// Function that filters out odd numbers from an array  
function filterEvenNumbers(arr) {  
    return new Promise((resolve) => {  
        const evenNumbers = arr.filter(num => num % 2 === 0);  
        // Update the output after 1 second  
        setTimeout(() => {  
            document.getElementById("output").textContent = evenNumbers.join(", ");  
            resolve(evenNumbers); // Return the even numbers  
        }, 1000);  
    });  
}  

// Function that multiplies even numbers by 2  
function multiplyByTwo(arr) {  
    return new Promise((resolve) => {  
        const multipliedNumbers = arr.map(num => num * 2);  
        // Update the output after another 2 seconds  
        setTimeout(() => {  
            document.getElementById("output").textContent = multipliedNumbers.join(", ");  
            resolve(multipliedNumbers); // Return the multiplied numbers  
        }, 2000);  
    });  
}  

// Execute the chained promises  
getArrayAfterDelay()  
    .then(filterEvenNumbers)  
    .then(multiplyByTwo);