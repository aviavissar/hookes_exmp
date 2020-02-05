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

  let [cart, setCart] = useState([]);
  let [storeProducts, setStoreProducts] = useState([]);
  let [totle, setTotle] = useState(0);

  useEffect(() => {
    
    setCart(createStorage()) 
    setProduct().then((res) => {
      setStoreProducts(res)
    })
  }, []);

  const buyTheProduct= (productObj,quantity)=>{
    let cart=buyProduct(productObj,quantity)
    setCart(cart) 
     }
 
     const removeTheProduct= (productObj)=>{
    let cart=removeProduct(productObj)
    setCart(cart) 
      }

      
  const setTheTotle = (cost) => {
    totle = totle + cost;
    setTotle(totle)
    console.log(totle)
  }


  // state = values to display
  const state = {
    storeProducts,cart,totle
  };
  // actions = callbacks to invoke
  const actions = {
    buyTheProduct ,setCart,removeTheProduct,setTheTotle
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
}

export { StoreProvider, useStore };