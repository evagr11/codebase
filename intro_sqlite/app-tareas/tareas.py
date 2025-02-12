import sqlite3

conn = sqlite3.connect("tareas.db")
c = conn.cursor()

def create_table():
    with open("initdb.sql", "r") as f:
        c.executescript(f.read())
    conn.commit()


def add_task(title, desc=None):
    c.execute("INSERT INTO tasks (title, description) VALUES (?,?)", (title, desc))
    conn.commit()

def get_tasks():
    c.execute("SELECT * FROM tasks")
    return c.fetchall()

def complete_task(task_id):
    c.execute('UPDATE tasks SET status = "completed" WHERE id = ?', (task_id,))
    conn.commit()

def complete_task_by_title(title):
    c.execute('UPDATE tasks SET status = "completed" WHERE title = ?', (title,))
    conn.commit()

def delete_task(task_id):
    c.execute('DELETE FROM tasks WHERE id = ?', (task_id,))
    conn.commit()

create_table()
#complete_task(1)
#add_task("tarea test", "desc test")
#resultado = get_tasks()
#print(resultado) 
#= a poner print(get_taks())


while True:
    print('1. Add task')
    print('2. List tasks')
    print('3. Complete task')
    print('4. Delete task')
    print('5. Exit')

    option = input('Choose an option:')

    if option == '1':
        task = input('Enter the task:')
        desc = input('Enter the description: (optional)')
        add_task(task, desc)

    elif option == '2':
        tasks = get_tasks()
        print('ID | Task | Description | Status')
        for task in tasks:
            line = f'{task[0]} | {task[1]} | {task[2]} | {task[3]}'
            print(line)

    elif option == '3':
        task_id = input('Enter the task id: ')
        complete_task(task_id)

    elif option == '4':
        task_id = input('Enter the task id: ')

    elif option == '5':
        break

