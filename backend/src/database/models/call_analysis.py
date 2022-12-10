import uuid
from database.db import db
from datetime import datetime


class CallAnalysis(db.Model):
    id = db.Column(db.UUID, primary_key=True, default=uuid.uuid4)
    call_id = db.Column(db.UUID, db.ForeignKey("call.id"))
    call = db.relationship("Call", backref=db.backref("analyses", lazy=True))
    sentiment = db.Column(db.Float)
    keywords = db.Column(db.JSON)
    entities = db.Column(db.JSON)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
