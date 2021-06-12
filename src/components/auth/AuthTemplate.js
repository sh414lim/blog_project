import React from "react";
import styled from "styled-components";
import palette from "../../lib/palette";
import {Link} from "react-router-dom";


// 회원가입 로그인 페이지의 레이아수을 담당하는 컴포넌트


// 화면 전체를 채운다
const AuthTemplateBlock=styled.div`
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;
background:${palette.gray[2]} ;

/* flex 로 내부 내용 중앙 정렬 */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`;

// 횐색 박스
const WhiteBox=styled.div`
.logo-area{
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
}
box-shadow: 0 0 8px rgba(0,0,0,0.025);
padding: 2rem;
width: 360px;
background: white;
border-radius: 2px;
`;



const LINK=styled(Link)``;

const AuthTemplate=({children})=>{
    return <AuthTemplateBlock>
    <WhiteBox>
    <div className="logo-area">
    <LINK to ="/">REACTERS</LINK>
    </div>
        {children} 
        </WhiteBox>     
        </AuthTemplateBlock>
};

export default AuthTemplate;