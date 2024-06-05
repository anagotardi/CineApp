import data from '../../arquivo.json'

function Home() {
    return ( 
        <> 
        <div className='grid grid-cols-3 gap-3'>

        
        {        
            data.map(
                (filmes, index) =>(
                    <div className='card bg-zinc-50 rounded-lg' key={index}>
                        <h1>{filmes.title}</h1>
                        <img className="card-w[200px] h-[200px] rounded-lg m-2" src={filmes.image}/>
                    <div className='tags'>
                    <div className='text m-5'>
                    <div className='title m-7'>
                    {
                        filmes.tags.map( tag =>(
                            <span className="bg-pink-500 text-white  m-1 p-1 rounded-lg" key={tag}>{tag}</span>
                        ))
                    }
                    {
                        filmes.text.map( text =>(
                            <p className='p-2' key={text}>{text}</p>
                        )
                            )
                    }
                    </div>
                    </div>
                    </div>
                    </div>

                    
                )
            )
        }
            </div>

        </>
     );
}

export default Home;