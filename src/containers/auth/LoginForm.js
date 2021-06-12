import React, {useEffect} from "react";
import{useDispatch,useSelector} from "react-redux";
import {changedField,initializeForm} from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";

const LoginForm=()=>{
    const dispatch = useDispatch();
    const {form} = useSelector(({auth})=>({
        form:auth.login
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
    const onSumbit = e =>{
        e.preventDefault();
        //구현 예정
    };

    //컴포넌트가 처음 렌더링 될때 form 을 초기화함
    useEffect(()=>{
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return(
        <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSumbit={onSumbit}
        />
    );
};

export default LoginForm;