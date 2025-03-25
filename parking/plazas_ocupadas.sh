# Selección que devuelve todas las plazas disponibles
sqlite3 parking.db "SELECT * FROM plazas WHERE estado = 'ocupado';"