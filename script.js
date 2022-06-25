const openWindowButtons = document.querySelectorAll("[data-modal-target]");
const closeWindowButtons = document.querySelectorAll("[data-close-button]");

openWindowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openWindow(modal);
  });
});

closeWindowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest("#modal");
    closeWindow(modal);
  });
});

function openWindow(modal) {
  if (modal === null) {
    return;
  } else {
    modal.classList.add("active");
  }
}

function closeWindow(modal) {
  if (modal === null) {
    return;
  } else {
    modal.classList.remove("active");
  }
}

const mobilePopup = [
  {
    title: "Multi-post story",
    closeButton: "&times;",
    snapshootPortfolio: "Images/pop-up img2.svg",
    projectText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    tags: ["html", "Ruby on Rails", "css", "Bootstrap"],
    liveVersion: "https://pndungumaina.github.io/",
    sourceCode: "https://github.com/PNdunguMaina/My-personal-portfolio.git",
  },
];
