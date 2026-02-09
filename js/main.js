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



