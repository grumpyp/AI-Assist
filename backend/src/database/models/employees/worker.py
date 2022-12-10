import uuid
from datetime import datetime

from database.db import db
from database.models.employees.employee import Employee


class Worker(Employee):
    performance_metrics = db.relationship("WorkerPerformanceMetrics", lazy=True)

    def get_performance_metrics(self):
        return self.performance_metrics


class WorkerPerformanceMetrics(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    employee_id = db.Column(db.String(36), db.ForeignKey("employee.id"))
    employee = db.relationship("Employee")
    calls_handled = db.Column(db.Integer)
    average_call_length = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
