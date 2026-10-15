from sqlalchemy import Column, DateTime , Integer , String, Float, Text
from sqlalchemy.sql import func


from database import Base


class Product (Base):
    __tablename__ = "products"

    id = Column(Integer,primary_key=True,index=True)

    name = Column(String,nullable=False)

    description = Column(Text,nullable=True)

    price = Column(Float,nullable=False)

    old_price = Column(
        Float,
        nullable=True
    )

    category = Column(String, nullable=False)

    sub_category = Column(String, nullable=True)

    brand = Column(String, nullable=True)
    sizes = Column(String, nullable=True)
    colour = Column(String,nullable=True)

    stock = Column(Integer,default=0)

    image = Column(String,nullable=True)

    create_at = Column( DateTime,  server_default = func.now()
    )