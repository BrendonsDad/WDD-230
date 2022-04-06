// Makes the menue responsive with a drope down hamburger
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


//Wind Chill
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5225857&appid=7b57bbdd2f74d06727999c4fc06b38ca";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    temp = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(2);
    wSpeed = jsObject.wind.speed;
    document.querySelector('#temp').textContent = temp
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    // document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#weathericon').setAttribute('width', '100%')
    // const words = desc.split(" ")
    // for (let i = 0; i < words.length; i++) {
    //     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    // }
    document.querySelector('figcaption').textContent = desc.toUpperCase();
    document.querySelector('#wSpeed').innerHTML = wSpeed;
  });



if (temp <= 50 && wSpeed > 3) {
    var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));



    var windChill= Math.round(windChill);
    } else {
        var windChill = 'N/A'
    }


document.getElementById("windChill").innerHTML= windChill;

//Temple Cards Area
const requestURL = 'https://brendonsdad.github.io/WDD-230/temple/data.json'


fetch(requestURL)
    .then(function (response) {
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


