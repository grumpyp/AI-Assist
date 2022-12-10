import uuid
from backend.src.database.db import db
from datetime import datetime


class QueueingTheoryModel(db.Model):
    id = db.Column(db.UUID, primary_key=True, default=uuid.uuid4)
    call_analysis_id = db.Column(db.UUID, db.ForeignKey("call_analysis.id"))
    call_analysis = db.relationship("CallAnalysis", backref=db.backref("queueing_theory_models", lazy=True))
    best_matches = db.relationship("User", secondary="queueing_theory_model_best_matches")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)


class QueueingTheoryBestMatch(db.Model):
    id = db.Column(db.UUID, primary_key=True, default=uuid.uuid4)
    queueing_theory_model_id = db.Column(db.UUID, db.ForeignKey("queueing_theory_model.id"))
    number_of_employees = db.Column(db.Integer)
    user_id = db.Column(db.UUID, db.ForeignKey("user.id"), primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
