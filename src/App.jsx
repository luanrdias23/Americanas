import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
import Cabecalho from './components/cabecalho'



function App() {
 

  return (
    <>
    <Cabecalho/>
    <Menu/>
    <Outlet/>
    <Rodape/>
    </>
  )
}
export default App
    
  





