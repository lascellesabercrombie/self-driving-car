const canvas = document.getElementById("car-canvas");
canvas.height = window.innerHeight;
canvas.width = 200;

const context = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);



animate();

function animate() {
    car.update()
    car.draw(context)
    requestAnimationFrame(animate);
}