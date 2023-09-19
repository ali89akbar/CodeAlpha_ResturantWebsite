import './App.css';
import About from './Components/About';
import Client from './Components/Client';
import Footer from './Components/Footer';
import Footer2 from './Components/Footer2';
import Header from './Components/Header';
import Shop from './Components/Shop';
import Cart from './Components/cart';
import Menu from './Components/menu';
import Navbar from './Components/navbar';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
  <div>
   
   <Navbar/>
   <Header/>
<About/>
<Shop/>
<Menu/>
<Client/>
<Cart/>
<Footer/>

<Footer2/>
  </div>
  );
}

export default App;
