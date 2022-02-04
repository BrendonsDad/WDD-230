const favchap = document.querySelector('#favchap');
const buildButton = document.querySelector('button');
const list = document.querySelector('.list');
const input = document.querySelector('input')

buildButton.addEventListener('click', () => {
    let chap = favchap.value;
    let li = document.createElement('li');
    let button = document.createElement('button')
    li.textContent = chap;
    button.textContent = '❌';
    li.appendChild(button);
    list.appendChild(li);
    button.addEventListener('click', () => {
        list.removeChild(li)
    })


    input.focus()
    input = ''
    
    
    


});

