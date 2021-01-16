$(document).ready(()=>{
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
   e.preventDefault();
   
   
    });
   
   
   });
   
   function  getMovies(searchText){
   axios.get('https://www.omdbapi.com/?apiKey=689e7a57'+'&s='+searchText)
   .then((response)=> {
   console.log(response);
   let movies=response.data.Search;
   let output=""
   $.each(movies, (index,movie) =>{
       output +=`
       <div class="col-md-3">
    <div class="well text-center">
   
    <img src="${movie.Poster}"> 
    <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-danger mt-2" >More Info</a>
    </div>
  
       </div>
       `;
   });
   $ ('#movies').html(output);
   })  
   .catch((err) =>{
   
   console.log("err")
   
   
   });
   } 

function movieSelected(id){
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
  }
  

  
