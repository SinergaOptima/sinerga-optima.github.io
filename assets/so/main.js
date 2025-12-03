// Dark-mode toggle
const btn = document.createElement('button');
btn.innerHTML = '<ion-icon name="moon"></ion-icon>';
btn.className = 'btn';
btn.style.marginLeft = '1rem';
document.querySelector('nav span').appendChild(btn);

btn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
// restore preference
if (localStorage.theme === 'light') document.body.classList.add('light');
