let canvas = document.getElementById("my-canvas")

console.log(canvas)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d')

c.fillRect(75, 75, 100, 100)

c.fillStyle = 'red';
c.fillRect(125, 125, 200, 40)

// draw line
c.beginPath();
c.moveTo(20, 100)
c.lineTo(1000, 500)
c.stroke()
// window.onclick = () => {
//   for() {

//   }
// }
