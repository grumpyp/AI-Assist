import uuid
from datetime import datetime
from database.db import db
from database.models.users.user import Base


class Call(Base):
    __tablename__ = "call"
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    customer_id = db.Column(db.String(36), db.ForeignKey("customer.id"))
    customer = db.relationship("Customer", backref=db.backref("calls", lazy=True))
    problem_id = db.Column(db.String(36), db.ForeignKey("problem.id"))
    problem = db.relationship("Problem", backref=db.backref("calls", lazy=True))
    recording_id = db.Column(db.String(36), db.ForeignKey("recording.id"))
    recording = db.relationship("Recording", backref=db.backref("calls", lazy=True))
    language = db.Column(db.String(255))
    feedback = db.Column(db.Text)
    callback_requested = db.Column(db.Boolean)
    transfer_requested = db.Column(db.Boolean)
    voicemail_left = db.Column(db.Boolean)
    transcript_requested = db.Column(db.Boolean)
    status = db.Column(db.Enum("in progress", "answered", "completed"))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
