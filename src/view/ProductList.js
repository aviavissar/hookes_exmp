import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Product from './Product';
import { useStore } from '../state/Products.store';



const ProductList = ({ products, showQuantity, buttonTitle, buttonAction, className, title }) => {

  const {totle}=useStore();
 
  return (
    <div>
      <h2>{title}{!showQuantity &&
        <Totle>{`The totle cost is ${totle}`}</Totle>}</h2>
      <List>
        {products &&
          products.map((product, indx) => {
            // console.log(product)
            return <Product key={indx} productObj={product}
              showQuantity={showQuantity}
              buttonTitle={buttonTitle}
              buttonAction={buttonAction}
              className={className}
              
            />
          })
        }
      </List>
    </div>

  );
}

export default ProductList;


const Totle = styled.span`
  margin-left:25px;
  font-size:16px;
  `;

const List = styled.ul`
    min-height:550px;
    background-color: #fff;
    margin-bottom:10px;
    width:100%
`;
