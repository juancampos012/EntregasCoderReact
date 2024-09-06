import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a la mejor tienda de cafe\n Rioblanco-Tolima"}/>
    </>
  )
}

export default App
