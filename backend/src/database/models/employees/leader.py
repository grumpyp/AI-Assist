import uuid
from datetime import datetime

from database.db import db
from database.models.employees.employee import Employee


class Leader(Employee):
    leader_performance_metrics = db.relationship("LeaderPerformanceMetrics", lazy=True)

    def get_performance_metrics(self):
        return {}


class LeaderPerformanceMetrics(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    leader_id = db.Column(db.String(36), db.ForeignKey("employee.id"))
    leader = db.relationship("Leader", lazy=True, viewonly=True)
    ## TODO: Leader performance metrics.
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
