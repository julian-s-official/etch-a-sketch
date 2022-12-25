function fillCanvas() {
  squares = prompt("How many squares do you want?");
  root = Math.sqrt(squares);

  // check if is a square number
  if (Number.isInteger(root) == false) {
    alert("Not a square number!");
    return
  }
  
  // remove all existing squares
  const canvas = document.querySelector('#canvas');
  canvas.innerHTML = '';

  for (let i = 0; i < root; i++) {
    const column = document.createElement('div');
    column.classList.add('col');

    // create (square amount) of rows for each column
    for (let j = 0; j < root; j++) {
      const row = document.createElement('row');
      row.classList.add('row');
      column.appendChild(row);
    }

    canvas.appendChild(column);
  }
}

const btn = document.querySelector('#init');
btn.addEventListener('click', fillCanvas);