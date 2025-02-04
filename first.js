let arr=["cat","car","apple","mango","cer"]
let word="ca";
let arr1=[];
let size=arr.length;
for(let i=0;i<size;i++){
    if(arr[i].startsWith(word)){
        arr1.push(arr[i])
}
}
console.log(arr1);
