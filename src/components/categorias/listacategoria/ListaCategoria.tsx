import React, { useEffect, useState } from 'react'
import Categoria from '../../../models/Categoria'
import CardCategoria from '../cardcategoria/CardCategoria'
import { buscar } from '../../../services/Service'
import { MutatingDots } from 'react-loader-spinner'

function ListaCategoria() {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            alert('Não foi possível encontrar categorias.')
        }


    }



    useEffect(() => {
        buscarCategorias()    
    }, [categorias.length])

  return (
    <div>
        {categorias.length === 0 && (
            <MutatingDots
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
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
     

    </div>
  )
}

export default ListaCategoria