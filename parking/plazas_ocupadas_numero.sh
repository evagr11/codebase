# Selección que devuelve el número total de plazas ocupadas
sqlite3 parking.db "SELECT COUNT(*) AS plazas_ocupadas FROM plazas WHERE estado = 'ocupado';"