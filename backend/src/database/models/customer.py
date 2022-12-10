import uuid
from datetime import datetime

from database.db import db


class Customer(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(255))
    contact_info = db.Column(db.String(255))
    account_number = db.Column(db.String(255))
    preferences = db.Column(db.JSON)
    location = db.Column(db.String(255))
    calls = db.relationship("Call", lazy=True)
    satisfaction_rating = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
