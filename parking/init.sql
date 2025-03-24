-- Crear la tabla Pisos
CREATE TABLE IF NOT EXISTS pisos (
    id INTEGER PRIMARY KEY AUTOINCREMENT
);

-- Crear la tabla plazas
CREATE TABLE IF NOT EXISTS plazas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    piso_id INTEGER NOT NULL,
    tipo TEXT NOT NULL, -- privada, minusvalido, electricos, publicos
    estado TEXT NOT NULL DEFAULT 'disponible', -- disponible u ocupado
    fecha_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (piso_id) REFERENCES pisos(id)
);

-- Insertar valores iniciales en la tabla pisos
--INSERT INTO pisos (id) VALUES (1), (2), (3);

-- Insertar valores iniciales en la tabla plazas
--INSERT INTO plazas (piso_id, tipo, estado) VALUES
--(1, 'privada', 'disponible'),
--(1, 'minusvalido', 'ocupado'),
--(2, 'electricos', 'disponible'),
--(2, 'publicos', 'ocupado'),
--(3, 'publicos', 'disponible'),
--(3, 'privada', 'ocupado');