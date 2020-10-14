function anim1(path) {
    path.style.transitionDelay = `${Math.random() * 200}ms`;
    path.style.transformOrigin = `${Math.random() * 50 + 25}% 0%`;
    path.style.transform = `scale(0) rotate(${Math.random() * 100 - 50}deg)`;
    path.style.fill = '#777';
    path.style.stroke = '#555';
  }
  
  const anims = [anim1],
  buttons = Array.from(document.querySelectorAll('.button'))
  buttons.forEach((button, i) => {
    const submit = button.querySelector('.submit');
    let paths = button.querySelectorAll('path')
    submit.addEventListener('click', () => {
      paths.forEach((path, j) => {
        anims[i](path, j);
      });
      submit.style.display = 'none';
    })
  })
  