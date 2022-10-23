/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { useState ,createContext} from 'react';
import Header from './components/Header'
import Proudects from './components/Proudects';
import Footer from './components/Footer';
export const ProductContxt = createContext(0)
export const CartProduectContext = createContext([])
function App() {
  const [noOfClicks,setNoOfClicks] = useState(0)
  const [cartProduect,setCartProduect] = useState([])
  return (
    <div className="App" >
      <ProductContxt.Provider value={{ noOfClicks, setNoOfClicks }}>
        <CartProduectContext.Provider value={{cartProduect,setCartProduect}}>
          <Header />
          <Proudects />
          <Footer />
          </CartProduectContext.Provider>
      </ProductContxt.Provider>
      </div>
  );
}
<script src="https://kit.fontawesome.com/ce371ba82b.js" crossorigin="anonymous"></script>
export default App;
