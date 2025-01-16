var x="hello";
var count=0;
let vowelcount=x.length;
for(let i=0;i<vowelcount;i++)
{
    if(x[i]=='a' || x[i]=='A' || x[i]=='e' ||  x[i]=='E' || x[i]=='I' || x[i]=='i' ||  x[i]=='O' || x[i]=='o' || x[i]=='U' || x[i]=='u')
    {
        count++;
    }
}
console.log(count);

