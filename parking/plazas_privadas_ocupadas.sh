# Selección que devuelve todas las plazas privadas ocupadas
sqlite3 parking.db "SELECT * FROM plazas WHERE tipo = 'privada'  
AND estado = 'ocupado';"