import { FaHeart } from "react-icons/fa";

function Sobre() {
    return ( 
<div>

    <div className="text-3xl">
        <p>Bem-vindo ao LoveScreen, o serviço de streaming dedicado exclusivamente  aos amantes do romance!</p>
        <br />
        <p>Nossa missão é  criar um refúgio onde histórias de amor emocionantes e inspiradoras  estão sempre ao seu alcance. </p>
        <br />
        <p>Seja para uma noite aconchegante ou uma  maratona de filmes, LoveScreen é o destino ideal para quem busca  narrativas que aquecem o coração. </p>
        <br />
        <p>
        Junte-se a nós e mergulhe em um mundo  onde o amor é sempre protagonista.
        </p>
    </div>

        <div className="justify-end">
        <FaHeart/>
        </div>

</div>
        
     );
}

export default Sobre;