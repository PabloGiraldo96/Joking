const b = document.querySelector("#movingbutton");
b.addEventListener("mouseover",change);

const secondButton = document.querySelector('#alert');
secondButton.addEventListener("click", sonido);


function change(){
	let i = Math.floor(Math.random()*400)+5;
	let j = Math.floor(Math.random()*300)+1;
	let z = Math.floor(Math.random()*300)+1;
	console.log('here' , i ,j , b.style.left , b.style.top);
    b.style.left = i+'px';
    b.style.top = j + "px";
	b.style.bottom = z + "px";
}

function sonido(){
const phrase = document.createElement("h2");
phrase.innerHTML = "JAJAJ Yo sabía mi amor!";
document.body.appendChild(phrase);
}
