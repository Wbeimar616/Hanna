onload = () => {
  document.body.classList.remove("container");
};

addEventListener("click", (e) => {
  const emojis = ["🌼", "🌻", "🏵️", "🌟", "✨", "🌻"];
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  for (let i = 0; i < 40; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    const x = (Math.random() - 0.5) * 400 + "px";
    const y = (Math.random() - 0.5) * 400 + "px";
    const rotate = Math.random() * 360 + "deg";
    const duration = Math.random() * 0.5 + 0.6 + "s";

    emoji.style.left = mouseX + "px";
    emoji.style.top = mouseY + "px";
    emoji.style.setProperty("--x", x);
    emoji.style.setProperty("--y", y);
    emoji.style.setProperty("--rotate", rotate);
    emoji.style.setProperty("--duration", duration);

    document.body.appendChild(emoji);
  }
  setTimeout(() => {
    document.querySelectorAll(".emoji").forEach(e => e.remove());
  }, 5000);
});