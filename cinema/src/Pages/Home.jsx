import data from '../../arquivo.json';
import { FaHeart } from "react-icons/fa";

function Home() {
    return (
        <div className='grid grid-cols-3 gap-3'>
            <div className="col-span-3">
                <img
                    src='/10-coisas-que-eu-odeio-em-voce-poster.jpg'
                    alt="poster"
                    className="w-full object-cover"
                    style={{ height: 'calc(100vh - 200px)' }} // Ajuste a altura conforme necessário
                />
            </div>

            <div className="col-span-3 flex bg-[#DE3843] text-white text-7xl justify-center items-center p-8 space-x-8">
                <span>Loves do mês</span>
                <FaHeart />
            </div>

            

            {data.map((filme, index) => (
                <div className='card bg-zinc-50 rounded-lg' key={index}>
                    <img
                        className="w-full h-[200px] object-cover rounded-lg m-2"
                        src={filme.image}
                        alt={filme.title}
                    />
                    <div className='tags'>
                        <div className='text m-5'>
                            <div className='title m-7'>
                                {filme.tags.map((tag, tagIndex) => (
                                    <span
                                        className="bg-[#DE3843] text-white m-1 p-1 rounded-lg"
                                        key={tagIndex}
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {filme.text.map((text, textIndex) => (
                                    <p className='p-2' key={textIndex}>{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;