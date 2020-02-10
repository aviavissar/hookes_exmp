import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { LIGHT_GREY } from "../styles/colors";
import { useStore } from '../state/Products.store';

const CURRENCY = '$';


const Product = ({ productObj, showQuantity, buttonTitle, buttonAction, className }) => {
  
  let [addQuantity, setAddQuantity] = useState("1");
  const { productName, price, productImage,quantity=addQuantity } = productObj;

 
 

  return (

    productObj &&
    //&&
    <Li>
      <ProductBox className={className}>
        <img alt='productImage' src={productImage} />
        <Wrap className='wrap'>
          <Details>
            <h3>{productName}</h3>
            <h4>{`price:`}
              <span className='price'>{` ${price}${CURRENCY} `}</span>
              {
                !showQuantity &&
                <span className='price'>{`* ${productObj.quantity}= ${productObj.quantity * price}${CURRENCY}`} </span>
              }
            </h4>
           
          </Details>
          <InputWrap>
            {showQuantity &&
              <select onChange={(e) => setAddQuantity(e.target.value)} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            }
            <button onClick={() => buttonAction(productObj, quantity)} >{buttonTitle}</button>
          </InputWrap>
        </Wrap>
        <GlobalStyles />
      </ProductBox>
    </Li>


  );
}

export default Product;





const GlobalStyles = createGlobalStyle`

li{
  border-bottom:1px solid ${LIGHT_GREY};
}
.price{
  font-weight: bold;
}
.store{
  Details{
    width:200px;
  }
  img{
    width:25%;
    height:25%;
  }
  select {
    padding: 0 10px;
    font-size: 18px;
    height: 51px;
    margin: 15px 41px 20px 20px;
}
  .wrap{
    flex-direction: row;
   
  }
  h2{
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin:20px;
  }
  h4{
    font-size: 20px;
   
  }
  h3{
    font-size: 20px;
    font-weight: bold;
  }
  
  button {
    height: 50px;
    min-width: 100px;
    padding: 10px;
   border-radius: 10px;
   margin: 15px 5px;
   border: none;
   background-color: gray;
    color: white;
    font-size: 16px;
    }
  }
.cart{
  img{
    width:15%;
    height:15%;
  }
  .wrap{
    flex-direction: row;
  }
  h3 {
    font-size: 16px;
    font-weight: bold;
    width:200px
  }
  button {
    height: 50px;
    min-width: 100px;
    padding: 10px;
   border-radius: 10px;
   margin: 15px 5px;
   border: none;
   background-color: gray;
    color: white;
    font-size: 16px;
    }
  }
`;
const Wrap = styled.div`
display: flex;
    flex-direction: column;
    padding: 0 10px;
    justify-content: space-around;
    padding: 0 10px 0 40px;
`;

const InputWrap = styled.div`
display: flex;
    flex-direction: row;
   `;

const Details = styled.div`
padding-left: 10px;
width:230px;
   `;

const Li = styled.li`
line-height: 35px;
list-style: none;
`;

const ProductBox = styled.div`

display: flex;
padding:25px 25px 25px 45px;
`;
