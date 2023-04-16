(async ()=>{
    const response = await fetch("./data.json");
    const movies = await response.json();
    console.log(movies)

    const inputElem =document.getElementById("movie-name");
    const searchBtnElem =document.getElementById("search-btn");
    let resultElem = document.getElementById("result");

    
    function displaySearchResult (results){
        resultElem.innerHTML =""; 
        results.map((items)=>{
            resultElem.innerHTML+= `<div class="card-main">
            <div><p>${items.id}</p></div>
            <div class="img-wrapper">
            <img src ="https://image.tmdb.org/t/p/w45${items.poster_path}"/>
            <p>${items.title}</p/>
            <p>${items.runtime}</p>
            </div>
            <div> <p>${items.release_date}</p></div>
            <div>`
        })

    }
  
function search(){
    const userSearchQuery = inputElem.value.toLowerCase();
    const results = movies.filter((movie)=>{
        return movie.title.toLowerCase().includes(userSearchQuery);

    }); 
   displaySearchResult(results);

    // console.log(results);
}

searchBtnElem.addEventListener("click", search);
})();


