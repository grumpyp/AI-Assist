import uuid
from datetime import datetime

from database.db import db
from database.models.call.problem import Base


class Solution(Base):
    __tablename__ = "solution"
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    description = db.Column(db.Text)
    summary = db.Column(db.Text)
    type = db.Column(db.String(255))
    problem_id = db.Column(db.String(36), db.ForeignKey("problem.id"))
    problem = db.relationship("Problem", backref=db.backref("solutions", lazy=True))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
