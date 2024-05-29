import data from '../../arquivo.json'

function Home() {
    return ( 
        <> 
        <div className='grid grid-cols-3 gap-3'>

        {
            data.map(
                (filmes, index) =>(
                    <div className='card' key={index}>
                        <h1>{filmes.title}</h1>
                        <img src={filmes.image}/>
                    <div className='tags'>
                    <div className='text'>
                    {
                        filmes.tags.map( tag =>(
                            <span className="bg-pink-500 text-white  m-1" key={tag}>{tag}</span>
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
                    

                    
                )
            )
        }
            </div>

        </>
     );
}

export default Home;