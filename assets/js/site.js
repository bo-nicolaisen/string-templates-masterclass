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


let myLanguage = 'uk';
let myTextData = null;


let mySelectionElement = document.getElementById('lang');

mySelectionElement.addEventListener('change', (e) => {
    let myChoice = mySelectionElement.value;
    console.log(myTextData);

    setupStory(myChoice);
});



function setupStory(myLanguage) {
    // evaluer bruger input.
    console.log(myLanguage);

    switch (myLanguage) {
        case 'uk':
            myTextData = myData.uk;

            break;
        case 'dk':
            myTextData = myData.dk;

            break;
        case 'se':
            myTextData = myData.se;

            break;

        default:

            break;
    }

    console.log(myTextData);


    let myTextData = 'test';
    showStory(myTextData);
}


// view code

function showStory(myTextData) {

    let myHTML = 'test';
    let myElement = document.getElementById('app');
    myElement.innerHTML = myHTML;

}


