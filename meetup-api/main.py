import time
from typing import Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "https://localhost:3000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/")
def get_to_dos(search: Optional[str] = None):
    to_dos = [
        {
            'id': 1,
            'title': 'Charla de Accesibilidad HTML',
            'description': 'Aprenderemos cómo personas ciegas navegan un sitio web y veremos buenas prácticas al escribir código. ',
            'checked': True,
        },
        {
            'id': 2,
            'title': 'Break',
            'description': 'Tiempo libre entre charlas. Hay snacks!',
            'checked': True,
        },
        {
            'id': 3,
            'title': 'Charla React Testing Library',
            'description': 'Aprendemos de RTL y sus buenas prácticas.',
            'checked': False,
        },
        {
            'id': 4,
            'title': 'App de demo',
            'description': 'Ejemplos prácticos que reflejan cómo escribir tests mantenibles y enfocados en las interacciones del usuario. ',
            'checked': False,
        }
    ]
    if search is not None:
        to_dos = list(filter(lambda element: search.lower() in element['title'].lower(), to_dos))
    else:
        time.sleep(0.70)
    return to_dos