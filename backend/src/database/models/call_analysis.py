import uuid
from datetime import datetime

from database.db import db


class CallAnalysis(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    call_id = db.Column(db.String(36), db.ForeignKey("call.id"))
    call = db.relationship("Call", back_populates="call_analysis", lazy=True)
    sentiment = db.Column(db.Float)
    keywords = db.Column(db.JSON)
    entities = db.Column(db.JSON)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
