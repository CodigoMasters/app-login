const app = document.querySelector("#app");

let contador = 0;

app.innerHTML = `
  <main class="counter">
    <h1 class="counter__title">Contador moderno</h1>
    <div class="counter__display">
      <span id="valor" class="counter__value">${contador}</span>
    </div>
    <div class="counter__actions">
      <button id="btn-sumar" class="counter__btn counter__btn--add">Sumar +1</button>
      <button id="btn-restar" class="counter__btn counter__btn--subtract">Restar -1</button>
    </div>
  </main>
`;

const valor = document.querySelector("#valor");
const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");

btnSumar.addEventListener("click", () => {
  contador++;
  actualizar();
});

btnRestar.addEventListener("click", () => {
  contador--;
  actualizar();
});

function actualizar() {
  valor.textContent = contador;
};
