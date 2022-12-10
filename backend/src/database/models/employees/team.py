import uuid
from datetime import datetime

from database.db import db
from database.models.employees.employee import employee_team


class Team(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(255))
    managers = db.relationship("Manager", secondary=employee_team, lazy=True, back_populates="teams")
    employees = db.relationship("Employee", secondary=employee_team, lazy=True, back_populates="teams")
    performance_metrics = db.relationship("TeamPerformanceMetrics")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)


class TeamPerformanceMetrics(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    team_id = db.Column(db.String(36), db.ForeignKey("team.id"))
    team = db.relationship("Team", lazy=True, back_populates="performance_metrics")
    average_call_length = db.Column(db.Integer)
    call_workload = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
