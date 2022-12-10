from src.database.db import db
import uuid
from src.database.models.call.call import Call
from src.database.models.call.problem import Problem
from src.database.models.call.recording import Recording
from src.database.models.call.solution import Solution
from src.database.models.call_analysis import CallAnalysis
from src.database.models.customer import Customer
from src.database.models.queueing_theory_model import QueueingTheoryModel, QueueingTheoryBestMatch
from src.database.models.users.team import Team, TeamPerformanceMetrics
from src.database.models.users.user import Employee, Manager, Leader, User, EmployeePerformanceMetrics


def insert_dummy_values():
    customer = Customer(name="Hans Müller", contact_info="hans.mueller@gmail.com", account_number="123456", preferences={}, location="Berlin")
    db.session.add(customer)

    problem = Problem(
        type="technical",
        long_description="Ich habe Probleme mit meinem Internetzugang.",
        summary="Internet funktioniert nicht",
        category="Internet"
    )
    db.session.add(problem)

    solution = Solution(
        type="technical",
        description="Super einfach, du musst nur den Router neu starten.",
        summary="Router neu starten",
        problem=problem
    )

    call = Call(customer=customer, problem_id=uuid.uuid4(), recording_id=uuid.uuid4(), language="de", feedback="", callback_requested=False, transfer_requested=False, voicemail_left=False, transcript_requested=False, status="completed")
    db.session.add(call)

    call_analysis = CallAnalysis(call=call, sentiment=0.5, keywords={}, entities={})
    db.session.add(call_analysis)

    queueing_theory_model = QueueingTheoryModel(call_analysis=call_analysis)
    db.session.add(queueing_theory_model)

    queueing_theory_best_match = QueueingTheoryBestMatch(queueing_theory_model=queueing_theory_model, number_of_employees=1, user_id=uuid.uuid4())
    db.session.add(queueing_theory_best_match)

    manager = Manager(name="Eva Schmidt", contact_info="eva.schmidt@gmail.com", role="manager", profile_picture=None, description="")
    db.session.add(manager)

    team = Team(name="Support Team Berlin", manager=manager)
    db.session.add(team)

    team_performance_metrics = TeamPerformanceMetrics(team=team, average_call_length=120, call_workload=10)
    db.session.add(team_performance_metrics)

    employee = Employee(name="Peter Parker", contact_info="peter.parker@gmail.com", role="employee", profile_picture=None, description="", team=team)
    db.session.add(employee)

    employee_performance_metrics = EmployeePerformanceMetrics(employee=employee, average_call_length=120, call_workload=5)
    db.session.add(employee_performance_metrics)

    db.session.commit()
