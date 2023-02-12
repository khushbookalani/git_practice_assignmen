function reverse(string){
let bag=""
for(let i=0;i<string.length;i++){
bag=bag+string[i];
}
return bag
}
let reversed=reverse("madam")
if(string==reversed){
console.log("palindrome")
}
else{
console.log("not a palindrome)
}