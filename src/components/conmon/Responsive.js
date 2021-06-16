import React from "react";
import styled from "styled-components";


const ResopnsiveBlock=styled.div`
padding-left: 1rem;
padding-right: 1rem;
width: 1024px;
margin: 0 auto;   //중앙정렬

@media (max-width:1024px){
    width: 768px;
}

@media (max-width:768px){
    width: 100%;
}
`

const Responsive=({children,...rest})=>{
    return<ResopnsiveBlock {...rest}>{children}</ResopnsiveBlock>
};

export default Responsive;




