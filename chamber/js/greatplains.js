
const lastmod = document.querySelector('#lastmod')
lastmod.textContent = `Date the page was modified ${document.lastModified}`;

const datefieldUK = document.querySelector(".m");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const message = document.querySelector('#events');

if (mydate.getDay() == 2 || mydate.getDay() == 4 || mydate.getDay() == 5 || mydate.getDay() == 6 || mydate.getDay() == 7) {
	message.style.display = 'none';
}




