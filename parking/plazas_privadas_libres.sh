# Selección que devuelve todas las plazas privadas disponibles
sqlite3 parking.db "SELECT * FROM plazas WHERE tipo = 'privada'  
AND estado = 'libre';"