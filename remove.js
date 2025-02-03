let arr = ["ais", "ear", "eye", "hop", "come", "hro"];
let word = "hro";

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
        arr.splice(i, 1);
    
    }
}

console.log(arr);
