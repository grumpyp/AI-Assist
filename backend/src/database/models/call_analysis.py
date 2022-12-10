import uuid
from database.db import db
from datetime import datetime
from database.models.users.user import Base


class CallAnalysis(Base):
    __tablename__ = "call_analysis"
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    call_id = db.Column(db.String(36), db.ForeignKey("call.id"))
    call = db.relationship("Call", backref=db.backref("analyses", lazy=True))
    sentiment = db.Column(db.Float)
    keywords = db.Column(db.JSON)
    entities = db.Column(db.JSON)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
