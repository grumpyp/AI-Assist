import uuid
from database.db import db
from datetime import datetime


class Team(db.Model):
    id = db.Column(db.UUID, primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(255))
    manager_id = db.Column(db.UUID, db.ForeignKey("manager.id"))
    manager = db.relationship("Manager", backref=db.backref("teams", lazy=True))
    employees = db.relationship("Employee", backref=db.backref("team", lazy=True))
    performance_metrics = db.relationship("TeamPerformanceMetrics", backref="team")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)


class TeamPerformanceMetrics(db.Model):
    id = db.Column(db.UUID, primary_key=True, default=uuid.uuid4)
    team_id = db.Column(db.UUID, db.ForeignKey("team.id"))
    average_call_length = db.Column(db.Integer)
    call_workload = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
