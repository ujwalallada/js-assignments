var e=prompt("Enter no of elements");
var arr=[]
for(let i=0;i<e;i++)
{
    arr[i]=prompt("Enter poitive values only please");
}
var odd=arr.filter(el=>el%2!=0).map(el=>el**3);
console.log(odd);