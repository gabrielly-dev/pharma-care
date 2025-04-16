import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { PencilSimpleLine, Trash } from '@phosphor-icons/react'

interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriasProps) {
  return (
    <div>
        <header>{categoria.nome}</header>
        <p>{categoria.descricao}</p>
        <div>
            <Link to={`/editarcategoria/${categoria.id}`}>
                <button><PencilSimpleLine size={32} /></button>
            </Link>
            <Link to={`/deletarcategoria/`}>
                <button><Trash size={32} /></button>
            </Link>
        </div>
    </div>
  )
}

export default CardCategoria