import uuid
from datetime import datetime

from models import db


class Solution(db.Model):
    id = db.Column(db.UUID, primary_key=True, default=uuid.uuid4)
    description = db.Column(db.String(255))
    problem_id = db.Column(db.UUID, db.ForeignKey("problem.id"))
    problem = db.relationship("Problem", backref=db.backref("solutions", lazy=True))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

