var aquireHtmlInput = document.getElementById('<div contenteditable="plaintext-only"></div>')

var search_querys_ORGIN = aquireHtmlInput
console.log('search querys original:   ' + search_querys_ORGIN)
// var SQ_tobe_ARAY = search_querys_ORGIN.toLowerCase();
// console.log('search querys to search for BEOFRE SPLITTING   ' + SQ_tobe_ARAY)
var search_querysARAY = search_querys_ORGIN.replaceAll(' ', ',').split(',');
console.log('search querys to search for AFTER SPLITTING   ' + search_querysARAY)

const search_querys_list_container = document.getElementById('SEARCH-QUERYS-LIST');
const ulElement = document.createElement('ul');

search_querysARAY.forEach(item => {
    const liElement = document.createElement('li');
    liElement.textContent = item;
    ulElement.appendChild(liElement);
})

var querys_stringified = search_querysARAY.join('');

// Saving data
sessionStorage.setItem('SEARCH-INPUTS', search_querysARAY);

// Retrieving data
const savedSessionData = sessionStorage.getItem('SEARCH-INPUTS');
if (savedSessionData) {
    // Apply savedSessionData to your HTML element
    document.getElementById('SEARCH-QUERYS-LIST').value = savedSessionData;
}
