const voteImage = document.getElementById('vote-image');
const voteCount = document.getElementById('vote-count');
let points = 0;

voteImage.addEventListener('click', () => {
    points++;
    voteCount.textContent = `${points} балл${points === 1 ? '' : 'а'}`;
    // Добавьте здесь логику сохранения баллов на сервере (например, через AJAX).
});
