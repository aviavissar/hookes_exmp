import React, { useState } from 'react';
import styled from 'styled-components/macro';
import {  LIGHT_GREY } from "../styles/colors";
import Option from './Option';

const Search = ({ handleFormSubmit, videosQuery }) => {
 
  
  let [term, setTerm] = useState('');

 
  const handleSubmit = (event) => {
    event.preventDefault();
    setTerm(event.target.value)
    handleFormSubmit(term)
  }
  
  
  return (
    <Row>
      <form >
        <input onChange={handleSubmit} type="text" label="WHERE" placeholder="Anywhere" value={term} />
        <Ul>
          {
            //console.log(videosQuery)
            videosQuery.map((vid, indx) => {
              return <Option key={indx} title={vid.snippet.title} setTrem={()=>setTerm('')} videoObj={vid}
              // href={'https://www.youtube.com/watch?v='+vid.id.videoId}
             ></Option>
            })
          }</Ul>
      </form>

    </Row>
  );
}

export default Search;

const Row = styled.div`

       `;
const Ul = styled.ul`
background-color: ${LIGHT_GREY} ;
    width: 50%;
    position: relative;
    font-size: 12px;
    top:3px;
    padding: 0 1.5vw 0 1.5vw;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;