import { useNavigate, useParams } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { useEffect, useState } from "react"
import { buscar, deletar } from "../../../services/Service"

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
            await deletar(`/temas/${id}`)
            alert('Categoria apagada com sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                alert('Erro ao deletar o tema.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="flex justify-center">
            <div className="container">
                <div>
                    <div>
                        <h1>Deletar Categoria</h1>
                        <p>Tem certeza de que deseja apagar a categoria abaixo?</p>
                    </div>

                    <div>
                        <header>Nome</header>
                        <p>Descrição</p>
                    </div>

                    <h1>Deletar Categoria</h1>
                    <p>Tem certeza de que deseja apagar a categoria abaixo?</p>

                    <div>
                        <button>Sim</button>
                        <button>Não</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria