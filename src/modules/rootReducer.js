import {combineReducers} from "redux";
import boardReducer  from "./boardReduce";


const rootReucer = combineReducers({
    boardReducer
});

export default rootReucer;

//combinReducers는 여러 개의 reducer 를 하나로 합쳐 내보내는 기능을 수행
