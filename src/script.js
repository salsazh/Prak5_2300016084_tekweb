document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("garistiga-btn"); 
  const mobileMenu = document.getElementById("menu"); 
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  } else {
    console.error("Element tidak ditemukan. Pastikan ID elemen benar.");
  }
});