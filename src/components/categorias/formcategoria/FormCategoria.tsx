import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { MutatingDots } from "react-loader-spinner";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Erro na identificação do ID')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/categorias")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)
                alert('A categoria foi atualizada com sucesso!')
            } catch (error: any) {
                alert('Erro ao atualizar a categoria.')
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)
                alert('O Tema foi cadastrado com sucesso!')
            } catch (error: any) {
                alert('Erro ao cadastrar uma nova categoria.')

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
    <div className="flex justify-center">
        <div className="container">
            <div>
                <h1>{id === undefined ? 'Cadastrar Nova Categoria' : 'Alterar Categoria Existente'}</h1>

                <form onSubmit={gerarNovaCategoria}>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input  type="text" placeholder="Nome da categoria" name="nome" />
                    </div>
                    <div>
                        <label htmlFor="descricao">Descrição</label>
                        <input  type="text" placeholder="Descrição da categoria" name="descricao" />
                    </div>
                    <div>
                        <Link to='/categorias'>Cancelar</Link>
                        <button type="submit">
                        {isLoading ?
                            <MutatingDots
                                visible={true}
                                height="200"
                                width="200"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper mx-auto"/> :

                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                        }
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>


    )
}

export default FormCategoria