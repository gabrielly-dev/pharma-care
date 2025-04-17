import { useNavigate, useParams } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { useEffect, useState } from "react"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"

function DeletarCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Erro na identificação da categoria')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)
            alert('Categoria apagada com sucesso')

        } catch (error: any) {
            alert('Erro ao deletar o tema.')
            
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    function cancelar() {
        alert('Solicitação Cancelada.')
        navigate("/categorias")
    }

    return (
        <div className="flex justify-center h-211 items-center">
            <div className="container flex justify-center box-content">
                <div className=" border border-solid border-gray-300 h-130 flex flex-col justify-evenly items-center text-2xl  text-purple-800 w-150 rounded-2xl">
                    <div className="font-bold flex flex-col items-center">
                        <h1>Deletar Categoria</h1>
                        <p className="text-lg text-black font-medium">Tem certeza de que deseja apagar a categoria abaixo?</p>
                    </div>

                    <div className="flex flex-col bg-purple-100 rounded-2xl justify-center items-center p-10 gap-3">
                        <header className="text-purple-800 text-xl font-bold">{categoria.nome}</header>
                        <p className="text-lg text-center font-semibold text-black">{categoria.descricao}</p>
                    </div>

                    <div className=" text-lg font-bold flex flex-row gap-4">
                        <button type="reset" onClick={cancelar} className="bg-black w-76 text-white p-2 rounded-lg cursor-pointer hover:shadow-xl">Não</button>
                        <button onClick={deletarCategoria} className="border border-solid border-gray-300 w-50 text-black p-2 rounded-lg cursor-pointer hover:shadow-xl">
                            {isLoading ?
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                /> :

                                <span>Sim</span>
                                
                            }
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria