import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../../components/MovieCard/MovieCard';
import SearchBox from '../../components/SearchBox/SearchBox';
import MovieModel from '../../model/MovieModel';
import './MoviesPage.css'

function MoviesPage() {
    //add movie search section
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);

    function handleSearchChange(newSearchText) {
        setSearchText(newSearchText);

        if(newSearchText){
            const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=09848168e2201726ba2c5e6a70d11ac7&language=en-US&query=" + newSearchText;
            axios.get(searchURL).then( response =>
                setResults(response.data.results)
            );
        } else {
            setResults([]);
        }
    }

    function addMovie(index) {
        const movieId = results[index].id;
        console.log("movie id: "+movieId);
        const searchURL = "https://api.themoviedb.org/3/movie/"+movieId+"?api_key=09848168e2201726ba2c5e6a70d11ac7&language=en-US";
        let MovieLength=0;
        let img="";
        let actor =[];
        let director =[];
        axios.get(searchURL).then(response =>{
            MovieLength= response.data.runtime;
            console.log(MovieLength);
            setMovies(movies.concat(new MovieModel(results[index].title, MovieLength ,img,director,actor)));
        });
        axios.get("https://api.themoviedb.org/3/movie/"+movieId+"/images?api_key=09848168e2201726ba2c5e6a70d11ac7&language=en-US,null").then(response => {
            img= response.data.posters[0]?response.data.posters[0].file_path:response.data.backdrops[0].file_path;
            console.log(img);
            console.log(response.data);
            setMovies(movies.concat(new MovieModel(results[index].title, MovieLength ,img,director,actor)));
        });

        axios.get("https://api.themoviedb.org/3/movie/"+movieId+"/credits?api_key=09848168e2201726ba2c5e6a70d11ac7&language=en-US").then(response => {
            actor= response.data.cast.filter((person, index) => index > 5 ?null:person.name +" ("+ person.character+")");
            director = response.data.crew.filter((person) => person.known_for_department ==="Directing" ? person.name: null)
            console.log(actor);
            console.log(director);
            setMovies(movies.concat(new MovieModel(results[index].title, MovieLength ,img,director,actor)));
        });

        setResults([]);
        setSearchText("");
    }

    return (
        <Container className="p-movies">
            <SearchBox
                placeholder="Search a movie..."
                searchText={searchText}
                onSearchChange={handleSearchChange}
                results={results.map(result => result.original_title)}
                onResultSelected={addMovie}/>
            <Row className="movie-row">
                {movies.map(movie => <Col lg={12}><MovieCard movie={movie}/></Col>)}
            </Row>
        </Container>
    );
}

export default MoviesPage;