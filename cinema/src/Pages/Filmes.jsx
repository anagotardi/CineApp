import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

function Filmes() {

    const[filmes, setFilmes] = useState ([])

    useEffect( ()=> {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])
    
  
    return ( 
        <>
    
        <div className="absolute right-8">
                <IoSearch />
        </div>

        
            
        <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">Romances antigos <FaHeart /></h1>
                              
            <div className="listaFilmes flex"> 
            {
                filmes.map(
                    filme => (

                <>
                  
                        <div className="flex bg-white m-auto p-auto">
                    
                              <div
                                className="flex overflow-x-scroll pb-10 hide-scroll-bar"
                              >
                                <div
                                  className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                                >
                                  <div className="inline-block px-3">
                                    <div
                                      className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                    >
                                         <img src= {`https://image.tmdb.org/t/p/w300/${filme.backdrop_path}`}/>
                                         
                                            <h1 className="ml-20">{filme.title}</h1>
                                            

                                    </div>
                                  </div>
                                 
                                </div>
                              </div>
                        </div>
                        </>
                    )
                )
            }
    
        </div>

        <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">Romances Nacionais<FaHeart/></h1>

        <div className="listaFilmes flex"> 
            {
                filmes.map(
                    filme => (

                <>
                  
                        <div className="flex bg-white m-auto p-auto">
                    
                              <div
                                className="flex overflow-x-scroll pb-10 hide-scroll-bar"
                              >
                                <div
                                  className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                                >
                                  <div className="inline-block px-3">
                                    <div
                                      className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                    >
                                         <img src= {`https://image.tmdb.org/t/p/w300/${filme.backdrop_path}`}/>
                                         
                                            <h1 className="ml-20">{filme.title}</h1>
                                            

                                    </div>
                                  </div>
                                 
                                </div>
                              </div>
                        </div>
                        </>
                    )
                )
            }
    
        </div>

        <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">Romances Baseados em Livros<FaHeart/></h1>
        
        <div className="listaFilmes flex"> 
            {
                filmes.map(
                    filme => (

                <>
                  
                        <div className="flex bg-white m-auto p-auto">
                    
                              <div
                                className="flex overflow-x-scroll pb-10 hide-scroll-bar"
                              >
                                <div
                                  className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                                >
                                  <div className="inline-block px-3">
                                    <div
                                      className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                    >
                                         <img src= {`https://image.tmdb.org/t/p/w300/${filme.backdrop_path}`}/>
                                         
                                            <h1 className="ml-20">{filme.title}</h1>
                                            

                                    </div>
                                  </div>
                                 
                                </div>
                              </div>
                        </div>
                        </>
                    )
                )
            }
    
        </div>

        </>
     );
}

export default Filmes;