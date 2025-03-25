# Selección que devuelve todas las plazas públicas ocupadas
sqlite3 parking.db "SELECT * FROM plazas WHERE 
(tipo = 'publicos' OR tipo = 'electricos' OR tipo = 'minusvalido') 
AND estado = 'ocupado';"