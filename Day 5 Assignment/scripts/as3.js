async function fetchSomething()
{
let response=await fetch("https://jsonplaceholder.typicode.com/todos");
let data = await response.json();
return data;
}
fetchSomething()
.then(data=>console.log(data))
.catch(reason=>console.log(reason.message))
