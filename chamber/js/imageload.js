const images = document.querySelectorAll('img');

const options = {threshold: [.5]};

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    img.src = source;
}

const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry => {
        // console.log(entries);
        if(!entry.isIntersecting){
            return;
        } else {
            preloadImage(entry.target) //call a function send in the image that is currently intersecting
            io.unobserve(entry.target); //stops observing it
        }

        });
    }, options);

images.forEach(images => {
    io.observe(images);
});


function visits() {
    //check to see if there is a last date
    //get the last date (get item "lastDate")
    //subtract it from the current date
    //else set todays date("last date = date.now")

    const visitElement = document.getElementById("lastvisit");
    const currentVisit = Date.now();
    const lastVisit = localStorage.getItem("lastVisit") ?? currentVisit;
    localStorage.setItem("lastVisit", currentVisit);

    
    function setDate() {
        let difference = currentVisit - lastVisit;
        let daysDifference = Math.floor(difference / 100 / 600 / 60 / 24);
        visitElement.textContent = daysDifference;

        currentVisit.getDay();
        console.log(currentVisit);

        if (daysDifference != 0) {
            visitElement.textContent = currentVisit;
        }

    }
    console.log(visitElement);
    setDate();
}

visits();
