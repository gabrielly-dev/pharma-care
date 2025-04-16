import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="flex justify-center">
            <div className="container flex flex-row justify-between">
                <div>Farmácia</div>
                <div className="flex flex-row gap-10">
                    <p>Home</p>
                    <Link to='/categorias'>Lista de Categorias</Link>
                    <Link to='/cadastrarcategoria'>Cadastrar Categoria</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar