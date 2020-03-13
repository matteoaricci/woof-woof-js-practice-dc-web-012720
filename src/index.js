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
        spanBar.addEventListener('click', clickDog)
    let dogBar = document.querySelector('#dog-bar')

    dogBar.appendChild(spanBar)

}

function clickDog(event) {
    debugger;
}