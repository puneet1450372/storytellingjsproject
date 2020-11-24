
 	for( var i=0;i<8;i++)
 	{
 		document.getElementsByClassName('tiger')[i].innerHTML=localStorage.getItem("txt1");
 	}

 	for( var i=0;i<9;i++)
 	{
 		document.getElementsByClassName('lion')[i].innerHTML=localStorage.getItem("txt2")
 	}

 	for( var i=0;i<2;i++)
 	{
 		document.getElementsByClassName('runing')[i].innerHTML=localStorage.getItem("txt5")
 	}
 	
 	document.getElementById('speed').innerHTML=localStorage.getItem("txt7")
 	document.getElementById('Quote').innerHTML=localStorage.getItem("txt8")

 	document.getElementById('result').innerHTML=localStorage.getItem("myFunction")


 	document.getElementById('Dog').innerHTML=localStorage.getItem("txt3")
 	document.getElementById('alarmed').innerHTML=localStorage.getItem("txt4")
	document.getElementById('number').innerHTML=localStorage.getItem("txt6")
	document.getElementById('message').innerHTML=localStorage.getItem("txt9")
 	
 	
