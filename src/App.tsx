import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import ListaCategoria from './components/categorias/listacategoria/ListaCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/categorias" element={<ListaCategoria/>}/>
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
