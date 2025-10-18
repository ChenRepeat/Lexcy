// 導入頁首頁尾
// 自動判斷環境
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const basePath = isLocal ? '..' : '/Lexcy';

fetch(`${basePath}/header.html`)
  .then(res => res.text())
  .then(data => document.querySelector('header').innerHTML = data)
  .catch(err => console.error('載入 header 失敗:', err))

fetch(`${basePath}/footer.html`)
  .then(res => res.text())
  .then(data => document.querySelector('footer').innerHTML = data)
  .catch(err => console.error('載入 footer 失敗:', err))