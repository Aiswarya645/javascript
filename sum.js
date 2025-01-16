let x=21;
let sum=0;
let rem;
while(x>0)
{
    rem=x%10;
    sum=sum+rem;
    x= Math.floor(x/10);

    
}
console.log(sum);


