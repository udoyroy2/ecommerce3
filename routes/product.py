from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from typing import List
from database import SessionLocal
from models.product import Product
from schemas.product import ProductCreate ,ProductOut






router =APIRouter (
    prefix="/api/products",
    tags=["Products"]
)


def get_bd():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/",response_model=List[ProductOut])
def get_products(db:Session = Depends(get_bd)):
    return db.query(Product).all()


@router.post("/",response_model=ProductOut)
def create_product(
    product: ProductCreate,
    db: Session = Depends(get_bd)
):
    new_product = Product(
      **product.model_dump()

    )

    db.add(new_product)
    db.commit()
    db.refresh(new_product)

    return new_product