import './App.css';
import NavbarComp from './components/navbar/navbar';
import Car from './components/hero/hero';
import Red from './components/red/red';
import Yellow from './components/yellow/yellow';
import Perks from './components/perks/perks';
import Exp from './components/exp/exp';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <Car></Car>
      <Red></Red>
      <Yellow></Yellow>
      <Perks></Perks>
      <Exp></Exp>
      <Footer></Footer>
    </div>
  );
}

export default App;
