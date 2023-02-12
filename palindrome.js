let str = "naman"
let checkPalindrome="";

for(let i=str.length-1;i>=0;i++)
{
checkPalindrome=checkPalindrome+str[i]
}
if(checkPalindrome==str)
{
console.log("Yes");
}
else
{
console.log("No");
}