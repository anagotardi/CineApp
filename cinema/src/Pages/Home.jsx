import data from '../../arquivo.json';
import { FaHeart } from "react-icons/fa";

function Home() {
    return ( 
        <> 
       <div className='grid grid-cols-3 gap-3'>
       <img src='/10-coisas-que-eu-odeio-em-voce-poster.jpg' alt="poster" className="w-full h-auto" />

            <div className="col-span-3 flex bg-[#DE3843] text-white text-7xl justify-center items-center p-8 space-x-8">
                <span>Loves do mês</span>
                <FaHeart />
            </div>

            {
                data.map((filmes, index) => (
                    <div className='card bg-zinc-50 rounded-lg' key={index}>
                        <h1>{filmes.title}</h1>
                        <img className="w-full h-[200px] object-cover rounded-lg m-2" src={filmes.image} alt={filmes.title} />
                        <div className='tags'>
                            <div className='text m-5'>
                                <div className='title m-7'>
                                    {
                                        filmes.tags.map(tag => (
                                            <span className="bg-pink-500 text-white m-1 p-1 rounded-lg" key={tag}>{tag}</span>
                                        ))
                                    }
                                    {
                                        filmes.text.map(text => (
                                            <p className='p-2' key={text}>{text}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    );
}

export default Home;