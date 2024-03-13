const lightModeBtn = document.getElementById('lightModeBtn');
const darkModeBtn = document.getElementById('darkModeBtn');

function setLightMode() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'rgb(88, 88, 88)';
    document.body.style.backgroundImage = 'url("https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52630.jpg?w=1480&t=st=1709726712~exp=1709727312~hmac=2925d9580397e3acec7b69a6a9af72866ca60194fa43cbad6892eee91eb9165a")';
    const liElements = document.querySelectorAll('.container li');
    liElements.forEach(li => {
        li.style.color = 'rgb(88, 88, 88)';
    });
}

function setDarkMode() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.backgroundImage = 'url("https://img.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-9980.jpg?w=1380&t=st=1709808317~exp=1709808917~hmac=08934cc59049711ec77e9f8e12f3670b9da72448abe271708c3544eb2944d54d")';
    const liElements = document.querySelectorAll('.container li');
    liElements.forEach(li => {
        li.style.color = 'white';
    });
}

lightModeBtn.addEventListener('click', setLightMode);
darkModeBtn.addEventListener('click', setDarkMode);
