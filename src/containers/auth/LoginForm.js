import React, {useEffect,useState} from "react";
import{useDispatch,useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {changedField,initializeForm,login} from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import Login from "../../Login";
import {check} from "../../modules/user";

const LoginForm=({history})=>{
    const [error,setError]=useState(null);
    const dispatch = useDispatch();
    const {form,auth,authError,user} = useSelector(({auth,user})=>({
        form:auth.login,
        auth:auth.auth,
        authError:auth.authError,
        user:user.user
    }));
    
    //인픗 변경 이벤트 핸들러
    const onChange =e=>{
        const {value,name}=e.target;
        dispatch(
            changedField({
                form:'login',
                key:name,
                value

            })
        );
    };

    //폼 등록 이벤트 핸들러
    const onSumbit =(e)=>{
        e.preventDefault();
        const {username,password}=form;
        dispatch(login({username,password}));
        //구현 예정
    };

    //컴포넌트가 처음 렌더링 될때 form 을 초기화함
    useEffect(()=>{
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(()=>{
        if(authError){
            console.log("오류발생");
            console.log(authError);
            setError("로그인 실패")
            return;
        }
        if(auth){
            console.log('로그인성공');
            console.log(check());

        }
    }, [auth,authError,dispatch]);


    useEffect(()=>{
    console.log(user);
    
        if(user){
            history.push('/');
            try{
                localStorage.setItem('user',JSON.stringify(user));
            }catch(e){
                console.log('localStorage is not working')
            }
        }else{
            console.log('else')
        }
    },[history,user]);

    return(
        <>
        <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSumbit={onSumbit}
        error={error}
        />
    <Login/>
</>
    );
};

export default withRouter(LoginForm);