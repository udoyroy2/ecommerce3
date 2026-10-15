from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base



url = "postgresql+psycopg://postgres:12345PostgreSQL@localhost:5432/ecom"


eng = create_engine(url)


SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=eng
)


Base = declarative_base()

try : 
    with eng.connect() as connection:
        print("connected successfully")
except Exception as e:
    print("failed")
    print(e)