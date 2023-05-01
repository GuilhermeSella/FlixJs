const url = `https://api.themoviedb.org/3/trending/all/week?api_key=8e27761e61ffeef6c32b397bf03f8b8d`

async function loadMovies(){
    const response = await fetch(url)
    const data = await response.json()
    const res = data.results
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

        div.innerHTML =`
            <div class="img">
                <img class="imgMovie" src =" https://image.tmdb.org/t/p/original/${movie.poster_path}" />     
            </div>
                <h3>${nameMovie}</h3>
            <div class="infoMovie">
                <div>
                    <p>2022</p>
                </div>
                <div class="nota">
                    <img src="icon/star.png" alt="">
                    <p>${movie.vote_average
                    }</p>
                </div>
            </div>
            <a class="button" href="#">Acessar</a>
        `
        main.appendChild(div)
    })
    
}
loadMovies();