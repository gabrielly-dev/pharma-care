import React, { useEffect, useState } from 'react'
import Categoria from '../../../models/Categoria'
import CardCategoria from '../cardcategoria/CardCategoria'
import { buscar } from '../../../services/Service'
import { MutatingDots, RotatingLines } from 'react-loader-spinner'

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
    <div className='flex justify-center'>
        
        <div className='container'>
            {categorias.length === 0 && (
                <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                />
            )}
            <div className='flex flex-col py-15 gap-10'>
                <div className='text-3xl font-bold'>
                    <h1>Nossas Categorias</h1>
                </div>

                <div className='grid grid-cols-4 gap-10'>
                    {categorias.map((categoria) => (
                        <CardCategoria key={categoria.id} categoria={categoria}/>
                    ))}
                </div>
            </div>
        </div>

    </div>
  )
}

export default ListaCategoria