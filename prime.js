let number=7;
let factor=0;
for(let i=1;i<=number;i++)
{
 if(number%i==0)
{
factor++;
}
}

(factor==2)?console.log("It is a prime number"):console.log("It is not a prime number");
