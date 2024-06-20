const voteImage = document.getElementById('vote-image');
const voteCount = document.getElementById('vote-count');
const voteEarn = document.getElementById('vote-earn');
const voteEarnBt = document.getElementById('bt-vote-earn');

let sqPoints = 0; // Используем переменную sqPoints для подсчета SQ.
let sqPointsForTap = 1;
let priceEarnUp = 100;
voteImage.addEventListener('click', () => {
    sqPoints+=sqPointsForTap;
    voteCount.textContent = `${sqPoints} SQ`;
    // Добавьте здесь логику сохранения SQ на сервере (например, через AJAX).
});



voteEarnBt.addEventListener('click', () => {
    if(sqPoints >= priceEarnUp){
        sqPointsForTap++;
        sqPoints -= priceEarnUp;
        priceEarnUp*=2;

        voteEarn.textContent = `Earn for tap: ${sqPointsForTap} SQ`;
        voteCount.textContent = `${sqPoints} SQ`;
        voteEarnBt.innerHTML = "Level up ⬆️"+"<br>"+ `Price: ${priceEarnUp} SQ`;

    } else{
        alert("Not enough SQ ☹️");
    }

});

