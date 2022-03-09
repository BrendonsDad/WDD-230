const requestURL = 'https://brendonsdad.github.io/WDD-230/chamber/data.json'
// {
//     "companies": [
//       {
//         "name": "Taco Johnny's",
//         "address": "923 N Shade Way",
//         "phone_num": "908-379-3747",
//         "website": "https://www.tacojohnnystacos.com",
//         "imageurl": ""
//       },

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const companies = jsonObject['companies'];
        companies.forEach(displayCompanies)
    });

function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');

    let address = document.createElement('p');
    let phone = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = company.name
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone_num}`;
    img.setAttribute('src', company.imageurl);
    img.setAttribute('alt', `${company.name} logo`)

    // Add/append the section(card) with the h2 element
    card.appendChild(h2)
    card.appendChild(address)
    card.appendChild(phone)
    card.appendChild(img)

    // Add/append the existing HTML div with the cards class with the section card
    document.querySelector('div.cards').appendChild(card);
}

//to clear out cards

// let cards = document.querySelectorAll('.cards')
// cards.forEach((item)=>{
//     item.remove();
// })

// function changeStyles() {
//     if (window.innerWidth > 800 && window.innerWidth < 1000)
//         let change = document.querySelector('.cards');
//         change.setAttribute('class', 'cards list');
// }

//changing styles in JS

let change = document.querySelector('.cards');
change.setAttribute('style', 'background-color: pink; border: 5px solid yellow;');

// event listeners for resizing the window and loading the page

// window.addEventListener('resize', changeStyles);