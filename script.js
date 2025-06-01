
let currentPage = 1;
const page1Text = document.getElementById("page1Text");
const openingCard = document.getElementById("openingCard");
const messages = [
  "Happy birthday Madamji !!!",
  "It’s your special day",
  "So..........!!",
  "I make something special for you"
];
let msgIndex = 0;

openingCard.addEventListener("click", () => {
  if (msgIndex < messages.length) {
    page1Text.textContent = messages[msgIndex++];
    page1Text.classList.add("fade");
    setTimeout(() => {
      page1Text.classList.remove("fade");
    }, 1000);
  } else {
    setTimeout(() => goToPage(2), 1000);
  }
});

const audio = document.getElementById("voiceNote");
const heart = document.querySelector(".glowing-heart");
const toPage3 = document.getElementById("toPage3");

audio.onplay = () => {
  heart.style.display = "block";
};
audio.onpause = () => {
  heart.style.display = "none";
};
audio.onended = () => {
  toPage3.classList.remove("hidden");
};
toPage3.addEventListener("click", () => goToPage(3));

const flipCards = document.querySelectorAll(".flip-card");
let flippedCount = 0;
const toPage4 = document.getElementById("toPage4");

flipCards.forEach(card => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("flipped")) {
      flippedCount++;
      const text = card.getAttribute("data-text");
      card.innerHTML = `<div class='flip-back'>${text}</div>`;
      card.classList.add("flipped");
    }
    if (flippedCount >= flipCards.length) {
      toPage4.classList.remove("hidden");
    }
  });
});

toPage4.addEventListener("click", () => goToPage(4));

function goToPage(num) {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  document.getElementById(`page${num}`).classList.add("active");
  currentPage = num;
}
