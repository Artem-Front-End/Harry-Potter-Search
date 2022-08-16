const LINK = 'http://hp-api.herokuapp.com/api/characters';

const askServer = async() => {
    const response = await fetch(LINK);
    const content = await response.json();

    const filtered = content.filter(item => item.image);
    filtered.forEach(item => {
        document.querySelector('.wrapper').innerHTML += `
          <div class="block" >
             <h1>${item.name}</h1>
             <img src=${item.image} />
          </div>
    `
    })
}

document.querySelector('input').oninput = function(){
    const v = this.value.trim();
    const firstLetter = v.slice(0, 1).toUpperCase();
    const rest = v.slice(1);
    const value = firstLetter + rest;

    const list = document.querySelector('.wrapper');
    list.querySelectorAll('div').forEach(item => {
        if(item.querySelector('h1').innerText.search(value) == -1){
            item.classList.add('hide')
        } else{
            item.classList.remove('hide')
        }
    })
}

askServer()