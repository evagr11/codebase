
# Inputs

## Tipos de inputs
```javascript
<input type="button" value="Boton">
<input type="checkbox">
<input type="color">
<input type="text"placeholder = usuario id="inputTexto">
<input type="password"placeholder = contraseña>
<input type="date">
<input type="month">
```

## Estilo

- block
- inline
```javascript
<style>
    input{
        display: block;  Para que muestre en bloque y no inline
    }
</style>
```
## Funciones

Van dentro de javascript
```javascript
<script>
    function accion(){
        console.log("El usuario cambió algo")
        const inputTexto = document.querySelector("#inputTexto")
        const valor = inputTexto.value
        console.log(valor)
    }
</script>
```

## Tarea

El usuario ingresó:
y hacerlo con todos los inputs