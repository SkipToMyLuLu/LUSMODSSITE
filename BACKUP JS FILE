// curl -X GET "https://api.modrinth.com/v2/search?query=fabric&facets=%5B%5B%22project_type%3Amod%22%5D%5D" \
//   -H "User-Agent: test-script/1.0 (you@example.com)"
// import prompt from 'prompt-sync';
// const promptSync = prompt();
console.log('Project Types Permitted: mod, resourcepack, shader, modpack')
var project_type = promptSync('Enter project type:    ').toLowerCase();
// display 10 current
// 
var search_querys_ORGIN = document.getElementById('search_querys').value;
console.log('search querys original:   ' + search_querys_ORGIN)
var SQ_tobe_ARAY = search_querys_ORGIN.replaceAll(' ', ',');
console.log('search querys to search for BEOFRE SPLITTING   ' + SQ_tobe_ARAY)
var search_querysARAY = SQ_tobe_ARAY.split(' ', ',');
console.log('search querys to search for AFTER SPLITTING   ' + search_querysARAY)

const search_querys_list_container = document.getElementById('SEARCH-QUERYS-LIST');
const ulElement = document.createElement('ul');

search_querysARAY.forEach(item => {
    const liElement = document.createElement('li');
    liElement.textContent = item;
    ulElement.appendChild(liElement);
})



// document.getElementById('SEARCH-QUERYS-LIST').value = search_querysARAY

// = promptSync('Enter search querys:    ').toLowerCase();
// console.log('search querys original:   ' + search_querys_ORGIN)
// var search_querys = search_querys_ORGIN.replaceAll(' ', ',')

// console.log('search querys to search for:   ' + search_querys)



fetch("https://api.modrinth.com/v2/search?query=" + search_querys + "&facets=%5B%5B%22project_type%3A" + project_type + "%22%5D%5D", {
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
        console.log("Modrinth mods found:", data.hits);
    })
    .catch(error => {
        console.error("Error fetching Modrinth data:", error);
    });