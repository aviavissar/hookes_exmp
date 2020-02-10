import React, { useState, createContext, useContext, useEffect } from "react";
import { createStorage, buyProduct, setProduct,removeProduct } from '../service/fetchApi';

const Store = createContext();
const { Provider } = Store;
const useStore = () => {
  const context = useContext(Store);
  if (!context) {
    throw new Error(`useStore must be used within a Provider`);
  }
  return context;
};


const StoreProvider = ({ children }) => {

  let [theCart, setTheCart] = useState([]);
  let [storeProducts, setStoreProducts] = useState([]);
  let [cartTotle, setCartTotle] = useState(0);

  useEffect(() => {
    console.log("createStorage",createStorage())
    let [cart,totle]=createStorage();
    setTheCart(cart);
    setCartTotle(totle)
    setProduct().then((res) => {
      setStoreProducts(res)
    })
  }, []);

  const buyTheProduct= (productObj,quantity)=>{
    const [cart,totle]=buyProduct(productObj,quantity)
    setTheCart(cart) ;
    setCartTotle(totle);
     }
 
     const removeTheProduct= (productObj, quantity)=>{
      const [cart,totle]=removeProduct(productObj, quantity)
      setCartTotle(totle);
      console.log('tot',totle)
    setTheCart(cart) 
      }

   


  // state = values to display
  const state = {
    storeProducts,theCart,cartTotle
  };
  // actions = callbacks to invoke
  const actions = {
    buyTheProduct ,setTheCart,removeTheProduct,setCartTotle
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
}

export { StoreProvider, useStore };