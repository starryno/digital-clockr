function updateTime() {
  try{
const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const second = Sting(now.getSecond()).padStart(2, '0');
  timeElement.textContent = '${hours}:${seconds}';
  }catch(e){
    alert(e.message);
  }
}

setInterval(updateTime, 1000);
updateTime();
