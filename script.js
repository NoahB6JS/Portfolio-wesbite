let zIndex = 20;

function openWindow(id) {
  const win = document.getElementById(id);
  win.style.display = "block";
  zIndex++;
  win.style.zIndex = zIndex;
}

function closeWindow(id) {
  document.getElementById(id).style.display = "none";
}