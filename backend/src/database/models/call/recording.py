import uuid
from datetime import datetime

from models import db


class Recording(db.Model):
    id = db.Column(db.UUID, primary_key=True, default=uuid.uuid4)
    duration = db.Column(db.Integer)
    recording = db.Column(db.LargeBinary)
    transcription = db.Column(db.Text)
    summary = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

