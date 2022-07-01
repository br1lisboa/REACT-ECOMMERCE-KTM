import './App.css';
import ItemDetail from './components/ItemDetail';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className="container-principal">
      <NavBar />
      <ItemListContainer />
      <ItemDetail />
    </div>
  );
}

export default App;
