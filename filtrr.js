const arr =[2,3,4,5,6,7,8,];
function isseven(num){
    return num > 4;
}
const oddnumbers = arr.filter(isseven);
console.log(oddnumbers);