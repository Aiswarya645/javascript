let x="moom";
let len=x.length;
for(let i=1;i<len/2;i++)
{
    if(x[i]!=x[len-1-i])
    {
        console.log("not palindrome");
        break;
        
    }
    if(i==(len/2)-1)
    {
       console.log("palindrome");
    }
}