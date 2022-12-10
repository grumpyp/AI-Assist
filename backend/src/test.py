from database.db import db
from database.models.call import Call, Problem, Solution, Recording
from database.models.call_analysis import CallAnalysis
from database.models.customer import Customer
from database.models.employees.leader import Leader, LeaderPerformanceMetrics
from database.models.employees.manager import Manager, ManagerPerformanceMetrics
from database.models.employees.team import Team, TeamPerformanceMetrics
from database.models.employees.worker import Worker, WorkerPerformanceMetrics
from database.models.queueing_theory_model import QueueingTheoryModel, QueueingTheoryBestMatch


def insert_sample_data():
    customer = Customer(
        name="Jane Doe",
        contact_info="jane.doe@gmail.com",
        account_number="123456",
        preferences={"sms": True},
        location="San Francisco, CA",
        satisfaction_rating=4,
    )
    db.session.add(customer)

    call = Call(
        customer_id=customer.id,
        customer=customer,
        problems=[Problem(
            type="Billing issue",
            long_description="Customer has a billing issue with their recent purchase of an iphone at company X",
            summary="Billing issue with recent purchase",
            category="Billing",
        )],
        solutions=[
            Solution(description="Issue resolved by providing refund for the purchase", summary="Refund provided",
                     type="Refund")],
        recordings=[
            Recording(
                duration=120,
                recording=b"binary_recording_data",
                transcription="Transcription of the recording.",
                summary="Summary of the recording",
            )
        ],
        language="English",
        feedback="Great customer service",
        callback_requested=False,
        transfer_requested=False,
        voicemail_left=False,
        transcript_requested=False,
        status="completed",
    )
    db.session.add(call)

    call_analysis = CallAnalysis(
        sentiment=0.8,
        keywords={
            'keywords': ['refund', 'purchase', 'issue', 'billing']
        },
        entities={'company': ['company X'], 'product': ['iphone']}
    )
    call.call_analysis = call_analysis
    db.session.add(call_analysis)

    queueing_theory_model = QueueingTheoryModel(call_analysis_id=call_analysis.id, best_matches=[],
                                                call_analysis=call_analysis)
    db.session.add(queueing_theory_model)

    queueing_theory_best_match = QueueingTheoryBestMatch(queueing_theory_model_id=queueing_theory_model.id,
                                                         matched_employees=[
                                                         ])
    db.session.add(queueing_theory_best_match)

    worker1 = Worker(name="John Doe", contact_info="john.doe@example.com", description="John is a great worker")
    worker2 = Worker(name="Jane Doe", contact_info="jane.doe@example.com", description="Jane is a great worker")
    manager1 = Manager(name="Bob Smith", contact_info="bob.smith@example.com", description="Bob is a great manager")
    leader1 = Leader(name="Alice Jones", contact_info="alice.jones@example.com", description="Alice is a great leader")
    db.session.add(worker1)
    db.session.add(worker2)
    db.session.add(manager1)
    db.session.add(leader1)

    team1 = Team(name="Customer Support", managers=[manager1], employees=[worker1, worker2])
    db.session.add(team1)

    worker1_performance = WorkerPerformanceMetrics(employee_id=worker1.id, calls_handled=10, average_call_length=120)
    worker2_performance = WorkerPerformanceMetrics(employee_id=worker2.id, calls_handled=20, average_call_length=150)
    db.session.add(worker1_performance)
    db.session.add(worker2_performance)

    team1_performance = TeamPerformanceMetrics(team_id=team1.id, average_call_length=135, call_workload=30)

    db.session.add(team1_performance)

    manager1_performance = ManagerPerformanceMetrics(
        manager_id=manager1.id,
        average_call_length_per_problem_type=120,
        call_workload=50
    )

    db.session.add(manager1_performance)

    leader1_performance = LeaderPerformanceMetrics(leader_id=leader1.id)
    db.session.add(leader1_performance)

    queueing_theory_model.best_matches.append(queueing_theory_best_match)
    queueing_theory_best_match.matched_employees.append(worker1, worker2)
    db.session.commit()
    print(Call.query.all())
