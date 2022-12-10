import uuid
from abc import ABC, abstractmethod
from datetime import datetime
from models import db


class User(db.Model, ABC):
    __abstract__ = True

    id = db.Column(db.UUID, primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(255))
    contact_info = db.Column(db.String(255))
    role = db.Column(db.Enum("employee", "manager", "leader"))
    profile_picture = db.Column(db.LargeBinary)
    description = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    @abstractmethod
    def get_performance_metrics(self):
        pass


class Employee(User):
    id = db.Column(db.UUID, db.ForeignKey("user.id"), primary_key=True)
    team_id = db.Column(db.UUID, db.ForeignKey("team.id"))
    team = db.relationship("Team", backref=db.backref("employees", lazy=True))
    performance_metrics = db.relationship(
        "PerformanceMetrics", backref=db.backref("employee", lazy=True)
    )
    calls = db.relationship("Call", backref=db.backref("employee", lazy=True))

    def get_performance_metrics(self):
        return self.performance_metrics


class Manager(User):
    id = db.Column(db.UUID, db.ForeignKey("user.id"), primary_key=True)
    team_id = db.Column(db.UUID, db.ForeignKey("team.id"))
    team = db.relationship("Team", backref=db.backref("manager", lazy=True))
    manager_performance_metrics = db.relationship(
        "ManagerPerformanceMetrics", backref=db.backref("manager", lazy=True)
    )

    def get_performance_metrics(self):
        return self.performance_metrics


class Leader(User):
    id = db.Column(db.UUID, db.ForeignKey("user.id"), primary_key=True)
    teams = db.relationship("Team", backref=db.backref("leader", lazy=True))

    def get_performance_metrics(self):
        return {}


class EmployeePerformanceMetrics(db.Model):
    id = db.Column(db.UUID, primary_key=True, default=uuid.uuid4)
    employee_id = db.Column(db.UUID, db.ForeignKey("user.id"))
    employee = db.relationship("User", backref="employee_performance_metrics")
    calls_handled = db.Column(db.Integer)
    average_call_length = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)


class ManagerPerformanceMetrics(db.Model):
    id = db.Column(db.UUID, primary_key=True, default=uuid.uuid4)
    team_id = db.Column(db.UUID, db.ForeignKey("team.id"))
    team = db.relationship("Team", backref=db.backref("manager_performance_metrics", lazy=True))
    average_call_length_per_problem_type = db.Column(db.Integer)
    call_workload = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
