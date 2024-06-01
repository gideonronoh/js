const c = 10;
const addTwoNum = (a,b) => {
    const sum = a + b + c;
    return sum;
};

console.log(addTwoNum(3,5));

function addNum(...args){
    console.log(args);
    const sum = args[0] + args[1];
    return sum;
}
console.log(addNum(3,5));


//Creating the highest order


function f(){
    function addNums(a, b){
    return a + b;
    }
    return addNums;
}

const add = f();//for the second method return t on the function

console.log(add(3,5)); or //console.log(f()(3, 5));

function f(...args){
   return (function addNum(){
    return args[0] + args[1];
   })();
}