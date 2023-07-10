import axios from 'axios';
import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



import My_modal from './test';
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ac292c4134232038d32c99e39f4dab24&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    .then(
      response => {
        
        setMovies(response.data);
        console.log(movies);
    });
  }, []);
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w500';
return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">HELLO</Navbar.Brand>
        </Container>
      </Navbar>
      
      <hr style={{border:"1px solid gray",borderBottom:'10px',borderTop:'10px'}}/>

      <div style={{display: 'flex',flexWrap:'wrap',justifyContent: 'space-around',alignContent:'space-around'}}>
      {movies.results.map((movie)=>(
        
        <div style={{border:'1px solid gray',width:'18rem',borderRadius: '10px',margin:'50px 50px'}}>
        <Card.Img variant="top" src={`${IMAGE_BASE_URL+movie.poster_path}`} alt="영화포스터" width='100' height="180" style={{borderRadius:"10px"}} />
        <Card.Body>
          <Card.Title>제목:{movie.title}</Card.Title>
          <Card.Text style={{ whiteSpace:'nowrap', overflow:'hidden',textOverflow:'ellipsis'}}>
            {movie.overview}
          </Card.Text>
          <My_modal title={movie.title} overview={movie.overview} src={IMAGE_BASE_URL+movie.poster_path} 
          vote_average={movie.vote_average}/>
          
        </Card.Body>
        </div>
        
     
  ))}
      </div>
      
    </>
);
 
}
export default App;
