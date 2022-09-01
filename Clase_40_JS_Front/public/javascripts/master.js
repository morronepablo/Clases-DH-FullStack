window.addEventListener('load', () => {
    let peliculas = document.querySelector('.peliculas');
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b03f4837369ced1ec4bd6cefd4e3144a')
    .then(respuesta => {
        return respuesta.json();
    })
    .then(movies => {
        /* console.log(movies); */
        for (let i = 0; i < movies.results.length; i++) {
            peliculas.innerHTML += 
            '<li> <img class="p-1" src="https://www.themoviedb.org/t/p/w500' + movies.results[i].poster_path + '" alt="${movies.results[i].title}"> </li>'
        }
    })
    .catch(e => {console.log(e)})
})