import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { LIGHT_GREY } from "../styles/colors";
import { createGlobalStyle } from "styled-components";

const CategoryCreator = ({ }) => {


    let [categorys, setCategorys] = useState([]);


    const handleSubmit = (event) => {

    }


    return (
      
            <form className='category_form'>
                <Inp>
                    <input type="text" className='category' placeholder="category name" />
                    <button>add category</button>
                    <button>delete category</button>
                </Inp>

                <Select>
                    <select>
                        {
                            categorys.map((ctg) => <option value={ctg} > {ctg}</option>)
                        }
                    </select>
                </Select>
<LocalStyles/>
            </form>

        
    );
}

export default CategoryCreator;

const Inp = styled.div`
width: 70%;
display:flex;
justify-content: space-around;
       `;
const Select = styled.div`
    width: 30%;
    font-size: 12px;
   padding: 0 1.5vw;
    border-radius: 15px;
  
`;

const LocalStyles = createGlobalStyle`
.category_form
{
    display:flex
    button{
        min-width:100px;
        font-size: 12px;
        height:30px;
        padding:5px;
        margin:auto 10px;
    }
    select{
    width: 170px;
    padding:5px;
        margin: 10px;
    height: 30px;
    }
    input{
        height:30px;
        padding:5px;
        margin:auto 10px;
    }
}


`;