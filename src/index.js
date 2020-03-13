document.addEventListener('DOMContentLoaded', () => {
    fetchDogs();
})

function fetchDogs() {
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(resp => resp.forEach(element => {
        renderDogs(element)
    }))
}

function renderDogs(input) {
    let spanBar = document.createElement('span')
        spanBar.innerText = input.name
        spanBar.id = input.id
        spanBar.addEventListener('click', clickGetDog)
    let dogBar = document.querySelector('#dog-bar')

    dogBar.appendChild(spanBar)

}

function clickGetDog(event) {
    fetch(`http://localhost:3000/pups/${event.target.id}`)
    .then(resp => resp.json())
    .then(json => getDog(json))
}

function getDog(dog) {
    let dogLocation = document.getElementById('dog-info')
    dogLocation.innerHTML = ''
    let dogShow = document.createElement('div')
    dogShow.id = dog.id
        let dogName = document.createElement('h2')
            dogName.innerText = dog.name
        let dogImage = document.createElement('img')
            dogImage.src = dog.image
            dogShow.append(dogImage, dogName)
            dogLocation.append(dogShow)        
        let gBB = document.createElement('button')
            gBB.id = 'good-bad-button'
        gBB.addEventListener('click', switchSides)


        if ( dog.isGoodDog === true ) {
            // gBB.className = "good"
            gBB.innerText = "Good Dog!"
            dogShow.append(gBB)
        } else {
            // gBB.className = "bad"
            gBB.innerText = "Bad Dog!"
            dogShow.append(gBB)
        }
}

function switchSides(event) {
    let doggieId = event.currentTarget.parentElement.id
    let dogStat = document.querySelector('button#good-bad-button')
    if(dogStat.innerText === 'Good Dog!') {
        dogStat.innerText = "Bad Dog!"
        postGoodBad(false, doggieId)
        // dogStat.ClassName = 'bad'
    } else {
        dogStat.innerText = "Good Dog!"
        postGoodBad(true, doggieId)
        // dogStat.ClassName = 'good'
    }

}
function postGoodBad(stat, num) {

    fetch(`http://localhost:3000/pups/${num}`, {
    method: 'POST',
    headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
        },
        
        body: JSON.stringify(stat)

    })
}