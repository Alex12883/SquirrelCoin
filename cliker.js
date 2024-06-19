const voteImage = document.getElementById('vote-image');
const voteCount = document.getElementById('vote-count');
let sqPoints = 0; // Используем переменную sqPoints для подсчета SQ.

voteImage.addEventListener('click', () => {
    sqPoints++;
    voteCount.textContent = `${sqPoints} SQ`;
    // Добавьте здесь логику сохранения SQ на сервере (например, через AJAX).
});
