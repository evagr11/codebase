-- Crear la tabla Pisos
CREATE TABLE IF NOT EXISTS pisos (
    id INTEGER PRIMARY KEY AUTOINCREMENT
);

-- Crear la tabla plazas
CREATE TABLE IF NOT EXISTS plazas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    piso_id INTEGER NOT NULL,
    tipo TEXT NOT NULL, -- privada, minusvalido, electricos, publicos
    estado TEXT NOT NULL DEFAULT 'libre', -- libre u ocupado
    fecha_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (piso_id) REFERENCES pisos(id)
);

