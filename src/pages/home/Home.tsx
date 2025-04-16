import ListaCategoria from '../../components/categorias/listacategoria/ListaCategoria';

function Home() {
  return (
    <div>
        <div className="flex justify-center">
            
            <div className='container'>
                <div className="flex justify-between">
                    <div>
                        <h2>Sua saúde em primeiro lugar</h2>
                        <p>Encontre os melhores medicamentos e produtos de saúde com preços acessíveis. Entrega rápida e atendimento especializado.</p>
                        <button>Ver Categorias</button>
                        <button>Ver Produtos</button>
                    </div>
                    <div >
                        <h1>PharmaCare</h1>
                    </div>
                </div>

                <ListaCategoria/>


            </div>

        </div>
    </div>
  )
}

export default Home