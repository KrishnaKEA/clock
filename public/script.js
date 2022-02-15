const getTime = () => {
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	let ampm = hour >= 12 ? "PM" : "AM";

	minute == minute < 10 ? "0" + minute : minute;
	second == second < 10 ? "0" + second : second;
	return `${hour} : ${minute} : ${second}  : ${ampm} `;
};

setInterval(() => {
	let timeObject = document.querySelector(".time");
	timeObject.innerHTML = getTime();
}, 1000);
