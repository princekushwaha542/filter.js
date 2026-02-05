const allowBtn = document.getElementById("allowBtn");
const closeBtn = document.getElementById('closeBtn')
const video = document.getElementById("video");
const statusText = document.getElementById("status");
let stream;

allowBtn.addEventListener("click", () => {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(s => {
      stream = s;
      video.srcObject = stream;
      statusText.innerText = "Camera permission granted ✅";
      statusText.style.color = "green";
    })
    .catch(err => {
      statusText.innerText = "Camera permission denied ❌";
      statusText.style.color = "red";
      console.error(err);
    });
});
closeBtn.addEventListener("click", () => {
 if(stream) {
  stream.getTracks().forEach(track => track.stop());
  video.srcObject = null;

  statusText.innerText = "Camra closed";
  statusText.style.color = 'red';
 }
});
