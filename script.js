function updateTime() {
const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSecond()).padStart(2, '0');
  timeElement.textContent = '${hours}:${seconds}';
  
}

setInterval(updateTime, 1000);
updateTime();
