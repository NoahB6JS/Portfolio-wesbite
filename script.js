// Claoing window function
function closeWindow(id) {
  const win = document.getElementById(id);

  win.classList.remove("active");
  win.style.visibility = "hidden";
}

//Opening window function
function openWindow(id, btn) {
  const win = document.getElementById(id);

  
  if (btn) {
  
    if (win.classList.contains("active")) {
      closeWindow(id);
      return;
    }

    win.style.visibility = "hidden";
    win.classList.add("active");

    const winRect = win.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();


    win.style.left =
      btnRect.left + btnRect.width / 2 - winRect.width / 2 + "px";


    win.style.top =
      btnRect.top - winRect.height - 12 + "px";

    win.style.visibility = "visible";
    return;
  }


  win.style.display = "block";
}