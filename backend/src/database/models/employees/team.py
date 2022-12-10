import uuid
from datetime import datetime

from database.db import db
from database.models.employees.employee import employee_team


class Team(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = db.Column(db.String(255))
    managers = db.relationship("Manager", secondary=employee_team, lazy=True, viewonly=True)
    employees = db.relationship("Employee", secondary=employee_team, lazy=True, viewonly=True)
    performance_metrics = db.relationship("TeamPerformanceMetrics")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)


class TeamPerformanceMetrics(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    team_id = db.Column(db.String(36), db.ForeignKey("team.id"))
    team = db.relationship("Team", lazy=True, viewonly=True)
    average_call_length = db.Column(db.Integer)
    call_workload = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
