let n=5;
let line="";
for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i;j++){
            line+=" "
        }
     for(let k=1;k<=i;k++){
        line+="* ";

     }
     line+="\n"
    }
for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
        line += " ";
    }
    for(let k=4;k>=i;k--){
        line +="* "
    }
    line +="\n"

}
console.log(line);

