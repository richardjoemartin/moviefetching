import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Row } from 'react-bootstrap'

function Content() {
    const[movieName,setMovieName]=useState([])
    const[movieDetails,setMovieDetails]=useState("")
   

    const apiKey= "fa1c9c03";

    const setSearch = async()=>{
    await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`).then(response=>{
    console.log(response.data);
    setMovieDetails(response.data);
   })
   
    }

  return (
    <>
     <div id='container'>
        <div className='container-fluid d-flex flex-column justify-content-center mt-2 p-5'>
        <div id='div1' className='d-flex justify-content-center mt-3'>
        <input id='form' className='form-control p-2 w-50' placeholder='Enter a movie name' type="text" onChange={(e)=>setMovieName(e.target.value)}/>
        </div>
        <div className='d-flex justify-content-center mt-3'> 
        <button id='btn'  className='btn btn-light' onClick={setSearch} variant="warning" style={{color:"darkblue"}}>SEARCH</button>

        </div>
        </div>

        <div>
           
            {
     movieDetails? (
      <div>
        <h1 className='title text-center'>{movieDetails?.Title}</h1>  
        <Row className='d-flex justify-content-center'>
        <Card style={{ width: '15rem',border:'none',borderRadius:'30px 0 0 0', height:"350px" }}>
      <Card.Img style={{boxShadow:'1px 3px 17px',borderRadius:'30px',borderStyle:'ridge',height:"290px"}} className='poster mt-4' variant="top"  src={movieDetails.Poster} />
      <Card.Body>
      </Card.Body>
    </Card>


    <Card style={{ width: '20rem',border:'none',borderRadius:'0' ,height:"600px"}}>
      <Card.Body className='body'>
        <Card.Text>
        <p className='date'><b>Release Date: </b>{movieDetails.Released}</p>
        <p className='director'><b>Director: </b>{movieDetails.Director}</p>
        <p className='writer'><b>Writer: </b>{movieDetails.Writer}</p>
        <p className='language'><b>Language: </b>{movieDetails.Language}</p>
        <p className='time'><b>Runtime: </b>{movieDetails.Runtime}</p>
        <p className='rating text-center'><b>imdbRating: </b>{movieDetails.imdbRating}</p>
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '20rem',border:'none',borderRadius:'0 0 30px 0' }}>
      <Card.Body className='body'>
        <Card.Text>
        <p className='plot'><b>Review: </b>{movieDetails.Plot}</p>
        <p className='cast'><b>Cast: </b>{movieDetails.Actors}</p>
        
        </Card.Text>
      </Card.Body>
    </Card>
          
        </Row>
       
      </div>
    ):<p></p>
    
    }
        </div>
      </div>

    </>
  )
}

export default Content