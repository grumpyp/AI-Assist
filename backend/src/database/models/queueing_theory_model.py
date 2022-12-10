import uuid
from datetime import datetime

from database.db import db
from database.models.employees.employee import employee_queueing_theory_best_match


class QueueingTheoryModel(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    call_analysis_id = db.Column(db.String(36), db.ForeignKey("call_analysis.id"))
    call_analysis = db.relationship("CallAnalysis", lazy=True)
    best_matches = db.relationship("QueueingTheoryBestMatch", lazy=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)


class QueueingTheoryBestMatch(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    queueing_theory_model_id = db.Column(db.String(36), db.ForeignKey("queueing_theory_model.id"))
    matched_employees = db.relationship("Employee", secondary=employee_queueing_theory_best_match, lazy=True,
                                        back_populates="queueing_theory_best_matches")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
