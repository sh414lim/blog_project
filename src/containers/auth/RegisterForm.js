import React, {useEffect,useState} from "react";
import{useDispatch,useSelector} from "react-redux";
import {changedField,initializeForm,register} from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm"
import {check} from "../../modules/user";
import {withRouter} from "react-router-dom";


const RegisterForm=({history})=>{
    const [error,setError]=useState(null);
    const dispatch = useDispatch();
    const {form,auth,authError,user} = useSelector(({auth,user})=>({
        form:auth.register,
        auth:auth.auth,
        authError:auth.authError,
        user:user.user
    }));
    
    //인픗 변경 이벤트 핸들러
    const onChange =e=>{
        const {value,name}=e.target;
        dispatch(
            changedField({
                form:'register',
                key:name,
                value

            })
        );
    };

    //폼 등록 이벤트 핸들러
    const onSubmit = e =>{
        e.preventDefault();
        const {username,password,passwordConfirm} = form;
        //하나라도 비어 있다면
        if([username,password,passwordConfirm].includes('')){
            setError('빈칸을 입력하세요');
            return;
        }
        //비밀번호가 일치하지 않는다면
        if(password !== passwordConfirm){
            setError('비밀번호가 일치하지 않습니다');
            dispatch(changedField({form:'register',key:'password',value:''}));
            dispatch(changedField({form:'register',key:'passwordConfirm',value:''}));
            return;
        }
        if(password !== passwordConfirm){
            //TODO :오류처리
            return;

        }
        dispatch(register({username,password}))
        //구현 예정
    };

    //컴포넌트가 처음 렌더링 될때 form 을 초기화함
    useEffect(()=>{
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(()=>{
        if(authError){
            //계정명이 이미 존재할때
            if(authError.response.status !== 409){
                setError("이미 존재하는 계정입니다");
                return;

            }

            //기타 이유
            setError('회원가입 실패');
            return;
        }

        if(auth){
            console.log("회원가입 성공")
            console.log(auth);
            dispatch(check());
        }
    },[auth,authError,dispatch]);  

//user 값이 잘 설정 되었는지 확인
useEffect(()=>{
    if(user){
        history.push('/');// 홈화면으로 이동
        history.push('/');
        try{
            localStorage.setItem('user',JSON.stringify(user));
        }catch(e){
            console.log('localStorage is not working')
        }
    }
}, [history,user]);
    return(
        <AuthForm
        type="register"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
        />
    );
};

export default withRouter(RegisterForm);