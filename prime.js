let num=6;
let prime=0;
if(num<2)
{
    prime=0;
}
for(let i=2;i<=num/2;i++)
{
    if(num%i==0)
    {
        prime=1;
        break;
        
    }
}
if(prime==0){
    console.log("prime");
    
}
else{
    console.log("not prime");
    
}