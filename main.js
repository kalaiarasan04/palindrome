let a=parseInt(prompt("Enter a number"));

let c=0;

let ans=(a)=>{
	
	while(a>0){
		
		b=a%10;
		
		a=parseInt(a/10);
		
		c=c*10+b;	
		
	}
	
	return c
	
}

let res=ans(a);

console.log(res);

if(c==a){
	
	document.write("Given number is palindrome");
	
}

else{
	
	document.write("Given number is not palindrome");
	
}