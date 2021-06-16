import React,{useState,useCallback} from "react";
import styled from "styled-components";
import palette from "../../lib/palette";


const TagBoxBlock=styled.div``;



const TagForm=styled.form``;


const Tag=styled.div``;

const TagListBlock=styled.div``;




//React.memo 를 사용하여 tag 값이 바뀔 때만 리렌더링 되도록 처리
const TagItem=React.memo(({tag,onRemove})=>(
    <Tag onClick={()=>onRemove(tag)}>#{tag}</Tag>)

        );

//React.memo를 사용하여 tags 값이 바뀔때만 리렌더링 되도록 처리
const TagList=React.memo(({tags})=>(
    <TagListBlock>
        {tags.map(tag=>(
            <TagItem key={tag} tag={tag}/>
        ))}
    </TagListBlock>
));


const TagBox=()=>{
    
        const [input,setInput]=useState('');
        const [localTags,setLocalTags]=useState([]);

        const insertTag=useCallback(
            tag=>{
                setLocalTags(localTags.filter(t=>t !== tag));
            },
            [localTags],
        );

        const onRemove=useCallback(
            tag=>{
                setLocalTags(localTags.filter(t=>t !== tag));
            },
            [localTags],
        )

        const onChange=useCallback(e=>{
            setInput(e.target.value);
        },[]);

        const onSubmit =useCallback(
            e=>{
                e.preventDefault();
                insertTag(input.trim()); //앞뒤 공백을 없앤 후 등록
                setInput('');  //input 초기화
            },
            [input,insertTag]
        );


    return(
        <TagBoxBlock>
            <h4>태그</h4>
            <TagForm onSumbit={onSubmit}>
                <input placeholder="태그를 입력하세여"
                    value={input}
                    onChange={onChange}
                />
                <button type="submit">추가</button>
            </TagForm>
            <TagList tags={localTags}  onRemove={onRemove}/>
        </TagBoxBlock>
    )
}


export default TagBox;