const url = `https://api.themoviedb.org/3/trending/all/week?api_key=8e27761e61ffeef6c32b397bf03f8b8d&language=pt-br`

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
        let movieId = movie.id
        console.log(movieId)

        div.innerHTML =`
        <article class="card">
        <img class="card_img" src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="">
        <div class="card_content">
            <span class="card_title">${nameMovie}</span>
                <span class="card_subtitle">Overview <strong>${nota} <img src="icon/star.png"></strong></span>
                <p class="card_description">${movie.overview}</p>
                <a class="trailer" target="blank" rel="external" href=https://youtube.com/results?search_query=${nameMovie} >
                        Trailer
                    </a>
            </div>
        </article>
        `
        main.appendChild(div)

    })
}





    


