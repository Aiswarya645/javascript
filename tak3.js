for(let i=0;i<5;i++)
{
    setTimeout(()=>{
    console.log("message",i);
    i=i+1;
    
},1000*i);

}