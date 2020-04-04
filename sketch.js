
let p1 //= {x: 0, y:0};
let p2 //= {x: windowWidth, y:400}
let p3,p4
let p5,p6
let p7,p8


function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	//line(p1.x, p1.y, p2.x, p2.y)
	p1 = {x: 0, y:0};
	p2 = {x: windowWidth, y:windowHeight}
	ecuapp(p1,p2)

	p3 = {x: 0, y: windowHeight}
	p4 = {x:windowWidth, y: 0}
	ecuapp(p3,p4)

	p5 = {x:0, y: windowHeight/2}
	p6 = {x:windowWidth, y:windowHeight/2}
	ecuapp(p5,p6)

	p7 = {x:windowWidth/2, y:0}
	p8 = {x:windowWidth/2, y:windowHeight}
	//ecuapp(p7,p8)



}

function ecuapp(p1, p2){
	const dx = p2.x - p1.x;
	const dy = p2.y - p1.y;

	const m = dy / dx;
	const b = p1.y - m * p1.x

	point(p1.x, p1.y)

	let x = p1.x + 1;
	let y;
	while(x !=  p2.x){
		y = m * x + b;
		point(x, y)
		x++;
	}
}
