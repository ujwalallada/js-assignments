var n=Number(prompt("Enter the number till which u need to print the prime numbers"));
var j=0;
document.write("2 ");
for (let i=2;i<=n;i++){
    for ( j=2;j<i/2;j++){
    if(i % j == 0)  {  
        j=i;  
        break;  
    }  
}  
if (j!=i) { 
    document.write(i);
    document.write(" ")
}
}