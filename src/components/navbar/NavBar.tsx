import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="flex justify-center w-full bg-purple-50 py-5 shadow-xl/10">
            <div className="container flex flex-row justify-between text-lg ">
                <Link to='/home' className="text-3xl font-extrabold text-purple-800">PharmaCare</Link>
                <div className="flex flex-row gap-10">
                    <Link to='/home' className="hover:text-purple-800">Home</Link>
                    <Link to='/categorias' className="hover:text-purple-800">Lista de Categorias</Link>
                    <Link to='/cadastrarcategoria' className="hover:text-purple-800">Cadastrar Categoria</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar