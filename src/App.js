
import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';



const App = () => {
  const onAdd = (quantity) => {
    console.log(quantity);
}

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting  = " Welcome" texto = "to our shop online"/>
    <ItemCount initial={0} stock={6} onAdd={onAdd} />
    
    
    </>
    );
}
export default App;











