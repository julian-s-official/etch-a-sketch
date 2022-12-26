let mouse = false;

function addListeners() {
  const rows = document.querySelectorAll('.row');

  rows.forEach((row) => {
    row.addEventListener('mouseover', () => {
      if (mouse == true) {
        row.classList.add('active');
      }
    })
  });
}

function cleanCanvas() {
    // remove all event listeners and empty canvas
    const canvas = document.querySelector('#canvas');
    canvas.innerHTML = '';
    canvas.replaceWith(canvas.cloneNode(true));
}

function fillCanvas() {
  cleanCanvas();
  noofsquares = prompt("How many columns do you want?");
  const canvas = document.querySelector('#canvas');

  canvas.addEventListener('mousedown', () => {
    mouse = true;
  });
  canvas.addEventListener('mouseup', () => {
    mouse = false;
  });

  for (let i = 0; i < noofsquares; i++) {
    const column = document.createElement('div');
    column.classList.add('col');

    // create (square amount) of rows for each column
    for (let j = 0; j < noofsquares; j++) {
      const row = document.createElement('row');
      row.classList.add('row');
      column.appendChild(row);
    }

    canvas.appendChild(column);
  }

  addListeners();
}

const btn = document.querySelector('#init');
btn.addEventListener('click', fillCanvas);
