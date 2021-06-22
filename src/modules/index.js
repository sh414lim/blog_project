import {combineReducers} from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import user,{userSaga} from "./user";
import counter from "./counter";
import todos from "./todos";

//createStore 함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야합니다 그렇기 때문에 기존에 만들었던 리듀서를 하나로 합쳐 주어야한다
//리덕스에서 제공하는 combineReducers라는 유틸 함수르 사용하면 쉽게 처리가능
//파일 이름을 index.js 로 설정해주면 나중에 불러올때 디렉터리 이름까지만 입력하여 불러 올 수 있다.


const rootReducer=combineReducers({
    auth,
    loading,
    user,
    counter,
    todos,

});

export function* rootSaga(){
    yield all([authSaga(),userSaga()]);
}

export default rootReducer;