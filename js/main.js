window.addEventListener('load', () => {

    const loader = document.getElementById('loading-screen');

    // 【注意】本来は setTimeout は不要ですが、
    // コンテンツが軽いと一瞬で消えてしまうため、
    // デモ用にわざと1.5秒待ってから消しています。
    setTimeout(() => {
        // 'loaded' クラスを追加してCSSのopacity:0を発動させる
        loader.classList.add('loaded');
    }, 1500);

    // 本番環境で即座に消したい場合は setTimeout を削除して
    // loader.classList.add('loaded');
    // だけを記述してください。
});


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
