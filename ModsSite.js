const wordInput = document.getElementById("wordInput"); // Get the input element by its ID.
const enterButton = document.getElementById("enterButton"); // Get the button element by its ID.

// Event listener for the "keydown" event (pressing Enter in the input field)
wordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        captureAndLogWord(); // Call the function to capture and log the word.
    }
});

// Event listener for the "click" event on the button
enterButton.addEventListener("click", captureAndLogWord); // Call the same function when the button is clicked.

function captureAndLogWord() {
//    user enters one of the 4 main types
//    
   
    const enteredWord = wordInput.value; // Get the value from the input field.
    console.log(enteredWord); // Print the captured word to the browser console.
    wordInput.value = ""; // Clear the input field (optional).

    
    
    fetch("https://api.modrinth.com/v2/search?query=&facets=%5B%5B%22project_type%3A" + enteredWord + "%22%5D%5D&limit=100", {
    method: "GET",
    headers: {
        "User-Agent": "test-script/1.0 (you@example.com)"
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        //console.log(data);
        // console.log("Modrinth mods found:", data.hits);
        for (let i = 0; i < data.hits.length; i++) {
            console.log(i + 1 + ": " + data.hits[i].title);

        }
    })
    .catch(error => {
        console.error("Error fetching Modrinth data:", error);
    });
}



// var aquireHtmlInput = document.getElementById('<div contenteditable="plaintext-only"></div>')

// const RELOAD = document.getElementById('RELOAD');

// RELOAD.addEventListener('click', () => {
//     location.reload();
// })


// var search_querys_ORGIN = aquireHtmlInput
// console.log('search querys original:   ' + search_querys_ORGIN)
// // var SQ_tobe_ARAY = search_querys_ORGIN.toLowerCase();
// // console.log('search querys to search for BEOFRE SPLITTING   ' + SQ_tobe_ARAY)
// var search_querysARAY = search_querys_ORGIN.replaceAll(' ', ',').split(',');
// console.log('search querys to search for AFTER SPLITTING   ' + search_querysARAY)

// const search_querys_list_container = document.getElementById('SEARCH-QUERYS-LIST');
// const ulElement = document.createElement('ul');

// search_querysARAY.forEach(item => {
//     const liElement = document.createElement('li');
//     liElement.textContent = item;
//     ulElement.appendChild(liElement);
// })

// var querys_stringified = search_querysARAY.join('');

// // Saving data
// sessionStorage.setItem('SEARCH-INPUTS', 'TESTDATA');

// // Retrieving data
// const savedSessionData = sessionStorage.getItem('SEARCH-INPUTS');
// if (savedSessionData) {
//     // Apply savedSessionData to your HTML element
//     document.getElementById('SEARCH-QUERYS-LIST').value = savedSessionData;
// }
