import uuid
from datetime import datetime
from models import db

from backend.src.database.eventlisteners.common_eventlisteners import auto_update_at


class Customer(db.Model):
    id = db.Column(db.UUID, primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(255))
    contact_info = db.Column(db.String(255))
    account_number = db.Column(db.String(255))
    preferences = db.Column(db.JSON)
    location = db.Column(db.String(255))
    calls = db.relationship("Call", backref="customer")
    satisfaction_rating = db.Column(db.Integer)
    previous_solutions = db.Column(db.JSON)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)


auto_update_at(Customer)
