import jsonStoreProducts from '../storeProducts.json';
import uuidv4 from 'uuid/v4'
let cart=[];

export const createStorage = () => {
  if (typeof (Storage) !== "undefined") {
    if (!localStorage.getItem("ElementorStoreCart‏")) {
      localStorage.setItem("ElementorStoreCart‏","[]");
    }
    else{
      cart =JSON.parse(localStorage.getItem("ElementorStoreCart‏"));
      return cart;
    }
  } else {
    console.log("Sorry! No Web Storage support..open in another browser");
  }
}
export function setProduct() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      resolve(jsonStoreProducts);
    }, 1000);
  });

}

export const buyProduct=(productObj,quantity) =>{
cart =JSON.parse(localStorage.getItem("ElementorStoreCart‏"));
const id=uuidv4();
quantity=parseInt(quantity);
let purchase={...productObj,quantity,id}
cart.push(purchase)
localStorage.setItem("ElementorStoreCart‏",JSON.stringify(cart));
  return cart;
}

export const removeProduct=(productObj)=>{
cart=cart.filter((purchase)=>purchase.id!==productObj.id);
localStorage.setItem("ElementorStoreCart‏",JSON.stringify(cart));
return cart
}