// Handle tap on page 1 card
const openingCard = document.getElementById("openingCard");
const page1Text = document.getElementById("page1Text");
const pages = document.querySelectorAll(".page");
let currentPage = 1;

openingCard.addEventListener("click", () => {
  let messages = [
    "Happy birthday Madamjii !!!",
    "It’s your special day",
    "So..........!!",
    "I make something special for you"
  ];
  let index = 0;
  page1Text.style.opacity = 0;

  const showNext = () => {
    if (index < messages.length) {
      page1Text.textContent = messages[index];
      page1Text.style.opacity = 1;
      setTimeout(() => {
        page1Text.style.opacity = 0;
        index++;
        setTimeout(showNext, 600); // Wait between fades
      }, 2000);
    } else {
      // After final message, fade card out and go to Page 2
      setTimeout(() => {
        openingCard.style.opacity = 0;
        setTimeout(() => {
          goToPage(2);
        }, 800);
      }, 500);
    }
  };

  showNext();
});

// Navigation function
function goToPage(n) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(`page${n}`).classList.add("active");
  currentPage = n;
}

// Page 2: Show button after audio ends
const audio = document.getElementById("voiceNote");
const toPage3Btn = document.getElementById("toPage3");
audio.addEventListener("ended", () => {
  toPage3Btn.classList.remove("hidden");
});
toPage3Btn.addEventListener("click", () => goToPage(3));

// Page 3: Flip Cards
let flippedCount = 0;
const cards = document.querySelectorAll(".flip-card");
const toPage4Btn = document.getElementById("toPage4");

cards.forEach(card => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("flipped")) {
      card.classList.add("flipped");
      flippedCount++;
      if (flippedCount === cards.length) {
        toPage4Btn.classList.remove("hidden");
      }
    } else {
      card.classList.remove("flipped");
      flippedCount--;
    }
  });
});