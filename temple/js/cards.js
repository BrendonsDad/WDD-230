// Makes the menue responsive with a drope down hamburger
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


//Temple Cards Area
const requestURL = 'https://brendonsdad.github.io/WDD-230/temple/data.json'


fetch(requestURL)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
 
    });




function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    card.setAttribute('class', 'column');
    card.classList.add('column');
    let h2 = document.createElement('h2');

    let address = document.createElement('p');
    let phone = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = temple.name
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone_num}`;
    img.setAttribute('src', temple.imageurl);
    img.setAttribute('alt', `${temple.name} logo`)

    // Add/append the section(card) with the h2 element
    card.appendChild(h2)
    card.appendChild(address)
    card.appendChild(phone)
    card.appendChild(img)

    // Add/append the existing HTML div with the cards class with the section card
    document.querySelector('div.cards').appendChild(card);
}

