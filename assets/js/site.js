// write cool JS hwere!!


/* cookie consent
skal bruge to css classes: cookieBlocker og cookieBlockerIn
toggler in class, så der kan animeres, ved hjælp af transition
to buttons til interaktion*/

let cookieBlockElement = document.getElementById('cookieBlock') // blocker element


let okButton = document.getElementById('cookieOk')

// til consent
okButton.addEventListener('click', () => {

    cookieBlockElement.classList.toggle('cookieBlockerIn')
})


// til no consent
let noButton = document.getElementById('cookieNotOk')

noButton.addEventListener('click', () => {

    window.location.assign('https://en.wikipedia.org/wiki/Cookie_Monster') // går til en ny site.. i assign giver browseren lov til at huske history ikke ..replace

})





window.addEventListener('load', () => {
    console.log('loaded');
    cookieBlockElement.classList.toggle('cookieBlockerIn')
})

//---------------------------------------------------------------------------------------------------