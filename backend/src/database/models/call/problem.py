import uuid
from datetime import datetime

from models import db


class Problem(db.Model):
    id = db.Column(db.UUID, primary_key=True, default=uuid.uuid4)
    type = db.Column(db.String(255))
    long_description = db.Column(db.String(255))
    summary = db.Column(db.String(255))
    category = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
