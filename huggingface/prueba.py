import os
import requests
from dotenv import load_dotenv
load_dotenv()

TOKEN = os.getnv("TOKEN")
API_URL = "https://api-inference.huggingface.co/models/bigscience/bloom"
headers = {"Authorization": f"{TOKEN}"}
payload = {
    "inputs": "Today is a great day",
}

response = requests.post(API_URL, headers=headers, json=payload)
print(response.json())