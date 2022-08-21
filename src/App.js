import './App.css';
import NavBar from './componentes/navBar';
import cartWidget from './componentes/cartWidget';
import itemListContainer from './componentes/itemListContainer';



const App = () => {
  return (
    <>
    <NavBar/>
    <cartWidget/>
    <itemListContainer/>
        </>
    );
}

cartWidget();
itemListContainer();

export default App;






