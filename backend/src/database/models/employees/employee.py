import uuid
from abc import abstractmethod
from datetime import datetime

from database.db import db

employee_call = db.Table('employee_call',
                         db.Column('call_id', db.String(36), db.ForeignKey('call.id')),
                         db.Column('employee_id', db.String(36), db.ForeignKey('employee.id')))

employee_team = db.Table('employee_team',
                         db.Column('team_id', db.String(36), db.ForeignKey('team.id')),
                         db.Column('employee_id', db.String(36), db.ForeignKey('employee.id')))

employee_queueing_theory_best_match = db.Table('employee_queueing_theory_best_match',
                                               db.Column('queueing_theory_best_match:id', db.String(36),
                                                         db.ForeignKey('queueing_theory_best_match.id')),
                                               db.Column('employee_id', db.String(36), db.ForeignKey('employee.id')))


class Employee(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(255))
    contact_info = db.Column(db.String(255))
    role = db.Column(db.Enum("employee", "manager", "leader"))
    profile_picture = db.Column(db.LargeBinary)
    description = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
    calls = db.relationship("Call", secondary=employee_call)
    teams = db.relationship("Team", secondary=employee_team)
    queueing_theory_best_match = db.relationship("QueueingTheoryBestMatch",
                                                 secondary=employee_queueing_theory_best_match)

    @abstractmethod
    def get_performance_metrics(self):
        pass
