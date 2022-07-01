import './App.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className="container-principal">
      <NavBar />
      <ItemListContainer />
      <ItemCount />
    </div>
  );
}

export default App;
