# Selección que devuelve el número total de plazas disponibles
sqlite3 parking.db "SELECT COUNT(*) AS plazas_libres FROM plazas WHERE estado = 'libre';"