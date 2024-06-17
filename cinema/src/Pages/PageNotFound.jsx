import { LuHeartCrack } from "react-icons/lu";

function PageNotFound() {
    return (
        <div className="flex items-center justify-center">
            <h1 className="text-4xl mr-2">Erro! Não conseguimos encontrar o que você procura...</h1>
            <LuHeartCrack className="text-red-500 text-4xl" />
        </div>
    );
}

export default PageNotFound;