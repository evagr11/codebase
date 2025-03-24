import sqlite3

conn = sqlite3.connect('parking.db')
c = conn.cursor()

def obtener_plazas_por_tipo(piso_id, tipo):
    c.execute('''
        SELECT * FROM plazas WHERE piso_id = ? AND tipo = ?
    ''', (piso_id, tipo))
    return c.fetchall()

def obtener_plazas_por_piso(piso_id):
    c.execute('''
        SELECT * FROM plazas WHERE piso_id = ?
    ''', (piso_id,))
    return c.fetchall()

def eliminar_plaza(id):
    c.execute('''
        DELETE FROM plazas WHERE id = ?
    ''', (id,))
    conn.commit()

def mostrar_plazas(piso_id):
    print("ID | Piso ID | Tipo | Fecha y Hora")
    for plaza in obtener_plazas_por_piso(piso_id):
        linea = f"{plaza[0]} | {plaza[1]} | {plaza[2]} | {plaza[3]}"
        print(linea)

def agregar_plaza(piso_id, tipo):
    c.execute('''
        INSERT INTO plazas (piso_id, tipo) VALUES (?, ?)
    ''', (piso_id, tipo))
    conn.commit()
    print("Plaza agregada correctamente.")

# Crear las tablas si no existen
def create_tables():
    c.execute('''
        CREATE TABLE IF NOT EXISTS Pisos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL
        )
    ''')
    c.execute('''
        CREATE TABLE IF NOT EXISTS plazas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            piso_id INTEGER NOT NULL,
            tipo TEXT NOT NULL,
            fecha_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (piso_id) REFERENCES Pisos(id)
        )
    ''')
    conn.commit()

create_tables()

# Menú principal
while True:
    print("\nMenú del Parking")
    print("1. Mostrar plazas por piso")
    print("2. Mostrar plazas por tipo")
    print("3. Eliminar una plaza")
    print("4. Agregar una plaza")
    print("5. Salir")
    opcion = input("Selecciona una opción: ")

    if opcion == "1":
        piso_id = int(input("Ingresa el ID del piso: "))
        mostrar_plazas(piso_id)

    elif opcion == "2":
        piso_id = int(input("Ingresa el ID del piso: "))
        tipo = input("Ingresa el tipo de plaza (privada, minusvalido, electricos, publicos): ")
        plazas = obtener_plazas_por_tipo(piso_id, tipo)
        print("ID | Piso ID | Tipo | Fecha y Hora")
        for plaza in plazas:
            print(f"{plaza[0]} | {plaza[1]} | {plaza[2]} | {plaza[3]}")

    elif opcion == "3":
        id = int(input("Ingresa el ID de la plaza a eliminar: "))
        eliminar_plaza(id)
        print("Plaza eliminada correctamente.")

    elif opcion == "4":
        piso_id = int(input("Ingresa el ID del piso: "))
        tipo = input("Ingresa el tipo de plaza (privada, minusvalido, electricos, publicos): ")
        agregar_plaza(piso_id, tipo)

    elif opcion == "5":
        print("Saliendo del programa...")
        break

    else:
        print("Opción no válida. Intenta de nuevo.")

conn.close()