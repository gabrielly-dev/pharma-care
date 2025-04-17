import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";

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

    function cancelar() {
        alert('Solicitação Cancelada.')
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
    <div className="flex justify-center w-full items-center py-25 h-211">
        <div className="container flex justify-center box-content">
            <div className=" border border-solid border-gray-300 h-130 flex flex-col justify-evenly items-center text-2xl  text-purple-800 w-150 rounded-2xl">
                <h1 className="font-bold">{id === undefined ? 'Cadastrar Nova Categoria' : 'Alterar Categoria Existente'}</h1>

                <form onSubmit={gerarNovaCategoria} className="flex flex-col h-90 justify-evenly">
                    <div className="flex flex-col text-lg text-black font-medium gap-2">
                        <label htmlFor="nome">Nome</label>
                        <input  
                            type="text" 
                            placeholder="Nome da categoria" 
                            name="nome"
                            value={categoria.nome}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="text-gray-500 border border-solid border-gray-300 p-3 w-130 rounded-lg font-normal"
                        />
                    </div>
                    <div className="flex flex-col text-lg text-black font-medium gap-2">
                        <label htmlFor="descricao">Descrição</label>
                        <input  
                            type="text" 
                            placeholder="Descrição da categoria" 
                            name="descricao" 
                            value={categoria.descricao}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="text-gray-500 border border-solid border-gray-300 p-3 w-130 rounded-lg font-normal"
                        />
                    </div>
                    <div className=" text-lg font-bold flex flex-row gap-4">
                        <button type="reset" onClick={cancelar} className="border border-solid border-gray-300 w-50 text-black p-2 rounded-lg cursor-pointer hover:shadow-xl">Cancelar</button>
                        <button type="submit" className="bg-black w-76 text-white p-2 rounded-lg cursor-pointer hover:shadow-xl">
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :

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