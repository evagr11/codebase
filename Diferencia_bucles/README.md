Diferencia entre los diferentes bucles, y como utilizarlos

# Gráfico de Mediciones y Datos en Tiempo Real

Este proyecto muestra cómo visualizar un conjunto de datos en tiempo real utilizando un gráfico de barras con la librería [Chart.js](https://www.chartjs.org/). Los datos se representan en un gráfico y también se muestran dinámicamente en la página web.

## Estructura del Proyecto

1. **Gráfico de Barras**: Genera un gráfico de barras.
2. **Sección de Mediciones**: Se muestra una lista.

## Descripción del Código

### HTML

- **`<canvas id="myChart" width="400" height="200"></canvas>`**: Esto dibuja el gráfico con Chart.js.
- **`<section id="mediciones">`**: Dentro de esta sección se mostrarán las mediciones (tiempo y valor).

### JavaScript

En el bloque de JavaScript:

1. **Datos**: Se define un array de objetos `datos` de tiempo y valores:
    ```javascript
    let datos =[
        {tiempo: 0, valor: 12},
        {tiempo: 1, valor: 13},
        {tiempo: 2, valor: 14},
        {tiempo: 3, valor: 15},
        {tiempo: 4, valor: 16},
        {tiempo: 5, valor: 17},
        {tiempo: 6, valor: 19},
        {tiempo: 7, valor: 20},
        {tiempo: 8, valor: 21},
        {tiempo: 9, valor: 22}
    ]
    ```
2. **Extracción de Datos para el Gráfico**: Se recorren los objetos `datos` para separar los valores de tiempo y valor en dos arrays: `labels` (para las etiquetas del eje X) y `data` (para los valores del eje Y).
3. **Generación del Gráfico**: Con la librería `Chart.js`, se crea un gráfico de barras usando el contexto del elemento `<canvas>`.

    ```javascript
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Valores',
                data: data,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    ```

4. **Mostrar Mediciones en el HTML**: Se utiliza `forEach` para recorrer los datos y crear  elementos HTML (`<h2>` y `<p>`) que muestran el tiempo y el valor en la sección `#mediciones`.

    ```javascript
    datos.forEach((valores) => {
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        h2.innerText = `Tiempo: ${valores.tiempo}`;
        p.innerText = `Valor: ${valores.valor}`;
        contenedorMediciones.appendChild(h2);
        contenedorMediciones.appendChild(p);
    });
    ```

### Librerías Utilizadas

- **Chart.js**: Es una librería JavaScript para gráficos interactivos. Se incluye mediante un CDN en el encabezado del HTML:
    ```html
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    ```


