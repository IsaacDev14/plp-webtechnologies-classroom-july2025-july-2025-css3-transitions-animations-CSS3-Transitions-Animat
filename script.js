let globalCount = 0;

function incrementCount(step) {
  let localCount = globalCount + step;
  globalCount = localCount;
  return localCount;
}

const animateBtn = document.getElementById("animateBtn");
const box = document.querySelector(".box");
const modalBtn = document.getElementById("modalBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

animateBtn.addEventListener("click", () => {
  box.classList.toggle("animate");
  box.classList.toggle("pulse");
  console.log("Box count:", incrementCount(1));
});

function showModal() {
  modal.classList.add("show");
}
function hideModal() {
  modal.classList.remove("show");
}

modalBtn.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);
