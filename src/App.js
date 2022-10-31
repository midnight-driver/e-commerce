// import logo from './logo.svg';
import './App.css';
import  Navbar from './component/navbar';
import Home from "./component/home";
import Products from "./component/Products";

function App() {
  return (
    <section>
      {/* <Switch> */}
      <Navbar />
      
      <Home />

      {/* </Switch> */}
    </section>
  );
}

export default App;
