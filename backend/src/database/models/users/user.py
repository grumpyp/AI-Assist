import uuid
from abc import abstractmethod
from datetime import datetime

from sqlalchemy.orm import declarative_base

from database.db import db

# declarative base class
Base = declarative_base()


class User(Base):
    __tablename__ = "user"

    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(255))
    contact_info = db.Column(db.String(255))
    role = db.Column(db.Enum("employee", "manager", "leader"))
    profile_picture = db.Column(db.LargeBinary)
    description = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
    calls = db.relationship("Call", backref=db.backref("employee_call", lazy=True))

    @abstractmethod
    def get_performance_metrics(self):
        pass


class Employee(User):
    __tablename__ = "employee"
    employee_id = db.Column(db.String(36), db.ForeignKey("user.id"), primary_key=True)
    team_id = db.Column(db.String(36), db.ForeignKey("team.id"))
    team = db.relationship("Team", backref=db.backref("employees_in_team", lazy=True))
    performance_metrics = db.relationship(
        "EmployeePerformanceMetrics", backref=db.backref("employee_performance", lazy=True)
    )

    def get_performance_metrics(self):
        return self.performance_metrics


class Manager(User):
    __tablename__ = "manager"
    manager_id = db.Column(db.String(36), db.ForeignKey("user.id"), primary_key=True)
    team_id = db.Column(db.String(36), db.ForeignKey("team.id"))
    team = db.relationship("Team", backref=db.backref("manager", lazy=True))
    manager_performance_metrics = db.relationship(
        "ManagerPerformanceMetrics", backref=db.backref("manager", lazy=True)
    )

    def get_performance_metrics(self):
        return self.performance_metrics


class Leader(User):
    __tablename__ = "leader"
    leader_id = db.Column(db.String(36), db.ForeignKey("user.id"), primary_key=True)
    teams = db.relationship("Team", backref=db.backref("leader", lazy=True))

    def get_performance_metrics(self):
        return {}


class EmployeePerformanceMetrics(Base):
    __tablename__ = "employee_performance_metrics"
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    employee_id = db.Column(db.String(36), db.ForeignKey("employee.id"))
    employee = db.relationship("Employee", backref="employee_performance_metrics")
    calls_handled = db.Column(db.Integer)
    average_call_length = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)


class ManagerPerformanceMetrics(Base):
    __tablename__ = "manager_performance_metrics"
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    team_id = db.Column(db.String(36), db.ForeignKey("team.id"))
    team = db.relationship("Team", backref=db.backref("manager_performance_metrics", lazy=True))
    average_call_length_per_problem_type = db.Column(db.Integer)
    call_workload = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
