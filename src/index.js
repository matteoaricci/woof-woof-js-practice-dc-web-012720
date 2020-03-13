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
    let dogObject = input;
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
        let dogName = document.createElement('h2')
            dogName.innerText = dog.name
        let dogImage = document.createElement('img')
            dogImage.src = dog.image
            dogShow.append(dogImage, dogName)
            dogLocation.append(dogShow)        
        let gBB = document.createElement('button')
            if ( dog.isGoodDog === true ) {
            gBB.innerText = "Good Dog"
            dogShow.append(gBB)
        }
}