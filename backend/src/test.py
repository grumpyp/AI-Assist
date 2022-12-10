from backend.src.processing.assemblyAI.summarize import summarize, serialize_summary
from backend.src.processing.assemblyAI.fileupload import upload_file
from backend.src.database.models.call import Call

if __name__ == "__main__":
    # summarize()

    #file = upload_file("/Users/patrickgerard/Documents/Programmierung/-50k-AI-Hackathon/backend/src/examplecall2.m4a")
    #print(summarize(file))
    print(serialize_summary({'id': 'r7l92ktnnc-625f-47dd-810a-b6731c45f70e', 'language_model': 'assemblyai_default', 'acoustic_model': 'assemblyai_default', 'language_code': 'en_us', 'status': 'completed', 'audio_url': 'https://hackathon.content-baer.de/examplecall2.m4a', 'text': "Hello, P. M. Speaking. I am using a Windows computer. I'm using Windows XP, and I would like to do the upgrade, but apparently it's not available for Windows yet. Would you please let me know if you can do something? By the way, my customer ID is 123-45-6789.", 'words': [{'text': 'Hello,', 'start': 810, 'end': 1360, 'confidence': 0.99214, 'speaker': None}, {'text': 'P.', 'start': 2930, 'end': 3390, 'confidence': 0.98, 'speaker': None}, {'text': 'M.', 'start': 3460, 'end': 3838, 'confidence': 0.45, 'speaker': None}, {'text': 'Speaking.', 'start': 3924, 'end': 4560, 'confidence': 0.99824, 'speaker': None}, {'text': 'I', 'start': 5730, 'end': 6094, 'confidence': 0.59, 'speaker': None}, {'text': 'am', 'start': 6132, 'end': 6382, 'confidence': 0.75, 'speaker': None}, {'text': 'using', 'start': 6436, 'end': 6846, 'confidence': 0.99987, 'speaker': None}, {'text': 'a', 'start': 6948, 'end': 7646, 'confidence': 0.98, 'speaker': None}, {'text': 'Windows', 'start': 7828, 'end': 8506, 'confidence': 0.73408, 'speaker': None}, {'text': 'computer.', 'start': 8618, 'end': 9280, 'confidence': 0.99977, 'speaker': None}, {'text': "I'm", 'start': 9650, 'end': 10154, 'confidence': 0.77608, 'speaker': None}, {'text': 'using', 'start': 10202, 'end': 10510, 'confidence': 0.9998, 'speaker': None}, {'text': 'Windows', 'start': 10580, 'end': 11146, 'confidence': 0.96432, 'speaker': None}, {'text': 'XP,', 'start': 11258, 'end': 12026, 'confidence': 0.93864, 'speaker': None}, {'text': 'and', 'start': 12138, 'end': 12798, 'confidence': 0.97, 'speaker': None}, {'text': 'I', 'start': 12964, 'end': 13294, 'confidence': 0.99, 'speaker': None}, {'text': 'would', 'start': 13332, 'end': 13534, 'confidence': 0.99692, 'speaker': None}, {'text': 'like', 'start': 13572, 'end': 13822, 'confidence': 0.93799, 'speaker': None}, {'text': 'to', 'start': 13876, 'end': 14094, 'confidence': 1.0, 'speaker': None}, {'text': 'do', 'start': 14132, 'end': 14334, 'confidence': 0.99667, 'speaker': None}, {'text': 'the', 'start': 14372, 'end': 14574, 'confidence': 0.99, 'speaker': None}, {'text': 'upgrade,', 'start': 14612, 'end': 15114, 'confidence': 0.98705, 'speaker': None}, {'text': 'but', 'start': 15162, 'end': 15662, 'confidence': 0.99387, 'speaker': None}, {'text': 'apparently', 'start': 15796, 'end': 16570, 'confidence': 0.69776, 'speaker': None}, {'text': "it's", 'start': 16650, 'end': 16906, 'confidence': 0.56355, 'speaker': None}, {'text': 'not', 'start': 16938, 'end': 17134, 'confidence': 0.9996, 'speaker': None}, {'text': 'available', 'start': 17172, 'end': 17566, 'confidence': 0.99967, 'speaker': None}, {'text': 'for', 'start': 17668, 'end': 17982, 'confidence': 0.99826, 'speaker': None}, {'text': 'Windows', 'start': 18036, 'end': 18490, 'confidence': 0.99777, 'speaker': None}, {'text': 'yet.', 'start': 18570, 'end': 19200, 'confidence': 0.99858, 'speaker': None}, {'text': 'Would', 'start': 19650, 'end': 20014, 'confidence': 0.99439, 'speaker': None}, {'text': 'you', 'start': 20052, 'end': 20302, 'confidence': 0.99923, 'speaker': None}, {'text': 'please', 'start': 20356, 'end': 20862, 'confidence': 0.95339, 'speaker': None}, {'text': 'let', 'start': 20996, 'end': 21246, 'confidence': 0.99927, 'speaker': None}, {'text': 'me', 'start': 21268, 'end': 21454, 'confidence': 0.8378, 'speaker': None}, {'text': 'know', 'start': 21492, 'end': 21838, 'confidence': 0.95795, 'speaker': None}, {'text': 'if', 'start': 21924, 'end': 22174, 'confidence': 0.58663, 'speaker': None}, {'text': 'you', 'start': 22212, 'end': 22414, 'confidence': 0.76619, 'speaker': None}, {'text': 'can', 'start': 22452, 'end': 22750, 'confidence': 0.99817, 'speaker': None}, {'text': 'do', 'start': 22820, 'end': 23150, 'confidence': 0.99812, 'speaker': None}, {'text': 'something?', 'start': 23220, 'end': 23840, 'confidence': 0.99901, 'speaker': None}, {'text': 'By', 'start': 24970, 'end': 25286, 'confidence': 0.99181, 'speaker': None}, {'text': 'the', 'start': 25308, 'end': 25446, 'confidence': 0.97, 'speaker': None}, {'text': 'way,', 'start': 25468, 'end': 25654, 'confidence': 0.99998, 'speaker': None}, {'text': 'my', 'start': 25692, 'end': 26230, 'confidence': 0.99803, 'speaker': None}, {'text': 'customer', 'start': 26380, 'end': 26838, 'confidence': 0.99719, 'speaker': None}, {'text': 'ID', 'start': 26924, 'end': 27222, 'confidence': 0.99695, 'speaker': None}, {'text': 'is', 'start': 27276, 'end': 27590, 'confidence': 0.8296, 'speaker': None}, {'text': '123-45-6789.', 'start': 27660, 'end': 30420, 'confidence': 0.97, 'speaker': None}], 'utterances': None, 'confidence': 0.920700816326531, 'audio_duration': 32, 'punctuate': True, 'format_text': True, 'dual_channel': None, 'webhook_url': None, 'webhook_status_code': None, 'webhook_auth': False, 'webhook_auth_header_name': None, 'speed_boost': False, 'auto_highlights_result': {'status': 'success', 'results': [{'count': 1, 'rank': 0.16, 'text': 'Windows XP', 'timestamps': [{'start': 10580, 'end': 12026}]}, {'count': 3, 'rank': 0.15, 'text': 'Windows', 'timestamps': [{'start': 7828, 'end': 8506}, {'start': 10580, 'end': 11146}, {'start': 18036, 'end': 18490}]}, {'count': 1, 'rank': 0.1, 'text': 'Windows computer', 'timestamps': [{'start': 7828, 'end': 9280}]}, {'count': 1, 'rank': 0.09, 'text': 'customer ID', 'timestamps': [{'start': 26380, 'end': 27222}]}, {'count': 1, 'rank': 0.05, 'text': 'way', 'timestamps': [{'start': 25468, 'end': 25654}]}, {'count': 1, 'rank': 0.02, 'text': 'upgrade', 'timestamps': [{'start': 14612, 'end': 15114}]}]}, 'auto_highlights': True, 'audio_start_from': None, 'audio_end_at': None, 'word_boost': [], 'boost_param': None, 'filter_profanity': False, 'redact_pii': False, 'redact_pii_audio': False, 'redact_pii_audio_quality': None, 'redact_pii_policies': None, 'redact_pii_sub': None, 'speaker_labels': False, 'content_safety': False, 'iab_categories': True, 'content_safety_labels': {'status': 'unavailable', 'results': [], 'summary': {}}, 'iab_categories_result': {'status': 'success', 'results': [{'text': "Hello, P. M. Speaking. I am using a Windows computer. I'm using Windows XP, and I would like to do the upgrade, but apparently it's not available for Windows yet. Would you please let me know if you can do something? By the way, my customer ID is 123-45-6789.", 'labels': [{'relevance': 0.20089641213417053, 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>OperatingSystems'}, {'relevance': 0.1153131052851677, 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>AntivirusSoftware'}, {'relevance': 0.008024100214242935, 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>SharewareAndFreeware'}, {'relevance': 0.004599167499691248, 'label': 'Technology&Computing>Computing>Desktops'}, {'relevance': 0.0021886888425797224, 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications'}, {'relevance': 0.0021150661632418633, 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>DesktopPublishing'}, {'relevance': 0.001814601244404912, 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>Browsers'}, {'relevance': 0.0009474316611886024, 'label': 'VideoGaming>PCGames'}, {'relevance': 0.0007696724496781826, 'label': 'Technology&Computing>Computing>Internet>WebDevelopment'}, {'relevance': 0.00047104438999667764, 'label': 'Technology&Computing>Computing>Internet>WebHosting'}], 'timestamp': {'start': 810, 'end': 30420}}], 'summary': {'Technology&Computing>Computing>ComputerSoftwareAndApplications>OperatingSystems': 1.0, 'Technology&Computing>Computing>ComputerSoftwareAndApplications>AntivirusSoftware': 0.5739928483963013, 'Technology&Computing>Computing>ComputerSoftwareAndApplications>SharewareAndFreeware': 0.03994148224592209, 'Technology&Computing>Computing>Desktops': 0.022893229499459267, 'Technology&Computing>Computing>ComputerSoftwareAndApplications': 0.010894614271819592, 'Technology&Computing>Computing>ComputerSoftwareAndApplications>DesktopPublishing': 0.010528143495321274, 'Technology&Computing>Computing>ComputerSoftwareAndApplications>Browsers': 0.009032522328197956, 'VideoGaming>PCGames': 0.004716021008789539, 'Technology&Computing>Computing>Internet>WebDevelopment': 0.003831190522760153, 'Technology&Computing>Computing>Internet>WebHosting': 0.002344712847843766, 'Technology&Computing>Computing>InformationAndNetworkSecurity': 0.002118295058608055, 'Technology&Computing>Computing>Internet>WebDesignAndHTML': 0.002024369779974222, 'Technology&Computing>Computing>Laptops': 0.0018976697465404868, 'Technology&Computing>Computing>Internet>ITAndInternetSupport': 0.0017374197486788034, 'Automotive>AutoType': 0.0015606568194925785, 'Technology&Computing>Computing>ProgrammingLanguages': 0.0013351456727832556, 'Technology&Computing>ConsumerElectronics>Smartphones': 0.0013043904909864068, "HealthyLiving>Women'sHealth": 0.001111925463192165, 'BusinessAndFinance>Business>BusinessI.T.': 0.0011074099456891418, 'Technology&Computing>Computing>ComputerSoftwareAndApplications>WebConferencing': 0.0010829668026417494}}, 'language_detection': False, 'custom_spelling': None, 'cluster_id': None, 'throttled': None, 'auto_chapters': False, 'summarization': True, 'summary_type': 'bullets', 'summary_model': 'informative', 'disfluencies': False, 'sentiment_analysis': True, 'chapters': None, 'sentiment_analysis_results': [{'text': 'Hello, P.', 'start': 810, 'end': 3390, 'sentiment': 'NEUTRAL', 'confidence': 0.6143978238105774, 'speaker': None}, {'text': 'M.', 'start': 3460, 'end': 3838, 'sentiment': 'NEUTRAL', 'confidence': 0.5391430854797363, 'speaker': None}, {'text': 'Speaking.', 'start': 3924, 'end': 4560, 'sentiment': 'NEUTRAL', 'confidence': 0.6293189525604248, 'speaker': None}, {'text': 'I am using a Windows computer.', 'start': 5730, 'end': 9280, 'sentiment': 'NEUTRAL', 'confidence': 0.8140189051628113, 'speaker': None}, {'text': "I'm using Windows XP, and I would like to do the upgrade, but apparently it's not available for Windows yet.", 'start': 9650, 'end': 19200, 'sentiment': 'NEGATIVE', 'confidence': 0.6000553369522095, 'speaker': None}, {'text': 'Would you please let me know if you can do something?', 'start': 19650, 'end': 23840, 'sentiment': 'NEUTRAL', 'confidence': 0.8829253911972046, 'speaker': None}, {'text': 'By the way, my customer ID is 123-45-6789.', 'start': 24970, 'end': 30420, 'sentiment': 'NEUTRAL', 'confidence': 0.8573530316352844, 'speaker': None}], 'entity_detection': True, 'entities': [{'entity_type': 'person_name', 'text': 'P. M', 'start': 2930, 'end': 3838}], 'summary': "- I'm using Windows XP, and I would like to do the upgrade. Apparently it's not available for Windows yet. Would you please let me know if you can do something? By the way, my customer ID is 123-45-6789."}))