const obj = [
  {
    id: 1,
    nombre: "Ana",
    apellidos: "Macia Pajas",
  },
  {
    id: 2,
    nombre: "Antonio",
    apellidos: "Sueltamelo",
  },
  {
    id: 3,
    nombre: "Elba",
    apellidos: "Lazo",
  },
];

const tabla = document.getElementById("miTabla"); // obtener la tabla del HTML

for (const elemento of obj) {
  // crear una fila para cada elemento del objeto
  const fila = tabla.insertRow();
  // crear las celdas de la fila
  const celdaId = fila.insertCell();
  const celdaNombre = fila.insertCell();
  const celdaApellidos = fila.insertCell();
  // asignar el valor de cada propiedad del elemento a la celda correspondiente
  celdaId.innerHTML = elemento.id;
  celdaNombre.innerHTML = elemento.nombre;
  celdaApellidos.innerHTML = elemento.apellidos;
}
