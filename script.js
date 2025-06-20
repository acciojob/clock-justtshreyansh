//your JS code here. If required.
const p = document.querySelector("#timer");
function updateTime(){
	const date = new Date();
	p.textContent = date.toLocaleString();
}
updateTime();
setInterval(updateTime,1000);

