let arr=["hi","hro","hello","hil","welcome","hro","hi"];
let arr1=[];
let len=arr.length;
for(let i=0;i<len;i++){
    for(let j=i+1;j<len;j++){
        if(arr[i]==arr[j]){
            arr1.push(arr[i])
        }
    }
}
console.log(arr1);
