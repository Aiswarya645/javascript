let para="im so hungry and thirsty";
let arr=para.split(" ");
let longest=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i].length>longest.length){
        longest=arr[i];
    }

}
console.log((longest));
