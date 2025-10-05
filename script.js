function toggleIntro() {
    const details = document.getElementById('intro-details');
    const toggle = document.querySelector('.intro-toggle');

    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        toggle.textContent = '詳細を見る ▼';
    } else {
        details.classList.add('expanded');
        toggle.textContent = '詳細を隠す ▲';
    }
}

function toggleList(listId, button) {
    const list = document.getElementById(listId);

    if (list.classList.contains('expanded')) {
        list.classList.remove('expanded');
        button.textContent = '+';
    } else {
        list.classList.add('expanded');
        button.textContent = '−';
    }
}

// ページ読み込み時に空の展開リストのボタンを非表示にする
document.addEventListener('DOMContentLoaded', function() {
    const expandableLists = document.querySelectorAll('.expandable-list');
    expandableLists.forEach(list => {
        if (list.children.length === 0) {
            const button = list.nextElementSibling;
            if (button && button.classList.contains('toggle-button')) {
                button.style.display = 'none';
            }
        }
    });
});
