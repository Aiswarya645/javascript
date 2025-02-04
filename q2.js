function perfectSqure(x){

    if(x<=0){
        return false;
    }

    for(let i=1; i<=x; i++){
        if(i*i==x){
            return true;
        }
    }

    return false;
}

console.log(perfectSqure(9));
