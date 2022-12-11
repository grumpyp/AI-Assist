# https://www.assemblyai.com/docs/audio-intelligence#summarization
import requests
from processing.config import API_KEY
import time
import re
import uuid
import random
from processing.cohere.faqrouter import faq_matcher
from database.models.faq import Faq


_SENTIMENT = {"NEGATIVE": -2.0,
              "NEUTRAL": 1.0,
              "POSITIVE": 2.0}

class AssemblyAI:
    @staticmethod
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

    @staticmethod
    def calculate_sentiment(**data: dict):
        """
        We use a custom formular where we use the confidence of the model multiplied with 1 for NEUTRAL,
        2 for POSITIVE and -2 for NEGATIVE
        :param data: sentiment_analysis_results from AssemblyAI
        :return: general sentiment of the audio file
        """
        sentiment = [(_SENTIMENT[sentiment.get("sentiment")] * float(sentiment.get("confidence"))) for sentiment
                     in data.get("data").get("sentiment_analysis_results")]
        calculated = sum(sentiment) / len(sentiment)
        return calculated

    @staticmethod
    def serialize_summary(data: dict):
        call_id = str(uuid.uuid4())
        digit_cleaner = re.sub(r'(\d)-(\d)', r'\1\2', data["text"])
        person_name = data.get("entities", {})[0].get("text") \
            if data.get("entities", {})[0].get("entity_type", None) == "person_name" else "Couldn't find name"
        highlights = [highlight["text"] for highlight in data["auto_highlights_result"]["results"]]
        sentiment = AssemblyAI.calculate_sentiment(data=data)
        call_back_wished = random.randint(0, 1)
        # use for debug
        # faq_match = "test"
        faq_match = faq_matcher(data["summary"])[0].prediction
        findings = {"userid": re.search(r"(\d{3,})", digit_cleaner).group(1),
                    "summary": data["summary"],
                    "name": person_name,
                    "text": data["text"],
                    "highlights": highlights,
                    "language_code": data["language_code"],
                    "audio_duration": data["audio_duration"],
                    "sentiment": sentiment,
                    "call_id": call_id,
                    "faqs": Faq.query.filter(Faq.buzzword == faq_match).all(),
                    "callback_requested": True if call_back_wished == 1 else False}
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