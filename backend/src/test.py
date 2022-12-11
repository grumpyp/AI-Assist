from database.db import db
from database.models.call import Call, Problem, Solution, Recording
from database.models.call_analysis import CallAnalysis
from database.models.customer import Customer
from database.models.employees.leader import Leader, LeaderPerformanceMetrics
from database.models.employees.manager import Manager, ManagerPerformanceMetrics
from database.models.employees.team import Team, TeamPerformanceMetrics
from database.models.employees.worker import Worker, WorkerPerformanceMetrics
from database.models.queueing_theory_model import QueueingTheoryModel, QueueingTheoryBestMatch
from database.models.faq import Faq


def insert_sample_data():
    _examples = [("My Iphone can't open the software", "Iphone software", "Please update your software"),
                 ("I installed your software, now my Iphone isn't working properly anymore", "Iphone software",
                  "Please update your software"),
                 ("How can I download your software for my Iphone?", "Iphone software", "Please update your software"),
                 ("The software is super buggy on my Macbook", "Computer software", "Please update your software"),
                 ("My computer is super slow could it be because of your fucking app?", "Computer software",
                  "Please update your software")]

    for i in _examples:
        faq = Faq(question=i[0], answer=i[2], buzzword=i[1])
        faq.save()

    customer = Customer(
        name="Jane Doe",
        contact_info="jane.doe@gmail.com",
        account_number="123456789",
        preferences={"sms": True},
        location="San Francisco, CA",
        satisfaction_rating=4,
    )
    db.session.add(customer)
    customer = Customer(
        name="JPatrick Gerard",
        contact_info="p.g@gmail.com",
        account_number="1234",
        preferences={"sms": False},
        location="San Diego, CA",
        satisfaction_rating=6,
    )
    db.session.add(customer)
    customer = Customer(
        name="Jochen Schweizer",
        contact_info="jochen.schweizer@gmail.com",
        account_number="123456",
        preferences={"sms": False},
        location="New York",
        satisfaction_rating=2,
    )
    db.session.add(customer)
    call = Call(
        customer_id=customer.id,
        customer=customer,
        sentiment=0.4,
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
                url="https://hackathon.content-baer.de/examplecall2.m4a"
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

    call = Call(
        customer_id=customer.id,
        customer=customer,
        sentiment=0.7,
        problems=[Problem(
            type="Software issue",
            long_description="It doesn't work to upload my software on the phone",
            summary="Upade on phone doesn't work",
            category="Software",
        )],
        solutions=[
            Solution(description="Issue resolved by providing refund for the purchase", summary="Refund provided",
                     type="Refund")],
        recordings=[
            Recording(
                duration=20,
                recording=b"binary_recording_data",
                transcription="Mock",
                summary="Update on phone is broken",
                url="https://hackathon.content-baer.de/examplecall2.m4a"
            )
        ],
        language="English",
        feedback="",
        callback_requested=False,
        transfer_requested=False,
        voicemail_left=False,
        transcript_requested=False,
        status="in progress",
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

def patrick():
    from backend.src.processing.assemblyAI.fileupload import upload_file
    from backend.src.processing.assemblyAI.summarize import AssemblyAI
    filepath = "/Users/patrickgerard/Documents/Programmierung/-50k-AI-Hackathon/backend/src/examplecall3.m4a"
    file = upload_file("/Users/patrickgerard/Documents/Programmierung/-50k-AI-Hackathon/backend/src/example.m4a")
    with open(filepath, 'rb') as f:
        audio_data = f.read()
    req = AssemblyAI.summarize(file)


    # use if you debug
    # req = {'id': 'r7iloo0xy5-a9b7-45f6-bc95-c5cbb1bb78fa', 'language_model': 'assemblyai_default', 'acoustic_model': 'assemblyai_default', 'language_code': 'en_us', 'status': 'completed', 'audio_url': 'https://hackathon.content-baer.de/examplecall2.m4a', 'text': "Hello, P. M. Speaking. I am using a Windows computer. I'm using Windows XP, and I would like to do the upgrade, but apparently it's not available for Windows yet. Would you please let me know if you can do something? By the way, my customer ID is 123-45-6789.", 'words': [{'text': 'Hello,', 'start': 810, 'end': 1360, 'confidence': 0.99214, 'speaker': None}, {'text': 'P.', 'start': 2930, 'end': 3390, 'confidence': 0.98, 'speaker': None}, {'text': 'M.', 'start': 3460, 'end': 3838, 'confidence': 0.45, 'speaker': None}, {'text': 'Speaking.', 'start': 3924, 'end': 4560, 'confidence': 0.99824, 'speaker': None}, {'text': 'I', 'start': 5730, 'end': 6094, 'confidence': 0.59, 'speaker': None}, {'text': 'am', 'start': 6132, 'end': 6382, 'confidence': 0.75, 'speaker': None}, {'text': 'using', 'start': 6436, 'end': 6846, 'confidence': 0.99987, 'speaker': None}, {'text': 'a', 'start': 6948, 'end': 7646, 'confidence': 0.98, 'speaker': None}, {'text': 'Windows', 'start': 7828, 'end': 8506, 'confidence': 0.73409, 'speaker': None}, {'text': 'computer.', 'start': 8618, 'end': 9280, 'confidence': 0.99977, 'speaker': None}, {'text': "I'm", 'start': 9650, 'end': 10154, 'confidence': 0.77611, 'speaker': None}, {'text': 'using', 'start': 10202, 'end': 10510, 'confidence': 0.9998, 'speaker': None}, {'text': 'Windows', 'start': 10580, 'end': 11146, 'confidence': 0.96431, 'speaker': None}, {'text': 'XP,', 'start': 11258, 'end': 12026, 'confidence': 0.93864, 'speaker': None}, {'text': 'and', 'start': 12138, 'end': 12798, 'confidence': 0.97, 'speaker': None}, {'text': 'I', 'start': 12964, 'end': 13294, 'confidence': 0.99, 'speaker': None}, {'text': 'would', 'start': 13332, 'end': 13534, 'confidence': 0.99692, 'speaker': None}, {'text': 'like', 'start': 13572, 'end': 13822, 'confidence': 0.93799, 'speaker': None}, {'text': 'to', 'start': 13876, 'end': 14094, 'confidence': 1.0, 'speaker': None}, {'text': 'do', 'start': 14132, 'end': 14334, 'confidence': 0.99667, 'speaker': None}, {'text': 'the', 'start': 14372, 'end': 14574, 'confidence': 0.99, 'speaker': None}, {'text': 'upgrade,', 'start': 14612, 'end': 15114, 'confidence': 0.98705, 'speaker': None}, {'text': 'but', 'start': 15162, 'end': 15662, 'confidence': 0.99387, 'speaker': None}, {'text': 'apparently', 'start': 15796, 'end': 16570, 'confidence': 0.69776, 'speaker': None}, {'text': "it's", 'start': 16650, 'end': 16906, 'confidence': 0.56355, 'speaker': None}, {'text': 'not', 'start': 16938, 'end': 17134, 'confidence': 0.9996, 'speaker': None}, {'text': 'available', 'start': 17172, 'end': 17566, 'confidence': 0.99967, 'speaker': None}, {'text': 'for', 'start': 17668, 'end': 17982, 'confidence': 0.99826, 'speaker': None}, {'text': 'Windows', 'start': 18036, 'end': 18490, 'confidence': 0.99777, 'speaker': None}, {'text': 'yet.', 'start': 18570, 'end': 19200, 'confidence': 0.99858, 'speaker': None}, {'text': 'Would', 'start': 19650, 'end': 20014, 'confidence': 0.99439, 'speaker': None}, {'text': 'you', 'start': 20052, 'end': 20302, 'confidence': 0.99923, 'speaker': None}, {'text': 'please', 'start': 20356, 'end': 20862, 'confidence': 0.95338, 'speaker': None}, {'text': 'let', 'start': 20996, 'end': 21246, 'confidence': 0.99927, 'speaker': None}, {'text': 'me', 'start': 21268, 'end': 21454, 'confidence': 0.83781, 'speaker': None}, {'text': 'know', 'start': 21492, 'end': 21838, 'confidence': 0.95796, 'speaker': None}, {'text': 'if', 'start': 21924, 'end': 22174, 'confidence': 0.58664, 'speaker': None}, {'text': 'you', 'start': 22212, 'end': 22414, 'confidence': 0.76619, 'speaker': None}, {'text': 'can', 'start': 22452, 'end': 22750, 'confidence': 0.99817, 'speaker': None}, {'text': 'do', 'start': 22820, 'end': 23150, 'confidence': 0.99812, 'speaker': None}, {'text': 'something?', 'start': 23220, 'end': 23840, 'confidence': 0.99901, 'speaker': None}, {'text': 'By', 'start': 24970, 'end': 25286, 'confidence': 0.99181, 'speaker': None}, {'text': 'the', 'start': 25308, 'end': 25446, 'confidence': 0.97, 'speaker': None}, {'text': 'way,', 'start': 25468, 'end': 25654, 'confidence': 0.99998, 'speaker': None}, {'text': 'my', 'start': 25692, 'end': 26230, 'confidence': 0.99803, 'speaker': None}, {'text': 'customer', 'start': 26380, 'end': 26838, 'confidence': 0.99719, 'speaker': None}, {'text': 'ID', 'start': 26924, 'end': 27222, 'confidence': 0.99695, 'speaker': None}, {'text': 'is', 'start': 27276, 'end': 27590, 'confidence': 0.83, 'speaker': None}, {'text': '123-45-6789.', 'start': 27660, 'end': 30420, 'confidence': 0.97, 'speaker': None}], 'utterances': None, 'confidence': 0.92071, 'audio_duration': 32, 'punctuate': True, 'format_text': True, 'dual_channel': None, 'webhook_url': None, 'webhook_status_code': None, 'webhook_auth': False, 'webhook_auth_header_name': None, 'speed_boost': False, 'auto_highlights_result': {'status': 'success', 'results': [{'count': 1, 'rank': 0.16, 'text': 'Windows XP', 'timestamps': [{'start': 10580, 'end': 12026}]}, {'count': 3, 'rank': 0.15, 'text': 'Windows', 'timestamps': [{'start': 7828, 'end': 8506}, {'start': 10580, 'end': 11146}, {'start': 18036, 'end': 18490}]}, {'count': 1, 'rank': 0.1, 'text': 'Windows computer', 'timestamps': [{'start': 7828, 'end': 9280}]}, {'count': 1, 'rank': 0.09, 'text': 'customer ID', 'timestamps': [{'start': 26380, 'end': 27222}]}, {'count': 1, 'rank': 0.05, 'text': 'way', 'timestamps': [{'start': 25468, 'end': 25654}]}, {'count': 1, 'rank': 0.02, 'text': 'upgrade', 'timestamps': [{'start': 14612, 'end': 15114}]}]}, 'auto_highlights': True, 'audio_start_from': None, 'audio_end_at': None, 'word_boost': [], 'boost_param': None, 'filter_profanity': False, 'redact_pii': False, 'redact_pii_audio': False, 'redact_pii_audio_quality': None, 'redact_pii_policies': None, 'redact_pii_sub': None, 'speaker_labels': False, 'content_safety': False, 'iab_categories': True, 'content_safety_labels': {'status': 'unavailable', 'results': [], 'summary': {}}, 'iab_categories_result': {'status': 'success', 'results': [{'text': "Hello, P. M. Speaking. I am using a Windows computer. I'm using Windows XP, and I would like to do the upgrade, but apparently it's not available for Windows yet. Would you please let me know if you can do something? By the way, my customer ID is 123-45-6789.", 'labels': [{'relevance': 0.20089641213417053, 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>OperatingSystems'}, {'relevance': 0.1153131052851677, 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>AntivirusSoftware'}, {'relevance': 0.008024100214242935, 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>SharewareAndFreeware'}, {'relevance': 0.004599167499691248, 'label': 'Technology&Computing>Computing>Desktops'}, {'relevance': 0.0021886888425797224, 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications'}, {'relevance': 0.0021150661632418633, 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>DesktopPublishing'}, {'relevance': 0.001814601244404912, 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>Browsers'}, {'relevance': 0.0009474316611886024, 'label': 'VideoGaming>PCGames'}, {'relevance': 0.0007696724496781826, 'label': 'Technology&Computing>Computing>Internet>WebDevelopment'}, {'relevance': 0.00047104438999667764, 'label': 'Technology&Computing>Computing>Internet>WebHosting'}], 'timestamp': {'start': 810, 'end': 30420}}], 'summary': {'Technology&Computing>Computing>ComputerSoftwareAndApplications>OperatingSystems': 1.0, 'Technology&Computing>Computing>ComputerSoftwareAndApplications>AntivirusSoftware': 0.5739928483963013, 'Technology&Computing>Computing>ComputerSoftwareAndApplications>SharewareAndFreeware': 0.03994148224592209, 'Technology&Computing>Computing>Desktops': 0.022893229499459267, 'Technology&Computing>Computing>ComputerSoftwareAndApplications': 0.010894614271819592, 'Technology&Computing>Computing>ComputerSoftwareAndApplications>DesktopPublishing': 0.010528143495321274, 'Technology&Computing>Computing>ComputerSoftwareAndApplications>Browsers': 0.009032522328197956, 'VideoGaming>PCGames': 0.004716021008789539, 'Technology&Computing>Computing>Internet>WebDevelopment': 0.003831190522760153, 'Technology&Computing>Computing>Internet>WebHosting': 0.002344712847843766, 'Technology&Computing>Computing>InformationAndNetworkSecurity': 0.002118295058608055, 'Technology&Computing>Computing>Internet>WebDesignAndHTML': 0.002024369779974222, 'Technology&Computing>Computing>Laptops': 0.0018976697465404868, 'Technology&Computing>Computing>Internet>ITAndInternetSupport': 0.0017374197486788034, 'Automotive>AutoType': 0.0015606568194925785, 'Technology&Computing>Computing>ProgrammingLanguages': 0.0013351456727832556, 'Technology&Computing>ConsumerElectronics>Smartphones': 0.0013043904909864068, "HealthyLiving>Women'sHealth": 0.001111925463192165, 'BusinessAndFinance>Business>BusinessI.T.': 0.0011074099456891418, 'Technology&Computing>Computing>ComputerSoftwareAndApplications>WebConferencing': 0.0010829668026417494}}, 'language_detection': False, 'custom_spelling': None, 'cluster_id': None, 'throttled': None, 'auto_chapters': False, 'summarization': True, 'summary_type': 'bullets', 'summary_model': 'informative', 'disfluencies': False, 'sentiment_analysis': True, 'chapters': None, 'sentiment_analysis_results': [{'text': 'Hello, P.', 'start': 810, 'end': 3390, 'sentiment': 'NEUTRAL', 'confidence': 0.6143978238105774, 'speaker': None}, {'text': 'M.', 'start': 3460, 'end': 3838, 'sentiment': 'NEUTRAL', 'confidence': 0.5391430854797363, 'speaker': None}, {'text': 'Speaking.', 'start': 3924, 'end': 4560, 'sentiment': 'NEUTRAL', 'confidence': 0.6293189525604248, 'speaker': None}, {'text': 'I am using a Windows computer.', 'start': 5730, 'end': 9280, 'sentiment': 'NEUTRAL', 'confidence': 0.8140189051628113, 'speaker': None}, {'text': "I'm using Windows XP, and I would like to do the upgrade, but apparently it's not available for Windows yet.", 'start': 9650, 'end': 19200, 'sentiment': 'NEGATIVE', 'confidence': 0.6000553369522095, 'speaker': None}, {'text': 'Would you please let me know if you can do something?', 'start': 19650, 'end': 23840, 'sentiment': 'NEUTRAL', 'confidence': 0.8829253911972046, 'speaker': None}, {'text': 'By the way, my customer ID is 123-45-6789.', 'start': 24970, 'end': 30420, 'sentiment': 'NEUTRAL', 'confidence': 0.8573530316352844, 'speaker': None}], 'entity_detection': True, 'entities': [{'entity_type': 'person_name', 'text': 'P. M', 'start': 2930, 'end': 3838}], 'summary': "- I'm using Windows XP, and I would like to do the upgrade. Apparently it's not available for Windows yet. Would you please let me know if you can do something? By the way, my customer ID is 123-45-6789."}
    process_call = AssemblyAI.serialize_summary(req)
    call = Call(customer_id=process_call.get('userid'),
                customer=Customer.query.filter_by(account_number=process_call.get('userid')).first(),
                problems=[Problem(type=None, long_description=process_call.get('text'), category=None,
                                  summary=process_call.get('summary'))],
                solutions=Solution.query.filter_by(summary=f'%{process_call.get("summary")}%').all(),
                recordings=[Recording(duration=process_call.get('audio_duration'), recording=audio_data,
                call_id=process_call.get('call_id'), url=file)], language=process_call.get('language_code'),
                callback_requested=process_call.get('callback_requested'), transfer_requested=False,
                voicemail_left=False, transcript_requested=False, status="in progress", faqs=process_call.get('faqs'),
                sentiment=process_call.get('sentiment'))
    db.session.add(call)
    db.session.commit()
    print(Call.query.all())
