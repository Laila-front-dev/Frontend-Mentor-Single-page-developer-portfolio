// const canvas = document.querySelectorAll("#canvas1");
// // console.log(canvas);

// canvas.forEach(function (el) {
//   const ctx = el.getContext("2d");
//   // el.width = 700;
//   // el.height = 200;

//   let particleArray = [];

//   // Handle Mouse
//   const mouse = {
//     x: null,
//     y: null,
//     radius: 150,
//   };

//   el.addEventListener("mousemove", function (event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     // console.log(mouse.x, mouse.y);
//   });

//   ctx.fillStyle = "white";
//   ctx.font = "bold 20px Space Grotesk";

//   if (el.getAttribute("data-canvas") === "hero") {
//     ctx.fillText("Nice to meet you!", 0, 20);
//     ctx.fillText("I’m Adam Keyes.", 0, 50);
//   } else if (el.getAttribute("data-canvas") === "projects") {
//     ctx.fillText("Projects", 0, 20);
//   } else if (el.getAttribute("data-canvas") === "contact") {
//     ctx.fillText("contact", 0, 20);
//   }
//   const textCordinates = ctx.getImageData(0, 0, 300, 100);
//   // console.log(textCordinates);

//   class Particle {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//       this.size = 3;
//       this.baseX = this.x;
//       this.baseY = this.y;
//       this.density = Math.random() * 40 + 5;
//       // console.log(x, y);
//     }
//     draw() {
//       ctx.fillStyle = "white";
//       ctx.beginPath();
//       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//       ctx.closePath();
//       ctx.fill();
//     }
//     update() {
//       let dx = mouse.x - this.x;
//       let dy = mouse.y - this.y;
//       let distance = Math.sqrt(dx * dx + dy * dy);
//       let forceDirectionX = dx / distance;
//       let forceDirectionY = dy / distance;
//       let maxDistance = mouse.radius;
//       let force = (maxDistance - distance) / maxDistance;
//       let directionX = forceDirectionX * force * this.density;
//       let directionY = forceDirectionY * force * this.density;
//       if (distance < mouse.radius) {
//         this.x -= directionX;
//         this.y -= directionY;
//       } else {
//         // this.size = 3;
//         if (this.x !== this.baseX) {
//           let dx = this.x - this.baseX;
//           this.x -= dx / 10;
//         }

//         if (this.y !== this.baseY) {
//           let dy = this.y - this.baseY;
//           this.y -= dy / 10;
//         }
//       }
//     }
//   }

//   function init() {
//     particleArray = [];
//     for (let y = 0, y2 = textCordinates.height; y < y2; y++) {
//       for (let x = 0, x2 = textCordinates.width; x < x2; x++) {
//         if (
//           textCordinates.data[y * 4 * textCordinates.width + x * 4 + 3] > 128
//         ) {
//           let positionX = x;
//           let positionY = y;
//           particleArray.push(new Particle(positionX * 7, positionY * 7));
//         }
//       }
//     }
//     // particleArray.push(new Particle(80, 50));
//   }
//   init();
//   // console.log(particleArray);

//   function animate() {
//     ctx.clearRect(0, 0, el.width, el.height);
//     for (let i = 0; i < particleArray.length; i++) {
//       particleArray[i].draw();
//       particleArray[i].update();
//     }
//     requestAnimationFrame(animate);
//   }
//   animate();

//   // function connect() {
//   //   for (let a = 0; a < particleArray.length; a++) {
//   //     for (let b = 0; b < particleArray.length; b++) {
//   //       let dx = particleArray[a].x - particleArray[b].x;
//   //       let dy = particleArray[a].y - particleArray[b].y;
//   //       let distance = Math.sqrt(dx * dx + dy * dy);

//   //       if (distance < 100) {
//   //         el.strokStyle = "white";
//   //         el.lineWidth = 2;
//   //         el.beginPath();
//   //         el.moveTo();
//   //       }
//   //     }
//   //   }
//   // }
//   // connect();
// });
