import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetalhesFilme(){
    console.log(useParams())
    const {id} = useParams()
    const [filme, setFilme] = useState({})

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-Br`)
        .then(response => response.json())
        .then(response => setFilme(response)) //mostra a lista de filmes
        .catch(error => console.log(error))
    },[])

    return(
        <>
        <h1>Detalhes do Filme</h1>
        <img src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`} />
        <p>{filme.title}</p>
        <p>{filme.vote_average}</p>
        </>
    
    );
}

export default DetalhesFilme;