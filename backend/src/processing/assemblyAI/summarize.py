# https://www.assemblyai.com/docs/audio-intelligence#summarization
import requests
from backend.src.processing.assemblyAI.config import API_KEY
import time
import re


# TODO: Implement file upload to use API
def summarize(audio_file: str = None):
    """
    The function will queue our request to the API and return the response once it's completed.

    Use AssemblyAI to summarize audio file
    :param audio_file: URL to audio file
    :return: Summary of audio file
    """
    print(API_KEY)
    endpoint = "https://api.assemblyai.com/v2/transcript"
    json = {
        "audio_url": audio_file,
        "summarization": True,
        "summary_model": "informative",
        "summary_type": "bullets",
        "sentiment_analysis": True,
        "entity_detection": True,
        "iab_categories": True,
        "auto_highlights": True,
    }
    headers = {
        "authorization": API_KEY,
        "content-type": "application/json"
    }
    response = requests.post(endpoint, json=json, headers=headers)

    try:
        task_id = response.json()["id"]
    except Exception as e:
        return {"error": e}

    while True:
        time.sleep(5)
        endpoint = f"https://api.assemblyai.com/v2/transcript/{task_id}"
        headers = {
            "authorization": API_KEY
        }
        response = requests.get(endpoint, headers=headers)
        print(response.json())
        if response.json()["status"] == "completed":
            return response.json()


def serialize_summary(data: dict):
    digit_cleaner = re.sub(r'(\d)-(\d)', r'\1\2', data["text"])
    person_name = data.get("entities", {})[0].get("text") \
        if data.get("entities", {})[0].get("entity_type", None) == "person_name" else "Couldn't find name"
    highlights = [highlight["text"] for highlight in data["auto_highlights_result"]["results"]]

    findings = {"userid": re.search(r"(\d{6,})", digit_cleaner).group(1),
                "summary": data["summary"],
                "name": person_name,
                "text": data["text"],
                "highlights": highlights,}
    return findings


# Answer
{'id': 'r7lh6m8zs7-865c-43eb-bf30-3c56f7c3a3fe', 'language_model': 'assemblyai_default',
 'acoustic_model': 'assemblyai_default', 'language_code': 'en_us', 'status': 'completed',
 'audio_url': 'https://content-baer.de/anton-braith-weg/',
 'text': "Hello. My name is Patrick. My user ID is 1234. I have the following problem so I can connect to the XYD software using my iPhone eleven. I'm using phone and tried several solutions but it doesn't work. Can you help me please?",
 'words': [{'text': 'Hello.', 'start': 1050, 'end': 1262, 'confidence': 0.97, 'speaker': None},
           {'text': 'My', 'start': 1316, 'end': 1438, 'confidence': 0.99842, 'speaker': None},
           {'text': 'name', 'start': 1444, 'end': 1566, 'confidence': 1.0, 'speaker': None},
           {'text': 'is', 'start': 1588, 'end': 1726, 'confidence': 0.99631, 'speaker': None},
           {'text': 'Patrick.', 'start': 1748, 'end': 2590, 'confidence': 0.93412, 'speaker': None},
           {'text': 'My', 'start': 3330, 'end': 3838, 'confidence': 0.60909, 'speaker': None},
           {'text': 'user', 'start': 3924, 'end': 4346, 'confidence': 0.99819, 'speaker': None},
           {'text': 'ID', 'start': 4378, 'end': 4622, 'confidence': 0.99482, 'speaker': None},
           {'text': 'is', 'start': 4676, 'end': 4942, 'confidence': 0.95028, 'speaker': None},
           {'text': '1234.', 'start': 4996, 'end': 6560, 'confidence': 0.84, 'speaker': None},
           {'text': 'I', 'start': 7650, 'end': 8062, 'confidence': 0.98, 'speaker': None},
           {'text': 'have', 'start': 8116, 'end': 8430, 'confidence': 0.97703, 'speaker': None},
           {'text': 'the', 'start': 8500, 'end': 8734, 'confidence': 0.99, 'speaker': None},
           {'text': 'following', 'start': 8772, 'end': 9290, 'confidence': 0.84134, 'speaker': None},
           {'text': 'problem', 'start': 9370, 'end': 10000, 'confidence': 0.99569, 'speaker': None},
           {'text': 'so', 'start': 10530, 'end': 11280, 'confidence': 0.97235, 'speaker': None},
           {'text': 'I', 'start': 12210, 'end': 12670, 'confidence': 0.98, 'speaker': None},
           {'text': 'can', 'start': 12740, 'end': 13118, 'confidence': 0.98947, 'speaker': None},
           {'text': 'connect', 'start': 13204, 'end': 13742, 'confidence': 0.99989, 'speaker': None},
           {'text': 'to', 'start': 13876, 'end': 14222, 'confidence': 0.99, 'speaker': None},
           {'text': 'the', 'start': 14276, 'end': 14880, 'confidence': 0.96, 'speaker': None},
           {'text': 'XYD', 'start': 16130, 'end': 17354, 'confidence': 0.60045, 'speaker': None},
           {'text': 'software', 'start': 17482, 'end': 18330, 'confidence': 0.99887, 'speaker': None},
           {'text': 'using', 'start': 18490, 'end': 18862, 'confidence': 0.99989, 'speaker': None},
           {'text': 'my', 'start': 18916, 'end': 19182, 'confidence': 0.99093, 'speaker': None},
           {'text': 'iPhone', 'start': 19236, 'end': 20106, 'confidence': 0.64688, 'speaker': None},
           {'text': 'eleven.', 'start': 20298, 'end': 21150, 'confidence': 0.98, 'speaker': None},
           {'text': "I'm", 'start': 23250, 'end': 24058, 'confidence': 0.31084, 'speaker': None},
           {'text': 'using', 'start': 24154, 'end': 24800, 'confidence': 0.98844, 'speaker': None},
           {'text': 'phone', 'start': 25210, 'end': 25766, 'confidence': 0.81, 'speaker': None},
           {'text': 'and', 'start': 25868, 'end': 26566, 'confidence': 1.0, 'speaker': None},
           {'text': 'tried', 'start': 26748, 'end': 27382, 'confidence': 0.97822, 'speaker': None},
           {'text': 'several', 'start': 27516, 'end': 28034, 'confidence': 0.99919, 'speaker': None},
           {'text': 'solutions', 'start': 28082, 'end': 28706, 'confidence': 0.99957, 'speaker': None},
           {'text': 'but', 'start': 28738, 'end': 28934, 'confidence': 0.9999, 'speaker': None},
           {'text': 'it', 'start': 28972, 'end': 29174, 'confidence': 1.0, 'speaker': None},
           {'text': "doesn't", 'start': 29212, 'end': 29554, 'confidence': 0.99665, 'speaker': None},
           {'text': 'work.', 'start': 29602, 'end': 30200, 'confidence': 0.99997, 'speaker': None},
           {'text': 'Can', 'start': 30570, 'end': 30934, 'confidence': 0.99999, 'speaker': None},
           {'text': 'you', 'start': 30972, 'end': 31078, 'confidence': 1.0, 'speaker': None},
           {'text': 'help', 'start': 31084, 'end': 31254, 'confidence': 0.99999, 'speaker': None},
           {'text': 'me', 'start': 31292, 'end': 31446, 'confidence': 0.99999, 'speaker': None},
           {'text': 'please?', 'start': 31468, 'end': 31540, 'confidence': 1.0, 'speaker': None}], 'utterances': None,
 'confidence': 0.936436511627907, 'audio_duration': 32, 'punctuate': True, 'format_text': True, 'dual_channel': None,
 'webhook_url': None, 'webhook_status_code': None, 'webhook_auth': False, 'webhook_auth_header_name': None,
 'speed_boost': False, 'auto_highlights_result': {'status': 'success', 'results': [
    {'count': 1, 'rank': 0.13, 'text': 'several solutions', 'timestamps': [{'start': 27516, 'end': 28706}]},
    {'count': 1, 'rank': 0.11, 'text': 'XYD', 'timestamps': [{'start': 16130, 'end': 17354}]},
    {'count': 1, 'rank': 0.11, 'text': 'Patrick', 'timestamps': [{'start': 1748, 'end': 2590}]},
    {'count': 1, 'rank': 0.11, 'text': 'phone', 'timestamps': [{'start': 25210, 'end': 25766}]},
    {'count': 1, 'rank': 0.09, 'text': 'XYD software', 'timestamps': [{'start': 16130, 'end': 18330}]},
    {'count': 1, 'rank': 0.08, 'text': 'user ID', 'timestamps': [{'start': 3924, 'end': 4622}]},
    {'count': 1, 'rank': 0.08, 'text': 'following problem', 'timestamps': [{'start': 8772, 'end': 10000}]},
    {'count': 1, 'rank': 0.06, 'text': 'name', 'timestamps': [{'start': 1444, 'end': 1566}]},
    {'count': 1, 'rank': 0.05, 'text': 'iPhone', 'timestamps': [{'start': 19236, 'end': 20106}]}]},
 'auto_highlights': True, 'audio_start_from': None, 'audio_end_at': None, 'word_boost': [], 'boost_param': None,
 'filter_profanity': False, 'redact_pii': False, 'redact_pii_audio': False, 'redact_pii_audio_quality': None,
 'redact_pii_policies': None, 'redact_pii_sub': None, 'speaker_labels': False, 'content_safety': False,
 'iab_categories': True, 'content_safety_labels': {'status': 'unavailable', 'results': [], 'summary': {}},
 'iab_categories_result': {'status': 'success', 'results': [{
     'text': "Hello. My name is Patrick. My user ID is 1234. I have the following problem so I can connect to the XYD software using my iPhone eleven. I'm using phone and tried several solutions but it doesn't work. Can you help me please?",
     'labels': [{'relevance': 0.07623524218797684,
                 'label': 'Technology&Computing>ConsumerElectronics>Smartphones'},
                {'relevance': 0.010225854814052582,
                 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>WebConferencing'},
                {'relevance': 0.00552788283675909,
                 'label': 'Technology&Computing>ConsumerElectronics>TabletsAndE-readers'},
                {'relevance': 0.00372228492051363,
                 'label': 'Automotive>AutoTechnology>AutoNavigationSystems'},
                {'relevance': 0.00117790256626904,
                 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications'},
                {'relevance': 0.0010311685036867857,
                 'label': 'VideoGaming>MobileGames'},
                {'relevance': 0.0009162307833321393,
                 'label': 'PersonalFinance>HomeUtilities>PhoneServices'},
                {'relevance': 0.0008461080142296851,
                 'label': 'Technology&Computing>ConsumerElectronics>WearableTechnology'},
                {'relevance': 0.0008141619036905468,
                 'label': 'Education>OnlineEducation'},
                {'relevance': 0.0005164393805898726,
                 'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>OperatingSystems'}],
     'timestamp': {'start': 1050, 'end': 31540}}],
                           'summary': {'Technology&Computing>ConsumerElectronics>Smartphones': 1.0,
                                       'Technology&Computing>Computing>ComputerSoftwareAndApplications>WebConferencing': 0.13413552939891815,
                                       'Technology&Computing>ConsumerElectronics>TabletsAndE-readers': 0.07251086086034775,
                                       'Automotive>AutoTechnology>AutoNavigationSystems': 0.04882630333304405,
                                       'Technology&Computing>Computing>ComputerSoftwareAndApplications': 0.015450892969965935,
                                       'VideoGaming>MobileGames': 0.013526138849556446,
                                       'PersonalFinance>HomeUtilities>PhoneServices': 0.012018467299640179,
                                       'Technology&Computing>ConsumerElectronics>WearableTechnology': 0.011098646558821201,
                                       'Education>OnlineEducation': 0.010679599829018116,
                                       'Technology&Computing>Computing>ComputerSoftwareAndApplications>OperatingSystems': 0.006774286739528179,
                                       'Technology&Computing>AugmentedReality': 0.0060335081070661545,
                                       'Technology&Computing>Computing>ComputerSoftwareAndApplications>DesktopPublishing': 0.005871798377484083,
                                       'Technology&Computing>Computing>ComputerSoftwareAndApplications>SharewareAndFreeware': 0.0057836370542645454,
                                       'Automotive>AutoTechnology>AutoInfotainmentTechnologies': 0.004815365187823772,
                                       'Home&Garden>SmartHome': 0.003331479849293828,
                                       'Technology&Computing>Computing>Internet>Email': 0.00280533405020833,
                                       'BusinessAndFinance>Business>Sales': 0.002337933052331209,
                                       'Technology&Computing>Computing>Internet>SocialNetworking': 0.002125267870724201,
                                       'Hobbies&Interests>RadioControl': 0.002085750689730048,
                                       'Technology&Computing>Computing>ComputerSoftwareAndApplications>Browsers': 0.0020676262211054564}},
 'language_detection': False, 'custom_spelling': None, 'cluster_id': None, 'throttled': None, 'auto_chapters': False,
 'summarization': True, 'summary_type': 'bullets', 'summary_model': 'informative', 'disfluencies': False,
 'sentiment_analysis': True, 'chapters': None, 'sentiment_analysis_results': [
    {'text': 'Hello.', 'start': 1050, 'end': 1262, 'sentiment': 'NEUTRAL', 'confidence': 0.5208578109741211,
     'speaker': None}, {'text': 'My name is Patrick.', 'start': 1316, 'end': 2590, 'sentiment': 'NEUTRAL',
                        'confidence': 0.7602394819259644, 'speaker': None},
    {'text': 'My user ID is 1234.', 'start': 3330, 'end': 6560, 'sentiment': 'NEUTRAL',
     'confidence': 0.8256081342697144, 'speaker': None},
    {'text': 'I have the following problem so I can connect to the XYD software using my iPhone eleven.', 'start': 7650,
     'end': 21150, 'sentiment': 'NEUTRAL', 'confidence': 0.5065762996673584, 'speaker': None},
    {'text': "I'm using phone and tried several solutions but it doesn't work.", 'start': 23250, 'end': 30200,
     'sentiment': 'NEGATIVE', 'confidence': 0.9154728651046753, 'speaker': None},
    {'text': 'Can you help me please?', 'start': 30570, 'end': 31540, 'sentiment': 'NEUTRAL',
     'confidence': 0.7696236968040466, 'speaker': None}], 'entity_detection': True,
 'entities': [{'entity_type': 'person_name', 'text': 'Patrick', 'start': 1748, 'end': 2590}],
 'summary': "- My user ID is 1234. I can't connect to the XYD software using my iPhone eleven. I'm using phone and tried several solutions but it doesn't work. Can you help me please?"}

{'id': 'r7l92ktnnc-625f-47dd-810a-b6731c45f70e', 'language_model': 'assemblyai_default',
 'acoustic_model': 'assemblyai_default', 'language_code': 'en_us', 'status': 'completed',
 'audio_url': 'https://hackathon.content-baer.de/examplecall2.m4a',
 'text': "Hello, P. M. Speaking. I am using a Windows computer. I'm using Windows XP, and I would like to do the upgrade, but apparently it's not available for Windows yet. Would you please let me know if you can do something? By the way, my customer ID is 123-45-6789.",
 'words': [{'text': 'Hello,', 'start': 810, 'end': 1360, 'confidence': 0.99214, 'speaker': None},
           {'text': 'P.', 'start': 2930, 'end': 3390, 'confidence': 0.98, 'speaker': None},
           {'text': 'M.', 'start': 3460, 'end': 3838, 'confidence': 0.45, 'speaker': None},
           {'text': 'Speaking.', 'start': 3924, 'end': 4560, 'confidence': 0.99824, 'speaker': None},
           {'text': 'I', 'start': 5730, 'end': 6094, 'confidence': 0.59, 'speaker': None},
           {'text': 'am', 'start': 6132, 'end': 6382, 'confidence': 0.75, 'speaker': None},
           {'text': 'using', 'start': 6436, 'end': 6846, 'confidence': 0.99987, 'speaker': None},
           {'text': 'a', 'start': 6948, 'end': 7646, 'confidence': 0.98, 'speaker': None},
           {'text': 'Windows', 'start': 7828, 'end': 8506, 'confidence': 0.73408, 'speaker': None},
           {'text': 'computer.', 'start': 8618, 'end': 9280, 'confidence': 0.99977, 'speaker': None},
           {'text': "I'm", 'start': 9650, 'end': 10154, 'confidence': 0.77608, 'speaker': None},
           {'text': 'using', 'start': 10202, 'end': 10510, 'confidence': 0.9998, 'speaker': None},
           {'text': 'Windows', 'start': 10580, 'end': 11146, 'confidence': 0.96432, 'speaker': None},
           {'text': 'XP,', 'start': 11258, 'end': 12026, 'confidence': 0.93864, 'speaker': None},
           {'text': 'and', 'start': 12138, 'end': 12798, 'confidence': 0.97, 'speaker': None},
           {'text': 'I', 'start': 12964, 'end': 13294, 'confidence': 0.99, 'speaker': None},
           {'text': 'would', 'start': 13332, 'end': 13534, 'confidence': 0.99692, 'speaker': None},
           {'text': 'like', 'start': 13572, 'end': 13822, 'confidence': 0.93799, 'speaker': None},
           {'text': 'to', 'start': 13876, 'end': 14094, 'confidence': 1.0, 'speaker': None},
           {'text': 'do', 'start': 14132, 'end': 14334, 'confidence': 0.99667, 'speaker': None},
           {'text': 'the', 'start': 14372, 'end': 14574, 'confidence': 0.99, 'speaker': None},
           {'text': 'upgrade,', 'start': 14612, 'end': 15114, 'confidence': 0.98705, 'speaker': None},
           {'text': 'but', 'start': 15162, 'end': 15662, 'confidence': 0.99387, 'speaker': None},
           {'text': 'apparently', 'start': 15796, 'end': 16570, 'confidence': 0.69776, 'speaker': None},
           {'text': "it's", 'start': 16650, 'end': 16906, 'confidence': 0.56355, 'speaker': None},
           {'text': 'not', 'start': 16938, 'end': 17134, 'confidence': 0.9996, 'speaker': None},
           {'text': 'available', 'start': 17172, 'end': 17566, 'confidence': 0.99967, 'speaker': None},
           {'text': 'for', 'start': 17668, 'end': 17982, 'confidence': 0.99826, 'speaker': None},
           {'text': 'Windows', 'start': 18036, 'end': 18490, 'confidence': 0.99777, 'speaker': None},
           {'text': 'yet.', 'start': 18570, 'end': 19200, 'confidence': 0.99858, 'speaker': None},
           {'text': 'Would', 'start': 19650, 'end': 20014, 'confidence': 0.99439, 'speaker': None},
           {'text': 'you', 'start': 20052, 'end': 20302, 'confidence': 0.99923, 'speaker': None},
           {'text': 'please', 'start': 20356, 'end': 20862, 'confidence': 0.95339, 'speaker': None},
           {'text': 'let', 'start': 20996, 'end': 21246, 'confidence': 0.99927, 'speaker': None},
           {'text': 'me', 'start': 21268, 'end': 21454, 'confidence': 0.8378, 'speaker': None},
           {'text': 'know', 'start': 21492, 'end': 21838, 'confidence': 0.95795, 'speaker': None},
           {'text': 'if', 'start': 21924, 'end': 22174, 'confidence': 0.58663, 'speaker': None},
           {'text': 'you', 'start': 22212, 'end': 22414, 'confidence': 0.76619, 'speaker': None},
           {'text': 'can', 'start': 22452, 'end': 22750, 'confidence': 0.99817, 'speaker': None},
           {'text': 'do', 'start': 22820, 'end': 23150, 'confidence': 0.99812, 'speaker': None},
           {'text': 'something?', 'start': 23220, 'end': 23840, 'confidence': 0.99901, 'speaker': None},
           {'text': 'By', 'start': 24970, 'end': 25286, 'confidence': 0.99181, 'speaker': None},
           {'text': 'the', 'start': 25308, 'end': 25446, 'confidence': 0.97, 'speaker': None},
           {'text': 'way,', 'start': 25468, 'end': 25654, 'confidence': 0.99998, 'speaker': None},
           {'text': 'my', 'start': 25692, 'end': 26230, 'confidence': 0.99803, 'speaker': None},
           {'text': 'customer', 'start': 26380, 'end': 26838, 'confidence': 0.99719, 'speaker': None},
           {'text': 'ID', 'start': 26924, 'end': 27222, 'confidence': 0.99695, 'speaker': None},
           {'text': 'is', 'start': 27276, 'end': 27590, 'confidence': 0.8296, 'speaker': None},
           {'text': '123-45-6789.', 'start': 27660, 'end': 30420, 'confidence': 0.97, 'speaker': None}],
 'utterances': None, 'confidence': 0.920700816326531, 'audio_duration': 32, 'punctuate': True, 'format_text': True,
 'dual_channel': None, 'webhook_url': None, 'webhook_status_code': None, 'webhook_auth': False,
 'webhook_auth_header_name': None, 'speed_boost': False, 'auto_highlights_result': {'status': 'success', 'results': [
    {'count': 1, 'rank': 0.16, 'text': 'Windows XP', 'timestamps': [{'start': 10580, 'end': 12026}]},
    {'count': 3, 'rank': 0.15, 'text': 'Windows',
     'timestamps': [{'start': 7828, 'end': 8506}, {'start': 10580, 'end': 11146}, {'start': 18036, 'end': 18490}]},
    {'count': 1, 'rank': 0.1, 'text': 'Windows computer', 'timestamps': [{'start': 7828, 'end': 9280}]},
    {'count': 1, 'rank': 0.09, 'text': 'customer ID', 'timestamps': [{'start': 26380, 'end': 27222}]},
    {'count': 1, 'rank': 0.05, 'text': 'way', 'timestamps': [{'start': 25468, 'end': 25654}]},
    {'count': 1, 'rank': 0.02, 'text': 'upgrade', 'timestamps': [{'start': 14612, 'end': 15114}]}]},
 'auto_highlights': True, 'audio_start_from': None, 'audio_end_at': None, 'word_boost': [], 'boost_param': None,
 'filter_profanity': False, 'redact_pii': False, 'redact_pii_audio': False, 'redact_pii_audio_quality': None,
 'redact_pii_policies': None, 'redact_pii_sub': None, 'speaker_labels': False, 'content_safety': False,
 'iab_categories': True, 'content_safety_labels': {'status': 'unavailable', 'results': [], 'summary': {}},
 'iab_categories_result': {'status': 'success', 'results': [{
                                                                'text': "Hello, P. M. Speaking. I am using a Windows computer. I'm using Windows XP, and I would like to do the upgrade, but apparently it's not available for Windows yet. Would you please let me know if you can do something? By the way, my customer ID is 123-45-6789.",
                                                                'labels': [{'relevance': 0.20089641213417053,
                                                                            'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>OperatingSystems'},
                                                                           {'relevance': 0.1153131052851677,
                                                                            'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>AntivirusSoftware'},
                                                                           {'relevance': 0.008024100214242935,
                                                                            'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>SharewareAndFreeware'},
                                                                           {'relevance': 0.004599167499691248,
                                                                            'label': 'Technology&Computing>Computing>Desktops'},
                                                                           {'relevance': 0.0021886888425797224,
                                                                            'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications'},
                                                                           {'relevance': 0.0021150661632418633,
                                                                            'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>DesktopPublishing'},
                                                                           {'relevance': 0.001814601244404912,
                                                                            'label': 'Technology&Computing>Computing>ComputerSoftwareAndApplications>Browsers'},
                                                                           {'relevance': 0.0009474316611886024,
                                                                            'label': 'VideoGaming>PCGames'},
                                                                           {'relevance': 0.0007696724496781826,
                                                                            'label': 'Technology&Computing>Computing>Internet>WebDevelopment'},
                                                                           {'relevance': 0.00047104438999667764,
                                                                            'label': 'Technology&Computing>Computing>Internet>WebHosting'}],
                                                                'timestamp': {'start': 810, 'end': 30420}}],
                           'summary': {
                               'Technology&Computing>Computing>ComputerSoftwareAndApplications>OperatingSystems': 1.0,
                               'Technology&Computing>Computing>ComputerSoftwareAndApplications>AntivirusSoftware': 0.5739928483963013,
                               'Technology&Computing>Computing>ComputerSoftwareAndApplications>SharewareAndFreeware': 0.03994148224592209,
                               'Technology&Computing>Computing>Desktops': 0.022893229499459267,
                               'Technology&Computing>Computing>ComputerSoftwareAndApplications': 0.010894614271819592,
                               'Technology&Computing>Computing>ComputerSoftwareAndApplications>DesktopPublishing': 0.010528143495321274,
                               'Technology&Computing>Computing>ComputerSoftwareAndApplications>Browsers': 0.009032522328197956,
                               'VideoGaming>PCGames': 0.004716021008789539,
                               'Technology&Computing>Computing>Internet>WebDevelopment': 0.003831190522760153,
                               'Technology&Computing>Computing>Internet>WebHosting': 0.002344712847843766,
                               'Technology&Computing>Computing>InformationAndNetworkSecurity': 0.002118295058608055,
                               'Technology&Computing>Computing>Internet>WebDesignAndHTML': 0.002024369779974222,
                               'Technology&Computing>Computing>Laptops': 0.0018976697465404868,
                               'Technology&Computing>Computing>Internet>ITAndInternetSupport': 0.0017374197486788034,
                               'Automotive>AutoType': 0.0015606568194925785,
                               'Technology&Computing>Computing>ProgrammingLanguages': 0.0013351456727832556,
                               'Technology&Computing>ConsumerElectronics>Smartphones': 0.0013043904909864068,
                               "HealthyLiving>Women'sHealth": 0.001111925463192165,
                               'BusinessAndFinance>Business>BusinessI.T.': 0.0011074099456891418,
                               'Technology&Computing>Computing>ComputerSoftwareAndApplications>WebConferencing': 0.0010829668026417494}},
 'language_detection': False, 'custom_spelling': None, 'cluster_id': None, 'throttled': None, 'auto_chapters': False,
 'summarization': True, 'summary_type': 'bullets', 'summary_model': 'informative', 'disfluencies': False,
 'sentiment_analysis': True, 'chapters': None, 'sentiment_analysis_results': [
    {'text': 'Hello, P.', 'start': 810, 'end': 3390, 'sentiment': 'NEUTRAL', 'confidence': 0.6143978238105774,
     'speaker': None},
    {'text': 'M.', 'start': 3460, 'end': 3838, 'sentiment': 'NEUTRAL', 'confidence': 0.5391430854797363,
     'speaker': None},
    {'text': 'Speaking.', 'start': 3924, 'end': 4560, 'sentiment': 'NEUTRAL', 'confidence': 0.6293189525604248,
     'speaker': None}, {'text': 'I am using a Windows computer.', 'start': 5730, 'end': 9280, 'sentiment': 'NEUTRAL',
                        'confidence': 0.8140189051628113, 'speaker': None}, {
        'text': "I'm using Windows XP, and I would like to do the upgrade, but apparently it's not available for Windows yet.",
        'start': 9650, 'end': 19200, 'sentiment': 'NEGATIVE', 'confidence': 0.6000553369522095, 'speaker': None},
    {'text': 'Would you please let me know if you can do something?', 'start': 19650, 'end': 23840,
     'sentiment': 'NEUTRAL', 'confidence': 0.8829253911972046, 'speaker': None},
    {'text': 'By the way, my customer ID is 123-45-6789.', 'start': 24970, 'end': 30420, 'sentiment': 'NEUTRAL',
     'confidence': 0.8573530316352844, 'speaker': None}], 'entity_detection': True,
 'entities': [{'entity_type': 'person_name', 'text': 'P. M', 'start': 2930, 'end': 3838}],
 'summary': "- I'm using Windows XP, and I would like to do the upgrade. Apparently it's not available for Windows yet. Would you please let me know if you can do something? By the way, my customer ID is 123-45-6789."}
