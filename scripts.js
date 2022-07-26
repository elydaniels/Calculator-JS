function insert(num)
{
const number = document.getElementById('result').innerHTML;
 document.getElementById('result').innerHTML = number + num;
}

function clean()
{
document.getElementById('result').innerHTML = "";
}

function percent() {
const numb = document.getElementById('result').innerHTML;
document.getElementById('result').innerHTML= (numb*0.01);
}

function calculator()
{
const results = document.getElementById('result').innerHTML;
if(results)
{
document.getElementById('result').innerHTML = eval(results);
}
else
{
document.getElementById('result').innerHTML = "Nothing..."
 }

}