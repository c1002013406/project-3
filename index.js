jQuery(document).ready(function(){

    axios.get('http://csc225.mockable.io/movies').then(function(response){
        setTimeout(function(){
    
        var moviesHTML= response.data.map(function(movie){
         return '<p class ="movie" data-movie= "'+movie.id+'">'+movie.title+'</p >';
        });
        $('#movies').html(moviesHTML);
        });
    });
    $('body').on('click','.movie',function(){
            var id= $(this).data('movie');
            var url='http://csc225.mockable.io/movies/'+id;
            var poster = 'http://csc225.mockable.io/movies/'+id + poster;
              $('#current-movie').html('<img class= "font" src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/10/loading-screen-featured-image.jpg" class="img" alt="Loading">');
            axios.get(url).then(function(response){
               
                var movie=response.data;
                var movieHTML = '<p class ="info">' +movie.title + '</p >';
                movieHTML += '<p class ="info">' +movie.director + '</p >';
                movieHTML += '<p class ="info">' +movie.release + '</p >';
               
                    if (id==1)
                    movieHTML += ' <img class= "font" src="https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" class="img" alt="movie poster">';
                     
                   else if (id==2) 
                   movieHTML += ' <img class= "font" src="https://images-na.ssl-images-amazon.com/images/I/814Cbv8EftL._SY741_.jpg" class="img" alt="movie poster">';
                    
                    else if (id==3) movieHTML += ' <img class= "font" src="https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" class="img" alt="movie poster">';
                     
                   else if (id==4) movieHTML += ' <img class= "font" src="https://upload.wikimedia.org/wikipedia/en/0/06/Metropolisposter.jpg" class="img" alt="movie poster">';
                     
                    else if (id==5) movieHTML += ' <img class= "font" src="http://www.gstatic.com/tv/thumb/v22vodart/46611/p46611_v_v8_ab.jpg" class="img" alt="movie poster">';
                     
                    else   if (id==6) movieHTML += ' <img class= "font" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Rear_Window_film_poster.png/440px-Rear_Window_film_poster.png" class="img" alt="movie poster">';
                     
                      else if (id==7) movieHTML += ' <img class= "font" src="https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg" class="img" alt="movie poster">';
                     
                   else    if (id==8) movieHTML += ' <img class= "font" src="https://upload.wikimedia.org/wikipedia/en/4/47/Lost_Higway_%281997%29.png" class="img" alt="movie poster">';
                     
                      else if (id==9) movieHTML += ' <img class= "font" src="https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg" class="img" alt="movie poster">';
                     
                       $('#current-movie').html(movieHTML);
                    
            });
    });
});
