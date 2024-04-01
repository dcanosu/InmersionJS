// En este codigo manejamos 3 variables para nuestro array.
// var peliChris = "https://static.wikia.nocookie.net/esharrypotter/images/3/32/Portadas_pel%C3%ADculas.gif/revision/latest?cb=20160731192738"
// var peliBarbara = "https://phantom-marca-mx.unidadeditorial.es/faa3be147fc3449d6f050f7fea6fcf13/resize/660/f/webp/mx/assets/multimedia/imagenes/2023/07/18/16896920030084.jpg"
// var peliJen = "https://lumiere-a.akamaihd.net/v1/images/image_c671e2ee.jpeg?region=0,0,540,810"

// document.write("<img src=" + peliChris + ">");
// document.write("<img src=" + peliBarbara + ">");
// document.write("<img src=" + peliJen + ">");

var listaPeliculas = [
    "https://static.wikia.nocookie.net/esharrypotter/images/3/32/Portadas_pel%C3%ADculas.gif/revision/latest?cb=20160731192738",
    "https://phantom-marca-mx.unidadeditorial.es/faa3be147fc3449d6f050f7fea6fcf13/resize/660/f/webp/mx/assets/multimedia/imagenes/2023/07/18/16896920030084.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/image_c671e2ee.jpeg?region=0,0,540,810",
    "https://m.media-amazon.com/images/S/pv-target-images/6c2c7ace999b2efa7d6d113f7f3ec49f83722dbd2a22b202ef8028f26a1d0b69.jpg"
]

// Este código lo podemos mejorar
// var i = 0;

// while(i < listaPeliculas.length){
//     document.write(`<img src=${listaPeliculas[i]}>`)
//     i++;
// }

for(var i = 0; i < listaPeliculas.length; i++){
    document.write(`<img src=${listaPeliculas[i]}>`);
}

// También podemos utilizar el while
// for(var i = 0; i < 3; i = i+1){
//     document.write("<img src=" + listaPeliculas[i] + ">");
// }

