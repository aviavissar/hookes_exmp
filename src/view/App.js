import React from 'react';
import styled from 'styled-components/macro';
import ProductList from './ProductList';
import { LIGHT_GREY, GREY } from "../styles/colors";
import GlobalStyles from "../styles/global.style";
import { useStore } from '../state/Products.store';


const App = () => {

  const { storeProducts, buyTheProduct, theCart, removeTheProduct, cartTotle } = useStore();
 
  return (
    <Page>

      <Header>{
        // <SearchDiv> 
        //<Search videosQuery={videos} handleFormSubmit={handleFetch}/>
        // </SearchDiv>
      }
      </Header>
      <Content>
        <StoreList>
          <ProductList products={storeProducts}
            className='store'
            showQuantity={true}
            buttonTitle={`add to the cart`}
            buttonAction={buyTheProduct}></ProductList>
        </StoreList>
        <CartList>
          <ProductList
            title={`My Cart`}
            products={theCart}
            showQuantity={false}
            buttonTitle={`Remove`}
            className='cart'
            cartTotle={cartTotle}
            buttonAction={removeTheProduct}>

          </ProductList>
        </CartList>
      </Content>


      <GlobalStyles />
    </Page>
  );
}

export default App;

const Page = styled.div`
    margin: 0px auto 0 auto;
    width: 1400px;
    height:800px;
    background:#fff;
    `;

const Header = styled.div`
    height:65px;
    padding: 5px;
    display: flex;
    background: ${GREY};
`;

const StoreList = styled.div`
    width: 60%;
      display:flex;
      padding-left:40px;
      background-color: #ffffff;
   `;
const Content = styled.div`
      display:flex
   `;
const CartList = styled.div`
  border:15px solid ${ LIGHT_GREY};
    border-radius: 4px ;
    padding-bottom: 24px;
    width: 40%;
    background-color: #ffffff;
       `;
/* const ListBox = styled.div`
   width: 40%;
   background: ${ LIGHT_GREY};
   display:flex
  `; */