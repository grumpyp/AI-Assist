import uuid
from datetime import datetime

from database.db import db
from database.models.employees.employee import employee_call


class Call(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    customer_id = db.Column(db.String(36), db.ForeignKey("customer.id"))
    customer = db.relationship("Customer", lazy=True)
    problem = db.relationship("Problem", lazy=True)
    solutions = db.relationship("Solution", lazy=True)
    recordings = db.relationship("Recording", lazy=True)
    employees = db.relationship("Employee", secondary=employee_call)
    call_analysis = db.relationship("CallAnalysis", lazy=True)
    language = db.Column(db.String(255))
    feedback = db.Column(db.Text)
    callback_requested = db.Column(db.Boolean)
    transfer_requested = db.Column(db.Boolean)
    voicemail_left = db.Column(db.Boolean)
    transcript_requested = db.Column(db.Boolean)
    status = db.Column(db.Enum("in progress", "answered", "completed"))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)


class Solution(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    call_id = db.Column(db.String(36), db.ForeignKey("call.id"))
    description = db.Column(db.Text)
    summary = db.Column(db.Text)
    type = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)


class Problem(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    call_id = db.Column(db.String(36), db.ForeignKey("call.id"))
    type = db.Column(db.String(255))
    long_description = db.Column(db.String(255))
    summary = db.Column(db.String(255))
    category = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)


class Recording(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=uuid.uuid4)
    call_id = db.Column(db.String(36), db.ForeignKey("call.id"))
    duration = db.Column(db.Integer)
    recording = db.Column(db.LargeBinary)
    transcription = db.Column(db.Text)
    summary = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
