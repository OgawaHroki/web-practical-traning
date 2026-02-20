window.addEventListener('load', () => {

    const loader = document.getElementById('loading-screen');
    //カルーセルのコンテナを取得
    const carousel = document.querySelector('.carousel-container');

    // ローディング画面
    // 【注意】本来は setTimeout は不要ですが、
    // コンテンツが軽いと一瞬で消えてしまうため、
    // デモ用にわざと1.5秒待ってから消しています。
    setTimeout(() => {
        // ローディング画面を消す
        loader.classList.add('loaded');

        // ★追加：ローディングが消えるタイミングで、カルーセルに「出現クラス」をつける
        if (carousel) {
            carousel.classList.add('appear');
        }
    }, 1500);
});

// 本番環境で即座に消したい場合は setTimeout を削除して
// loader.classList.add('loaded');
// だけを記述してください。


// ハンバーガーメニュー
// ページの準備が整ったら動くようにする
document.addEventListener("DOMContentLoaded", function () {
    // 1. まず、使う部品に名前をつけておく（変数に入れる）
    // ページの中から '.hamburger' という要素を見つけて 'hamburgerButton' と呼ぶことにする
    const hamburgerButton = document.querySelector(".hamburger");
    // ページの中から '.menyu' という要素を見つけて 'menuScreen' と呼ぶことにする
    const menuScreen = document.querySelector(".menyu");
    // 2. ボタンがクリックされたときの動きを作る
    hamburgerButton.addEventListener("click", function () {
        // メニュー画面の 'open' クラスを付け外しする
        menuScreen.classList.toggle("open");
        // ボタン自身の 'active' クラスを付け外しする
        hamburgerButton.classList.toggle("active");
    })
});

// JavaScriptで中身を複製して、切れ目のない無限ループを作る処理
document.addEventListener('DOMContentLoaded', () => {
    // この中に処理を書く
    // 1. トラック要素を取得
    const track = document.getElementById('track');

    // 2. 今あるカードの中身を全部コピーする
    const clone = track.innerHTML;

    // 3. トラックの後ろにコピーを追加する
    // これで [カード1, 2, 3...][カード1, 2, 3...] と2セット並ぶ状態になる
    track.innerHTML = clone + clone + clone + clone;

});

// about　上から下へのアニメーション
document.addEventListener("DOMContentLoaded", function () {
    // 監視対象：タイムラインのセクション
    const timeline = document.querySelector('.timeline');
    // アニメーションさせる各アイテム
    const timelineItems = document.querySelectorAll('.timeline-item');

    // 監視の設定（画面の10%が見えたら発火するように少し甘めに設定）
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    // 監視機能の作成
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 画面に入ったとき
            if (entry.isIntersecting) {
                // 各アイテムを順番に表示する
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 200); // 0.2秒ずつ遅らせて表示（順番に降りてくる演出）
                });
                // 一度発火したら監視を終了（何度も動かないようにする）
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // 監視を開始
    if (timeline) {
        observer.observe(timeline);
    }
});

// アルバム（Swiper）を動かすための設定
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        // ★追加: 自動再生の設定
        autoplay: {
            delay: 5500, // 2.5秒ごとに切り替え
            disableOnInteraction: false, // 触っても自動再生を止めない
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoHeight: true, // 高さを自動調整
    });
});