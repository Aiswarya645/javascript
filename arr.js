let arr=[1,2,0,3,0,4];
let size=arr.length;
let count=0;
for(let i=0;i<size;i++){
    if(arr[i]==0){
        arr.splice(i,1);
        count++;
        arr.push(0);
    }
}
console.log(arr);

