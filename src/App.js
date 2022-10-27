/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { useState ,createContext} from 'react';
import Header from './components/Header'
import Proudects from './components/Products';
import Footer from './components/Footer';
import Product from './components/SingleProduct';
import { Link, Route, Routes,  } from 'react-router-dom';
export const ProductContxt = createContext(0)
export const CartProduectContext = createContext([])
export const ProductPageContext = createContext([])
function App() {
  const [noOfClicks,setNoOfClicks] = useState(0)
  const [cartProduect, setCartProduect] = useState([])
  const [single, setSingleProduct] = useState([])
  return ( 
    <div className="App" >
      <ProductContxt.Provider value={{ noOfClicks, setNoOfClicks }}>
        <CartProduectContext.Provider value={{ cartProduect, setCartProduect }}>
          <ProductPageContext.Provider value={{ single, setSingleProduct }}>
          <Header />
            <Routes>
              <Route path='/'
                element={
                  <>
                    <Proudects />
                    <Footer />
                </>
              } />
              <Route path='/pro' element={<Product />} />
            </Routes>
          </ProductPageContext.Provider>
        </CartProduectContext.Provider>
      </ProductContxt.Provider>
      </div>
  );
}
<script src="https://kit.fontawesome.com/ce371ba82b.js" crossorigin="anonymous"></script>
export default App;
