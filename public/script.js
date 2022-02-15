//function to calculate time(hours,minutes and seconds)
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
// function to calculate date and name of the day.
const getDateAndDay = () => {
	const now = new Date();
	const dayNames = [
		"Monday",
		"Thuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	const daydiv = document.querySelector(".day");
	const day = now.getDay();
	daydiv.innerHTML = `${dayNames[day - 1]}`;
	const timediv = document.querySelector(".date");
	timediv.innerHTML = `${now.getFullYear()}/${now.getMonth() + 1}/${
		now.getDate() + 1
	}`;
};
// updating the date and time in each second
setInterval(() => {
	const timeObject = document.querySelector(".time");
	timeObject.innerHTML = getTime();
	const d = new Date();
	getDateAndDay();
}, 1000);
