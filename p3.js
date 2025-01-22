let products = [
    {pid: 100, pName: 'apple', band: '5g', price: 120000, display: 'led'},
    {pid: 101, pName: 'samsaung', band: '5g', price: 45000, display: 'led'},
    {pid: 102, pName: 'blackberry', band: '4g', price: 50000, display: 'led'},
    {pid: 103, pName: 'nokia', band: '3g', price: 1200, display: 'lcd'},
    {pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd'}
];

products.forEach((items)=>{
    console.log(items.pName);
    
})

var found=products.filter((items)=>{
    return(items.display=="lcd")
})
console.log(found);
  

var founds=products.filter((item)=>{
    return(item.band=="5g");
});
console.log(founds);

var price=products.filter((item)=>{
    return(item.price<50000);

});
console.log(price);


var highest=products.reduce((high,product)=>{
 return   (product.price>high.price  ? product : high)
   
    
    
});
console.log(highest);

var lowest=products.reduce((low,product)=>{
    return (product.price<low.price   ? product : low)
});
console.log(lowest);




