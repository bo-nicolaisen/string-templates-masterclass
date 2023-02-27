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




// controller code
setupStory('uk');

let myLanguage = 'uk';
let myTextData = null;

let mySelectionElement = document.getElementById('lang');

mySelectionElement?.addEventListener('change', (e) => {
    let myChoice = mySelectionElement.value;
    setupStory(myChoice);
});



function setupStory(myLanguage) {

    console.log(myLanguage)

    //showStory(myTextData);
}


// view code

function showStory(myTextData) {

    let myHTML = `<h2>${myTextData.headline}</h2><p>${myTextData.text}</p>`;
    let myElement = document.getElementById('app');
    myElement.innerHTML = myHTML;

}


