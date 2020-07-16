var gr=Number(prompt("How much mark did u score?"));
if(gr>=90)
{
    console.log("Marks are "+gr+" and grade is A+");
}
else if(gr>=75 && gr<90)
{
    console.log("Marks are "+gr+" and grade is A");
}
else if(gr>=60 && gr<75)
{
    console.log("Marks are "+gr+" and grade is B+");
}
else if(gr>=40 && gr<60)
{
    console.log("Marks are "+gr+" and grade is B");
}
else
{
    console.log("Marks are "+gr+" and grade is F!!!!");
}