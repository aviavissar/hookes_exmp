import jsonStoreProducts from '../storeProducts.json';
import uuidv4 from 'uuid/v4'
let cart=[];
let totle=0;

export const createStorage = () => {
  if (typeof (Storage) !== "undefined") {
    if (!localStorage.getItem("ElementorStoreCart‏")) {
      localStorage.setItem("ElementorStoreCart‏","[]");
      cart =JSON.parse(localStorage.getItem("ElementorStoreCart‏"));
    }
    if (!localStorage.getItem("ElementorTotle")) {
      localStorage.setItem("ElementorTotle",0);
      totle =JSON.parse(localStorage.getItem("ElementorTotle"));
    }
    else {
      cart =JSON.parse(localStorage.getItem("ElementorStoreCart‏"));
      totle =JSON.parse(localStorage.getItem("ElementorTotle"));
     }
    return [cart,totle];
  } else {
    return new Error("Sorry! No Web Storage support..open in another browser");
  }
}
export function setProduct() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      resolve(jsonStoreProducts);
    }, 1000);
  });

}

export const buyProduct=(productObj,objQuantity) =>{
cart =JSON.parse(localStorage.getItem("ElementorStoreCart‏"));
totle =JSON.parse(localStorage.getItem("ElementorTotle"));

const id=uuidv4();
const quantity=parseInt(objQuantity);
let purchase={...productObj,quantity,id}
cart.push(purchase)
totle=productObj.price*quantity+totle;

localStorage.setItem("ElementorStoreCart‏",JSON.stringify(cart));
localStorage.setItem("ElementorTotle",JSON.stringify(totle));

return [cart,totle];
}

export const removeProduct=(productObj, objQuantity)=>{
cart=cart.filter((purchase)=>purchase.id!==productObj.id);
console.log("objQuantity",objQuantity)
const quantity=parseInt(objQuantity);
totle =JSON.parse(localStorage.getItem("ElementorTotle"));
totle=totle-(productObj.price*quantity);
localStorage.setItem("ElementorStoreCart‏",JSON.stringify(cart));
localStorage.setItem("ElementorTotle",JSON.stringify(totle));
return [cart,totle];
}