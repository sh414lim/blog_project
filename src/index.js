import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import{Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSaGaMiddleware from "redux-saga";
import rootReducer, {rootSaga} from "./modules";
import {tempSetUser,check} from "./modules/user"



const sagaMiddleware =createSaGaMiddleware();
const store=createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);//크롬 리덕스 개발자 도구 적용 composeWithDevTools

function loadUser(){
  try{
    const user=localStorage.getItem('user');
    if(!user) return; // 로그인 상태가 아니라면 아무것도 안함
    store.dispatch(tempSetUser(user));
    store.dispatch(check());

    }catch(e){
      console.log('localStorage is not working')
    }
}

sagaMiddleware.run(rootSaga);
loadUser();




ReactDOM.render(
<Provider store={store}>  {/*리액트 컴포넌트에서 스토어를 사용할 수 있도록 APP 컴포넌트를 react-redux 에서 제공하는 Provider 컴포넌트로 감싸 준다  이 컴포넌트를 사용할때는 store를 props로 전달해 주어야 한다*/}
<BrowserRouter>
    <App />
  </BrowserRouter>,
</Provider>,
  document.getElementById('root')
);

