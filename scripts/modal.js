const modalContainer = document.querySelector("#modalContainer");
const modalBgOverlay = document.querySelector("#modalBgOverlay");
const modalPanel = document.querySelector("#modalPanel");

const handleOpen = () => {
  modalContainer.classList.remove("pointer-events-none");

  modalBgOverlay.classList.remove("ease-out", "duration-300", "opacity-0");
  modalBgOverlay.classList.add("ease-in", "duration-200", "opacity-100");

  modalPanel.classList.remove(
    "ease-in",
    "duration-200",
    "opacity-0",
    "translate-y-4",
    "sm:translate-y-0",
    "sm:scale-95"
  );
  modalPanel.classList.add(
    "ease-out",
    "duration-300",
    "opacity-100",
    "translate-y-0",
    "sm:scale-100"
  );
};
const handleClose = () => {
  modalContainer.classList.add("pointer-events-none");

  modalBgOverlay.classList.add("ease-out", "duration-300", "opacity-0");
  modalBgOverlay.classList.remove("ease-in", "duration-200", "opacity-100");

  modalPanel.classList.add(
    "ease-in",
    "duration-200",
    "opacity-0",
    "translate-y-4",
    "sm:translate-y-0",
    "sm:scale-95"
  );
  modalPanel.classList.remove(
    "ease-out",
    "duration-300",
    "opacity-100",
    "translate-y-0",
    "sm:scale-100"
  );
};

document.querySelectorAll("[data-open-modal]").forEach((el) => {
  el.addEventListener("click", handleOpen);
});
document.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", handleClose);
});

const handleEsc = (e) =>
  (e.key === "Escape" || e.key === "Esc") && handleClose();
window.addEventListener("keydown", handleEsc);
