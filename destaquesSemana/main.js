const url = `https://api.themoviedb.org/3/trending/all/week?api_key=8e27761e61ffeef6c32b397bf03f8b8d`

async function fetchMovies(){
    const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => loadMovies(data.results))

}
fetchMovies();

loadMovies = async (res) =>{
    console.log(res)
    res.map( movie =>{
        const div = document.createElement('div')
        div.classList.add("movieCard")
        const main = document.querySelector(".destaquesSemana")
        let nameMovie;
        if(movie.original_title){
            nameMovie = movie.original_title;
        }else{
            nameMovie = movie.name
        }
        let nota = movie.vote_average;
        nota = nota.toFixed(1)

        let dateMovie;

        if(movie.release_date){
            dateMovie = movie.release_date
           
        } else{
          dateMovie = movie.first_air_date
        }

        div.innerHTML =`
            <div class="img">
                <img class="imgMovie" src =" https://image.tmdb.org/t/p/original/${movie.poster_path}" />     
            </div>
                <h3>${nameMovie}</h3>
            <div class="infoMovie">
                <div>
                    <p>${dateMovie}</p>
                </div>
                <div class="nota">
                    <img src="icon/star.png" alt="">
                    <p>${nota
                    }</p>
                </div>
            </div>
            <a class="button" id=${movie.id} target="blank" href="movieInfo/index.html">Acessar</a>
        `
        main.appendChild(div)

    })
}



    


