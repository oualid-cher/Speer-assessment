import './App.css';
import NavbarComp from './components/navbar/navbar';
import Car from './components/hero/hero';
import Red from './components/red/red';
import Yellow from './components/yellow/yellow';

function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <Car></Car>
      <Red></Red>
      <Yellow></Yellow>
    </div>
  );
}

export default App;
