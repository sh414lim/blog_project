import {createGlobalStyle} from "styled-components";
// import reset from "styled-reset";


const GlobalStyle=createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    box-sizing: border-box; //엘리먼트의 box-sizing 값을 border-box로 설정
    min-height: 100%;
}

#root{
    min-height: 100%;
}

/* 추후 회원 인증 페이지에서 배경화면을 페이지의 전체 영역에 채우기 위한 용도 */
html{
    height: 100%;
}
/* 링크의 색상 및 밑줄 없애기 */
a{
    color:inherit;
    text-decoration: none;
}

*{
    box-sizing: inherit; //모든 엘리먼트의 box-sizing 값을 border-box 값으로 설정
}

code{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export default GlobalStyle;