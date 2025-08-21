// Generate random captcha
function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("captcha").innerText = captcha;
}

// Event: Page load
window.onload = generateCaptcha;

// Event: Reload captcha button
document.getElementById("reload-captcha").addEventListener("click", generateCaptcha);
