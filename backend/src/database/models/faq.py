import uuid
from datetime import datetime
from database.db import db


class Faq(db.Model):
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    question = db.Column(db.Text)
    answer = db.Column(db.Text)
    buzzword = db.Column(db.Text)
    call_id = db.Column(db.String(36), db.ForeignKey("call.id"), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    def save(self):
        db.session.add(self)
        db.session.commit()