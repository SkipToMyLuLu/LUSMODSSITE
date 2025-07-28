var search_querys_ORGIN = document.getElementById('search-querys').value;
console.log('search querys original:   ' + search_querys_ORGIN)
var SQ_tobe_ARAY = search_querys_ORGIN.toLowerCase();
console.log('search querys to search for BEOFRE SPLITTING   ' + SQ_tobe_ARAY)
var search_querysARAY = SQ_tobe_ARAY.split(' ');
console.log('search querys to search for AFTER SPLITTING   ' + search_querysARAY)

const search_querys_list_container = document.getElementById('SEARCH-QUERYS-LIST');
const ulElement = document.createElement('ul');

search_querysARAY.forEach(item => {
    const liElement = document.createElement('li');
    liElement.textContent = item;
    ulElement.appendChild(liElement);
})

