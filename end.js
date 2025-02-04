let arr = ["ais", "ear", "eye", "hop", "come", "hro"];
let word = "r";
let arr1=[];
for(let i=0;i<arr.length;i++){
    if(arr[i].endsWith(word)){
        arr1.push(arr[i]);
    }
}
console.log(arr1);

