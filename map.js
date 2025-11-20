const arr =[1,2,3,4,5];
function double(x){
    return x*2;
}
function trible(x){
    return x*3;
}
function fourble(x){
    return x*4;
}
const newarr =arr.map(fourble);
console.log(newarr); 