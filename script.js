const container = document.querySelector(".container");
for(let i=0 ; i<800 ; i++){
	let grid = document.createElement('div');
	grid.className = "square";
	grid.addEventListener("mouseover", onMouse);
//	grid.addEventListener("mouseout", offMouse);
	//grid.style.backgroundColor = '#333333';
	container.appendChild(grid);
}
function offMouse(e) {
	
}
function onMouse(e) {
	const color = '0123456789abcdef';
	let generateColor = '#';
	for(let i=0 ; i<6 ; i++){
		generateColor += color[Math.floor(Math.random()*16)];
	}
	e.target.style.backgroundColor = generateColor;
	setTimeout(() => {
		e.target.style.backgroundColor = '#333333';
	},1000);
}