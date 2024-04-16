const sideMenu = document.querySelector('.navlist');
const menuBtn = document.querySelector('.sidemenu');
const close = document.querySelector('.cancelmenu')

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
});

close.addEventListener('click', () => {
    sideMenu.style.display = 'none'
});

const url = 'https://spotifystefan-skliarovv1.p.rapidapi.com/getAlbums';
const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '04b355ad0bmsh2a2fcf705362ff8p19c6acjsn57e7b79df01f',
        'X-RapidAPI-Host': 'Spotifystefan-skliarovV1.p.rapidapi.com'
    },
    body: new URLSearchParams({
        accessToken: '1234567' // Replace '1234567' with your actual access token
    })
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
