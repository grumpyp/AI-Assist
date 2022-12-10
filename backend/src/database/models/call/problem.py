import uuid
from datetime import datetime

from sqlalchemy.orm import declarative_base

from database.db import db

Base = declarative_base()


class Problem(Base):
    __tablename__ = "problem"
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    type = db.Column(db.String(255))
    long_description = db.Column(db.String(255))
    summary = db.Column(db.String(255))
    category = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
