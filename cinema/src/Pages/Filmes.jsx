import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

function Filmes() {
    const [filmes, setFilmes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(error => console.log(error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtrar filmes com base no termo de pesquisa
    const filteredFilmes = filmes.filter(filme =>
        filme.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Configuração do carrossel
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-end mt-4 mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-64 px-3 py-2 pl-10 border text-red-500 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <IoSearchSharp className="absolute right-5 top-3 text-gray-500 pointer-events-none" />
                </div>
            </div>

            <div className="flex items-center mb-4">
                <h1 className="text-xl mr-2">Romances Antigos</h1>
                <FaHeart className="text-red-500" />
            </div>
            
            <Slider {...settings}>
                {filteredFilmes.map(filme => (
                    <div className="card-filme" key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt={filme.title} className="w-full h-auto object-cover" />
                        <h1>{filme.title}</h1>
                        <Link to={`${filme.id}`} className="bg-red-300">Saiba Mais</Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Filmes;