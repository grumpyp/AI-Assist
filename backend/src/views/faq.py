from flask import Blueprint
from database.models.faq import Faq


faq_blueprint = Blueprint('faq', __name__)


@faq_blueprint.route('/mock')
def mock_faq():
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