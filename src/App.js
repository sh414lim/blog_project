import React from "react";
import { Route } from "react-router";
import LoginPages from "./pages/LoginPages";
import RegisterPage from "./pages/RegisterPage";
import WriterPages from "./pages/WriterPages";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";
import GlobalStyle from "./components/GlobalStyled";

function App() {
  return (
    <>
    <GlobalStyle/>
      <Route path="/login" component={LoginPages}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/write" component={WriterPages}/>
      <Route path={["/@:username","/"]}exact component={PostListPage}/>
      <Route path={["/@:username","/postId"]} component={PostPage}/>
    </>
    );
}


export default App;
