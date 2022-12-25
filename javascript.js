function fillCanvas() {
  const canvas = document.querySelector('#canvas');

  const column = document.createElement('div');
  column.classList.add('column');

  canvas.appendChild(column);
  alert("Yes");
}

const btn = document.querySelector('#init');
btn.addEventListener('click', fillCanvas);