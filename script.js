function toggleIntro() {
    const details = document.getElementById('intro-details');
    const toggle = document.querySelector('.intro-toggle');

    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        toggle.textContent = '詳細を見る ▼';
    } else {
        details.classList.add('expanded');
        toggle.textContent = '詳細を閉じる ▲';
    }
}