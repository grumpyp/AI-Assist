import uuid
from datetime import datetime
import json
from database.db import db
from database.models.employees.employee import employee_call


class Call(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    customer_id = db.Column(db.String(36), db.ForeignKey("customer.id"))
    customer = db.relationship("Customer", lazy=True, viewonly=False)
    problems = db.relationship("Problem", lazy=False)
    solutions = db.relationship("Solution", lazy=False)
    recordings = db.relationship("Recording", lazy=False)
    employees = db.relationship("Employee", secondary=employee_call, viewonly=True)
    call_analysis = db.relationship("CallAnalysis", lazy=True, viewonly=True, uselist=False)
    language = db.Column(db.String(255))
    feedback = db.Column(db.Text, nullable=True)
    callback_requested = db.Column(db.Boolean)
    transfer_requested = db.Column(db.Boolean)
    voicemail_left = db.Column(db.Boolean)
    transcript_requested = db.Column(db.Boolean)
    status = db.Column(db.Enum("in progress", "answered", "completed"))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
    faqs = db.relationship("Faq", lazy=False)
    #TODO: add to_dict to all other models e.g. Problems, Faqs,..
    def to_dict(self):
        call_dict = {}
        for attr in self.__dict__:
            if not attr.startswith("_"):
                call_dict[attr] = getattr(self, attr)
            # TODO: make that nice :D
            if attr == "faqs":
                faqs = []
                for faq in self.faqs:
                    faqs.append(faq.to_dict())
                call_dict["faqs"] = faqs
            if attr == "customer":
                customer = []
                for cus in self.customer:
                    customer.append(cus.to_dict())
                call_dict["customer"] = customer
            if attr == "problems":
                problems = []
                for prob in self.problems:
                    problems.append(prob.to_dict())
                call_dict["problems"] = problems
            if attr == "solutions":
                solutions = []
                for sol in self.solutions:
                    solutions.append(sol.to_dict())
                call_dict["solutions"] = solutions
            if attr == "recordings":
                recordings = []
                for rec in self.recordings:
                    recordings.append(rec.to_dict())
                call_dict["recordings"] = recordings
        return call_dict

    def save(self):
        db.session.add(self)
        db.session.commit()


class Solution(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    call_id = db.Column(db.String(36), db.ForeignKey("call.id"), nullable=True)
    description = db.Column(db.Text)
    summary = db.Column(db.Text)
    type = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
    def to_dict(self):
        call_dict = {}
        for attr in self.__dict__:
            if not attr.startswith("_"):
                call_dict[attr] = getattr(self, attr)
        return call_dict


class Problem(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    call_id = db.Column(db.String(36), db.ForeignKey("call.id"), nullable=True)
    type = db.Column(db.String(255), nullable=True)
    long_description = db.Column(db.String(255))
    summary = db.Column(db.String(255))
    category = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        call_dict = {}
        for attr in self.__dict__:
            if not attr.startswith("_"):
                call_dict[attr] = getattr(self, attr)
        return call_dict


class Recording(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    call_id = db.Column(db.String(36), db.ForeignKey("call.id"), nullable=True)
    duration = db.Column(db.Integer)
    recording = db.Column(db.LargeBinary)
    transcription = db.Column(db.Text)
    summary = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
    url = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        call_dict = {}
        for attr in self.__dict__:
            if not attr.startswith("_") and attr != "recording":
                call_dict[attr] = getattr(self, attr)
            elif attr == "recording":
                continue
        return call_dict
