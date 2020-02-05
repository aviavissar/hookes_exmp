

import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }

   
    
    body {
      font-size:1.6rem;
      background: #666;
      font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-ser;
      /* border: blue solid 2px; */
    }
   
    ul {
      list-style-type: none;
    }
    
input{
  height: 40px;
  min-width: 400px;
  padding: 10px;
  border-radius: 10px;
  margin:3px;
  border: none;
}
input.category {
  min-width:200px;
}

button{
  height: 50px;
    min-width: 144px;
    padding: 10px;
    border-radius: 10px;
    margin: 2px 112px
    border: none;
    background-color: gray;
    color: white;
    font-size: medium;
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

a{
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}

li:hover{
  darken(GREY,15%);
}
`;

export default GlobalStyles;
