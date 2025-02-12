import sqlite3

conn = sqlite3.connect("tareas.db")
c = conn.cursor()

def create_table():
    with open("initdb.sql", "r") as f:
        c.executescript(f.read())
    conn.commit()

#create_table()

def add_task(title, status, desc=None):
    c.execute("INSERT INTO tasks (title, descripcion,status) VALUES (?,?,?)", (title, desc, status))
    conn.commit


# TODO:
# Funcion change_status
# Funcion show_tasks
# Funcion delete_tasks

import sqlite3

conn = sqlite3.connect("tareas.db")
c = conn.cursor()

def create_table():
    with open("initdb.sql", "r") as f:
        c.executescript(f.read())
    conn.commit()

def add_task(title, status, desc=None):
    c.execute("INSERT INTO tasks (title, descripcion, status) VALUES (?, ?, ?)", (title, desc, status))
    conn.commit()

def change_status(task_id, new_status):
    c.execute("UPDATE tasks SET status = ? WHERE id = ?", (new_status, task_id))
    conn.commit()

def show_tasks():
    c.execute("SELECT * FROM tasks")
    tasks = c.fetchall()
    for task in tasks:
        print(task)

def delete_task(task_id):
    c.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
    conn.commit()

# Ejemplo de uso:
# add_task("Comprar pan", "pendiente")
# show_tasks()
# change_status(1, "completado")
# delete_task(1)
