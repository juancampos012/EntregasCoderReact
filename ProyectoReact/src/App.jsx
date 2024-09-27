import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path="/" 
          element={<ItemListContainer />} 
        />
        <Route 
          path="/category/:categoryId" 
          element={<ItemListContainer />} 
        />
        <Route 
          path="/item/:itemId" 
          element={<ItemDetailContainer />} 
        />
      </Routes>
    </>
  );
}

export default App;