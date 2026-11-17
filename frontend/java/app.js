const monto = document.getElementById("monto");
const categoria = document.getElementById("categoria");
const fecha = document.getElementById("fecha");
const boton = document.getElementById("btnGuardar");
const lista = document.getElementById("lista");

let gastos = [];
try {
  gastos = JSON.parse(localStorage.getItem("gastos")) || [];
} catch (e) {
  gastos = [];
}
let editandoId = null;

fecha.valueAsDate = new Date();

function mostrar() {
  lista.innerHTML = "";

  gastos.forEach(function (g) {
    const fila = document.createElement("div");
    fila.className = "registro";
    if (g.categoria === "Salario") fila.classList.add("ingreso");
    fila.dataset.id = g.id;

    fila.innerHTML =
      "<span>$ " + Number(g.monto).toLocaleString("es-CO") + "</span>" +
      "<span>" + g.categoria + " (" + g.fecha + ")</span>" +
      "<div>" +
        '<button type="button" class="editar">editar</button>' +
        '<button type="button" class="eliminar">eliminar</button>' +
      "</div>";

    lista.appendChild(fila);
  });

  localStorage.setItem("gastos", JSON.stringify(gastos));
}

function limpiarFormulario() {
  monto.value = "";
  fecha.valueAsDate = new Date();
  categoria.selectedIndex = 0;
  boton.textContent = "Guardar";
  editandoId = null;
}

boton.addEventListener("click", function () {
  const valor = Number(monto.value);

  if (valor <= 0 || fecha.value === "") {
    alert("Escribe un monto mayor a 0 y elige una fecha");
    return;
  }

  if (editandoId !== null) {
    gastos.forEach(function (g) {
      if (g.id === editandoId) {
        g.monto = valor;
        g.fecha = fecha.value;
        g.categoria = categoria.value;
      }
    });
  } else {
    gastos.push({
      id: Date.now(),
      monto: valor,
      fecha: fecha.value,
      categoria: categoria.value
    });
  }

  limpiarFormulario();
  mostrar();
});

lista.addEventListener("click", function (e) {
  const fila = e.target.closest(".registro");
  if (!fila) return;

  const id = Number(fila.dataset.id);

  if (e.target.classList.contains("eliminar")) {
    gastos = gastos.filter(function (g) { return g.id !== id; });
    if (editandoId === id) limpiarFormulario();
    mostrar();
  }

  if (e.target.classList.contains("editar")) {
    const g = gastos.find(function (x) { return x.id === id; });
    monto.value = g.monto;
    fecha.value = g.fecha;
    categoria.value = g.categoria;
    editandoId = id;
    boton.textContent = "Guardar cambios";
  }
});

mostrar();