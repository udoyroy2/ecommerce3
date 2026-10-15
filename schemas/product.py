from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class ProductCreate(BaseModel):
    name : str
    description:Optional[str] =None
    price: float
    old_price:Optional[float] =None
    category:str
    sub_category:Optional[str]=None
    brand:Optional[str]=None
    sizes:Optional[str]=None
    colour:Optional[str]=None
    stock: int = 0
    image:Optional[str]=None

class ProductOut(ProductCreate):
    id: int
    create_at: Optional[datetime] = None