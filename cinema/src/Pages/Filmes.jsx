import data from '../../arquivo.json'

function Filmes() {
    console.log(data)
    return (  
        <>
        <h1>Filmes</h1>
        {
            data.map(
                filmes => (
                    <> 
                    <h1 key={filmes.title}>{filmes.title}</h1>
                    <img src={filmes.image} alt="" />
                    </>
                )
            )
        }
        </>
    );
}

export default Filmes;