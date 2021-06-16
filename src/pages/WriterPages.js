import React from "react";
import Responsive from "../components/conmon/Responsive";
import Editor from "../components/writer/Editer";
import TagBox from "../components/writer/TagBox"

const WritePage =()=>{
    return(
            <Responsive>
                <Editor/>
                <TagBox/>
            </Responsive>
            )
}

export default WritePage;