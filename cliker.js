const voteImage = document.getElementById('vote-image');
const voteCount = document.getElementById('vote-count');
let points = 0;
let add_points_tap = 2;
voteImage.addEventListener('click', () => {
    points = points + add_points_tap;
    voteCount.textContent = `${points} SQ${points === 1 ? '' : 'а'}`;
    // Добавьте здесь логику сохранения баллов на сервере (например, через AJAX).
});
