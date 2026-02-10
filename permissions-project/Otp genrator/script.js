let generatedOTP;

function sendOTP() {
  const phone = document.getElementById("phone").value;

  if(phone.length !== 10 || isNaN(phone)) {
    alert("Enter valid mobile number");
    return;
  }

  generatedOTP = Math.floor(100000 + Math.random() * 900000);
  console.log("OTP:", generatedOTP); 

  document.getElementById("otpBox").classList.remove("hidden");
  document.getElementById("msg").innerText = "OTP Sent Successfully ✅";
  setTimeout(() => {
  document.getElementById("otpBtn").innerText = "Re-Send OTP";
    
  }, 2000);
}

function verifyOTP() {
  const userOTP = document.getElementById("otpInput").value;

  if(userOTP == generatedOTP) {
    document.getElementById("msg").innerText = "OTP Verified 🎉 Login Success";
    document.getElementById("msg").style.color = "green";
  } else {
    document.getElementById("msg").innerText = "Invalid OTP ❌";
    document.getElementById("msg").style.color = "red";
  }
}
