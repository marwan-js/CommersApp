/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { useState ,createContext} from 'react';
import Header from './components/Header'
import Proudects from './components/Products';
import Footer from './components/Footer';
import Product from './components/SingleProduct';
import {  Route, Routes,  } from 'react-router-dom';
export const ProductContxt = createContext()
function App() {
  const [noOfClicks,setNoOfClicks] = useState(0)
  const [cartProduect, setCartProduect] = useState([])
  const [single, setSingleProduct] = useState([])
  const [quantity, setQuantityt] = useState(1)
  const [cartState, setCart] = useState(false)
  const [unique, setUnique] = useState([])
  const [url, setUrl] = useState()
  console.log(url)

  return ( 
    <div className="App" >
      <ProductContxt.Provider value={{
        noOfClicks, setNoOfClicks,
        cartProduect, setCartProduect,
        single, setSingleProduct,
        quantity, setQuantityt,
        cartState, setCart,
        url, setUrl,
        unique, setUnique,
      }}>
                <Header />
                  <Routes>
                    <Route path='/'
                      element={
                        <>
                          <Proudects/>
                          <Footer />
                      </>
                    } />
                    <Route path={`/pro/${url}`} element={<>
                    <Product />
                  </>} />
                    
                </Routes>
      </ProductContxt.Provider>
      </div>
  );
}
<script src="https://kit.fontawesome.com/ce371ba82b.js" crossorigin="anonymous"></script>
export default App;
