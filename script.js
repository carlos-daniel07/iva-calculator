function calcularIva() {
  const precio = document.querySelector("#precio").value;
  const iva = document.querySelector("#iva").value / 100;

  // Realizar el calculo del iva
  const resultado = parseFloat(precio) * (1 + iva);

  // Mostrar el resultado
  document.querySelector("#iva-amount").innerHTML =
    "Importe del IVA: $" + (resultado - parseFloat(precio)).toFixed(2);
  document.querySelector("#total").innerHTML =
    "Precio final: $" + resultado.toFixed(2);
}

// Evento para ejecutar la funcion al ingresar un valor en los campos
document.querySelector("#precio").addEventListener("input", calcularIva);
document.querySelector("#iva").addEventListener("input", calcularIva);
