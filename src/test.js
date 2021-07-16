function Stack(array){
  this.array=[];
  if(array) this.array=array;
  }

  Stack.prototype.getBuffer=function(){
    return this.array.slice();
  }

  Stack.prototype.isEmpty=function(){
    return this.array.length ==0 ;

  }

  //들여다보기
  Stack.prototype.peek=function(){
    return this.array[this.array.length-1];
  }
  stach1.push(10);
  console.log(stach1.peek()); //10
  stach1.push(5);
  console.log(stack1.peek()) // 5

  //삽입
  Stack.prototype.push=function(value){
    this.array.push(value);
  }

  stach1.push(1);
  stach1.push(2);
  stach1.push(3);
  console.log(stach1) //array: [1,2,3]

  //접근
  //n번째 노드에 접근하기 위해서 pop을 n번 호출
  function stackAccessNthTopNode(stack, n){
    var bufferArray=stack.getBuffer();
    if(n<=0) throw 'error'

    var bufferStack=new Stack(bufferArray);

    while(--n! ==0){
      bufferStack.pop();
    }
    return bufferStack.pop();
   }

   var stack2 =new Stack();
   stack2.push(1);
   stack2.push(2);
   stack2.push(3);
   stackAccessNthTopNode(stack2,2); //2

   //검색
   function stackSearch(stack,element){
     var bufferArray = stack.getBuffer();

     var bufferArray= new Stack(bufferArray); //버퍼 스택으로 복사한다

     while (!bufferStack.isEmpty()){
       if(bufferStack.pop()== element){
         return true;
       }
     }
     return false;
   }




  //스택 클래스의 인스턴스
  var stach1=new Stack();

  console.log(stack1); //{array:[]}


  // 큐 기본 스택
  function Queue(array){
    this.array=[];
    if(array) this.array=array;
    
  }
  Queue.prototype.getBuffer=function(){
    return this.array.slice();
  }

  Queue.prototype.isEmpty=function(){
    return this.array.length ==0;
  }

  //큐 클래스의 인스턴스
  var queue1 =new Queue;

  console.log(queue1) // {array:[]}

