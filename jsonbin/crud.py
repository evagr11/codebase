import requests

bin_id = "67458cbdad19ca34f8d08d7d"
XMasterKey = "$2a$10$8fwGLqWTQagmAh1hNqwhm.oKraCUVRIDVAw663zEUkeA0dErsAAvy"
XAccessKey = "$2a$10$MospwYFpMgcNonTC1BXw0Ocnoy3bHM/ZdSB80CKiGjdKmmVtfEM2O"
url_root = "https://api.jsonbin.io/v3"
route = f"/b/{bin_id}" 
headers = {
    "X-Master-Key": XMasterKey,
    "X-Access-Key": XAccessKey
}

r = requests.get(url_root + route, headers=headers)
print(r.json())