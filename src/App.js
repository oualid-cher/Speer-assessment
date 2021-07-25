import './App.css';
import NavbarComp from './components/navbar/navbar';
import Car from './components/hero/hero';
import Red from './components/red/red';

function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <Car></Car>
      <Red></Red>
    </div>
  );
}

export default App;
