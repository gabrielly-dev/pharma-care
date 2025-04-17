import ListaCategoria from '../../components/categorias/listacategoria/ListaCategoria';

function Home() {
  return (
    <div className='w-full'>
        <div className="flex justify-center w-full bg-purple-800 text-purple-50">

            <div className="container grid grid-cols-2 py-30 justify-center gap-30">
                <div className='flex flex-col gap-10 justify-center'>
                    <h2 className='text-6xl font-bold'>Sua saúde em primeiro lugar</h2>
                    <p className='text-2xl'>Encontre os melhores medicamentos e produtos de saúde com preços acessíveis. Entrega rápida e atendimento especializado.</p>
                    <div>
                        <button className='bg-purple-50 text-purple-800 p-5 w-55 rounded-2xl hover:shadow-xl/30 cursor-pointer text-xl font-semibold'>Ver Categorias</button>
                        {/* <button>Ver Produtos</button> */}
                    </div>
                </div>
                <div className='bg-violet-400 flex justify-center items-center text-purple-50 text-8xl font-bold rounded-3xl h-130'>
                    <h1>PharmaCare</h1>
                </div>
            </div>

        </div>

        <ListaCategoria/>
    </div>
  )
}

export default Home