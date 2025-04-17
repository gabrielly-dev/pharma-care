import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { PencilSimpleLine, Trash } from '@phosphor-icons/react'

interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriasProps) {

    const initial = categoria.nome.charAt(0).toUpperCase();

    return (
        <div className="flex flex-col bg-purple-100 rounded-2xl justify-center items-center p-10 gap-3">
            <div className="bg-purple-300 w-20 h-20 rounded-full flex justify-center items-center text-3xl font-semibold text-purple-800">{initial}</div>
            <header className="text-purple-800 text-xl font-bold">{categoria.nome}</header>
            <p className="text-lg text-center font-semibold">{categoria.descricao}</p>
            <div className="flex flex-row gap-4">
                {/* {`/editarcategoria/${categoria.id}`} */}
                <Link to={`/editarcategoria/${categoria.id}`} >
                    <button className="cursor-pointer">
                        <PencilSimpleLine className="text-green-400 size-10"/>
                    </button>
                </Link>
                {/* {`/deletarcategoria/`} */}
                <Link to={`/deletarcategoria/${categoria.id}`}>
                    <button className="cursor-pointer">
                        <Trash className="text-red-400 size-10" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria