import React from "react";
import styled,{css} from "styled-components";
import palette from "../../lib/palette";
import {withRouter} from "react-router-dom"



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


const Button=({to,history,...rest})=>{
    const onClick=e=>{
        //to 가 있다면 to로 페이지 이동
        if(to){
            history.push(to);
        }
        if(rest.onClick){
            rest.onClick(e);
        }
    };

    return <StyledButton {...rest} onClick={onClick}/>
}

export default withRouter(Button);

//history 를 사용하여 to 값이 있을 경우 페이지를 이동하도록 구현한뒤 Button 컴포넌트를 사용할때 to 값을 props로 넣어주면 Link 컴포넌트로 작동한다.

//버튼 컴포넌트에 cyan r과 fullwidth 라는 props 를 넣어주면 다른 스타일이 적용된다.