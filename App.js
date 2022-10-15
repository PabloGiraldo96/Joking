const b = document.querySelector("#movingbutton");
b.addEventListener("mouseover",change);

const secondButton = document.querySelector('#alert');
secondButton.addEventListener("click", display_image);


function change(){
	let i = Math.floor(Math.random()*400)+5;
	let j = Math.floor(Math.random()*300)+1;
	let z = Math.floor(Math.random()*300)+1;
	console.log('here' , i ,j , b.style.left , b.style.top);
    b.style.left = i+'px';
    b.style.top = j + "px";
	b.style.bottom = z + "px";
}

function display_image(src, width, height, alt) {
    let a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    document.body.appendChild(a);
}
display_image('/giphy.gif', 
                 276, 
                 110, 
                 'GifAdded');
