import React from "react";
import styled,{css} from "styled-components";
import palette from "../../lib/palette";



const StyledButton=styled.button`
    border:none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding:0.25rem 1rem;
    color:white;
    outline: none;
    cursor: pointer;

    background: ${palette.gray[8]};
    &:hover{
        background :${palette.gray[6]};
    }
    ${props=>
    props.fullWidth &&
    css`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
    `
        
    }

    ${props=>
    props.cyan && 
    css`
        background: ${palette.cyan[5]};
        &:hover{
            background: ${palette.cyan[4]};
        }
    `
    }
`

const Button =props =><StyledButton {...props}/>;

export default Button;

//버튼 컴포넌트에 cyan r과 fullwidth 라는 props 를 넣어주면 다른 스타일이 적용된다.