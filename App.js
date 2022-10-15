const b = document.querySelector("#movingbutton");
b.addEventListener("mouseover",change);

const secondButton = document.querySelector('#alert');
secondButton.addEventListener("click", displayImage);


function change(){
	let i = Math.floor(Math.random()*400)+5;
	let j = Math.floor(Math.random()*300)+1;
	let z = Math.floor(Math.random()*300)+1;
	console.log('here' , i ,j , b.style.left , b.style.top);
    b.style.left = i+'px';
    b.style.top = j + "px";
	b.style.bottom = z + "px";
}

function displayImage(){
    let a = document.createElement("img");
    a.src = 'giphy.gif';
    a.width = 266;
    a.height = 130;
    a.alt = GifAdded;
    document.body.appendChild(a);
}
