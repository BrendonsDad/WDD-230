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









// // option 2

// const images = document.querySelector('img');
// const io = new IntersectionObserver(
//     (entries, io) => {
//         entries.forEach(entry => {
//         console.log(entries);
//         });
        
//     },
//     {
//         threshold: [.5]
//     }
// )

// io.observe(images);