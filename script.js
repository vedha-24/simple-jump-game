var character = document.getElementById("character");
var block =document.getElementById("block");
var counter=0;

function jump(){
    if(character.classList == "animate"){return}
	
	character.classList.add("animate");
     
	setTimeout(function(){
		character.classList.remove("animate");
	},300);

} 
var checkdead = setInterval(function(){
	var chtop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if(blLeft<20 && blLeft>0 && chtop>=130)
	{
		
		block.style.animation="none";
		alert("Game Over..... Your score:"+Math.floor(counter/100));
		counter=0;
        	block.style.animation="block 1s infinite linear";
	}
	else{
		counter++;
		document.getElementById("sp").innerHTML= Math.floor(counter/100);
	}


},10);

