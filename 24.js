function drawChess() {
  let mainBlock = document.querySelector(".main-block");
  let block;
  let flag = true;

  let figure = {
    0: [
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px"
    ],
    1: [
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px"
    ],
    2: [
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px"
    ],
    3: [
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px",
      "-595px -19px"
    ],
    7: [
      "-263px -116px",
      "-484px -116px",
      "-372px -116px",
      "-150px -116px",
      "-150px -116px",
      "-372px -116px",
      "-484px -116px",
      "-263px -116px"
    ]
  };

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (j == 0) flag = !flag;

      block = document.createElement("div");

      if (flag) block.className = "block yellow";
      else block.className = "block red";

      if (figure[i] !== undefined && figure[i][j] !== undefined) {
        block.style.backgroundImage = "url(сhess_symbols_set_.png)";
        block.style.backgroundPosition = figure[i][j];
      }

      mainBlock.appendChild(block);
      flag = !flag;
    }
  }
}

drawChess();
