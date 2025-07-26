// import fs from 'fs';

// const filePath = '/Users/lucian/Desktop/CodingNonGH/DAMODSSTIE/mods.json'; // Replace with the actual path to your JSON file

// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading JSON file:', err);
//         return;
//     }

//     try {
//         const jsonData = JSON.parse(data);
//         console.log('JSON Data:', jsonData);
//         // You can now work with the jsonData object
//     } catch (parseError) {
//         console.error('Error parsing JSON:', parseError);
//     }
// });







fetch('modList.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('JSON');
        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `<h2>${item.name}</h2><p>${item.description}</p>`;
            container.appendChild(itemDiv);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
