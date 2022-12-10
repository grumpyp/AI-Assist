# https://os.cohere.ai/playground/large/classify
# https://cohereai.notion.site/Cohere-Platform-Getting-Started-Guide-e27741f315c54568bb2b93153d56bf63

import cohere
from cohere.classify import Example
from backend.src.processing.config import COHERE_API_KEY
from backend.src.database.models.faq import Faq


def faq_matcher(input_text):
    co = cohere.Client(COHERE_API_KEY)

    response = co.classify(
        model='large',
        inputs=[input_text],
        # examples=[Example("My Iphone can't open the software", "Iphone software"),
        #         Example("My Iphone is super slow using your software", "Iphone software"),
        #         Example("I installed your software, now my Iphone isn't working properly anymore", "Iphone software"),
        #         Example("How can I download your software for my Iphone?", "Iphone software"),
        #         Example("The software is super buggy on my Macbook", "Computer software"),
        #         Example("My computer is super slow could it be because of your fucking app?", "Computer software"),])
        examples=[Example(faq.question, faq.buzzword) for faq in Faq.query.all()])

    print('The confidence levels of the labels are: {}'.format(response.classifications))
    return response.classifications
