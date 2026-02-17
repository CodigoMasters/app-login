const app = document.querySelector("#app");
let contador = 0;

function render() {
  app.innerHTML = `
    <div style="text-align: center; margin-top: 50px;">
      <h1>Contador moderno</h1>
      <p style="font-size: 20px; font-weight: bold;">${contador}</p>
      <button id="btn-sumar">Sumar +1</button>
      <button id="btn-restar">Restar -1</button>
    </div>
  `;
  const btnSumar = document.querySelector("#btn-sumar");
  const btnRestar = document.querySelector("#btn-restar");

  btnSumar.addEventListener("click", () => {
    contador++;
    render();
  });
  btnRestar.addEventListener("click", () => {
    contador--;
    render();
  });
}

render();