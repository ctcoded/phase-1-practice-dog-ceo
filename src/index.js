console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs => console.log(dogs.message[0]))