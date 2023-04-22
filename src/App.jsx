
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import navbar from "./Components/Navbar/navbar";


function App() {
  const nombre = "React";
  return (
  <>
      <navbar />
      <h1> Estamos en el curso de {nombre} </h1>
      <h2> esto es un h2 </h2>
      <ItemListContainer greeting= "Hola Mundillo"/>
  </>
  
  );
}

export default App;
