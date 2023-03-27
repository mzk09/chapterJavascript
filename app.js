let hello = 'Hello, world';
alert(hello);

let int1 = 1;
let int2 = -10;
let float1= 3.14;
let str1 = 'JavaScriptを覚えよう';

let orange = 120;
let apple = 20;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
}else if(orange == apple){
  alert('みかんとりんごが同じ値段');
}else{
  alert('みかんの値段がりんごより高い');
}

let max = 100;
// let num = 1;
let count = 0;

// while(num<max){
//   num = num*2;
//   count = count+1;
// }

// alert('2を続けて'+max+'を越えるのに必要だった回数は'+count+'回です');

let i;
let num=0;

for(i=1;i<11;i++){
  num = num +i;
}

alert('1から10まで足し算した結果は'+num+'です');

// for(j=1;j<=50;j++){
//   if(j%3==0 && j%5==0){
//     alert(j+"Fizz");
//   }else if(j%3==0){
//     alert(j+"Buzz");
//   }
// }

var str ="webcamp"

function foo(){
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()
