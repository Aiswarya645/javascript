

let gcd;

function greatGcd(n1,n2)
{

    for(let i=1;i<=n1 && i<=n2 ;i++)
    {
        if(n1%i==0 && n2%i==0)
        {
           gcd=i
        }
    }
    return gcd;
}
console.log(greatGcd(8,64));
