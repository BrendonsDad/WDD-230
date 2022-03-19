const requestURL = 'https://brendonsdad.github.io/WDD-230/chamber/data.json'

button1 = document.querySelector('#list')
button2 = document.querySelector('#cards')


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const companies = jsonObject['companies'];
        console.log(window.innerWidth)
        if (1000 > window.innerWidth && window.innerWidth > 600) {
            companies.forEach(displayList);
        }
        else {
            companies.forEach(displayCompanies);
        }

        function showCards() {
            companies.forEach(removeCards);
            companies.forEach(removeList);
            companies.forEach(displayCompanies);
        }

        function showList() {
            companies.forEach(removeCards);
            companies.forEach(removeList);
            companies.forEach(displayList)
        }

        function removeCards() {
            let section = document.querySelectorAll('.column')
            section.forEach((item) => {
                item.remove();
            })
        }

        function removeList() {
            let section = document.querySelectorAll('tr')
            section.forEach((item) => {
                item.remove();
            })
        }

        button1.addEventListener('click', showList)
        button2.addEventListener('click', showCards)
        
    });



function displayList(companies) {  
    let list_row = document.createElement('tr');
    let td_name = document.createElement('td');
    td_name.textContent = `${companies.name}`;

    let td_address = document.createElement('td');
    td_address.textContent = `${companies.address}`;

    let td_number = document.createElement('td');
    td_number.textContent = `${companies.phone_num}`;

    let td_web = document.createElement('td');
    let web_p = document.createElement('a')
    web_p.setAttribute('href', companies.website);
    web_p.textContent = `${companies.website}`;

    td_web.appendChild(web_p)
    list_row.appendChild(td_name)
    list_row.appendChild(td_address)
    list_row.appendChild(td_number)
    list_row.appendChild(td_web)
    document.querySelector('table').appendChild(list_row);

    }




function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    card.setAttribute('class', 'column');
    card.classList.add('column');
    let h2 = document.createElement('h2');

    let address = document.createElement('p');
    let phone = document.createElement('p');
    let img = document.createElement('img');
    let web_p = document.createElement('a');

    h2.textContent = company.name
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone_num}`;
    img.setAttribute('src', company.imageurl);
    img.setAttribute('alt', `${company.name} logo`)
    web_p.textContent = `${company.website}`;
    //Changes where the link goes for the fake website
    web_p.setAttribute('href', '#');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2)
    card.appendChild(address)
    card.appendChild(phone)
    card.appendChild(img)
    card.appendChild(web_p)

    // Add/append the existing HTML div with the cards class with the section card
    document.querySelector('div.cards').appendChild(card);
}










