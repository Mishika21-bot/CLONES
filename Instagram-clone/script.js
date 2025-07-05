document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.color = btn.style.color === 'red' ? 'black' : 'red';
  });
});
