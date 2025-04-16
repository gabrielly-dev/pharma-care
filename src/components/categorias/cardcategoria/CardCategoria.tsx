import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { PencilSimpleLine, Trash } from '@phosphor-icons/react'

interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriasProps) {
  return (
    <div>
        <header>Categoria Título</header>
        <p>{categoria.descricao}</p>
        <div>
            {/* {`/editarcategoria/${categoria.id}`} */}
            <Link to=''>
                <button><PencilSimpleLine size={32} /></button>
            </Link>
            {/* {`/deletarcategoria/`} */}
            <Link to=''>
                <button><Trash size={32} /></button>
            </Link>
        </div>
    </div>
  )
}

export default CardCategoria