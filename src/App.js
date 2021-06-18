import React from "react";
import { Route } from "react-router";
import LoginPages from "./pages/LoginPages";
import RegisterPage from "./pages/RegisterPage";
import WriterPages from "./pages/WriterPages";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";
import GlobalStyle from "./components/GlobalStyled";
import Login from "./Login";
import board from "./containers/Container"
import CounterContainer from "./containers/CounterContainer"
import Todo from "./components/ToDo"


function App() {
  return (
    <>
    <CounterContainer/>
    <Todo/>
    <Login/>
    <GlobalStyle/>
      <Route path="/login" component={LoginPages}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/write" component={WriterPages}/>
      <Route path="/board" component={board}/>
      <Route path={["/@:username","/"]}exact component={PostListPage}/>
      <Route path={["/@:username","/postId"]} component={PostPage}/>
    </>
    );
}


export default App;
