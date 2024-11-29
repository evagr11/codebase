import requests
import os
from dotenv import load_dotenv

load_dotenv()

bin_id = os.getenv("BIN_ID")
XMasterKey = os.getenv("X_MASTER_KEY")
XAccessKey = os.getenv("X_ACCESS_KEY")

url_root = "https://api.jsonbin.io/v3"
route = f"/b/{bin_id}"
headers = {
    "Content-Type": "application/json",
    "X-Master-Key": XMasterKey,
    "X-Access-Key": XAccessKey
}
usuario = {
    "user": "admin",
    "password" : "1234"
    }
def read_db():
    r = requests.get(url_root + route, headers=headers)
    print(r.json())

def update_db():
    r = requests.put(url_root + route, headers=headers, json=usuario)
    print(r.json())

def add_user():
    r = requests.patch(url_root + route, headers=headers, json=usuario)
    print(r.json())

read_db()
add_user()
read_db()