
import './App.css';

import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  const nombre = "React";
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a By Ramona" />
    </>
    
  );
}

export default App;