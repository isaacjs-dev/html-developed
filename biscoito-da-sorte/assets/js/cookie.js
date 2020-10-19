let broken = false;

function breakCookie() {
    const sorted = Math.floor(Math.random() * phrases.length);
    const phrasesSorted = phrases[sorted];

    const pharseArea = document.querySelector('.pharse-area');
    const htmlPhrase = document.querySelector('.pharse-area p:first-child');
    const htmlAuthor = document.querySelector('.pharse-area p:last-child');
    const htmlImgCookie = document.querySelector('.content img');
    const hmtlButton = document.querySelector('.content button')

    if (!broken) {
        htmlPhrase.innerHTML = phrasesSorted[0];
        htmlAuthor.innerHTML = '- ' + phrasesSorted[1];

        htmlImgCookie.src = './assets/images/fortune-cookie_2.png'
        pharseArea.style.display = 'block';
        hmtlButton.innerHTML = 'Novo Biscoito';
        hmtlButton.classList.add('broken');
        broken = true;
    } else {
        htmlPhrase.innerHTML = '';
        htmlAuthor.innerHTML = '';

        htmlImgCookie.src = './assets/images/fortune-cookie.png'
        pharseArea.style.display = 'None';
        hmtlButton.innerHTML = 'Quebrar Biscoito';
        hmtlButton.classList.remove('broken');
        broken = false;
    }
}