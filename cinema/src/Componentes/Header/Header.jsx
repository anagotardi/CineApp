import Navbar from "../Navbar/Navbar";

function Header() {
    return (  
        <header className="flex bg-[#9bc945] text-white p-4 mb-4 justify-between" >
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao Cinegusson</h1>
            <Navbar/>
        </header>
    );
}

export default Header;