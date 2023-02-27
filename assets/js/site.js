const myData = {
    se: {
        headline: "Poopidicurn",
        text: "her ir leedt oum ilge-a på sfensk. ilge-a ir gude-a til it lefe-a pup curn "
    },
    dk: {
        headline: "påpcorn",
        text: "påpkårn smager godt, bare de ikke ar lavet af en elg."
    },
    uk: {
        headline: "Popcorn",
        text: "Popcorn is nice, but only if they are not prepared by an elk"
    }
}



let myLanguage = 'uk';
let myTextData = null;

let mySelectionElement = document.getElementById('lang');

mySelectionElement?.addEventListener('change', (e) => {
    let myChoice = mySelectionElement.value;
    setupStory(myChoice);
});



function setupStory(myLanguage) {

    console.log(myLanguage);
    switch (myLanguage) {
        case 'uk':
            myTextData = myData.uk;
            break;

        case 'se':
            myTextData = myData.se;
            break;

        case 'dk':
            myTextData = myData.dk;
            break;

        default:
            myTextData = {
                headline: "sprog findes ikke",
                text: "vælg et andet"
            };
            break;
    }

    let myHTML = `<h2>${myTextData.headline}</h2><p>${myTextData.text}</p>`;

    let myElement = document.getElementById('app');

    myElement.innerHTML = myHTML;
}


