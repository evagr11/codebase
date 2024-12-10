from huggingface_hub import InferenceClient
from create_env import TOKEN
import requests
import os
import dotenv
dotenv.load_dotenv()

KEY = os.getenv("TOKEN")
client = InferenceClient(api_key=KEY)

completion = client.chat.completions.create(
    model="meta-llama/Llama-3.2-1B-Instruct",
    messages=[
        {"role": "system", "content": "Eres un experto en ciberseguridad, "},
        {"role": "user", "content": "¿Qué es un CVE?"}
    ],
    max_tokens=150, #controla la longitud del texto generado
    temperature=0.7, #controla la aleatoriedad de las predicciones, valores bajos generan texto más predecible
    top_p=0.9, #limita la probabilidad acumulada de las palabras generadas, evita que se genere texto incoherente
    stop=["user:"]
)

print(completion.choices)