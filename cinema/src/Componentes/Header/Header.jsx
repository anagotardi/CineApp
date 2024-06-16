import Navbar from "../Navbar/Navbar";
import { FaHeart } from "react-icons/fa";

function Header() {
    return (  
        <header className="flex bg-[#DE3843] text-white p-4 mb-4 justify-between items-center">
            <span>Olá, visitante!</span>
            <div className="flex items-center space-x-2">
                <h1 className="text-xl">Bem-vindo ao LoveScreen</h1>
                <FaHeart className="text-xl" />
            </div>
            <Navbar />
        </header>
    );
}

export default Header;