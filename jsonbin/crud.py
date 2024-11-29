import os
import requests
from dotenv import load_dotenv
load_dotenv()

XMasterKey = os.getenv("X_MASTER_KEY")
XAccessKey = os.getenv("X_ACCESS_KEY")
bin_id = os.getenv("BIN_ID")

print(XMasterKey)
url_root = "https://api.jsonbin.io/v3"
route = f"/b/{bin_id}" 
headers = {
    "X-Master-Key": XMasterKey,
    "X-Access-Key": XAccessKey
}

usuario = {
    "username": "aaaaa",
    "password": "bbbbb"
}

def read_db():
    response = requests.get(url_root + route, headers=headers)
    print(response.json())

def update_db():
    response = requests.put(url_root + route, headers=headers, json=usuario)
    print(response.json())

read_db()
update_db()
read_db()