let para="This allows the readers to get a good grasp of what the topic is about. An ideal paragraph consists of an introductory sentence,supporting sentences, and a concluding sentence"
let arr = para.toLowerCase().split(" ");
let len = arr.length;
let word = 'grasp';
let count = 0;

for(let i=0; i<len; i++){
    if(arr[i]==word){
        count++;
    }
}

console.log(`${word} count is ${count}`);
