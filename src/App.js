import './App.css';
import { useState ,createContext} from 'react';
import Header from './components/Header'
import Products from './components/Products';
import Footer from './components/Footer';
import Product from './components/Product';
import {  Route, Routes } from 'react-router-dom';
export const ProductContxt = createContext()

function App() {
  const [noOfCartItems, setNoOfCartItems] = useState(0)
  const [cartProduct, setCartProduct] = useState([])
  const [single, setSingleProduct] = useState([])
  const [cartState, setCart] = useState(false)
  const [isProductUnique, setIsProductUnique] = useState([])
  const [url, setUrl] = useState()
  const [products, setProducts] = useState()
  const [num, setNum] = useState(1)



  return ( 
    <div className="App" >
      <ProductContxt.Provider value={{
        noOfCartItems, setNoOfCartItems,
        cartProduct, setCartProduct,
        single, setSingleProduct,
        cartState, setCart,
        url, setUrl,
        isProductUnique, setIsProductUnique,
        products, setProducts,
        num,setNum
      }}>
                <Header />
                  <Routes>
                    <Route path='/'
                      element={
                        <>
                          <Products/>
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
