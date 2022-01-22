

console.log("começou")

new Promise((resolve, reject) => setTimeout(() => resolve("Acabou o tempo"), 10000))
	.then(console.log);

