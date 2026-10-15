from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import eng, Base
from models.product import Product
from routes.product import router as product_router







app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        
    ],

    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=eng)

app.include_router(product_router)


@app.get("/")

def home():
    return {"message": "hello FastAPI"}


