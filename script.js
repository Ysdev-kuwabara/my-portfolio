//ボタンの要素を取得する
const btn = document.getElementById('mode-toggle');

//ボタンがクリックされた時の動きを決める
btn.addEventListener('click', () => {
    //bodyタグに'dark-theme'クラスをつけたり外したりする
    document.body.classList.toggle('dark-theme');

    //ボタンの文字を変える
    if (document.body.classList.contains('dark-theme')) {
        btn.textContent = 'ライトモードに切り替え';
    } else {
        btn.textContent = 'ダークモードに切り替え';
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.inEntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { shreshold: 0.1}); //10%見えたら実行

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-content");

document.querySelectorAll('.gallery-img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

document.querySelector('.close').onclick = () => modal.style.display = "none";

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

//スクロールすると背景が変わる
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) { // 100px以上スクロールしたら
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});