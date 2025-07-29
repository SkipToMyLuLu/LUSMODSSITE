console.clear()
const wordInput = document.getElementById("wordInput"); // Get the input element by its ID.
const enterButton = document.getElementById("enterButton"); // Get the button element by its ID.
const queryInput = document.getElementById("queryInput"); // Get the query input element by its ID.
const query_enter = document.getElementById("query_enter"); // Get the query enter button element by its ID.
var modsList
var enteredQuerys; // Variable to store the user's search querys.

queryInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

        captureAndSearchQuery(); // Call the function to capture and search the query.
    }
});

query_enter.addEventListener("click", captureAndSearchQuery)

function captureAndSearchQuery() {
    // user enters categories or (maybe) title to search for

    // querys to search for

    enteredQuerys = queryInput.value; // Get the value from the query input field.
    console.log(enteredQuerys); // Print the captured query to the browser console.
    // queryInput.value = ""; // Clear the query input field (optional).
    captureAndLogWord()

}

// Event listener for the "keydown" event (pressing Enter in the input field)

wordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        captureAndLogWord(); // Call the function to capture and log the word.
    }
});

// Event listener for the "click" event on the button
enterButton.addEventListener("click", captureAndLogWord); // Call the same function when the button is clicked.

function captureAndLogWord() {
    enteredQuerys = queryInput.value; // Get the value from the query input field.
    //    user enters one of the 4 main types
    //    

    // enteredWord is the project type to search for. Not search querys

    var enteredWord = wordInput.value; // Get the value from the input field.
    console.log(enteredWord); // Print the captured word to the browser console.
    wordInput.value = ""; // Clear the input field (optional).

    if (enteredWord === "") {
        enteredWord = "mod"; // Default to "mod" if no project type is entered.
    }

    if (enteredQuerys) {

        console.log('Searching for querys: ' + enteredQuerys + ' with project type: ' + enteredWord); // Log the search querys and project type.

        fetch("https://api.modrinth.com/v2/search?query=" + enteredQuerys + "&facets=%5B%5B%22project_type%3A" + enteredWord + "%22%5D%5D&limit=100", {
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
                modsList = document.getElementById("modsList"); // Get the element where you want to display the mods.
                modsList.innerHTML = ""; // Clear the list before adding new items.
                for (let i = 0; i < data.hits.length; i++) {
                    // console.log(i + 1 + ": " + data.hits[i].title); disabled until i can make settings menu

                    // modsList = document.getElementById("modsList"); // Get the element where you want to display the mods.
                    var modItem = document.createElement("li"); // Create a new list item element.
                    modItem.textContent = data.hits[i].title; // Set the text content of the list item to the mod title.

                    modsList.appendChild(modItem);

                }
                enteredQuerys = ""; // Clear the query input field after searching (optional).
            }

            )
            .catch(error => {
                console.error("Error fetching Modrinth data:", error);
            });


    } else {

        console.log(" and project type: " + enteredWord)

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
                modsList = document.getElementById("modsList"); // Get the element where you want to display the mods.
                modsList.innerHTML = ""; // Clear the list before adding new items.
                for (let i = 0; i < data.hits.length; i++) {
                    // console.log(i + 1 + ": " + data.hits[i].title); disabled until i can make settings menu

                    // modsList = document.getElementById("modsList"); // Get the element where you want to display the mods.
                    var modItem = document.createElement("li"); // Create a new list item element.
                    modItem.textContent = data.hits[i].title; // Set the text content of the list item to the mod title.

                    modsList.appendChild(modItem);

                }
            })
            .catch(error => {
                console.error("Error fetching Modrinth data:", error);
            });
    }
    wordInput.value = ""; // Clear the word input field after logging the word (optional).
    queryInput.value = ""; // Clear the query input field after searching (optional).
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
