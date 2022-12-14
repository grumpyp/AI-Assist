import uuid
from datetime import datetime

from database.db import db


class Customer(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = db.Column(db.String(255))
    contact_info = db.Column(db.String(255))
    account_number = db.Column(db.String(255))
    preferences = db.Column(db.JSON)
    location = db.Column(db.String(255))
    calls = db.relationship("Call", lazy=True, viewonly=True)
    satisfaction_rating = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        call_dict = {}
        for attr in self.__dict__:
            if not attr.startswith("_") and attr != "calls":
                call_dict[attr] = getattr(self, attr)
            elif attr == "calls":
                continue
        return call_dict