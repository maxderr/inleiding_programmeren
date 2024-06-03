console.log("hello world")

// Variabelen
let naamElement = document.querySelector('.poppetje-links h2');
let naamInput = document.getElementById('naamInput');
let naamButton = document.getElementById('naamButton');
let muziekAfspelen = false;
let headIndex = 0; // headIndex onthoud welke illustratie voor het hoofd nu wordt getoond in de headimages
let bodyIndex = 0;
let legsIndex = 0;

// Constanten
const audio = new Audio('./assets/sound/fortnite-sound.mp3');
const headBack = document.querySelector('#head-back');
const headForward = document.querySelector('#head-forward')
const bodyBack = document.querySelector('#body-back');
const bodyForward = document.querySelector('#body-forward')
const legsBack = document.querySelector('#legs-back');
const legsForward = document.querySelector('#legs-forward');
const headImages = [
    "./assets/img/regular-head.webp", "./assets/img/head-beard-glasses.png", "./assets/img/head-beard.png"
];

const bodyImages = [
    "./assets/img/regular-body.png", "./assets/img/body-brown.png", "./assets/img/body-black.png"
];

const legsImages = [
    "./assets/img/regular-legs.png", "./assets/img/legs-black.png", "./assets/img/legs-yellow.png"
];


function schrijfnieuweNaam() {
    let nieuweNaam = naamInput.value; // Haalt de waarde uit het invoerveld (naamInput) op
    naamElement.textContent = nieuweNaam;
}

// Functie: muziek en gif
function muziekEnGif() {
        if (muziekAfspelen) {
            // Stop de muziek en verberg de GIF
            audio.pause();
            audio.currentTime = 0; // Muziek weer terug naar het begin
            document.querySelector('.background-gif').style.display = 'none';
        } else {
            // start de muziek en gif
            audio.play();
            document.querySelector('.background-gif').style.display = 'block';
        }
        muziekAfspelen = !muziekAfspelen; // Veranderd de status:om de boolean waarde van muziekAfspelen om te keren (true wordt false, en andersom)
    }
// Bron sound afspelen: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio


// Function hoofdVeranderen is de eventhandler van de knop links van het hoofd
function hoofdVeranderen(event) {
    let knop = event.target.id;

    if (knop == 'head-forward') {
        headIndex = (headIndex + 1) % headImages.length; // De modulus(%) zorgt er voor dat hij nooit hoger gaat dan de array zelf is, dus hij begint weer bij het begin
        // Bron: ChatGPT:modulus-operator (%)
    } else if (knop == 'head-back') {
        headIndex = (headIndex - 1 + headImages.length) % headImages.length; // De modulus(%) zorgt er voor dat het niet een negatief getal wordt, hij gaat naar het eind van de array
    }

    document.querySelector('#head-default').src = headImages[headIndex];
    document.querySelector('.head-foto-links').src = headImages[headIndex];
}
// Laurens heeft me geholpen met het schrijven van de if statement

function bodyVeranderen(event) {
    let knop = event.target.id;

    if (knop == 'body-forward') {
        bodyIndex = (bodyIndex + 1) % bodyImages.length; // .length gebruikt om de lengte (het aantal elementen) van de array te bepalen

    } else if (knop == 'body-back') {
        bodyIndex = (bodyIndex - 1 + bodyImages.length) % bodyImages.length;
    }

    document.querySelector('#body-default').src = bodyImages[bodyIndex];
    document.querySelector('.body-foto-links').src = bodyImages[bodyIndex];
}

function legsVeranderen(event) {
    let knop = event.target.id;

    if (knop == 'legs-forward') {
        legsIndex = (legsIndex + 1) % legsImages.length;

    } else if (knop == 'legs-back') {
        legsIndex = (legsIndex - 1 + legsImages.length) % legsImages.length;
    }

    document.querySelector('#legs-default').src = legsImages[legsIndex];
    document.querySelector('.legs-foto-links').src = legsImages[legsIndex];
}

function randomPoppetje() {
    headIndex = Math.floor(Math.random() * headImages.length); // Vermenigvuldigt dit willekeurige getal met de lengte van de headImages array
    bodyIndex = Math.floor(Math.random() * bodyImages.length); // Math.floor: Rondt het getal naar beneden af naar het dichtstbijzijnde hele getal
    legsIndex = Math.floor(Math.random() * legsImages.length);

    document.querySelector('#head-default').src = headImages[headIndex];
    document.querySelector('.head-foto-links').src = headImages[headIndex];
    document.querySelector('#body-default').src = bodyImages[bodyIndex];
    document.querySelector('.body-foto-links').src = bodyImages[bodyIndex];
    document.querySelector('#legs-default').src = legsImages[legsIndex];
    document.querySelector('.legs-foto-links').src = legsImages[legsIndex];
}

    // Event Listeners
    naamButton.addEventListener('click', schrijfnieuweNaam); // Event listener voor naam veranderen
    document.querySelector('.confetti-button').addEventListener('click', muziekEnGif);
    document.getElementById('head-forward').addEventListener('click', hoofdVeranderen);
    document.getElementById('head-back').addEventListener('click', hoofdVeranderen);
    document.getElementById('body-forward').addEventListener('click', bodyVeranderen);
    document.getElementById('body-back').addEventListener('click', bodyVeranderen);
    document.getElementById('legs-forward').addEventListener('click', legsVeranderen);
    document.getElementById('legs-back').addEventListener('click', legsVeranderen);
    document.querySelector('.random-button').addEventListener('click', randomPoppetje);


// Bron afbeeldingen: https://minifigs.me/pages/create-your-own
// Bron gif: https://www.youtube.com/watch?v=gM-KfHo9O-c&ab_channel=Foxlonian
// Bron muziekje: https://www.youtube.com/watch?v=35YAy5tFPqg&ab_channel=TheBlaCkWolF

