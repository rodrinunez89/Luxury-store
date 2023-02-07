import './App.css';
import Images from './Component/Images/imagen.png';
import NavBar from './Component/ClassComponent/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Images} className="logo" alt='logo'/>
       <NavBar classname="list"/>
      </header>
      <main>
      <ItemListContainer greeting="Les presentamos la nueva pag de indumentaria"/>
      </main>
    </div>
  );
}

export default App;
