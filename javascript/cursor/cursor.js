const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const hue = 0;

let w, h, particlesArray = [];
let mouse = {
	x: undefined,
	y: undefined
}

function init() {
	resizeReset();
	animate();
}

function resizeReset() {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	handleParticles();
	requestAnimationFrame(animate);
}

function mousemove(e) {
	mouse.x = e.x;
	mouse.y = e.y;

	for (let i = 0; i < 2; i++) {
        particlesArray.push(new Particle());
    }
}

class Particle {
	constructor() {
		this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.size = Math.random() * 9 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(255, 41, 98, .9)`;
	}
	draw() {
		ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
	}
	update() {
		this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.1;
	}
}

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = particlesArray[i].color;
                ctx.lineWidth = 0.4;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }

        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resizeReset);
window.addEventListener("mousemove", mousemove);


