var listaPeliculas = [
    "https://static.wikia.nocookie.net/esharrypotter/images/3/32/Portadas_pel%C3%ADculas.gif/revision/latest?cb=20160731192738",
    "https://phantom-marca-mx.unidadeditorial.es/faa3be147fc3449d6f050f7fea6fcf13/resize/660/f/webp/mx/assets/multimedia/imagenes/2023/07/18/16896920030084.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/image_c671e2ee.jpeg?region=0,0,540,810",
    "https://m.media-amazon.com/images/S/pv-target-images/6c2c7ace999b2efa7d6d113f7f3ec49f83722dbd2a22b202ef8028f26a1d0b69.jpg"
]

var i = 0;

while(i < listaPeliculas.length){
    document.write(`<img src=${listaPeliculas[i]}>`)
    i++;
}


// //Desafío 2: agregue elementos a la lista usando .push

// listaPeliculas.push('https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg', 'https://cdn.shopify.com/s/files/1/1057/4964/products/harry-potter-and-the-chamber-of-secrets-vintage-movie-poster-original-1-sheet-27x41.jpg');

// var nombrePeliculas = ['Capitán Fantástico', 'Kill Bill 1', 'Estrellas más allá del tiempo', 'El gran hotel Budapest', 'La La Land', 'Los puentes de Madison', 'Soul', 'Bastardos sin gloria', 'El viaje de Chihiro', 'Ámsterdam', 'Intensa-Mente', 'Harry Potter y la cámara secreta'];

// document.write('<div class="container_todosFilmes">')

// //Desafío 1 - Convertir for en while
// var i = 0;
// while(i < listaPeliculas.length){
//     if((listaPeliculas[i].endsWith('jpg')) || (listaPeliculas[i].endsWith('jpeg'))){
//         document.write('<div class="container_filme">')
//         document.write('<img src='+ listaPeliculas[i] +'>');
//         document.write('<p>'+ nombrePeliculas[i] +'</p>'); 
      
// //Desafío 4 - Colocar títulos debajo de la imagen
//         document.write('</div>')
//     }else{
//         document.write('<p> La imagen ' + i + ' no se leyó porque no es un archivo jpeg o jpg </p>');
//     }
//     i++;
// }
// document.write('</div>')
