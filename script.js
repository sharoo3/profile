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

// サブスクリプションの合計を計算
function calculateSubscriptionTotals() {
    const subscriptionData = [
        { name: 'Money Forward', monthly: 590, yearly: 7080 },
        { name: 'Claude Code', monthly: 3000, yearly: 36000 },
        { name: 'Audible', monthly: 1500, yearly: 18000 },
        { name: 'ジム', monthly: 10670, yearly: 128040 },
        { name: 'Final Fantasy XIV', monthly: 1628, yearly: 19536 },
        { name: 'X Server', monthly: 330, yearly: 3960 },
        { name: 'CloudFlare Domain (rabbit34.org)', monthly: 125, yearly: 1500 },
        { name: 'CloudFlare Domain (sharoo.org)', monthly: 103, yearly: 1238 }
    ];

    let monthlyTotal = 0;
    let yearlyTotal = 0;

    subscriptionData.forEach(item => {
        monthlyTotal += item.monthly;
        yearlyTotal += item.yearly;
    });

    document.getElementById('monthly-total').textContent =
        '¥' + monthlyTotal.toLocaleString();
    document.getElementById('yearly-total').textContent =
        '¥' + yearlyTotal.toLocaleString();
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

    // サブスクリプション合計を計算
    calculateSubscriptionTotals();
});
