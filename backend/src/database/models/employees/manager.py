import uuid
from datetime import datetime

from database.db import db
from database.models.employees.employee import Employee


class Manager(Employee):
    manager_performance_metrics = db.relationship("ManagerPerformanceMetrics", lazy=True)

    def get_performance_metrics(self):
        return self.performance_metrics


class ManagerPerformanceMetrics(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    manager_id = db.Column(db.String(36), db.ForeignKey("employee.id"))
    manager = db.relationship("Manager", lazy=True, viewonly=True)
    average_call_length_per_problem_type = db.Column(db.Integer)
    call_workload = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
