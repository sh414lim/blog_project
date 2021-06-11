import React from "react";
import LoginPages from "./pages/LoginPages";
import RegisterPage from "./pages/RegisterPage";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";
import WriterPages from "./pages/WriterPages";
import { Route, Router } from "react-router";

function App() {
  return (
    <>
    <Router>
      <Route path="/login" component={LoginPages}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/writer" component={WriterPages}/>
      <Route path={["/@:username","/"]}exact component={PostListPage}/>
      <Route path={["/@:username","/postId"]}exact component={PostPage}/>
    </Router>
    </>
    );
}

export default App;
