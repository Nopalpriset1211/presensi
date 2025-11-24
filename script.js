document.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");
  const btn = document.getElementById("btnAbsensi");

  const now = new Date();
  const wd = now.getDay();
  const h = now.getHours();
  const m = now.getMinutes();
  const mins = h * 60 + m;

  const allowed = (wd === 2 || wd === 6) && (mins >= 720 && mins <= 1080);
  status.textContent = allowed
    ? "Absensi Sedang Dibuka"
    : "Absensi Ditutup";
  btn.style.display = allowed ? "block" : "none";
});