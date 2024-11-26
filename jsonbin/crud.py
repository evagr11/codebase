import os
import requests
from dotenv import load_dotenv
load_dotenv()

XMasterKey = os.getnv("X_MASTER_KEY")
XAccessKey = os.getnv("X_ACCESS_KEY")
bin_id = os.getnv("BIN_ID")

print(XMasterKey)
url_root = "https://api.jsonbin.io/v3"
route = f"/b/{bin_id}" 
headers = {
    "X-Master-Key": XMasterKey,
    "X-Access-Key": XAccessKey
}

r = requests.get(url_root + route, headers=headers)
print(r.json())