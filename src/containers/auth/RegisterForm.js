import React, {useEffect} from "react";
import{useDispatch,useSelector} from "react-redux";
import {changedField,initializeForm,register} from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm"
import {check} from "../../modules/user";


const RegisterForm=()=>{
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
            console.log('오류발생');
            console.log(authError);
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
        console.log("check API 성공")
        console.log("user")
    }
},[user]);
    return(
        <AuthForm
        type="register"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        />
    );
};

export default RegisterForm;