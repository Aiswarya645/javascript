function anagram(str1,str2){
    let len1=str1.length;
    let len2=str2.length;
    let count=0;
    if(len1==len2){
        for(let i=0;i<len1;i++)
        {
            for(let j=0;j<len2;j++)
            {
            if(str1[i]==str2[j])
            {
                count++;
                break;
            }
            }
        }
    }

if(count==len1)
{
    return "anagram";
}
else{
    return "not anagram";
}
}
console.log(anagram("eat","tea"));
