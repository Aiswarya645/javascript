const students = [
    { name: "Alice", score: 95, subject: "Math" },
    { name: "Bob", score: 67, subject: "Science" },
    { name: "Charlie", score: 82, subject: "English" },
    { name: "David", score: 74, subject: "History" },
    { name: "Eve", score: 58, subject: "Art" },
    { name: "Frank", score: 89, subject: "Physics" },
    { name: "Grace", score: 91, subject: "Biology" },
];
var founds=students.filter((item)=>{
    return(item.score>70)
})
console.log(founds);

var above=students.filter((item)=>{
    return(item.score>=90)
})
console.log(above);


var grade=students.map((item)=>{
    var grade;
    if(item.score>=90){
        grade='A';
    }
    else if(item.score>=80 && item.score<90){
        grade='B';
    }
    else if(item.score>=70 && item.score<80){
        grade='C';
    }
    else if(item.score>=60 && item.score<70){
        grade='D';
    }
    else{
        grade='F';
    }
   return{...item,grade};
})
console.log(grade);

let avgsum=students.reduce((num1,num2)=>{
    return num1+num2.score;
},0);
console.log(avgsum);

 let length=students.length;
console.log(avgsum/length);

var found=students.filter((item)=>{
    return(item.score>avgsum/length)
})
console.log(found);
