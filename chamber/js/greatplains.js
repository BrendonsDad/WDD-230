
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
const date_now = new Date();
const day = date_now.getDay();

if (day === 2 || day === 4 || day === 5 || day === 6 || day === 7) {
	message.style.display = 'none';
}


// function show_banner(announcement) {
//     announcement.innerHTML = `<em>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</em>`
//     announcement.classList.add('announce_style');
// };

// if (day === 1 || day === 2) {
//     const announcement = document.querySelector('#events')
//     show_banner(announcement)
// }



