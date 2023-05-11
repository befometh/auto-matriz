
/**
 *
 * @param {matriz a tratar} arr
 * @param {las dimensiones de la matriz} dim
 * @param {el número de ciclo en el que va} cicle
 * @param {el contador que va a indicar el número que va en cada casilla} count
 * @returns
 */
function rellenoMatriz(arr, dim, cicle, count) {
  e = arr; // se asigna el arreglo a la variable @e
  var start = cicle; //se indica la casilla inicial que va acompañada del ciclo
  var end = dim; // se indica las dimensiones para considerar el valor final
  for (x = start; x < end - 1; x++) {
    //@x va a comenzar en el @start y va a llegar hasta la última casilla -1 (@end), recorriendo el arreglo horizontalmente
    e[start][x] = count;
    count++;
  }
  for (y = start; y < end - 1; y++) {
    //@y va a comenzar en la casilla inicial @start y va a llegar hasta la última casilla -1 (@end), recorriendo ahora el arreglo desde su posición final anterior, de manera vertical
    e[y][end - 1] = count;
    count++;
  }
  for (x = end - 1; x > start; x--) {
    //@ mísma lógica que el caso anterior, pero en dirección horizontal y de final al principio
    e[end - 1][x] = count;
    count++;
  }
  for (y = end - 1; y > start; y--) {
    //@ mísma lógica que el caso anterior, pero en dirección vertical y de abajo hacia arriba hasta una casilla antes del final
    e[y][start] = count;
    count++;
  }

  if (start >= end) {
    //compara si @start sigue siendo menor que @end, si es así vuelve a entar a la función aumentando @start en 1 y reduciendo @end en 1, en caso contrario, directamente entrega el arreglo ya finalizado
    return arr;
  } else {
    start++;
    end--;
    return rellenoMatriz(arr, end, start, count);
  }
}
/**
 * Función que grafica la matriz, y la muestra al usuario, se rellena en formato HTML
 * @param {Arreglo a dibujar} e 
 * @param {Las dimensiones por lado} dim 
 */
function mostrarMatriz(e, dim) {
  let temp = "<table>";
  matriz = document.createElement("div");
  document.querySelector("#creador").appendChild(matriz);
  for (let i = 0; i < dim; i++) {
    temp += "<tr>";
    for (let j = 0; j < dim; j++) {
      temp += `<td style="border:1px solid black; border-collapse="collapse";">${e[i][j]}</td>`;
    }
    temp += "</tr>";
  }
  matriz.innerHTML = temp+"</table>";
}
