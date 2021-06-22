import React from "react";
import styled from "styled-components";
import palette from "../../lib/palette";

//에디터 하단에 태그를 추가하는 컴포넌트와 포스트작성을 완료하거나 취소하는 버튼을 보여주는 버튼        


const TagBoxBlock=styled.div`
width: 100%;
border-top: 1px solid ${palette.gray[2]};
padding-top: 2rem;

h4{
    color:${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
}

`;

const TagForm=styled.form`
border-radius: 4px;
overflow: hidden;
display: flex;
width: 256px;
border: 1px solid ${palette.gray[9]};  //스타일 초기화
input,
button{
    outline: none;
    border:none;
    font-size: 1rem;
}

input{
    padding: 0.5rem;
    flex:1;
    min-width: 0;
}
button{
    cursor:pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background-color: gray;
    color:white;
    font-weight: bold;
    &:hover{
        background: ${palette.gray[6]};
    }

}
`;

const Tag=styled.div`
margin-right: 0%.5rem;
color:${palette.gray[6]};
&:hover{
    opacity:0.5 ;
}
`;

const TagListBlock=styled.div`
display: flex;
flex-direction: column;
margin-top: 0.5rem;

`;

//React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링 되도록 처리
const TagItem=React.memo(({tag})=><Tag>#{tag}</Tag>);

//React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링 되도록 처리
const TagList=React.memo(({tags})=>(
    <TagBoxBlock>
        {tags.map(tag=>(
            <TagItem key={tag} tag={tag}/>
        ))}
    </TagBoxBlock>
    ));


const TagBox=()=>{
    return(
        <TagListBlock>
        <h4>태그</h4>
        <TagForm>
        <input placeholder="태그를 입력하세요"/>
        <button type="submit">추가</button>
        </TagForm>
        <TagList tags={['태그1','태그2','태그3']}/>
        
    </TagListBlock>
    );
};

export default TagBox;


//TagItem 과 TagList 라는 컴포넌트를 추가로 만들엇다
//컴포넌트를 분리시켜서 렌더링을 최적화 하기 위함이다
//TagBox 컴포넌트는 두 가지 상황에서 렌더링을 한다
// 1. input 이 바뀔때
//2.태그 목록이 바뀔때.

