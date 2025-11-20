const arr =[10,20,30,40,50,60];
let sum =0;
function sumn(arr){
    for(let i =0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(sumn(arr));