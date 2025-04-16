import React, { useState } from 'react'
import Categoria from '../../../models/Categoria'
import CardCategoria from '../cardcategoria/CardCategoria'

function ListaCategoria() {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    

  return (
    <div>
        <div>
            <p>Nossas Categorias</p>
        </div>

        <div>
            {categorias.map((categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria}/>
            ))}
        </div>

    </div>
  )
}

export default ListaCategoria