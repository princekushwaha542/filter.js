const allowBtn = document.getElementById("allowBtn");
const video = document.getElementById("video");
const statusText = document.getElementById("status");

allowBtn.addEventListener("click", () => {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
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
