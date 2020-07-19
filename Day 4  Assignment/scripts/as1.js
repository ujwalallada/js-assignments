for (let i=0;i<=100;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("fizzbuzz");
        console.log("\n");

    }
    else{
        if(i%5==0)
    {
        console.log("buzz");
        console.log("\n");
    }
    else if(i%3==0)
    {
        console.log("fizz");
        console.log("\n");
    }
    else
    {
        console.log(i);
        console.log("\n");
    }
}  
}