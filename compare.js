function comparenum(a,b){

//Compare A,b
	if (a.value>b.value)
	{ value = "A>B";
 }
	else if (a.value<b.value)
	{ value = "A<B";}
	else
	{ value = "A=B";}
	document.getElementById("c").value = value;
	document.getElementById("d").value = Math.abs(a.value-b.value );

	}
