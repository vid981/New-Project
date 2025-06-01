// Page navigation
function goToPage(n) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + n).classList.add('active');
}

// Page 1 text animation
function startTextAnimation() {
  const card = document.getElementById('openingCard');
  const text = document.getElementById('page1Text');
  const messages = [
    "Happy birthday Madamji !!!",
    "It’s your special day",
    "So..........!!",
    "I want to make something special for you"
  ];
  let i = 0;
  card.onclick = null;
  const interval = setInterval(() => {
    if (i < messages.length) {
      text.style.opacity = 0;
      setTimeout(() => {
        text.innerText = messages[i++];
        text.style.opacity = 1;
      }, 500);
    } else {
      clearInterval(interval);
      setTimeout(() => goToPage(2), 2000);
    }
  }, 2000);
}

// Page 2: show button after audio ends
const audio = document.getElementById("voiceNote");
audio.onended = () => {
  document.getElementById("toPage3").classList.remove("hidden");
};

// Flip cards on Page 3
function flipCard(card) {
  card.classList.add("flipped");
  const flipped = document.querySelectorAll(".flip-card.flipped").length;
  if (flipped === 4) {
    document.getElementById("toPage4").classList.remove("hidden");
  }
}
