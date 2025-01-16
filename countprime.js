let n=6;
let prime;
let primecount=0;
for(let num=2;num<=6;num++)
{
    prime=0;

for(let i=2;i<=num/2;i++)
{
    if(num%i==0)
    {
        prime=1;
        break;
        
    }
}

if(prime==0){
    console.log(num);
    primecount++;
    
}
}
