//todos 모듈 생성

//액션 타입 정의 하기

const CHANGE_INPUT='todos/CHANGE_INPUT';  //인풋 값을 변경함
const INSERT='todos/INSERT'; //새로운 todo를 등록한다
const TOGGLE='todos/TOGGLE';// todofmf 체크/체크해제한다
const REMOVE='todos/REMOVE';//todo를 제거한다


//액션 생성함수 만들기
//inset 함수는 액션객체를 만들때  파라미터 외에 사전에 이미 선언되어 있는 id라는 값에 의존한다
//이 액션 생성함수는 호출될때 마다 1씩 더해준다.
//이 id 값은 todo 객체가 들고 있게될 고윳값이다

export const changeInput=(input)=>({
    type:CHANGE_INPUT,
    input
});

let id=3//insert 가 호출 될때 마다 1씩 더해진다

export const insert=text=>({
    type:INSERT,
    todo:{
        id:id++,
        text,
        done:false
    }
});

export const toggle=id=>({
    type:TOGGLE,
    id
});

export const remove=id=>({
    type:REMOVE,
    id
});

//초기 상태 및 리듀서 함수 만들기
//모듈의 초기 상태와 리듀서 함수를 작성한다
//객체에 한 개 이사으이 값이 들어가므로 불변성을 유지 해주어야 한다..
//배열의 변화를 줄때는 배열 내장 함수를 사용하여 구현하면 된다.


const initialState={
    input:'',
    todos:[
        {
            id:1,
            text:'리덕스 기초 배우기',
            done:true
        },
        {
            id:2,
            text:'리액트와 리덕스 사용하기',
            done:false
        }
    ]
};

function todos(state=initialState,action){
    switch(action.type){
        case CHANGE_INPUT:
            return{
                ...state,
                input:action.input
            };
            case INSERT:
                return{
                    ...state,
                    todos:state.todos.concat(action.do)
                };

                case TOGGLE:
                    return{
                        ...state,
                        todos:state.todos.map(todo=>
                            todo.id === action.id ? {...todo, done: !todo.done}:todo
                            )
                    };

                    case REMOVE:
                    return{
                        ...state,
                        todos:state.todos.filter(todo=>todo.id !== action.id)
                    };
                    default:
                        return state;
    }
}

export default todos;



