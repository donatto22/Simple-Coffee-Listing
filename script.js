const cafes = document.getElementById('listaDeCafe')

const crearCafe = (titulo, price, estrella, votos, popular, imageUrl) => {
    // contenedor padre
    const cardCafe = document.createElement('div')
    cardCafe.classList.add('cardCafe')

    // la imagen del cafe
    const imageDiv = document.createElement('div')
    imageDiv.classList.add('imageDiv')

    const imageCafe = document.createElement('img')
    imageCafe.setAttribute('src', imageUrl)

    // si un cafe es popular o no
    const popularSpan = document.createElement('span')
    popularSpan.classList.add('popularSpan')
    popular == true ? popularSpan.textContent = 'Popular' : ''

    imageDiv.appendChild(imageCafe)

    if(popular == true) {
        popularSpan.textContent = 'Popular'
        imageDiv.appendChild(popularSpan)
    }

    // la descripción del cafe
    const desc = document.createElement('div')
    desc.classList.add('descripcion')

    const left = document.createElement('div')
    const right = document.createElement('div')

    const tituloCafe = document.createElement('h3')
    tituloCafe.textContent = titulo

    // el div que contiene las estrellitas
    const valoracionesDiv = document.createElement('div')
    
    const precio = document.createElement('div')
    precio.classList.add('precio')
    precio.textContent = price

    valoracionesDiv.appendChild(precio)
    
    const valoraciones = document.createElement('span')
    
    if(estrella) {
        valoraciones.innerHTML = `<div class='valoracion'> <img src='./assets/Star_fill.svg'/> ${estrella} <span>(${votos} votes)</span> </div>`
    } else {
        valoraciones.innerHTML = `<div class='no-valoracion'> <img src='./assets/Star.svg'/> No ratings </div>`
    }

    left.appendChild(tituloCafe)
    left.appendChild(valoraciones)

    right.appendChild(precio)

    desc.appendChild(left)
    desc.appendChild(right)

    cardCafe.appendChild(imageDiv)
    cardCafe.appendChild(desc)

    // agregando la tarjeta en la página
    document.getElementById('listaDeCafe').appendChild(cardCafe)
}

fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
    .then(res => res.json())
    // obtenemos los datos del cafe de la api
    .then(data => {
        // data contiene 6 tacitas de cafe
        // for each va a revisar cada uno de los 6 cafes
        data.forEach(cafe => { // por cada cafe
            // creamos una card de cafe
            crearCafe(cafe.name, cafe.price, cafe.rating, cafe.votes, cafe.popular, cafe.image)
        })
    })
    // en caso que haya un error
    .catch(error => {
        console.log(error)
    })