function Navbar() {
    return (
        <div className="flex justify-center">
            <div className="container flex flex-row justify-between">
                <div>Farmácia</div>
                <div className="flex flex-row gap-10">
                    <p>Home</p>
                    <p>Categorias</p>
                    <p>Produtos</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar