/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { useState ,createContext} from 'react';
import Main_head from './components/Main_head';
import Header from './components/Header'
import Proudects from './components/Proudects';
import Footer from './components/Footer';
export const ProductContxt = createContext(0)
export const CartProudectContext = createContext([])
function App() {
  const [clicked, setClicked] = useState(0)
  const [cartProudect,setCartProudect] = useState([])
  return (
    <div className="App" >
      <ProductContxt.Provider value={{ clicked, setClicked }}>
        <CartProudectContext.Provider value={{cartProudect,setCartProudect}}>
          <Main_head />
          <Header />
          <Proudects />
          <Footer />
          </CartProudectContext.Provider>
      </ProductContxt.Provider>
      </div>
  );
}
<script src="https://kit.fontawesome.com/ce371ba82b.js" crossorigin="anonymous"></script>
export default App;
