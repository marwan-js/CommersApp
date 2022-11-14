/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { useState ,createContext} from 'react';
import Header from './components/Header'
import Proudects from './components/Products';
import Footer from './components/Footer';
import Product from './components/SingleProduct';
import {  Route, Routes,  } from 'react-router-dom';
export const ProductContxt = createContext(0)
export const CartProduectContext = createContext([])
export const ProductPageContext = createContext([])
export const QuantityContext = createContext(0)
export const CountContext = createContext(0)
export const Cartcontext = createContext(false)
export const UniqueContext = createContext([])
function App() {
  const [noOfClicks,setNoOfClicks] = useState(0)
  const [cartProduect, setCartProduect] = useState([])
  const [single, setSingleProduct] = useState([])
  const [quantity, setQuantityt] = useState(1)
  const [cartState, setCart] = useState(false)
  const [unique, setUnique] = useState([])
  
  

  return ( 
    <div className="App" >
      <ProductContxt.Provider value={{ noOfClicks, setNoOfClicks }}>
        <CartProduectContext.Provider value={{ cartProduect, setCartProduect }}>
          <ProductPageContext.Provider value={{ single, setSingleProduct }}>
            <QuantityContext.Provider value={{ quantity, setQuantityt }}>
              <Cartcontext.Provider value={{ cartState, setCart }}>
                <UniqueContext.Provider value={{unique,setUnique}}>
                <Header />
                  <Routes>
                    <Route path='/'
                      element={
                        <>
                          <Proudects  />
                          <Footer />
                      </>
                    } />
                  <Route path='/pro' element={<>
                    <Product />
                  </>} />
                    
                </Routes>
                </UniqueContext.Provider>
                </Cartcontext.Provider>
            </QuantityContext.Provider>
          </ProductPageContext.Provider>
        </CartProduectContext.Provider>
      </ProductContxt.Provider>
      </div>
  );
}
<script src="https://kit.fontawesome.com/ce371ba82b.js" crossorigin="anonymous"></script>
export default App;
