import uuid
from datetime import datetime

from database.db import db


class CallAnalysis(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    call_id = db.Column(db.String(36), db.ForeignKey("call.id"), nullable=True)
    call = db.relationship("Call", lazy=True, viewonly=True)
    sentiment = db.Column(db.Float)
    keywords = db.Column(db.JSON)
    entities = db.Column(db.JSON)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
